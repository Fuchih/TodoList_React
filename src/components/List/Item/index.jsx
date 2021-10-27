import React, { Component } from 'react'
import './index.module.css'

export default class Item extends Component {
  render() {
    const { name, done } = this.props

    return (
      <li>
        <input type="checkbox" defaultChecked={done} />
        <span>{name}</span>
        <button>Delete</button>
      </li>
    )
  }
}
