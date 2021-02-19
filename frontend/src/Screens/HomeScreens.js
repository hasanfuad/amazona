import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';


function HomeScreen(props){
    return (<ul className="products">
    {
      data.products.map( pd =>
        <li>
      <div className="product">
          <Link to={"/product/"+ pd._id}>
        <img src={pd.images} alt="" className="product-image"/></Link>
        <div className="product-name">
            <Link to={'/product/'+pd._id}>{pd.name}</Link>
          <a href="product.html">{pd.image}</a>
        </div>
        <div className="product-brand">{pd.brand}</div>
        <div className="product-price">${pd.price}</div>
        <div className="product-rating">{pd.rating}Stars ({pd.reviews}reviews)</div>
      </div>
    </li>
      )
    } 
  </ul>)
}

export default HomeScreen;