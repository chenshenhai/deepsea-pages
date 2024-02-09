import React, {Component} from 'react'
import Tabs from 'antd/es/tabs';
// import Books from '@/modules/Books';
// import Discuss from '@/modules/Discuss'
import About from '@/modules/About'
import config from '@/config';
// import {redirect} from '@/utils/api'
// import '@antd/es/tabs/style/index.css';
 
const {books = [], blogger = {}} = config;
const {siteGithub, siteBlog, description} = blogger;

function callback(key) {
  console.log(key);
}

class Home extends Component {
  render () {
    return (
      <div className="module-home">
        <div className="home-avatar">
          <a  href={siteGithub}>
            <img className="avatar-img" src={config.avatar} />
          </a>
          <p className="user-desc">{description}</p>
        </div>
        <div className="home-info">

          <Tabs defaultActiveKey="about"  items={[
            {
              key: 'about',
              label: 'About me',
              children: (<About />),
            },
          ]}>
            {/* <TabPane tab="我的开源书" key="MyOpenBook">
              <Books />
            </TabPane>
            <TabPane tab="讨论组" key="discuss">
              <Discuss />
            </TabPane> */}
            
          </Tabs>

        </div>
      </div>)
  }
}

export default Home
