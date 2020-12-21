const glob = require('glob-all');
const paths = require('react-scripts/config/paths');

antModules = ['select', 'radio', 'spin'];

module.exports = {
  content: [
    `${paths.appBuild}/index.html`,
    `${paths.appBuild}/static/js/*.js`,
    ...glob.sync(
      antModules.map((m) => `${paths.appNodeModules}/antd/es/${m}/**/*.css`),
      {
        nodir: true,
      }
    ),
  ],
  css: [`${paths.appBuild}/static/css/*.css`],
  output: `${paths.appBuild}/static/css`,
};
