import React from 'react';
import './App.css';
import axios from 'axios';
import MySidebar from './MySidebar';
import StackableMenu from './StackableMenu'


import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: [],
      sideBarVisible: true

    }
  }

  componentWillMount() {

    axios.get('http://localhost:3000/teachers').then(res => {
      console.log(res.data)
      this.setState({ text: res.data });
    })
  }

  getlist() {
    return this.state.text.map((element, key) =>
      <li key>{element.fullName}</li>)
  }


  render() {

    return (
      <div>
        <StackableMenu visible={this.state.sideBarVisible}></StackableMenu>
        {/* <MySidebar visible={this.state.sideBarVisible}></MySidebar> */}

      </div >
    );
  }
}

export default App;
