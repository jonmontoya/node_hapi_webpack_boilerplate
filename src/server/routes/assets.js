export default [
  {
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: 'dist',
      },
    },
  },
];
