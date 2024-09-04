import { Provider } from "react-redux";
import "@config/styles/css/normalize.css";
import "@config/styles/sass/app.scss";
import { AppMain } from "@/_common/routes/AppMain";
// import { ServicesProvider } from "./_common/config/services/providers/ServicesProvider";
import { Test } from "./test/Test";
// import { Toaster } from "react-hot-toast";


import { ServicesProvider } from "./_common/config/services/providers/ServicesProvider";
import { Toaster } from "react-hot-toast";
import { store } from "./integrations/redux/store";
function App() {

  return (
    <Provider store={store}>
      <ServicesProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <AppMain />
        {/* <Test /> */}
      </ServicesProvider>
    </Provider>
  );
}

export default App;
