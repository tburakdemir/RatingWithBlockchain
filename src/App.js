import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props)
  
    this.state = {
      text: [],  }
  }

  componentWillMount(){

    axios.get('http://localhost:3000/teachers').then(res => {
      console.log(res.data)
      this.setState({text: res.data});
    })
  }

  getlist(){
    return this.state.text.map((element, key) =>  
      <li key>{element.fullName}</li>)
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           {this.getlist()} 
      </header>
    </div>
  );}
}

export default App;
