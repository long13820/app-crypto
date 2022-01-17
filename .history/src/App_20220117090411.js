import react from "react";
import {Switch, Route, Link} from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import '../src/App.css'
import {Navbar, Footer} from "./components";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
          <Navbar/>
      </div>
      <div className="main">
          <Layout>
              <div className="routes">
                 <Switch>
                   <Route exact path="/">
                        <Homepage/>
                   </Route>
                 </Switch>
              </div>
          </Layout>
      </div>
      <div className = "footer"></div>
    </div>
  );
}

export default App;
