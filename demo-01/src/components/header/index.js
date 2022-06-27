import React, { Component } from 'react'
import { createObj,saveData,isExist,getList } from '../../utils/save';

export default class Header extends Component {
 handerEnter = (e)=>{

        if(e.key==='Enter'){
            const target = e.target
            const value = target.value
            if(!value){
                return alert('添加失败 内容不能为空！')
            }
            const list = this.props.list
            const obj = createObj(value,Date.now(),false)
            if(isExist(list,obj)){
                alert('添加失败，内容可能已经存在！')
                return
            }
            list.unshift(obj)
            saveData(list)

            // 修改之后数据传递父组件
            this.props.handleUpdate(list)
            // 清空
            e.target.value=''
        }
    
 }



 handleSearch = (e)=>{

    if(e.key==='Enter'){
        const value = e.target.value
        // !!! 注意 let list = this.props.list 获取内容会缺失父组件内容传递之后缺失了
        // 如果遍历出现内容和初始状态不一致情况！！！！ 因此从 浏览器本地存储中获取 
        let list = getList()
        list = list.filter(li=>{
            return li&&li.value&&li.value.indexOf(value)!=-1
        })
        // 修改之后数据传递父组件
        this.props.handleUpdate(list)
    }

}

  render() {
    return (
    <div className="header">
        <div className="title">
            <h2>任务列表</h2>
        <input type="text" id="content" className="search"  placeholder="keywords..." onKeyUp={this.handleSearch} />

        </div>
        <input type="text" id="content" className="content"  placeholder="请输入任务..." onKeyUp={this.handerEnter} />
    </div>
    )
  }
}
