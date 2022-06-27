import React, { Component } from 'react'
import Item from '../item/item'

export default class TodoList extends Component {
  render() {
    const {list,handleUpdate} = this.props
    
    if(list.length!==0){
      return (
        <ul className="list"> 
            {
               list.map((active,index)=>{
                return <Item key={index} active={active} handleUpdate={handleUpdate} list={list}></Item>
              })
            }
        </ul>
      )
    }else{
      return <h2 style={{'opacity':'0.6'}}>暂无内容</h2>
    }
    
  }
}
