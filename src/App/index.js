import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";

import Layout from "../components/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
