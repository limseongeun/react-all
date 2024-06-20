import React, { Component } from 'react'

export default class Boxclass extends Component {
  render() {
    return (
      <div className={'box ' + this.props.activeClass}>
      <h1>{this.props.title}</h1>
      <div className='img-area'>
        <img className='item-img' src={this.props.item ? this.props.item.img : null} />
      </div>
      <h2>{this.props.status}</h2>
    </div>
    )
  }
}
