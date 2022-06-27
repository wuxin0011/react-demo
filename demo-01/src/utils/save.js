const wx = window.localStorage
const confirm = window.confirm

const key = 'react-test-demo'



export function saveData(value) {
    wx.setItem(key, JSON.stringify(value))
}

export function getData() {
    return JSON.parse(wx.getItem(key))
}

export function clearData() {
    let array = new Array()
    saveData(array)
    return array
}


export function removeSelect(list) {
    if (!validArray(list)) {
        return
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i].isCheck === true) {
            list.splice(i, 1)
        }
    }

}


export function validArray(arr) {
    return Array.isArray(arr) && arr.length !== 0
}

export function getList() {
    let arrs = getData()
    return validArray(arrs) ? arrs : []
}

export function createObj(value, isChceck, time) {
    return new Active(value, isChceck, time)
}



export function removeObj(list, active) {
    if (!validArray(list, active)) {
        return list;
    }
    for (let i = 0; i < list.length; i++) {
        const obj = list[i];
        if (obj.time === active.time) {
            list.splice(i, 1)
        }
    }
    saveData(list)
    return list;

}

export function updateObj(list, active) {
    if (!validArray(list)) {
        return list;
    }
    for (let i = 0; i < list.length; i++) {
        const obj = list[i];
        if (obj.time === active.time) {
            list[i] = active
        }
    }
    saveData(list)
    return list;
}


export function selectAll(list, flag) {

    if (!validArray(list)) {
        return list;
    }
    let arr = list.map(li => {
        li.isCheck = flag
        return li
    })
    saveData(arr)
    return arr;
}


export function isSelectAll(list) {
    if (!validArray(list)) {
        return false;
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i].isCheck === false) {
            return false
        }
    }
    return true;
}

export function isExist(list, active) {
    if (!validArray(list)) {
        return false;
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i].time == active.time && list[i].value === active.value) {
            console.log('==================>', list[i],active );
            return true
        }
    }
    return false
}




export function count(list) {
    if (!validArray(list)) {
        return
    }
    let total = list.length
    let finsh = 0

    for (let i = 0; i < list.length; i++) {
        if (list[i].isCheck === true) {
            finsh++
        }
    }
    return new Array(total, finsh)
}



export function question(str) {
    return confirm(str ? str : '确认操作？')
}


export function customPrompt(value) {
    const result = prompt('修改内容', value)
    return result?result:value
}


class Active {
    constructor(value, time, isCheck) {
        this.value = value
        this.time = time
        this.isCheck = isCheck
    }
}