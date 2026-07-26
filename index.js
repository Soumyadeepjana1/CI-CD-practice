const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CI/CD Deployment - Soumyadeep</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #0f172a;
      color: #f8fafc;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background-image: 
        radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.15) 0px, transparent 50%);
    }
    .container {
      max-width: 900px;
      width: 100%;
      background: rgba(30, 41, 59, 0.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 3rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      animation: fadeIn 0.8s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .badge-container {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 600;
    }
    .badge-success {
      background: rgba(34, 197, 94, 0.15);
      color: #4ade80;
      border: 1px solid rgba(34, 197, 94, 0.3);
    }
    .badge-purple {
      background: rgba(168, 85, 247, 0.15);
      color: #c084fc;
      border: 1px solid rgba(168, 85, 247, 0.3);
    }
    .status-dot {
      width: 8px;
      height: 8px;
      background-color: #22c55e;
      border-radius: 50%;
      box-shadow: 0 0 10px #22c55e;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
    }
    h1 {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin-bottom: 0.75rem;
      background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p.subtitle {
      font-size: 1.25rem;
      color: #94a3b8;
      margin-bottom: 2.5rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }
    .card {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }
    .card:hover {
      transform: translateY(-4px);
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.1);
    }
    .card-title {
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      margin-bottom: 0.5rem;
    }
    .card-value {
      font-size: 1.25rem;
      font-weight: 600;
      color: #e2e8f0;
      word-break: break-all;
    }
    .footer {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #64748b;
      font-size: 0.875rem;
    }
    .footer a {
      color: #818cf8;
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer a:hover {
      color: #c084fc;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="badge-container">
      <div class="badge badge-success">
        <div class="status-dot"></div>
        System Operational
      </div>
      <div class="badge badge-purple">
        🚀 Dockerized CI/CD Active
      </div>
    </div>
    
    <h1>Hello Soumyadeep! 👋</h1>
    <p class="subtitle">Your GitHub Actions CI/CD Pipeline & EC2 Docker Container are running flawlessly.</p>

    <div class="grid">
      <div class="card">
        <div class="card-title">Server Host</div>
        <div class="card-value">AWS EC2 (72.44.40.216)</div>
      </div>
      <div class="card">
        <div class="card-title">Container Engine</div>
        <div class="card-value">Docker & Node.js 20</div>
      </div>
      <div class="card">
        <div class="card-title">Deployment Status</div>
        <div class="card-value" style="color: #4ade80;">Active (HTTP 200)</div>
      </div>
      <div class="card">
        <div class="card-title">Last Healthcheck</div>
        <div class="card-value">${new Date().toLocaleString()}</div>
      </div>
    </div>

    <div class="footer">
      <span>Powered by GitHub Actions, Docker Hub & AWS EC2</span>
      <a href="/api/info">View API Specs →</a>
    </div>
  </div>
</body>
</html>
  `);
});

app.get('/api/info', (req, res) => {
  res.status(200).json({
    status: 'success',
    app: 'hello-soumyadeep',
    server: 'AWS EC2 72.44.40.216',
    docker_image: 'soumyadeep7872/hello-soumyadeep:latest',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
