import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

 function ProductScreen(props){
     console.log(props.match.params.id);
     const pd = data.products.find(x => x._id === props.match.params.id)
     return (<div className="details">
            <div>
            <Link to="/">Back to Homepage</Link>
            </div>
                <h1>{pd.name}</h1>
            </div>
     )
 }

export default ProductScreen;