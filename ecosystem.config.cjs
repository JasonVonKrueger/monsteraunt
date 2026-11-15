// pm2 process file for production.
//   pm2 start ecosystem.config.cjs
//   pm2 save && pm2 startup     # keep it running across reboots
//
// .cjs because package.json sets "type": "module".
module.exports = {
  apps: [
    {
      name: "monsteraunt",
      cwd: "/home/hosted-apps/monsteraunt",
      script: "server/src/index.js",
      // Rooms live in memory: exactly one process, never cluster mode.
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: 3040,
      },
    },
  ],
};
