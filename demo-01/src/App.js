import React, { Component } from 'react'
import './asserts/index.css'
import Footer from './components/footer'
import Header from './components/header'
import TodoList from './components/todolist/todolist'


import { getList,saveData,clearData } from './utils/save'

export default class App extends Component {

  state = {'list':getList()}

  handleUpdate = (list)=>{
    
    this.setState({list})
  }

  render() {

    var list = this.state.list
    list.reverse()
   
    return (
      <div className="todolist">
        <Header list={list} handleUpdate={this.handleUpdate}></Header>
        <TodoList list={list} handleUpdate={this.handleUpdate}></TodoList>
        <Footer list={list} handleUpdate={this.handleUpdate}></Footer>
      </div>
    )
  }
}
