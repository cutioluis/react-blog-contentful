import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "../views/Blog";
import Home from "../views/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/blog/:id" component={Blog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
