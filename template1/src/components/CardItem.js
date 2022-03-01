import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <div>
      <li className='cardItem'>
        <Link className='cardItem-link' to={props.path}>
            <figure className='cardItem-picWrap' data-category={props.label}>
                <img
                className='cardItem-img'
                alt='Travel Img'
                src={props.src}
                />
            </figure>
            <div className='cardItem-info'>
                <h5 className='cardItem-text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;