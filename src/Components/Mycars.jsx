import React, { Component } from 'react'
import Cars from './Cars'
export default class Mycars extends Component {
    noCopy = () => {
        alert("Merci de ne pas copier le texte!")
    }
    addStyle = (e) => {
        console.log(e.target);
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');
        }
        else {
            e.target.classList.add('styled');
        }
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                {/* <h1>Catalogue de voitures</h1> */}
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
                <p onCopy={this.noCopy}>Lorem ipsum explicit the document.</p>
                <Cars color='Red'>Lamborghini</Cars>
                <Cars>Alfa Romeo</Cars>
                <Cars color='Blue'></Cars>
            </div>
        )
    }
}
