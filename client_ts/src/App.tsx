import { Provider } from "react-redux";
import "./assets/index.css";
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
