/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');
const glob = require('glob');

module.exports = {
  /**
   *
   * @param {Generator} generator
   */
  copyTemplate(generator) {
    const { appName } = generator.options;
    const root = generator.templatePath();

    generator.destinationRoot(`${generator.destinationPath(appName)
    }`);

    const files = glob.sync('**', {
      dot: true, nodir: true, cwd: root,
    });

    for (let i = 0; i < files.length; ++i) {
      const templatePath = files[i];
      let _appName = appName.replace(/[\W_]/, '');

      if (/.adapter/.test(templatePath)) _appName = _appName.replace(/adapter/i, '');

      const destinationPath = /__replace_with_app_name__/.test(templatePath)
        ? templatePath
          .trim()
          .replace('__replace_with_app_name__', _appName)
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/[\s_]+/g, '-')
          .replace(/-\./, '.')
          .replace(/-tests-/, '__tests__')
          .toLowerCase()
        : templatePath.trim();

      generator
        .fs
        .copyTpl(
          generator.templatePath(templatePath),
          generator.destinationPath(destinationPath),
          {
            appName,
          },
        );
    }
  },
};
