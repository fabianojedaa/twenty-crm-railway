const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const basicAuth = require('basic-auth');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// Basic authentication middleware
const authenticate = (req, res, next) => {
  const credentials = basicAuth(req);
  
  // Hardcoded credentials for now - in production, use environment variables
  const validUsername = 'virtuaadmin';
  const validPassword = 'VirtuaLending2026!';
  
  if (!credentials || credentials.name !== validUsername || credentials.pass !== validPassword) {
    res.set('WWW-Authenticate', 'Basic realm="Twenty CRM - VirtuaLending Access"');
    return res.status(401).send('Unauthorized');
  }
  
  next();
};

// Apply authentication to all routes
app.use(authenticate);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Twenty CRM',
    timestamp: new Date().toISOString(),
    environment: 'railway'
  });
});

// Serve static landing page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Twenty CRM - VirtuaLending</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                max-width: 800px; margin: 0 auto; padding: 40px 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white; min-height: 100vh;
            }
            .container { background: rgba(255,255,255,0.1); padding: 40px; border-radius: 20px; backdrop-filter: blur(10px); }
            .logo { font-size: 3em; margin-bottom: 20px; text-align: center; }
            .title { font-size: 2.5em; margin-bottom: 30px; text-align: center; font-weight: 300; }
            .status { background: rgba(0,255,0,0.2); padding: 15px; border-radius: 10px; margin: 20px 0; text-align: center; }
            .info { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0; }
            .launch-btn { 
                display: block; width: 200px; margin: 30px auto; padding: 15px 30px;
                background: #4CAF50; color: white; text-decoration: none; border-radius: 25px;
                text-align: center; font-size: 1.2em; transition: all 0.3s;
            }
            .launch-btn:hover { background: #45a049; transform: translateY(-2px); }
            .credentials { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="logo">🏢</div>
            <h1 class="title">Twenty CRM</h1>
            <div class="status">
                ✅ <strong>Authentication Successful</strong><br>
                Welcome to VirtuaLending CRM
            </div>
            
            <div class="info">
                <h3>🚀 Service Status</h3>
                <p><strong>Status:</strong> Running on Railway</p>
                <p><strong>Environment:</strong> Production</p>
                <p><strong>Authentication:</strong> Password Protected</p>
                <p><strong>Last Updated:</strong> ${new Date().toLocaleString()}</p>
            </div>

            <div class="credentials">
                <h3>🔐 Access Information</h3>
                <p><strong>Username:</strong> virtuaadmin</p>
                <p><strong>Password:</strong> VirtuaLending2026!</p>
                <p><em>You've already been authenticated</em></p>
            </div>
            
            <div class="info">
                <h3>📊 Twenty CRM Features</h3>
                <ul>
                    <li>✅ Contact Management</li>
                    <li>✅ Deal Pipeline Tracking</li>
                    <li>✅ Task & Activity Management</li>
                    <li>✅ Custom Fields & Views</li>
                    <li>✅ Team Collaboration</li>
                    <li>✅ API & Integrations</li>
                </ul>
            </div>

            <div class="info">
                <h3>🏗️ Coming Soon</h3>
                <p>Full Twenty CRM integration is being configured for Railway deployment.</p>
                <p>This authentication layer is working and ready for the complete CRM backend.</p>
                <p><strong>Next Steps:</strong></p>
                <ul>
                    <li>Connect to managed PostgreSQL database</li>
                    <li>Deploy Twenty server containers</li>
                    <li>Configure file storage</li>
                    <li>Enable real-time features</li>
                </ul>
            </div>
        </div>
    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🏢 Twenty CRM Server running on port ${PORT}`);
  console.log(`🔐 Password-protected access ready`);
  console.log(`🌐 Railway deployment successful`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully');
  process.exit(0);
});