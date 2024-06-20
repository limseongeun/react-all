import React from 'react'

const Box = (props) => {
  return (
    <div className={'box ' + props.activeClass}>
      <h1>{props.title}</h1>
      <div className='img-area'>
        <img className='item-img' src={props.item ? props.item.img : null} />
      </div>
      <h2>{props.status}</h2>
    </div>
  )
}

export default Box