import { BrowserRouter, Route,  Switch , Redirect } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart } />
          <Route path="/not_found" component={NotFound} />
          <Redirect to="/not_found" /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
