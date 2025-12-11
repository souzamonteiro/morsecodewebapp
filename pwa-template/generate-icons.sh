#!/bin/bash

# PWA Icon Generator Script
# Generates all required PWA icons from a master SVG file

set -e  # Exit on error

# Configuration
SVG_SOURCE="logo.svg"
ASSETS_DIR="assets"
ICONS_DIR="$ASSETS_DIR/icons"
SPLASH_DIR="$ASSETS_DIR/splash"
TEMP_DIR="/tmp/pwa-icons"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Icon sizes for PWA (in pixels)
ICON_SIZES=(72 96 128 144 152 192 384 512)

# Splash screen sizes for iOS (width x height)
SPLASH_SIZES=(
    "640x1136"
    "750x1334"
    "828x1792"
    "1125x2436"
    "1242x2208"
    "1242x2688"
    "1536x2048"
    "1668x2224"
    "1668x2388"
    "2048x2732"
)

# Check dependencies
check_dependencies() {
    echo -e "${BLUE}Checking dependencies...${NC}"
    
    local missing_deps=()
    
    # Check for ImageMagick
    if ! command -v convert &> /dev/null && ! command -v magick &> /dev/null; then
        missing_deps+=("ImageMagick")
    fi
    
    # Check for Inkscape (for better SVG rendering)
    if ! command -v inkscape &> /dev/null; then
        echo -e "${YELLOW}Warning: Inkscape not found. Using ImageMagick for SVG conversion (may have lower quality).${NC}"
    fi
    
    # Check for pngquant (for PNG optimization)
    if ! command -v pngquant &> /dev/null; then
        echo -e "${YELLOW}Warning: pngquant not found. PNG files will not be optimized.${NC}"
    fi
    
    if [ ${#missing_deps[@]} -gt 0 ]; then
        echo -e "${RED}Error: Missing required dependencies:${NC}"
        for dep in "${missing_deps[@]}"; do
            echo "  - $dep"
        done
        echo ""
        echo "Install instructions:"
        echo "  Ubuntu/Debian: sudo apt-get install imagemagick inkscape pngquant"
        echo "  macOS: brew install imagemagick inkscape pngquant"
        echo "  Windows: Download from respective websites"
        exit 1
    fi
    
    echo -e "${GREEN}All dependencies satisfied!${NC}\n"
}

# Create directories
create_directories() {
    echo -e "${BLUE}Creating directory structure...${NC}"
    
    mkdir -p "$ICONS_DIR"
    mkdir -p "$SPLASH_DIR"
    mkdir -p "$TEMP_DIR"
    
    echo -e "${GREEN}Directories created:${NC}"
    echo "  - $ICONS_DIR/"
    echo "  - $SPLASH_DIR/"
}

# Generate icons from SVG
generate_icons() {
    echo -e "${BLUE}Generating icons from $SVG_SOURCE...${NC}"
    
    if [ ! -f "$SVG_SOURCE" ]; then
        echo -e "${RED}Error: SVG source file '$SVG_SOURCE' not found!${NC}"
        exit 1
    fi
    
    local total=${#ICON_SIZES[@]}
    local current=1
    
    for size in "${ICON_SIZES[@]}"; do
        local output="$ICONS_DIR/icon-${size}x${size}.png"
        
        echo -n "  [${current}/${total}] Creating ${size}x${size} icon... "
        
        # Use Inkscape for better quality if available
        if command -v inkscape &> /dev/null; then
            inkscape -w "$size" -h "$size" "$SVG_SOURCE" -o "$output" --export-background-opacity=0 --export-type=png 2>/dev/null
        else
            # Fallback to ImageMagick
            convert -background none -density 300 -resize "${size}x${size}" "$SVG_SOURCE" "$output"
        fi
        
        # Optimize PNG if pngquant is available
        if command -v pngquant &> /dev/null; then
            pngquant --force --skip-if-larger --output "$output" -- "$output"
        fi
        
        echo -e "${GREEN}✓${NC}"
        ((current++))
    done
    
    echo -e "${GREEN}All icons generated successfully!${NC}\n"
}

# Generate iOS splash screens
generate_splash_screens() {
    echo -e "${BLUE}Generating iOS splash screens...${NC}"
    
    # Create a base splash screen design
    create_base_splash() {
        local width=$1
        local height=$2
        local output=$3
        
        # Create a temporary SVG for the splash screen
        cat > "$TEMP_DIR/splash-template.svg" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<svg width="$width" height="$height" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4a90e2"/>
            <stop offset="100%" stop-color="#2c3e50"/>
        </linearGradient>
        <style>
            .text { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                fill: white;
                font-weight: 300;
            }
            .logo {
                filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
            }
        </style>
    </defs>
    
    <!-- Background -->
    <rect width="100%" height="100%" fill="url(#bgGradient)"/>
    
    <!-- Logo -->
    <g class="logo" transform="translate($((width/2 - 60)) $((height/2 - 80)))">
        <!-- Simplified PWA logo -->
        <circle cx="60" cy="60" r="50" fill="white" opacity="0.9"/>
        <text x="60" y="45" text-anchor="middle" class="text" font-size="24" font-weight="bold">PWA</text>
        <text x="60" y="75" text-anchor="middle" class="text" font-size="14">Template</text>
    </g>
    
    <!-- Loading indicator -->
    <circle cx="$((width/2))" cy="$((height - 100))" r="12" fill="none" stroke="white" stroke-width="3" opacity="0.7">
        <animate attributeName="stroke-dasharray" values="1,100;90,100;1,100" dur="2s" repeatCount="indefinite"/>
    </circle>
    
    <!-- App name -->
    <text x="$((width/2))" y="$((height - 60))" text-anchor="middle" class="text" font-size="18">
        PWA Template
    </text>
    
    <!-- Status message -->
    <text x="$((width/2))" y="$((height - 30))" text-anchor="middle" class="text" font-size="12" opacity="0.8">
        Loading application...
    </text>
</svg>
EOF
        
        # Convert SVG to PNG
        if command -v inkscape &> /dev/null; then
            inkscape -w "$width" -h "$height" "$TEMP_DIR/splash-template.svg" -o "$output" 2>/dev/null
        else
            convert -resize "${width}x${height}!" "$TEMP_DIR/splash-template.svg" "$output"
        fi
        
        # Optimize PNG
        if command -v pngquant &> /dev/null; then
            pngquant --force --skip-if-larger --output "$output" -- "$output"
        fi
    }
    
    local total=${#SPLASH_SIZES[@]}
    local current=1
    
    for dimensions in "${SPLASH_SIZES[@]}"; do
        local width=$(echo "$dimensions" | cut -d'x' -f1)
        local height=$(echo "$dimensions" | cut -d'x' -f2)
        local output="$SPLASH_DIR/splash-${dimensions}.png"
        
        echo -n "  [${current}/${total}] Creating ${dimensions} splash screen... "
        
        create_base_splash "$width" "$height" "$output"
        
        echo -e "${GREEN}✓${NC}"
        ((current++))
    done
    
    echo -e "${GREEN}All splash screens generated!${NC}\n"
}

# Generate favicon.ico (for legacy browsers)
generate_favicon() {
    echo -e "${BLUE}Generating favicon.ico...${NC}"
    
    local favicon_sizes=(16 32 48)
    local favicon_files=()
    
    for size in "${favicon_sizes[@]}"; do
        local temp_file="$TEMP_DIR/favicon-${size}.png"
        
        # Create each size
        if command -v inkscape &> /dev/null; then
            inkscape -w "$size" -h "$size" "$SVG_SOURCE" -o "$temp_file" --export-background-opacity=0 2>/dev/null
        else
            convert -background none -resize "${size}x${size}" "$SVG_SOURCE" "$temp_file"
        fi
        
        favicon_files+=("$temp_file")
    done
    
    # Convert to ICO format
    convert "${favicon_files[@]}" -colors 256 "$ASSETS_DIR/favicon.ico"
    
    # Also create a 32x32 PNG favicon
    cp "$TEMP_DIR/favicon-32.png" "$ASSETS_DIR/favicon.png"
    
    echo -e "${GREEN}Favicon generated!${NC}\n"
}

# Generate icon list HTML snippet
generate_html_snippet() {
    echo -e "${BLUE}Generating HTML snippet...${NC}"
    
    cat > "$ASSETS_DIR/icon-list.html" << 'EOF'
<!-- PWA Icons for manifest.json -->
<!-- Generated by generate-icons.sh -->
<!-- Place these in your HTML head section -->

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico">
<link rel="icon" type="image/png" href="assets/favicon.png">

<!-- Apple Touch Icons -->
<link rel="apple-touch-icon" href="assets/icons/icon-152x152.png">
<link rel="apple-touch-icon" sizes="152x152" href="assets/icons/icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/icons/icon-192x192.png">
<link rel="apple-touch-icon" sizes="167x167" href="assets/icons/icon-192x192.png">

<!-- Android/Modern Browsers -->
<link rel="icon" type="image/png" sizes="32x32" href="assets/icons/icon-32x32.png">
<link rel="icon" type="image/png" sizes="192x192" href="assets/icons/icon-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="assets/icons/icon-512x512.png">

<!-- Safari Pinned Tab -->
<link rel="mask-icon" href="assets/icons/safari-pinned-tab.svg" color="#4a90e2">

<!-- Microsoft Tiles -->
<meta name="msapplication-TileColor" content="#4a90e2">
<meta name="msapplication-TileImage" content="assets/icons/icon-144x144.png">
<meta name="msapplication-config" content="assets/browserconfig.xml">
EOF
    
    # Also update the manifest.json with icon paths
    if [ -f "manifest.json" ]; then
        echo -e "${YELLOW}Note: Update your manifest.json with the generated icon paths${NC}"
        echo "Add these entries to the 'icons' array in manifest.json:"
        echo ""
        for size in "${ICON_SIZES[@]}"; do
            echo "  {"
            echo "    \"src\": \"assets/icons/icon-${size}x${size}.png\","
            echo "    \"sizes\": \"${size}x${size}\","
            echo "    \"type\": \"image/png\","
            echo "    \"purpose\": \"any maskable\""
            echo "  },"
        done
    fi
    
    echo -e "${GREEN}HTML snippet generated at: $ASSETS_DIR/icon-list.html${NC}\n"
}

# Generate browserconfig.xml for Windows
generate_browserconfig() {
    echo -e "${BLUE}Generating browserconfig.xml for Windows...${NC}"
    
    cat > "$ASSETS_DIR/browserconfig.xml" << 'EOF'
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square70x70logo src="assets/icons/icon-72x72.png"/>
            <square150x150logo src="assets/icons/icon-152x152.png"/>
            <square310x310logo src="assets/icons/icon-310x310.png"/>
            <wide310x150logo src="assets/icons/icon-310x150.png"/>
            <TileColor>#4a90e2</TileColor>
            <TileImage src="assets/icons/icon-144x144.png"/>
        </tile>
    </msapplication>
</browserconfig>
EOF
    
    echo -e "${GREEN}browserconfig.xml generated!${NC}\n"
}

# Clean up temporary files
cleanup() {
    echo -e "${BLUE}Cleaning up temporary files...${NC}"
    rm -rf "$TEMP_DIR"
    echo -e "${GREEN}Cleanup complete!${NC}\n"
}

# Generate report
generate_report() {
    echo -e "${GREEN}══════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}                    PWA ICON GENERATION COMPLETE           ${NC}"
    echo -e "${GREEN}══════════════════════════════════════════════════════════${NC}"
    echo ""
    echo -e "${BLUE}Generated Files:${NC}"
    echo ""
    
    # Count and list icon files
    local icon_count=$(find "$ICONS_DIR" -name "*.png" | wc -l)
    echo -e "  ${GREEN}✓${NC} $icon_count icons in $ICONS_DIR/"
    
    # Count and list splash screens
    local splash_count=$(find "$SPLASH_DIR" -name "*.png" | wc -l)
    echo -e "  ${GREEN}✓${NC} $splash_count splash screens in $SPLASH_DIR/"
    
    # List other files
    for file in "favicon.ico" "favicon.png" "browserconfig.xml" "icon-list.html"; do
        if [ -f "$ASSETS_DIR/$file" ]; then
            echo -e "  ${GREEN}✓${NC} $ASSETS_DIR/$file"
        fi
    done
    
    echo ""
    echo -e "${BLUE}Next Steps:${NC}"
    echo "  1. Include the HTML snippet from $ASSETS_DIR/icon-list.html in your <head>"
    echo "  2. Update manifest.json with the generated icon paths"
    echo "  3. Test your PWA installation on different devices"
    echo ""
    echo -e "${BLUE}Testing Tools:${NC}"
    echo "  - Chrome DevTools: Lighthouse audit"
    echo "  - https://www.pwabuilder.com/"
    echo "  - https://web.dev/measure/"
    echo ""
    echo -e "${GREEN}══════════════════════════════════════════════════════════${NC}"
}

# Main execution
main() {
    echo -e "${BLUE}══════════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}               PWA Icon Generator v1.0                    ${NC}"
    echo -e "${BLUE}══════════════════════════════════════════════════════════${NC}"
    echo ""
    
    # Run all functions
    check_dependencies
    create_directories
    generate_icons
    generate_splash_screens
    generate_favicon
    generate_browserconfig
    generate_html_snippet
    cleanup
    generate_report
}

# Run main function
main "$@"