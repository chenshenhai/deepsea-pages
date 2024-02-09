import React, {Component} from 'react'
import Tabs from 'antd/lib/tabs';
import Books from '@/modules/Books';
import Discuss from '@/modules/Discuss'
import About from '@/modules/About'
import config from '@/config';
import {redirect} from '@/utils/api'
import '@antd/lib/tabs/style/index.css';

const {TabPane} = Tabs;
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

          <Tabs defaultActiveKey="MyOpenBook" onChange={callback}>
            {/* <TabPane tab="我的开源书" key="MyOpenBook">
              <Books />
            </TabPane>
            <TabPane tab="讨论组" key="discuss">
              <Discuss />
            </TabPane> */}
            <TabPane tab="About me" key="about">
              <About />
            </TabPane>
          </Tabs>

        </div>
      </div>)
  }
}

export default Home
