import React, { Component } from 'react';
import { Row ,Breadcrumb , Carousel ,Menu ,Button ,Col,Select,Icon   } from  'antd'
import 'antd/dist/antd.css'
import './media-queries.css'
import { roomConfig } from './room_config'
const {Option} = Select


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu:'deluxe',
            isMobile:false
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
        this.someDesc = "Find and compare student accommodation in London with Student.com. We list over 30,000 rooms, studios and flats in hundreds of student apartments located in London's varied neighbourhood 'villages'. Discuss your London student property options with our booking team - it's free!" +
            "Find and compare student accommodation in London with Student.com. We list over 30,000 rooms, studios and flats in hundreds of student apartments located in London's varied neighbourhood 'villages'. Discuss your London student property options with our booking team - it's free!" +
            "Find and compare student accommodation in London with Student.com. We list over 30,000 rooms, studios and flats in hundreds of student apartments located in London's varied neighbourhood 'villages'. Discuss your London student property options with our booking team - it's free!"
        this.fac = ['Television','CCTV','xxx','xxxxx xxx','xxxxxx xxxxx','xxxx xxx','xxxxxx xxxx','xxxxxx','xxxx xxx xxxx','xxxx xxx','xxxxxx xxxx','xxxxxx xxx xxxxx','xxxxx xxxx']

    }

    componentWillMount(){
        if(document.body.clientWidth<450){
            this.setState({isMobile:true})
        }
    }

  render() {
      const { menu , isMobile } = this.state

      const renderTitle = (title,type) => {
          for( let t in roomConfig ){
              if(t === title){
                  if(type==='friends'){
                      let arr = [],remain,_friends = roomConfig[t]['friends']
                      if(_friends.length === 0) return

                      if(_friends.length>2){
                            arr.push(_friends[0])
                            arr.push(_friends[1])
                            remain = _friends.length-2
                        }else{
                            arr = _friends
                        }

                        return <p><Icon type="fork" /><span style={{marginLeft:12}} >{arr.join(' , ')} {remain?` and ${remain} other friends `:''}{"have stayed in the room"}</span></p>
                  }else{
                      return roomConfig[t][type]
                  }
              }
          }
      }

      const renderFac = (fac) => {
         return fac.map((v,i)=>{
              return <Col span={isMobile?12:6} style={{marginBottom:8}} key={i} ><Icon type="check-square-o" style={{marginRight:8}} /> {v}</Col>
          })
      }



    return (
      <div className="App">
          <Row className='breadcrumb'>
              <Breadcrumb  separator=">"  >
              {this.Breadcrumb.map(v=><Breadcrumb.Item className='item' key={v}><a href="">
                  {v}
                </a>
                </Breadcrumb.Item>)}
              </Breadcrumb>
          </Row>
          <Row>
              <Row className='banner_title'>
                  <h1>
                    My Property , London
                  </h1>
                  <p>
                    2 Riding House Street , W1W 7FA
                  </p>
              </Row>
              <Row style={{overflow:'hidden'}}>
                  <Carousel effect="fade" className='banner' autoplay >
                      {this.banner.map(v=><div key={v}><img src={require(`${v}`)} alt="pic1" className='banner_item' /></div>)}
                  </Carousel>
              </Row>
          </Row>
          <Row style={{padding:'0 16px'}} >
              <Row className='area_two'>
                  {isMobile?<Row>
                      <Row className='property_info' style={{marginBottom:16}}>
                          <p><Icon type="star" /> Xxxx Xxxxxxx xx xx xx xxx xxxx</p>
                          <p><Icon type="shop" /> 588 Total Beds</p>
                      </Row>
                      <p className='desc' style={{marginBottom:16}} >
                          {this.someDesc}
                      </p>
                      <Button className='button' style={{width:'100%'}}>Contact and expert</Button>
                  </Row>:
                      <Row type="flex">
                          <p className='desc' >
                              {this.someDesc}
                          </p>
                          <Row className='property_info'>
                              <p><Icon type="star" /> Xxxx Xxxxxxx xx xx xx xxx xxxx</p>
                              <p><Icon type="shop" /> 588 Total Beds</p>
                              <Button className='button'  >Contact and expert</Button>
                          </Row>
                      </Row>}
              </Row>
              <Row className='main' style={isMobile?{}:{display: 'flex'}}>
                  {isMobile?<Row className='left'>
                      <p>
                          Room Types
                      </p>
                      <Select
                          style={{width:'100%'}}
                          onChange={e=>this.setState({menu:e})}
                          className="select"
                          value={menu}
                      >
                          {Object.keys(roomConfig).map((v,i)=><Option key={v} >
                              {renderTitle(v,'name')}
                          </Option>)}
                      </Select>
                  </Row>:
                      <Row className='left'>
                          <p>
                              Room Types
                          </p>
                          <Menu
                              style={{ width: 256 ,border:'1px solid #d7d7d7'}}
                              onClick={e=>this.setState({menu:e.key})}
                              defaultSelectedKeys={['deluxe']}
                              className='menu'
                          >
                              {Object.keys(roomConfig).map((v,i)=><Menu.Item key={v} >
                                  {renderTitle(v,'name')}
                              </Menu.Item>)}
                          </Menu>
                      </Row>}
                  <Row className='right'>
                      <Row className="title_container">
                          <Row className='icon' >
                              <Icon type="dingding-o"  />
                          </Row>
                          <Row>
                              <p className="title" >{renderTitle(menu,'name')}</p>
                              <p className="sub_title" >{renderTitle(menu,'name')+' subtitle ...'}</p>
                          </Row>
                      </Row>
                      <Row>
                          <p>
                              {renderTitle(menu,'desc')}
                          </p>
                      </Row>
                      <Row style={{margin:'1em 0'}}>
                          {renderTitle(menu,'friends')}
                      </Row>
                      <Row>
                          <p className="title" style={{marginBottom:24}}>Facilities</p>
                          <Row>
                            {renderFac(this.fac)}
                          </Row>
                      </Row>
                  </Row>
              </Row>
          </Row>
      </div>
    );
  }
}

export default App;
