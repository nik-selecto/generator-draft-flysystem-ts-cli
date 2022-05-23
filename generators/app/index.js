const Generator = require('yeoman-generator');
const {
  copyTemplate,
} = require('./writing/copy-template.writing');
const {
  loopAskProjectName,
  saveDevDependenciesCheckbox,
  dependenciesCheckbox,
} = require('./prompting/index.prompting');
const {
  saveDevDependenciesInstall,
  dependendiesInstall,
} = require('./install/index.install');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appName', { required: false });
  }

  initializing() {

  }

  async prompting() {
    await loopAskProjectName(this);
    await dependenciesCheckbox(this);
    await saveDevDependenciesCheckbox(this);
  }

  configuring() {

  }

  default() {

  }

  async writing() {
    await copyTemplate(this);
  }

  conflicts() {

  }

  async install() {
    await dependendiesInstall(this);
    await saveDevDependenciesInstall(this);
  }
};
