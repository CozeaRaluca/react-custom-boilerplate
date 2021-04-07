module.exports = {
  description: 'Add a new component.',
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
    {
      type: 'confirm',
      name: 'wantStories',
      message: 'Do you want to add stories?',
      default: false,
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components{{path}}{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components{{path}}{{properCase name}}/{{properCase name}}.js',
        templateFile: './component/view.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components{{path}}{{properCase name}}/{{properCase name}}.test.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
    ];

    if (data.wantStyles) {
      actions.push({
        type: 'add',
        path: '../../src/components{{path}}{{properCase name}}/{{properCase name}}.css',
        templateFile: './component/styles.css.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantStories) {
      actions.push({
        type: 'add',
        path: '../../src/components{{path}}{{properCase name}}/{{properCase name}}.stories.mdx',
        templateFile: './component/stories.mdx.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
