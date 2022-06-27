import React, { Component } from 'react'
import { updateObj,removeObj, customPrompt,question,isExist} from '../../utils/save'



export default class item extends Component {

  handleEdit = (obj)=>{

    const value = obj.value
    

    let list = this.props.list
    
    let result = customPrompt(value)
    if(!result){
      alert('修改失败，内容不能空！')
      return;
    }
    obj.value=result
    
    // if(value===result){
    //   alert('修改失败，内容已存在！')
    //   return;
    // }
    list = updateObj(list,obj)
    this.props.handleUpdate(list)

  }
  handleChange = (obj,isCheck)=>{
    let list = this.props.list
    obj.isCheck = isCheck
    list = updateObj(list,obj)
    this.props.handleUpdate(list)
  }

  handleDelete = (obj)=>{
    
    if(!question('确认删除？')){
        return
    }
    let list = this.props.list
    
    removeObj(list,obj)
    
    this.props.handleUpdate(list)

  }

  validObj = (obj)=>{
    return obj!==undefined
  }


  render() {
    // const {active} =this.props
    const active =this.props.active
    
    return (
        <li className="item">
          <div className="left">
            <input type="checkbox" className="checkbox" checked={active.isCheck} defaultChecked={false} onChange={(e)=>{this.handleChange(active,e.target.checked)}}/>
            <span>{this.validObj(active)&&active.value?active.value:'默认内容'}</span>
          </div>
          <div className="right">
            <button className="btn btn-text" type="button" onClick={()=>{this.handleEdit(active)}}>编辑</button>
            <button className="btn btn-text" type="button" onClick={()=>{this.handleDelete(active)}}>删除</button>
          </div>
        </li>
    )
  }
}



