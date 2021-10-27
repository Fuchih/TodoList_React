import React, { Component } from 'react'
import style from './index.module.css'

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todos.length

    return (
      <div>
        <div className={style.bottom} style={{ display: todos.length ? 'flex' : 'none' }}>
          <label>
            <input onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} type="checkbox" />
            Done: {doneCount} / Total: {total}
          </label>
          <button onClick={this.handleClearAllDone} className={style.clean}>
            Clean
          </button>
        </div>
        <div className={style.hint} style={{ display: todos.length ? 'none' : 'block' }}>
          Let's make a plan!
        </div>
      </div>
    )
  }
}
