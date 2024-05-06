import { Provider } from "react-redux";
import "./assets/css/normalize.css";
import "./assets/sass/index.scss";
import { AppMain } from "./router/AppMain";
import store from "./redux";


function App() {

  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  );
}

export default App;
