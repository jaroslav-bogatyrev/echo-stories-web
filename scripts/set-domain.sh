#!/bin/bash

# Custom Domain Configuration Script
# This script helps you configure your custom domain for GitHub Pages

echo "🌐 Custom Domain Setup for GitHub Pages"
echo "========================================"
echo ""

# Check if domain argument is provided
if [ -z "$1" ]; then
    echo "Usage: ./scripts/set-domain.sh <your-domain>"
    echo ""
    echo "Examples:"
    echo "  ./scripts/set-domain.sh www.echostories.com"
    echo "  ./scripts/set-domain.sh echostories.com"
    echo ""
    exit 1
fi

DOMAIN=$1

# Validate domain format (basic check)
if [[ ! $DOMAIN =~ ^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$ ]]; then
    echo "❌ Error: Invalid domain format"
    echo "Please provide a valid domain (e.g., example.com or www.example.com)"
    exit 1
fi

echo "Setting up domain: $DOMAIN"
echo ""

# Update CNAME file
echo "📝 Updating public/CNAME..."
echo "$DOMAIN" > public/CNAME
echo "✅ CNAME file updated"

# Update astro.config.mjs
echo "📝 Updating astro.config.mjs..."
sed -i.bak "s|site: 'https://[^']*'|site: 'https://$DOMAIN'|g" astro.config.mjs
rm astro.config.mjs.bak 2>/dev/null
echo "✅ Astro config updated"

echo ""
echo "✅ Configuration complete!"
echo ""
echo "Next steps:"
echo "1. Configure DNS at your domain registrar (see docs/CUSTOM_DOMAIN_SETUP.md)"
echo "2. Test build: npm run build"
echo "3. Commit changes: git add . && git commit -m 'Configure custom domain: $DOMAIN'"
echo "4. Push to GitHub: git push origin master"
echo "5. Configure custom domain in GitHub Pages settings"
echo ""
echo "For detailed instructions, see: docs/CUSTOM_DOMAIN_CHECKLIST.md"

