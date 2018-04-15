import React, {Component} from 'react'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'

import '@/assets/index.less'

class App extends Component {
  render () {
    return (
      <div className="deepsea-page no-header">
        <Header />
        <Content>
          <Home />
        </Content>
        <Footer />
      </div>)
  }
}

export default App
