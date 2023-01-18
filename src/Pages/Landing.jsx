import React, { useState } from 'react';
import Card from '../Components/Card';
import Jumbotron from '../Components/Jumbotron';

function Landing() {

    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [album, setAlbum] = useState([
        "https://images.unsplash.com/photo-1673235288409-86e78bf01e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://plus.unsplash.com/premium_photo-1668875380785-249b9c5ec161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
        "https://images.unsplash.com/photo-1672588337953-c570e5395c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1673235288409-86e78bf01e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://plus.unsplash.com/premium_photo-1668875380785-249b9c5ec161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
        "https://images.unsplash.com/photo-1672588337953-c570e5395c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1673235288409-86e78bf01e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://plus.unsplash.com/premium_photo-1668875380785-249b9c5ec161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
        "https://images.unsplash.com/photo-1672588337953-c570e5395c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ]);

    const btnIncrement = () => {
        setCount(count + 1);
        setDisabled(false);
        // console.log(count);
    }

    const btnDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setDisabled(true);
        }
        // console.log(count);
    }

    const printAlbum = () => {
        let newArr =[];
        for (let index = 0; index < album.length; index++) {
            newArr.push(<Card linkImage={album[index]}/>)
        };

        return newArr;
    }

    return <div>
        <div className='container'>
            <Jumbotron />
            <div className='my-3 d-flex justify-content-center'>
                <button className='btn btn-warning' onClick={btnDecrement}
                    disabled={disabled} type='button'>-</button>
                <h1>{count}</h1>
                <button className='btn btn-success' onClick={btnIncrement}
                    type='button'>+</button>
            </div>
            <section id='content' className='d-flex flex-wrap justify-content-evenly'>
                {printAlbum()}
            </section>
        </div>
    </div>
}

export default Landing;