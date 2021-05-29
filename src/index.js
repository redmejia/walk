import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categorie } from "./Redux/Reducers/CategorieReducer";
import { userRegisterReducer } from "./Redux/Reducers/userRegisteReducer";
import { userSigninReducer } from "./Redux/Reducers/UserSiginReducer";
import { productReducer } from "./Redux/Reducers/ProductReducer";
import { newItemReducer } from "./Redux/Reducers/Cart";
import { BrowserRouter as Router } from "react-router-dom";

const rootReducer = combineReducers(
  {
    register: userRegisterReducer,
    signin : userSigninReducer,
    categorie :categorie,
    product : productReducer,
    cart : newItemReducer,
  }
)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
