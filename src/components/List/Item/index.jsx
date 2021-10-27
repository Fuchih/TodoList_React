import React, { Component } from 'react'
import './index.module.css'

export default class Item extends Component {
  state = { mouse: false }

  mouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  render() {
    const { name, done } = this.props
    const { mouse } = this.state

    return (
      <li onMouseEnter={this.mouse(true)} onMouseLeave={this.mouse(false)} style={{ backgroundColor: mouse ? '#fff' : '#ccc' }}>
        <input type="checkbox" defaultChecked={done} />
        <span>{name}</span>
        <button style={{ display: mouse ? 'block' : 'none' }}>Delete</button>
      </li>
    )
  }
}
