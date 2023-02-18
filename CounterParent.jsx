import React, { Component } from 'react';
import Counterchild from './Counterchild';

class CounterParent extends Component {
    constructor(){
        super()
        this.state={
            count :0,
        }
    }
    handleClickInc = () => {
        this.setState({count: this.state.count +1})
    };
    handleClickDec = () => {
        this.setState({count: this.state.count - 1})
    };
    handleClickReset = () => {
        this.setState({count: 0})
    };
       

    render() {
        return (
            <div>
            <Counterchild count={this.state.count}
            handleClickInc={this.handleClickInc}
            handleClickDec={this.handleClickDec}
            handleClickReset={this.handleClickReset}
            />
            </div>
        );
    }
}

export default CounterParent;