commonjs({
    include: 'node_modules/**',
    // left-hand side can be an absolute path, a path
    // relative to the current directory, or the name
    // of a module in node_modules
    namedExports: {
      'node_modules/react/index.js': [
        'cloneElement',
        'createContext',
        'Component',
        'createElement'
      ],
      'node_modules/react-dom/index.js': ['render', 'hydrate'],
      'node_modules/react-is/index.js': [
        'isElement',
        'isValidElementType',
        'ForwardRef'
      ]
    }
  })