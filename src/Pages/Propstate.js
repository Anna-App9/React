import React from 'react';
import '../App.css';


export default class Propstate extends React.Component {

    state = {
        name: "Hima",
        class: "12 A",
        city: this.props.city
       

    }

    render() {

        return (
            <div>
                <h1>Welcome To Props & State!</h1>;
                <p> I am {this.state.name} studying in class {this.state.class} </p>
                <p>I live in {this.props.city} which was passed as an attribute to my component.</p>
            </div>

        )

    }
}
