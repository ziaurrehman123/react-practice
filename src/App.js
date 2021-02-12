import React, { Component } from 'react'
import Student from './Student'
class App extends Component{
    constructor(props){
        super(props);
        console.log("App- Constructor");
        console.log(props);
        this.state={
            roll:"102"
        }
    };
    static getDerivedStateFromProps(props,state){
        console.log("App- Get Derived State From Props ");
        console.log(props,state);
        return null;
    }
    componentDidMount(){
        console.log("App- componentDidMount - mounted");
        //get data from server and set the data to state
    }
    render(){
        console.log("App-Render");
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <Student  name="Hello Waqas"/>
            </div>

        );
    }
}
export default App;
