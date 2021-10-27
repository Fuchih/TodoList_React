import React, { Component } from 'react'
import style from './index.module.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className={style.bottom}>
          <span>
            <input type="checkbox" /> Done: 0 / Total: 0
          </span>
          <button className={style.clean}>Clean</button>
        </div>
        <div className={style.hint}>Let's make a plan!</div>
      </div>
    )
  }
}
