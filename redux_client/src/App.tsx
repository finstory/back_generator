import { Provider } from "react-redux";
import "@config/styles/css/normalize.css";
import "@config/styles/sass/app.scss";
// import { ServicesProvider } from "./_common/config/services/providers/ServicesProvider";
import { Test } from "./test/Test";
// import { Toaster } from "react-hot-toast";


import { ServicesProvider } from "./_common/config/services/providers/ServicesProvider";
import { Toaster } from "react-hot-toast";
import { store } from "./integrations/redux/store";
import { AppRouter } from "./_structure/main/routes/app.router";
function App() {

  return (
    <Provider store={store}>
      <ServicesProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <AppRouter />
        {/* <Test /> */}
      </ServicesProvider>
    </Provider>
  );
}

export default App;
