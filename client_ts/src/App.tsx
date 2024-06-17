import { Provider } from "react-redux";
import "@config/styles/css/normalize.css";
import "@config/styles/sass/app.scss";
import { AppMain } from "@/_common/routes/AppMain";

// import store from "./redux";


function App() {

  return (
    // <Provider store={store}>
      <AppMain />
    // </Provider>
  );
}

export default App;
