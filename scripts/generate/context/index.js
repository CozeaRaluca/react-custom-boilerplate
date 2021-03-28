module.exports = {
  description: 'Add a new Context.',
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
      name: 'wantReducer',
      message: 'Do you need a reducer for storage?',
      default: false,
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../../src/contexts{{path}}{{properCase name}}/index.test.js',
        templateFile: './context/test.js.hbs',
        abortOnFail: true,
      },
    ];

    if (data.wantReducer) {
      actions.push({
        type: 'add',
        path: '../../src/contexts{{path}}{{properCase name}}/index.js',
        templateFile: './context/indexUseReducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/contexts{{path}}{{properCase name}}/reducer.js',
        templateFile: './context/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/contexts{{path}}{{properCase name}}/actions.js',
        templateFile: './context/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/contexts{{path}}{{properCase name}}/constants.js',
        templateFile: './context/constants.js.hbs',
        abortOnFail: true,
      });
    } else {
      actions.push({
        type: 'add',
        path: '../../src/contexts{{path}}{{properCase name}}/index.js',
        templateFile: './context/indexUseState.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
