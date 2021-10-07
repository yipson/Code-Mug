import Index from "pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/styles.css";

const App = () => {
  return (
    <div className="App">
      <Router path="/">
        <Index />
      </Router>
    </div>
  );
};

export default App;
