import React, { Component } from 'react'
import './index.module.css'

export default class Item extends Component {
  state = { mouse: false }

  mouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  handleDelete = (id) => {
    if (window.confirm('Are you sure?')) this.props.deleteTodo(id)
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state

    return (
      <li onMouseEnter={this.mouse(true)} onMouseLeave={this.mouse(false)} style={{ backgroundColor: mouse ? '#fff' : '#ccc' }}>
        <input onChange={this.handleCheck(id)} type="checkbox" defaultChecked={done} />
        <span>{name}</span>
        <button
          onClick={() => {
            this.handleDelete(id)
          }}
          style={{ display: mouse ? 'block' : 'none' }}
        >
          Delete
        </button>
      </li>
    )
  }
}
