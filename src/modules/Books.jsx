import React, {Component} from 'react'
import Card from 'antd/lib/card'
import Avatar from 'antd/lib/avatar'
import config from '@/config'
import {redirect} from '@/utils/api'
import '@antd/lib/card/style/index.css'

const { Meta } = Card;
const {books = [], blogger = {}} = config;
const {siteGithub, siteBlog, description} = blogger;

class Books extends Component {
  render () {
    return (
      <div className="home-books">
        {
          books.map((item, index) => {
            return (
              <Card
                hoverable={true}
                key={index}
                onClick={() => { redirect(item.link) }}
                style={{marginTop: 10}} >
                <Meta
                  style={{textAlign: 'left'}}
                  avatar={<Avatar size="large" src={item.picture} />}
                  title={item.title}
                  description={item.description}
                />
              </Card>
            )
          })
        }

      </div>)
  }
}

export default Books
