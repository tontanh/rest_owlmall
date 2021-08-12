import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './Home'
import Rest from './pages/Rest'
import QRscanner from './scaner/QRscanner'
import Services from './pages/Services'
import Groupfood from './pages/Groupfood'
import QRtablescanner from './scaner/QRtablescanner'
import Foodlists from './pages/Foodlists'
import Favorite from './pages/Favorite'
import Paylist from './pages/Paylist'
import Foodview from './pages/Foodview'

function App() {
  return (
    <div className="App">
      <div className="App-header">
      
        <Router>
          <div>
            <Switch>

              <Route exact path="/">
                <Home/>
              </Route>

               <Route path="/qr_scanner">
                <QRscanner/>
              </Route>  

              <Route path="/services">
                <Services/>
              </Route>  

              <Route path="/qr_table_scanner">
                <QRtablescanner/>
              </Route>  

              <Route path="/groupfood">
                <Groupfood/>
              </Route>  

              <Route path="/foodlists/:id">
                <Foodlists/>
              </Route> 

              <Route path="/paylist">
                <Paylist/>
              </Route> 

              <Route path="/favorites">
                <Favorite/>
              </Route> 

              <Route path="/foodview/:fid">
                <Foodview/>
              </Route> 

              <Route path="/rest">
                <Rest/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
