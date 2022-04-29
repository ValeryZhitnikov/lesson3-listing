import React from 'react';
import CardItem from '../CardItem/CardItem';
import './Listing.css';

function Listing(props) {
  const { items } = props;
  const itemsList = items
    .filter((item) => {
      if (item.title) {
        return item;
      }
    })
    .map((item) => {
      return (<CardItem
                key={item.listing_id}
                url={item.url}
                mainImage={item.MainImage}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                currency_code={item.currency_code}
              />
      )
    })

  return (
    <div className="item-list">
      {itemsList}
    </div>
  )
}

export default Listing;
