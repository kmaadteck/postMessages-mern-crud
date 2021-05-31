import "./App.css";
import PostMessages from "./components/PostMessages/PostMessages";
import { Provider } from "react-redux";
import { store } from "./actions/store";
import { AppBar, Container, Typography } from "@material-ui/core";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Container maxWidth="lg">
          <AppBar position="static" color="inherit">
            <Typography variant="h2"
            align="center">
            Post Box
            </Typography>
          </AppBar>
        <PostMessages />
        </Container>
      </Provider>
    </>
  );
};

export default App;
