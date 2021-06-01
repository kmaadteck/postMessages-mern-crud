## Installation of redux devTools extension
https://github.com/reduxjs/redux-devtools/tree/master/extension
    => in section
      1.With Redux
        1.1 Basic store
        For a basic Redux store simply add:
            const store = createStore(
            reducer, /* preloadedState, */
            +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // only the line => ex: actions/store.js => const store
            );
