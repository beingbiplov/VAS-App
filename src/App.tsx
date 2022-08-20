import React from "react";
import "./styles/app.css";
import AppRoutes from "./routes/AppRoutes";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
