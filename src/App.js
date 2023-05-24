import { React } from "react";
import Home from "./app/pages/Home/Home.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./app/Shared/Navbar/Navbar.component";
import NavbarProvider from "./app/context/NavbarProvider";

function App() {
  return (
    <Router>
      <div className="o-bg">
        <NavbarProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home index={0} />
            </Route>
          </Switch>
        </NavbarProvider>
      </div>
    </Router>
  );
}

export default App;
