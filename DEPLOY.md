# 🚀 Deploy Twenty CRM in Browser (5 minutes)

## Quick Deploy Steps

### Step 1: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `twenty-crm-deploy` (or any name)
3. Set to **Public** (required for Codespaces)
4. Click "Create repository"

### Step 2: Upload Files
1. In your new repository, click "uploading an existing file"
2. Upload ALL files from this `codespaces-deploy` folder:
   - `docker-compose.yml`
   - `README.md` 
   - `start.sh`
   - `.devcontainer/devcontainer.json`
   - `.devcontainer/setup.sh`
3. Commit the files

### Step 3: Launch Codespace
1. In your repository, click the green "Code" button
2. Click "Codespaces" tab
3. Click "Create codespace on main"
4. Wait 2-3 minutes for setup to complete

### Step 4: Access Twenty CRM
1. Look for the "Ports" tab in the bottom panel
2. Click the globe icon next to port **8080**
3. Enter login credentials:
   - **Username:** `virtuaadmin`
   - **Password:** `VirtuaLending2026!`
4. Twenty CRM will open after authentication!

## Alternative: One-Click Template

If you want an even faster deploy:
1. Click: [Create from Template](https://github.com/new?template_name=twenty-crm-codespaces&template_owner=YOUR_USERNAME)
2. Name your repository  
3. Click "Create repository from template"
4. Follow Step 3 above

## What You Get

- ✅ Full Twenty CRM with database
- ✅ Accessible from any browser 
- ✅ Public URL you can share
- ✅ No local installation needed
- ✅ Free GitHub Codespaces hours

## Troubleshooting

**If services don't start automatically:**
```bash
./start.sh
```

**Check service status:**
```bash
docker-compose ps
```

**View logs if there are issues:**
```bash
docker-compose logs twenty-server
```

## Cost

GitHub provides free Codespaces hours monthly. This deployment uses minimal resources and should fit within free tier limits for evaluation.