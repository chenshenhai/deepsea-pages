import React, {Component} from 'react';
import List from 'antd/lib/list';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import config from '@/config';

import '@antd/lib/list/style/index.css';
import '@antd/lib/modal/style/index.css';
import '@antd/lib/button/style/index.css';


const data = [
  {
    title: 'Ant Design Title 1',
    description: 'hello world',
  },
  {
    title: 'Ant Design Title 2',
  },
];

function doAdmire() {
  Modal.success({
    title: '你的赞赏，是我开源的动力',
    content: (<div><img /></div>),
  });
}

class Discuss extends React.Component {

  constructor() {
    super()
  }
  render() {
    return (
      <div>
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
          <Button onClick={doAdmire} type="primary">欢迎赞赏我</Button>
        </div>

      </div>
    )
  }
}


export default Discuss
