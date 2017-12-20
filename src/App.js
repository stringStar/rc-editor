import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  'antd/dist/antd.css'
import Ueditor from './component/Ueditor';
import emotionConf from './component/Ueditor/emotionConf'

class App extends Component {
  state = {
    content: 'nihao',
    change: false,
    emotions: emotionConf,
  }
  changeContent = (dom) => {
    let str = dom.innerHTML;
    console.log(str);
    this.setState({content: str});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
            
            <Ueditor 
              content={this.state.content} 
              changeContent={this.changeContent} 
              change={this.state.change} 
              emotions={this.state.emotions}
            />
            <div onClick={this.canChange}>
              修改
            </div>
        </div>
      </div>
    );
  }
}

export default App;
