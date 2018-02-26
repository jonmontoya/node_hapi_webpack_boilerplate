const environment = process.env.NODE_ENV;

let manifest = null;

if (environment === 'production') manifest = require('../../dist/manifest.json'); // eslint-disable-line

export default [
  {
    method: 'GET',
    path: '/',
    handler: function handleGetRoot() {
      let assetsSrc = 'http://localhost:8080/assets/bundle.js';
      let styleLink = '';
      if (environment === 'production') {
        assetsSrc = '/assets/bundle.js';
        styleLink = `<link rel="stylesheet" href="/assets/${manifest['main.css']}">`;
      }

      return `
        <html>
          <head>
            <title>Hello World</title>
            ${styleLink}
          </head>
          <body>
            <div id="app"></div>
            <script src="${assetsSrc}"></script>
          </body>
        </html>
      `;
    },
  },
];
