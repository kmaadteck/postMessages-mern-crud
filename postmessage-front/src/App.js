import "./App.css";
import PostMessages from "./components/PostMessages/PostMessages";
import { Provider } from "react-redux";
import { store } from "./actions/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PostMessages />
      </Provider>
    </>
  );
};

export default App;
