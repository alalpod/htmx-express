const fs = require('fs');
const path = require('path');

fs.copyFile(
  path.resolve(__dirname, '../node_modules/@syntax-design/syntax-css-toolkit/dist/reset.css'),
  'public/css/reset.css',
  (err) => {
    if (err) throw err;
  }
);

fs.copyFile(
  path.resolve(__dirname, '../node_modules/@syntax-design/syntax-css-toolkit/dist/style.css'),
  'public/css/styles.css',
  (err) => {
    if (err) throw err;
  }
);

fs.copyFile(
  path.resolve(__dirname, '../node_modules/@syntax-design/syntax-tokens/dist/themes/all.css'),
  'public/css/tokens.css',
  (err) => {
    if (err) throw err;
  }
);
