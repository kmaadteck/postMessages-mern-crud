import "./App.css";
import PostMessages from "./components/PostMessages/PostMessages";
import { Provider } from "react-redux";
import { store } from "./actions/store";
<<<<<<< HEAD

=======
import { AppBar, Container, Typography } from "@material-ui/core";
import ButterToast, { POS_TOP, POS_RIGHT } from "butter-toast";
>>>>>>> develop
const App = () => {
  return (
    <>
      <Provider store={store}>
<<<<<<< HEAD
        <PostMessages />
=======
        <Container maxWidth="lg">
          <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">
              Post Box
            </Typography>
          </AppBar>
          <PostMessages />
          <ButterToast position={{vertical: POS_TOP, horizontal:POS_RIGHT  }}/>
        </Container>
>>>>>>> develop
      </Provider>
    </>
  );
};

export default App;
