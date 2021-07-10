import React, {useState, useContext} from 'react'
import data from './data.js'
import useCountsContext from './context/useCountsContext.js'
var uniqid = require('uniqid');

function Shop({ data }) {
  const {count, setCount} = useContext(useCountsContext)
  const {item, setItem} = useContext(useCountsContext)
  const [totalPrice, setTotalPrice] = useState(0)

  const addCart = (productsId) => {
      setCount(count + 1)
      // grab the product object from data array
      const product = data.find((d) => d.id === productsId);
      // if product is not found
      if (product == null) {
          throw new Error("Invalid ProductId");
      }
      // check if product already exists in item list
      // grab the index of the product in the item list
      const exists = item.findIndex((i) => i.id === product.id);
      // if index is -1, the product doesn't exists
      if (exists === -1) {
        // add to item array
        product.counts += 1
        product.finalPrice = product.price
        setItem(item.concat(product));
      } else {
        // product already exists
        // increase the count
        const cart = [...item]; // create a Shallow copy of cart
        cart[exists].counts += 1 // increment the count
        cart[exists].finalPrice = cart[exists].price * cart[exists].counts
        setItem(cart); // update the cart state
      }

  }

    return (
        <div>
          <h1>Shop</h1>
          <div className="div___shop">
          {data.map(({id, img, button}) => (
            <>
              <img className="img___shop" key={id} src={img}></img>
              <div key={id}>
                <button onClick={() => addCart(id)}>{button}</button>
              </div>
            </>
          ))}
          </div>
        </div>
    )
}

export default Shop
