import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Inventory from "./pages/Inventory/index";
import Product from "./pages/Inventory/Product/index";
import ProductType from "./pages/Inventory/Product/ProductType";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container fluid="md">
          <CartProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Product/:id" component={Product} />
              <Route path="/ProductType/:id" component={ProductType} />
              <Route path="/Inventory" component={Inventory} />
            </Switch>
          </CartProvider>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
