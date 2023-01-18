import React from 'react';
import Card from '../Components/Card';
import Jumbotron from '../Components/Jumbotron';

let count = 0;
class LandingClass extends React.Component {
    // props : untuk menerima data dari parent component
    constructor(props) {
        super(props);
    }
    // state : untuk memanmpung data sementara yang akan digunakan pada suatu component
    state = {
        count: 0,
        disabled: false
    }

    btnIncrement = () => {
        // count += 1;
        // console.log(count);
        // this.state.count +=1 ; ⚠️
        this.setState({ count: this.state.count + 1, disabled: false }, () => {
            //    Memeriksa data pada state count yang telah diupdate
            console.log(this.state.count);
        });
    }

    btnDecrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 }, () => {
                //    Memeriksa data pada state count yang telah diupdate
                console.log(this.state.count);
            });
        } else {
            this.setState({ disabled: true });
        }
    }

    render() {
        return <div>
            <div className='container'>
                <Jumbotron />
                <div className='my-3 d-flex justify-content-center'>
                    <button className='btn btn-warning' onClick={this.btnDecrement} 
                    disabled={this.state.disabled} type='button'>-</button>
                    <h1>{this.state.count}</h1>
                    <button className='btn btn-success' type='button' onClick={this.btnIncrement}>+</button>
                </div>
                <section id='content' className='d-flex flex-wrap justify-content-evenly'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </div>
        </div>
    }
}

export default LandingClass;