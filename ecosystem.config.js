module.exports = {
  apps: [
    {
      name: 'demo_pc',
      exec_mode: 'cluster',
      instances: '1',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: '/pm2_logs_pc/pc_error.log',
      "watch": [
          ".nuxt"
      ],
      env_development: {//=>pm2 start ecosystem.config.js --watch --env development
        "NODE_ENV": "development",
      },
      env_production: {
        "NODE_ENV": "production"
      },
      env_preview: {
        "NODE_ENV": "preview"
      }
    }
  ]
}