import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import style from './index.module.css'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (e) => {
    if (e.code !== 'Enter' || e.target.value.trim() === '') return
    const todoObj = { id: nanoid(), name: e.target.value.trim(), done: false }
    this.props.addTodo(todoObj)
    e.target.value = ''
  }

  render() {
    return (
      <div className={style.top}>
        <h2>ToDo List</h2>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="Click Enter to add a task..." />
      </div>
    )
  }
}
