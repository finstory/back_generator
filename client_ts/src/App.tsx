import { Provider } from "react-redux";
import "@config/styles/css/normalize.css";
import "@config/styles/sass/app.scss";
import { AppMain } from "@/_common/routes/AppMain";
import store from "@/_common/redux/index";
import { ServicesProvider } from "./_common/config/services/providers/ServicesProvider";


function App() {

  return (
    <Provider store={store}>
      <ServicesProvider>
        <AppMain />
      </ServicesProvider>
    </Provider>
  );
}

export default App;
