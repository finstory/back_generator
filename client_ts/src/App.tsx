import { Provider } from "react-redux";
import "./_config/styles/css/normalize.css";
import "./_config/styles/sass/app.scss";
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
