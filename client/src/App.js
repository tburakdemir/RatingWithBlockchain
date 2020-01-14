import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import socketIOClient from "socket.io-client";
import AppBar from './components/AppBar'



import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      endpoint: "http://127.0.0.1:5000",
      text: [],
      feedbacks: [],
      sideBarVisible: true,
      socket: "",
      user: null
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { endpoint } = this.state;

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let code = params.get('code');


    if (code) {
      code = new Buffer(code, 'base64').toString('ascii');
      var decrypted = CryptoJS.AES.decrypt(code, "Secret Passphrase");

      let userObj = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
      console.log(userObj);
      this.setState({ user: userObj })
      localStorage.setItem('user', JSON.stringify(userObj))

    }
    else {
      let user = localStorage.getItem('user')
      if (user)
        this.setState({ user: JSON.parse(user) })
    }



    axios.get('/api/teachers').then(res => {
      console.log(res.data)
      this.setState({ text: res.data });
    })
    console.log("href");

    console.log(window.location.href);

    const socket = socketIOClient(window.location.href)

    socket.on("connect", () => {
      console.log("connected to server");

    })

    socket.on("data", (data) => {
      console.log("get data from server");
      console.log(data);

    })

    socket.on("disconnect", () => {
      console.log("disconnected to server");

    })
  }





  getlist() {
    return this.state.text.map((element, key) =>
      <li key>{element.fullName}</li>)
  }



  render() {
    return (
      <div className="App" >
        <AppBar user={this.state.user}></AppBar>

        <Router>
          <div>
            <Switch>

              <Route path="/">
                {this.state.user ? <Home feedbacks={this.state.feedbacks} user={this.state.user} /> : <Login></Login>}
              </Route>

              <Route path="/profile">
                {this.state.user ? <Profile user={this.state.user} /> : <Login></Login>}
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/students/Audie Murphy">
                <Login></Login>
              </Route>

            </Switch>
          </div>
        </Router>





      </div >
    );
  }
}

export default App;
