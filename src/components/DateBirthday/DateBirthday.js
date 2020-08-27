import React from 'react';


/**
 * Calculator and ticker date birthday
 */
export default class DateBirthday extends React.Component {
    /**
     * 
     * @param { dateBirthday } props 
     */
    constructor(props) {
        super(props);
        this.state = { 
            dateBirthday: new Date(props.dateBirthday) 
        };
    }

    /**
     * function for calculate age
     */
    calculate() {
        let now = Date.now();
        let diff = now - this.state.dateBirthday;
        let diffDate = new Date(diff);
        let age = diffDate.getUTCFullYear() - 1970;

        this.setState({age: age});
    }

    componentDidMount() {
        this.interval = setInterval(() => this.calculate(), 1000);
    }

    componentWillMount() {
        this.calculate();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <em>{this.state.age ?? "..."}</em>
        );
    }
}