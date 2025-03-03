module.exports = function (plop) {
  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Component type:',
        choices: ['ui', 'kokonutui', 'magicui', 'admin', 'qr-code'],
        default: 'ui',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{type}}/{{name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
    ],
  });

  // Feature generator
  plop.setGenerator('feature', {
    description: 'Create a new feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Feature name:',
      },
      {
        type: 'input',
        name: 'component',
        message: 'Main component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{camelCase name}}/{{pascalCase component}}.tsx',
        templateFile: 'plop-templates/feature-component.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase name}}/index.ts',
        templateFile: 'plop-templates/feature-index.hbs',
      },
    ],
  });

  // Page generator
  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Page path (e.g. "restaurants/new"):',
      },
      {
        type: 'confirm',
        name: 'withLayout',
        message: 'Create layout file?',
        default: false,
      },
    ],
    actions: function(data) {
      const actions = [
        {
          type: 'add',
          path: 'src/app/{{path}}/page.tsx',
          templateFile: 'plop-templates/page.hbs',
        }
      ];

      if (data.withLayout) {
        actions.push({
          type: 'add',
          path: 'src/app/{{path}}/layout.tsx',
          templateFile: 'plop-templates/layout.hbs',
        });
      }

      return actions;
    },
  });
};