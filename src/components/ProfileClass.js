import React, { Component } from "react";

class ProfileClass extends Component {
    constructor(props) {
        super(props);
        // this.state = { count: 0, xyz: 1 };
        this.state = {
            userInfo: {
                name: "Dummy Name",
                id: "Dummy ID"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/abhilashbn12");
        const json = await data.json();
        this.setState({ userInfo: json })
    }
    render() {

        return (
            <div>
                <h1>This is class Component</h1>
                {/* <h2>{this.props.name}</h2>
                <h2>{this.props.id}</h2> */}
                {/* <h2>{count}</h2>
                <h2>{this.state.xyz}</h2>
                <button onClick={() => { this.setState({ count: count + 1 }) }}>+1</button> */}
                <h1>Name: {this.state.userInfo.name}</h1>
                <h1>ID: {this.state.userInfo.id}</h1>
            </div>
        )
    }
}

export default ProfileClass;