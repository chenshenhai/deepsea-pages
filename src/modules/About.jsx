import React, {Component} from 'react';
import List from 'antd/es/list';
import Button from 'antd/es/button'; 
import Divider from 'antd/es/divider'; 
import Tag from 'antd/es/tag';
import config from '@/config';

// import '@antd/es/list/style/index.css'; 
// import '@antd/es/button/style/index.css';
// import '@antd/es/tag/style/index.css';
// import '@antd/es/divider/style/index.css';

const content = (
  <div>
    <img style={{width:'320px'}} src={decodeURIComponent(config.aboutImg)} />
  </div>
);

const bookList = [];
config.books.forEach(item => {
  if( item.link && /^https\:\/\/github.com\/chenshenhai/.test(item.link )) {
    bookList.push(item.title)
  }
})
let bookStr = '';
if( bookList.length > 0 ) {
  bookStr = `目前编写沉淀有 ${bookList.join(',')} 。`;
}

const data = [
  // {
  //   title: '野生程序员一枚',
  //   description: '常玩Web前端开发、Node.js开发和PHP开发，偶尔涉猎Go和Java。',
  // },
  // {
  //   description: `业余时间乐于沉淀知识，写写开源书籍。${bookStr} 如有疑问或错误，欢迎指正！`,
  // },
  // {
  //   title: '欢迎留言交流',
  //   description: '平时工作太忙，一般晚上下班周末才有时间回复！',
  // },
  {
    title: '',
    description: '',
  },

];


class About extends React.Component {

  constructor() {
    super()
  }
  render() {
    return (
      <div style={{'minHeight':'400px'}}>
        <div>
          <Tag color="magenta">JavaScript</Tag>
          <Tag color="red">Node.js</Tag>
          <Tag color="volcano">PHP</Tag>
          <Tag color="orange">Java</Tag>
          <Tag color="gold">Golang</Tag>
          <Tag color="lime">Vue.js</Tag>
          <Tag color="green">React.js</Tag>
          <Tag color="cyan">Koa.js</Tag>
          <Tag color="blue">Egg.js</Tag>
        </div>
        {/* <div style={{marginTop: '20px'}}>
          <p>更多前端技术分享，可关注公众号</p>
          <img style={{'height': '200px'}} src={config.blogger.shareUrl} />
        </div> */}
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<span>{item.title}</span>}
                description={item.description}
              />
            </List.Item>
          )}
        />

        <div style={{textAlign: 'left'}}>
          <p style={{color: '#666666', fontSize: 14, marginBottom: '14px'}}>
            I am the creator of the open source JavaScript framework <Button  style={{padding: 0}}  type='link' href='https://github.com/idrawjs/idraw' target='_blank'>iDraw.js</Button>.

            You can click <Button style={{padding: 0}} type='link'  href='https://idrawjs.github.io/studio'  target='_blank'>@idraw/studio</Button> to experience the use of <Button  style={{padding: 0}} type='link' href='https://github.com/idrawjs/idraw' target='_blank'>iDraw.js</Button>.
          </p>
        </div>
        <Divider />
        <div style={{textAlign: 'center'}}>
          {/* <Popover content={content} placement="top">
            <Button type="danger">欢迎赞赏我</Button>
          </Popover> */}
          
         
          <p style={{color: '#666666', fontSize: 14, marginBottom: '14px'}}>If you think my project is helpful to you, just give me a cup of coffee!</p>
          <div>
          <a href="https://www.buymeacoffee.com/chenshenhai"  target='_blank'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=chenshenhai&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>
          </div>
        </div>

      </div>
    )
  }
}

export default About
