import React, { Component } from 'react'
import {removeSelect,question, selectAll,isSelectAll,count} from '../../utils/save'

export default class Footer extends Component {
    // 删除已完成
    handleDeleteSelected = ()=>{
        if(!question('确认删除？')){
            return
        }
        let list = removeSelect()
        this.props.handleUpdate(list)
    }


    // 选择
    handleSelectAll = (e)=>{
        
        const flag =e.target.checked
        let list = this.props.list
        list = selectAll(list,flag)
        this.props.handleUpdate(list)
    }
    render() {
        const list = this.props.list
        let flag = isSelectAll(list)
        const arr = count(list)
        const total = arr[0]?arr[0]:0
        const finsh = arr[1]?arr[1]:0

        
        return (
                <div className="footer">
                    <div className="left">
                        <div className="task-process">
                            <span >全选</span>
                            <input className="checkbox"  type="checkbox" onClick={this.handleSelectAll}  checked={flag} />
                                <span id="finsh">已完成{finsh}</span>
                                /
                                <span id="total">全部{total}</span>
                        </div>
                    </div>
                    <div className="right">
                        <button className="btn btn-danger" onClick={this.handleDeleteSelected}>删除已完成</button>
                    </div>
                </div>
        )
    }
}
