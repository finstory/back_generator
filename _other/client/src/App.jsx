import { AppMain } from "./router/AppMain";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import "./assets/sass/index.scss";
import "./assets/css/normalize.css";

function App() {
  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  );
}

export default App;
