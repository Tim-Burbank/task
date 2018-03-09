import React, { Component } from 'react';
import { Row ,Breadcrumb , Carousel ,message , Spin ,Button ,Pagination,Modal,Col,Select,Input ,DatePicker,Upload,Icon ,Tooltip   } from  'antd'
import 'antd/dist/antd.css'
import logo from './logo.svg';
import './App.css';
import pic1 from "./source/1.jpg"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.Breadcrumb = [
            'Home',
            'Accommodations',
            'London',
            'My Property',
        ]
        this.banner = [
            './source/1.jpg',
            './source/2.jpg',
            './source/3.jpg',
            './source/4.jpg',
        ]
    }
  render() {
    return (
      <div className="App">
          <Row className='breadcrumb'>
              <Breadcrumb  separator=">"  >
              {this.Breadcrumb.map(v=><Breadcrumb.Item className='item'><a href="">
                  {v}
                </a>
                </Breadcrumb.Item>)}
              </Breadcrumb>
          </Row>
          <Row>
              <Carousel effect="fade" className='banner' autoplay >
                  {this.banner.map(v=><div><img src={require(`${v}`)} alt="pic1" className='banner_item' /></div>)}
              </Carousel>
          </Row>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
