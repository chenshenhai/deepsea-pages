import React, {Component} from 'react'

class Content extends Component {
  render () {
    let {props} = this

    return (
      <div className="page-content">
        {props.children}
      </div>)
  }
}

export default Content
