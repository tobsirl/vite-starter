console.log('Hello, world!');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
