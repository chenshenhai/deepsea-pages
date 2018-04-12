import React, {Component} from 'react'
import config from '@/config'

class Home extends Component {
  render () {
    return (
      <div className="module-home">
        <div className="home-avatar">
          <img className="avatar-img" src={config.avatar} />
        </div>
        <div className="home-info">
          <h2>hello world!</h2>
        </div>
      </div>)
  }
}

export default Home
