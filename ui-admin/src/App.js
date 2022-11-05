import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./index.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewInventory from "./pages/Inventory/newInventory/NewInventory";
import InventoryList from "./pages/Inventory/InventoryList/InventoryList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newInventory">
            <NewInventory />
          </Route>
          <Route path="/inventoryList">
            <InventoryList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
