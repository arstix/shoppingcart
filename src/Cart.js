import React, {useContext} from 'react'
import useCountsContext from './context/useCountsContext.js'

function Cart() {
  const {item, setItem} = useContext(useCountsContext)
  const {count, setCount} = useContext(useCountsContext)

  const removeItem = (productId, counts) => {
    const newItem = item.filter(i => i.id !== productId)
    const exists = item.findIndex((i) => i.id === productId);
    item[exists].counts = 0
    setItem(newItem)
     setCount(count => count - counts);
  }

    return (
        <div>
          {item.map(({id, img, counts, finalPrice, title}) => (
            <>
            <img className="img___shop" key={id} src={img}></img>
            <p>{title}</p>
            <p>Quantity: {counts}</p>
            <p>Price: {finalPrice}$</p>
            <button onClick={() => removeItem(id, counts)}>Remove</button>
            <p></p>
            </>
          ))}
        </div>
    )
}

export default Cart
