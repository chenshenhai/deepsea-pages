import React, {Component} from 'react';
import List from 'antd/lib/list';
import Button from 'antd/lib/button';
import Popover from 'antd/lib/popover';
import Tag from 'antd/lib/tag';
import config from '@/config';

import '@antd/lib/list/style/index.css';
import '@antd/lib/popover/style/index.css';
import '@antd/lib/button/style/index.css';
import '@antd/lib/tag/style/index.css';

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
  {
    title: '野生程序员一枚',
    description: '常玩Web前端开发、Node.js开发和PHP开发，偶尔涉猎Go和Java。',
  },
  {
    description: `业余时间乐于沉淀知识，写写开源书籍。${bookStr} 如有疑问或错误，欢迎指正！`,
  },
  {
    title: '欢迎留言交流',
    description: '平时工作太忙，一般晚上下班周末才有时间回复！',
  },
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
      <div style={{'min-height':'720px'}}>
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

        <div style={{ textAlign: 'center'}}>
          <Popover content={content} placement="top">
            <Button  type="danger">欢迎赞赏我</Button>
          </Popover>
          <p style={{color:'#f5222d'}}>觉得文章对你有帮助，就打赏杯咖啡吧!</p>
        </div>

      </div>
    )
  }
}


export default About
