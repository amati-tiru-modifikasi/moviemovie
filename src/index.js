import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
{
  /* https://github.com/reduxjs/redux-thunk/issues/35#issuecomment-184903773 */
}

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
