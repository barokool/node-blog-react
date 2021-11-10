import TopBar from "./components/topbar/TopBar";
import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './style.css'
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context)
  return (
    <Router >
      <TopBar />

      <Switch>
        <Route exact path="/" >
          {
            user ? <Home /> : <Register />
          }
        </Route>
        <Route path="/register" >
          {
            user ? <Home /> : <Register />
          }
        </Route>
        <Route path="/login" >
          {
            user ? < Home /> : <Login />
          }
        </Route>
        <Route path="/write" >
          {
            user ? <Write /> : <Register />
          }
        </Route>
        <Route path="/setting" >
          {
            user ? <Setting /> : <Register />
          }
        </Route>
        <Route path="/post/:id" component={Single}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
