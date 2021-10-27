import React, { Component } from 'react'
import style from './index.module.css'
import Item from './Item'

export default class List extends Component {
  render() {
    const { todos } = this.props

    return (
      <div className={style.list}>
        <ul>
          {todos.map((todo) => {
            return <Item key={todo.id} {...todo} />
          })}
        </ul>
      </div>
    )
  }
}
