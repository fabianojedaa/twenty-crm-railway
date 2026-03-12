# Twenty CRM - GitHub Codespaces Deployment

This repository contains a complete Twenty CRM deployment setup for GitHub Codespaces.

## Quick Deploy

### Option 1: One-Click Deploy (Recommended)
1. Click this button to create a new Codespace:
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new)
   
2. Upload/paste the contents of this `codespaces-deploy` folder to your new repository

3. The setup will automatically run when the Codespace starts

### Option 2: Manual Repository Setup
1. Create a new GitHub repository
2. Upload all files from this `codespaces-deploy` folder to the root of your repository
3. Go to your repository and click "Code" → "Create codespace on main"

## Services Included

- **Password-Protected Gateway**: Port 8080 (nginx proxy with authentication)
- **Twenty CRM Frontend**: Internal (accessed via proxy)
- **Twenty Server API**: Internal (accessed via proxy)
- **PostgreSQL Database**: Port 5432
- **Redis Cache**: Port 6379

## Access Your Deployment

Once the Codespace starts:

1. Wait for the setup script to complete (~2-3 minutes)
2. The application will be available at: `https://YOUR_CODESPACE-8080.preview.githubcodesp​aces.com`
3. Or click on the "Ports" tab and open port 8080

### 🔐 Password Protection
- **Username:** `virtuaadmin`
- **Password:** `VirtuaLending2026!`

## Manual Commands

If you need to manage the services manually:

```bash
# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs twenty-server

# Stop all services
docker-compose down
```

## First Time Setup

When you first access Twenty CRM:

1. You'll be prompted to create a workspace
2. Set up your admin account
3. Configure your organization settings
4. Start importing contacts and setting up pipelines

## Environment

This deployment uses:
- PostgreSQL 15 for data storage
- Redis 7 for caching and sessions  
- Twenty CRM latest stable version
- All services running in Docker containers

The setup is configured for development/demo purposes with simplified authentication secrets.