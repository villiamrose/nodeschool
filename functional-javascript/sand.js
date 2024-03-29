const loremIpsum = {
  name: 'functional-javascript-workshop',
  version: '0.0.13',
  dependencies: {
    workshopper: {
      version: '0.3.3',
      dependencies: {
        'map-async': { version: '0.1.1' },
        'tuple-stream': { version: '0.0.2' },
        split: { version: '0.2.10' },
        through: { version: '2.3.4' },
        mkdirp: { version: '0.3.5' },
        'colors-tmpl': {
          version: '0.1.0',
          dependencies: { colors: { version: '0.6.2' } },
        },
        'terminal-menu': {
          version: '0.1.0',
          dependencies: {
            resumer: { version: '0.0.0' },
            charm: { version: '0.1.2' },
            inherits: { version: '2.0.1' },
          },
        },
        optimist: {
          version: '0.6.0',
          dependencies: {
            wordwrap: { version: '0.0.2' },
            minimist: { version: '0.0.4' },
          },
        },
        'pygmentize-bundled': {
          version: '2.1.0',
          dependencies: {
            'readable-stream': { version: '1.0.17' },
            bl: { version: '0.4.1' },
            through2: { version: '0.2.1' },
          },
        },
        xtend: {
          version: '2.1.1',
          dependencies: { 'object-keys': { version: '0.4.0' } },
        },
      },
    },
    'lorem-ipsum': {
      version: '0.1.1',
      dependencies: {
        optimist: {
          version: '0.3.7',
          dependencies: { wordwrap: { version: '0.0.2' } },
        },
        inflection: { version: '1.2.6' },
      },
    },
  },
};
