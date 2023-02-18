import React, {Component}from 'react';

class Counterchild extends Component {
    render() {
        return (
            <div>
                <h1> Counter Class Component: {this.props.count}</h1>
                <button onClick={this.props.handleClickInc}>Increment</button>
                <button onClick={this.props.handleClickDec} disabled={this.props.count<=10 }>Decrement</button>
                <button onClick={this.props.handleClickReset}>Reset</button>
                
            </div>
        );
    }
}

export default Counterchild;