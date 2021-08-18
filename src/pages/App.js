import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./Home";
import Rest from "./pages/Rest";
import QRscanner from "./pages/scaner/QRscanner";
import Services from "./pages/Services";
import Groupfood from "./pages/foodgroud/Groupfood";
import QRtablescanner from "./pages/scaner/QRtablescanner";
import Foodlists from "./pages/food/Foodlists";
import Favorite from "./pages/favorite/Favorite";
import Paylist from "./pages/paylist/Paylist";
import Foodview from "./pages/food/Foodview";
import History from "./pages/history/History";
import "../App.css";
import Notfound from "./Notfound";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/qr_scanner">
                <QRscanner />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/qr_table_scanner">
                <QRtablescanner />
              </Route>
              <Route path="/groupfood">
                <Groupfood />
              </Route>
              <Route path="/foodlists/:id">
                <Foodlists />
              </Route>
              <Route path="/paylist">
                <Paylist />
              </Route>
              <Route path="/favorites">
                <Favorite />
              </Route>
              <Route path="/foodview/:fid">
                <Foodview />
              </Route>
              <Route path="/history">
                <History />
              </Route>
              <Route path="/rest">
                <Rest />
              </Route>
              <Route path="/*">
                <Notfound />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
