#!/bin/bash
set -e

echo "🚀 Starting Twenty CRM..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please wait for the environment to initialize."
    exit 1
fi

# Start services
echo "🐳 Starting Docker services..."
docker-compose up -d

echo "⏳ Waiting for services to start..."
sleep 15

# Check status
echo "📊 Service Status:"
docker-compose ps

echo ""
echo "🎉 Twenty CRM is ready!"
echo ""

# Try to get the Codespaces URL if available
if [ -n "$CODESPACE_NAME" ]; then
    echo "🌐 Access your password-protected deployment:"
    echo "URL: https://$CODESPACE_NAME-8080.preview.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"
else
    echo "🌐 Access your password-protected deployment:"
    echo "URL: http://localhost:8080"
fi

echo ""
echo "🔐 Login Credentials:"
echo "   Username: virtuaadmin"
echo "   Password: VirtuaLending2026!"

echo ""
echo "📋 Quick commands:"
echo "  View logs: docker-compose logs -f"
echo "  Stop services: docker-compose down"
echo "  Restart: docker-compose restart"