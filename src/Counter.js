import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.value,
        }
    }

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps;
        const { counterValue } = this.state;
        if (value !== counterValue) {
            this.setState({counterValue: value})
        }
    }

    isValid = (value) => {
        const { max } = this.props;
        return value <= max && value >= 0;
    };

    decrementCounter = () => {
        const { counterValue } = this.state;
        const newValue = counterValue - 1;
        this.setState({ counterValue: newValue });
        if (this.isValid(newValue)) {
            this.changeTotalReturned(newValue);
        }
    };

    incrementCounter = () => {
        const { counterValue } = this.state;
        const newValue = counterValue + 1;
        this.setState({ counterValue: newValue });
        this.changeTotalReturned(newValue);
    };

    handleInputChange = (e) => {
        this.setState({ counterValue: e.target.value })
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    handleBlur = (e) => {
        let newValue = parseInt(e.target.value);
        if (Number.isNaN(newValue)) {
            newValue = 0;
        }
        if (this.isValid(newValue)) {
            this.changeTotalReturned(newValue);
        }
    };

    handleFocus = (e) => e.target.select();

    changeTotalReturned = (value) => {
        const { changeTotalReturned, id } = this.props;
        changeTotalReturned(id, value);
    };

    render() {
        const { counterValue } = this.state;
        const { max } = this.props;
        const isValid = this.isValid(counterValue);

        return (
            <div className={`counter-container ${!isValid ? 'invalid' : ''}`}>
                <button
                    disabled={counterValue <= 0}
                    onClick={this.decrementCounter}>-</button>
                <input
                    value={this.state.counterValue}
                    type="text"
                    onFocus={this.handleFocus}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    disabled={counterValue >= max}
                    onClick={this.incrementCounter}>+</button>
            </div>
        )
    }
}

export default Counter;