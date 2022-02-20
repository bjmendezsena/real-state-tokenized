import { Provider } from "react-redux";
import store from "./redux/store/store";
import { Navigation } from "./routes/Navigation";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
