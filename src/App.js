import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductDetails from './ProductDetails';

function App() {
  return (
    <Router>
      <Route exact path="/ecommerce" component={ProductList} />
      <Route exact path={process.env.PUBLIC_URL + '/prod/:prodId'} component={ProductDetails} />
    </Router>
  );
}

export default App;
