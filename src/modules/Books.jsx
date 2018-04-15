import React, {Component} from 'react'
import Card from 'antd/lib/card';
import config from '@/config';
import {redirect} from '@/utils/api'
import '@antd/lib/card/style/index.css';

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
                key={index}
                onClick={()=>{ redirect(item.link) }}
                hoverable
                style={{ width: 280, display:'inline-block', margin:10 }}
                cover={<img alt={item.description}  src={item.picture} style={{width:180, margin:'0 auto'}} />}
              >
                <Meta
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
