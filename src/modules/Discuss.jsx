import React, {Component} from 'react';
// import reqwest from 'reqwest';
import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';
import Button from 'antd/lib/button';
import Spin from 'antd/lib/spin';
import config from '@/config';
import {redirect} from '@/utils/api';

import '@antd/lib/list/style/index.css';
import '@antd/lib/avatar/style/index.css';
import '@antd/lib/button/style/index.css';
import '@antd/lib/spin/style/index.css';

const {discuss = {}, blogger = {}} = config || {};
const { githubRepos = '' } = discuss;
const {token = ''} = blogger;

const _token = token.replace(/\#/ig, '');

const dataUrl = `https://api.github.com/repos/${githubRepos}/issues`;
const PAGE_SIZE = 10;

function parseDataItem( data = {} ) {
  const {user = {}, body = ''} = data;
  return {
    title: data.title || '',
    url: data.html_url || 'javascript:void(0)',
    discussUrl: `${data.html_url}#new_comment_field`,
    avatarUrl: user.avatar_url,
    description: body.substr(0,28).replace(/[\'|\`\#\-]/ig, '') + '...',
    addDiscussUrl: data.html_url.replace(/[0-9]$/ig, 'new'),
  }
}

function parseDataList(result = []) {
  if( Array.isArray(result) !== true ) {
    return [];
  }
  let dataList = result.map(function(data){
    return parseDataItem(data);
  });
  return dataList;
}

class Discuss extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
      pageIndex: 1,
    }
  }

  componentDidMount() {
    // this.getData((res) => {
    //   let dataList = [];
    //   if( Array.isArray(res) ) {
    //     dataList = res;
    //   }
    //   this.setState({
    //     loading: false,
    //     data: dataList,
    //   });
    // });
  }

  // getData (callback) {
  //   let that = this;

  //   reqwest({
  //     url: dataUrl,
  //     data: {
  //       access_token: _token,
  //       sort: 'updated',
  //       page: this.state.pageIndex,
  //       per_page: PAGE_SIZE
  //     },
  //     type: 'json',
  //     method: 'get',
  //     contentType: 'application/json',
  //     success: (res) => {
  //       let dataList = parseDataList(res);
  //       let showLoadingMore = true;
  //       let pageIndex = that.state.pageIndex + 1;

  //       if( dataList.length < PAGE_SIZE ) {
  //         showLoadingMore = false;
  //       }
  //       that.setState({
  //         showLoadingMore: showLoadingMore,
  //         pageIndex: pageIndex,
  //       })

  //       if( dataList.length > 0 ) {
  //         callback(dataList);
  //       }
  //     },
  //   });
  // }
  onLoadMore () {
    this.setState({
      loadingMore: true,
    });

    // this.getData((result) => {

    //   const dataList = result;
    //   const data = this.state.data.concat(dataList);
    //   this.setState({
    //     data,
    //     loadingMore: false,
    //   }, () => {
    //     // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //     // In real scene, you can using public method of react-virtualized:
    //     // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //     window.dispatchEvent(new Event('resize'));
    //   });
    // });
  }
  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;

    const loadMore = showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore.bind(this)}>loading more</Button>}
      </div>
    ) : null;
    return (
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[
            <a target="_blank" href={item.discussUrl}><Button type="primary">我要讨论</Button></a>,
            <a target="_blank" href={item.addDiscussUrl}><Button >我有新话题</Button></a>
          ]}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatarUrl} />}
              title={<a target="_blank" href={item.url}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    );
  }
}


export default Discuss
