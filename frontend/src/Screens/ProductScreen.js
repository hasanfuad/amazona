import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

 function ProductScreen(props){
     console.log(props.match.params.id);
     const pd = data.products.find(x => x._id === props.match.params.id)
     return (<div>
            <div className="back-to-result">
            <Link to="/">Back to Homepage</Link>
            </div >
            <div className="details">
                <div className="details-image">
                    <img src={pd.images} alt="product-img"/>
                </div>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{pd.name}</h4>
                    </li>
                    <li><b>Price: ${pd.price}</b></li>
                    <li>Ratings: {pd.rating} Stars</li>
                    <li>Reviews: {pd.reviews}</li>
                    <li>Description: 
                        <div>{pd.description}</div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li> 
                        <b>Price: ${pd.price}</b>
                    </li>
                    <li><b> Status: </b>
                        {pd.status} 
                    </li>
                    <li>
                       <b> Qty:</b>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </li>
                    <li>
                        <button className="button">Add to Cart</button>
                    </li>
                </ul>
            </div>
            </div>
     )
 }

export default ProductScreen;