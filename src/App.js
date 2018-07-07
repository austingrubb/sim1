import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';




class App extends Component {
  constructor(){
    super();
    this.state = {
      ImageUrl: "",
      ProductName: "",
      Price: 0,
    }
  }

  componentDidMount(){
    axios.get('/api/shelfie').then(response =>{
      this.setState({
        response: response.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form/> 
      </div>
    );
  }
}

export default App;
