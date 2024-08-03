import { Provider } from "react-redux";
import "@config/styles/css/normalize.css";
import "@config/styles/sass/app.scss";
// import { AppMain } from "@/_common/routes/AppMain";
// import { ServicesProvider } from "./_common/config/services/providers/ServicesProvider";
import { Test } from "./test/Test";
// import { Toaster } from "react-hot-toast";

import { store } from "@/_common/redux/store";
function App() {

  //   <ServicesProvider>
  //     <Toaster position="top-center" reverseOrder={false} />

  //     <AppMain />
  //     <Toaster />
  //   </ServicesProvider>
  return (

    <Provider store={store}>
      <Test />
    </Provider>
  );
}

export default App;
