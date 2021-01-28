module.exports = {
  description: 'Add a new page.',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Wrapper',
      validate: value => value ? true : 'The name is required.',
    },
    {
      type: 'input',
      name: 'path',
      message: 'Construct the path. (should start and end with /)',
      default: '/',
      validate: value => {
        const pathPattern = /^\/([a-z]([A-Za-z/])*\/)*$/g;

        return pathPattern.test(value);
      },
    },
    {
      type: 'confirm',
      name: 'wantStyles',
      message: 'Do you need custom styles?',
      default: false,
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../../src/pages{{path}}{{properCase name}}/index.js',
        templateFile: './page/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/pages{{path}}{{properCase name}}/{{properCase name}}.js',
        templateFile: './page/view.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/pages{{path}}{{properCase name}}/index.test.js',
        templateFile: './page/test.js.hbs',
        abortOnFail: true,
      },
    ];

    if (data.wantStyles) {
      actions.push({
        type: 'add',
        path: '../../src/pages{{path}}{{properCase name}}/{{properCase name}}.css',
        templateFile: './page/styles.css.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
