import React, { Component } from 'react'
import Mycars from './Components/Mycars'

export default class App extends Component {
  state ={
    titre:"Cars catalogue"
  }
  changeTitle = (e) => {
    this.setState ({
      titre: "mon nouveau titre"
    })
  }
  changeViaParam = (titre) => {
    this.setState ({
      titre: "titre via param"
    })
  }
  render() {
    return (
      <div>
      <Mycars title = {this.state.titre}/>
      <button onclick = {this.changeTitle}> Title change </button>
      <button onclick = {() => this.changeViaParam('titre param')}> Title Param </button>

      </div>
    )
  }
}
