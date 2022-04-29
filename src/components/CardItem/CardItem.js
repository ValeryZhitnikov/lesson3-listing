import React from 'react';
import PropTypes from 'prop-types';
import './CardItem.css';

function CardItem(props) {
  const { url, mainImage, title, price, quantity, currency_code } = props;
  let quantityClass,
      priceInfo,
      slicedTitle;

  slicedTitle = title.slice(0,50);
  if (slicedTitle.length < title.length) {
    slicedTitle += '...';
  }

  if ( quantity <= 10 ) {
    quantityClass = 'level-low';
  } else if (quantity > 10 && quantity <= 20) {
    quantityClass = 'level-medium';
  } else {
    quantityClass = 'level-high';
  }

  if ( currency_code == 'USD' ) {
    priceInfo = `$${price}`;
  } else if ( currency_code == 'EUR' ) {
    priceInfo = `€${price}`;
  } else {
    priceInfo = `${price} ${currency_code}`;
  }

  return (
    <div className="item">
      <div className="item-image">
      <a href={url}>
          <img src={mainImage ? mainImage.url_570xN : ''}/>
      </a>
      </div>
      <div className="item-details">
      <p className="item-title">{slicedTitle}</p>
      <p className="item-price">{priceInfo}</p>
      <p className={`${quantityClass} item-quantity`}>{quantity} left</p>
      </div>
    </div>
  )
}

CardItem.propTypes = {
  url: PropTypes.string.isRequired,
  mainImage: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  currency_code: PropTypes.string.isRequired
}

export default CardItem;