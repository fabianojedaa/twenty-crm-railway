#!/bin/bash
set -e

echo "🚀 Setting up Twenty CRM for GitHub Codespaces..."

# Wait for Docker to be ready
echo "⏳ Waiting for Docker service..."
while ! docker info > /dev/null 2>&1; do
    sleep 2
done

echo "✅ Docker is ready!"

# Start the services
echo "🐳 Starting Twenty CRM stack..."
docker-compose up -d

echo "⏳ Waiting for services to be healthy..."
sleep 30

# Show status
echo "📊 Service Status:"
docker-compose ps

echo ""
echo "🎉 Twenty CRM is now running with password protection!"
echo ""
echo "🌐 Access URL: https://$CODESPACE_NAME-8080.preview.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"
echo ""
echo "🔐 Login Credentials:"
echo "   Username: virtuaadmin"
echo "   Password: VirtuaLending2026!"
echo ""
echo "The application should automatically open in your browser."
echo "If not, click on the 'Ports' tab and open port 8080."