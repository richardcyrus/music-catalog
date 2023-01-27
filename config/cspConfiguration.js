const scripts = ['*.fontawesome.com', 'cdn.jsdelivr.net'];

const styles = [
  '*.fontawesome.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
];

const cspConfig = {
  directives: {
    'default-src': ["'self'", '*.fontawesome.com'],
    'script-src': [...scripts, "'self'"],
    'style-src': [...styles, "'self'", "'unsafe-inline'"],
  },
};

module.exports = cspConfig;
