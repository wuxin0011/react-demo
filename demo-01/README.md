### react一个简单demo，统计任务，所有内容会保存到浏览器本地

```shell

### 开始
npm start


### 测试
npm test


### 打包
npm run build

### 

npm run eject
```



### 关于 input输入框中的checked和defaultChecked问题

```js
/* 

关于 报错问题：
<input type="checkbox"  checked={active.isCheck}/>

虽然会报错，但是内容会及时刷新


<input type="checkbox"  defaultChecked={active.isCheck}/>

虽然不会报错，内容虽然改变了，但是页面不会刷新


*/


```

**综上所述bug还是没有处理好，如果后续能够发现解决方案，会处理的**