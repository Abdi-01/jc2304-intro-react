import React from 'react';

function Card(props) {
    return <div className="card my-2" style={
        {
            width: "23rem"
        }
    }>
        <img src={props.linkImage} className="card-img-top"
            alt="Clothes" />
        <div className="card-body">
            <h5 className="card-title">Card title {1}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>;
}

export default Card;