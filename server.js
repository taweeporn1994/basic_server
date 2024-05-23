const express = require('express');
const os = require('os');
const app = express();
const PORT = 8080;

function getHostIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'IP not found';
}

app.get('/', (req, res) => {
  const hostIP = getHostIP();
  res.send(`Hello, World! Host IP: ${hostIP}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
