module.exports = projectPath => {
  const cwd = process.cwd()

  const basePath = `${projectPath}/components/\{{ directory }}/\{{ pascalCase name }}`

  return {
    name: 'Component',
    generator: {
      description: 'Create pages or dumb components',
      prompts: [
        {
          type: 'list',
          name: 'componentType',
          choices: ['component'],
          message: 'What type of component is this?',
          default: 'component',
          basePath: projectPath,
        },
        {
          type: 'input',
          name: 'name',
          message: 'What should it be called?',
          default: 'ExampleButton',
        },
        {
          type: 'directory',
          name: 'directory',
          basePath: './src/components',
          message: 'Where should it be created',
          default: './',
        },
      ],
      actions: [
        {
          type: 'add',
          path: `${basePath}/index.js`,
          templateFile: `${cwd}/generators/Component/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `${basePath}/\{{ pascalCase name }}.js`,
          templateFile: `${cwd}/generators/Component/Component.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `${basePath}/styles.js`,
          templateFile: `${cwd}/generators/Component/styles.js.hbs`,
          abortOnFail: true,
        },
      ],
    },
  }
}
