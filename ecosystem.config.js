module.exports = {
    apps : [
        {
          name: 'Ari-Ani',
          script: 'heart.js',
          instances: 1,
          autorestart: true,
          watch: false,
          max_memory_restart: '1G',
        },
    ],
  };
  