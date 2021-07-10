import React, {useState} from 'react'
import './App.css'
import Home from './Home.js'
import Shop, {count} from './Shop.js'
import Cart from './Cart.js'
import data from './data.js'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useCountsContext from './context/useCountsContext.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navigation() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState([])
  const [itemCount, setItemCount] = useState(0)

    return (
      <Router>
        <div class="div___navigation">
          <h3>
            <Link to="/">
              Home
            </Link>
          </h3>
          <h3>
            <Link to="/shop">
              Shop
            </Link>
          </h3>
          <h3>
            <Link to="/cart">
              <ShoppingCartIcon />
              {count}
              </Link>
          </h3>
        </div>
           <useCountsContext.Provider value={{count, setCount, item, setItem, itemCount, setItemCount}}>
        <Switch>
         <Route exact path="/">
           <Home data={data}/>
         </Route>
         <Route path="/shop">
           <Shop data={data}/>
         </Route>
         <Route path="/cart">
           <Cart />
         </Route>
       </Switch>
         </useCountsContext.Provider>
      </Router>
    )
}

export default Navigation
