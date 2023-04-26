import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
// import { AuthReducer } from "./AuthReducer";

// import { reducer as reduxFormReducer } from "redux-form";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const middleware = applyMiddleware(thunk);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reducers = combineReducers({
//   auth: AuthReducer,

//   form: reduxFormReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const pReducer = persistReducer(persistConfig, reducers);
// const store = createStore(pReducer, composeEnhancers(middleware));

// const persistor = persistStore(store);
// //const store = createStore(rootReducers);

// export default { persistor, store };

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
