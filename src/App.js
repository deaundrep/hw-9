import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-state/redux-store';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  const href = window.location.href;
  console.log('href: ', href);

  return (
    <Router>
      <Provider store={reduxStore}>
          <div className="App">
            <div style={{marginTop: '100px'}}>
              <Switch>
                <Route path="/cart">
                  <ShoppingCart />
                </Route>
                <Route path="/">
                  <ProductList />
                  </Route>
              </Switch>
            </div>
          </div>
        </Provider>
    </Router>     
  );
}