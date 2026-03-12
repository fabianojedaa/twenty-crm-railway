# 🔐 Twenty CRM Access Credentials

## Password Protection Layer
**Username:** `virtuaadmin`  
**Password:** `VirtuaLending2026!`

*This protects access to the entire application at the nginx level.*

## Twenty CRM Admin Setup
After passing the password protection, you'll set up your Twenty CRM workspace:

1. **Workspace Name:** VirtuaLending
2. **Admin Email:** Use your preferred email
3. **Admin Password:** Choose a secure password for CRM access

## Security Notes
- The nginx password protects the entire deployment from unauthorized access
- Twenty CRM has its own user management system inside the application
- You can add additional users through the CRM interface after initial setup
- The nginx credentials can be changed by updating the `/auth/.htpasswd` file

## Changing the Password Protection
To change the nginx access password:

```bash
htpasswd -c auth/.htpasswd NEW_USERNAME
# Enter new password when prompted
docker-compose restart nginx-proxy
```