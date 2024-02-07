import React from 'react';


class File1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clicks: 0,
            rem: 100
        };
    }

    clickme(){
        this.setState({
            clicks: this.state.clicks + 1,
            rem: this.state.rem - 1
        })
    }

    render() {
        return (
            <div>

            <h1 onClick={()=> this.clickme()}>
                My name is: {this.props.name}
            </h1>
            <p>
            The Number of clicks: {this.state.clicks} 
            </p>
            <p>
            Clicks Remaining: {this.state.rem} 
            </p>
            </div>
        )
    }
}

export default File1;
