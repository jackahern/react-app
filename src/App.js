import React, { Component } from 'react';
import CardList from './CardList';
import { girlfriends } from './girlfriends';
import Searchbox from './Searchbox';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      girlfriends: girlfriends,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredGirlfirends = this.state.girlfriends.filter(girlfriend => {
      return girlfriend.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(
      <div className="tc">
        <h1 className="title f1">Luke's lunchtime meetup aliases</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList girlfriends = {filteredGirlfirends}/>
      </div>
    );
  }
}

export default App;