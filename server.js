const express = require('express')
const os = require('os')
const app = express()
const PORT = 8080

function getHostIP() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return 'IP not found'
}

const hostIP = getHostIP()
app.get('/', (req, res) => {
  const clientIP =
    req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const timestamp = new Date().toISOString()
  console.log('clientIP|timestamp :', `${clientIP}|${timestamp}`)
  res.send(`Hello, World! Host IP|timestamp : ${hostIP}|${timestamp}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://${hostIP}:${PORT}`)
})
