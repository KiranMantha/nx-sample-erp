module.exports = {
  name: 'orders',
  exposes: {
    './Module': 'apps/orders/src/app/remote-entry/entry.module.ts'
  }
};
