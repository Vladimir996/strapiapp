module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 8081),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
