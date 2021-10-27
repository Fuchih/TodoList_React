import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import style from './app.module.css'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: 'Eating', done: true },
      { id: '002', name: 'Drinking', done: true },
      { id: '003', name: 'Shopping', done: false }
    ]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state

    return (
      <div className={style.container}>
        <Header addTodo={this.addTodo} />
        <List todos={todos} />
        <Footer />
      </div>
    )
  }
}
