import React from 'react'

export default function Basket({basket,cost}) {
  return (
    <div>
    <div className='mainBasket'>
    <div className='showBasket'>
    <h2>SEPET</h2>
    {basket.length === 0 && <p>Sepette Ürün Yok</p> || null}
    {
     basket.map(item => (
       <div className='basketList'>
       <img width="100" src={item.img} />
       <p>{item.name} x {item.amount}</p>
       <p> {item.price * item.amount} TL</p>

       </div>
       ))
     }
     {cost && <p>TOPLAM : {cost} TL</p> || null}
     </div>
     

     </div>
     </div>
     )
   }
