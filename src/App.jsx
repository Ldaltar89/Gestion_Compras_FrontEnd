import React from "react";
import AppRouters from "./routers/AppRouters";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const App = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <AppRouters />
         </BrowserRouter>
      </Provider>
   );
};

export default App;
