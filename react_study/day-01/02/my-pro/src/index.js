import React from 'react'
import ReactDOM, { render } from 'react-dom'

// 引入CSS
import './index.css'
import Hello from './Hello'


// const title =  React.createElement("h1",null,"hello react")

// ReactDOM.render(title,document.getElementById("root"))
// ----------------------------------------------
// JSX语法 最好用括号 括起来()
// const title = (<div className='title'><h1>JSX</h1><div>hello</div></div>)

// ReactDOM.render(title,document.getElementById("root"))
// ------------------------------------------------
// 在jsx中使用JavaScript表达式

// const name = ' jack'
// const age= 21 


// // 注意点:1.JSX自身也是JS表达式

// // 2.JS中的对象是一个例外，一般只会出现在style属性中

// // 3.不能在{}中出现语句（比如：if/for等）
// //函数调用表达式
// const sayHi =() => 'Hi~'

// const dv = (<h2>我是jsx表达式</h2>)
// const title = (
//   <h1>
//     hello,{name},年龄：{age},{dv}
//     <p>{sayHi()}</p>
//     <p>{1+7}</p>
//     <p>{3>5 ? "大于":"小于等于"}</p>


// {/* 不合法 */}
//     {/* <p>对象{{a:"6"}}</p> */}
//     {/* <p>{if(true){}}</p>
//     {for(var i =1; i<=10;i++){}} */}
//   </h1>


// )
// ReactDOM.render(title,document.getElementById("root"))
// ----------------------------------------------------
//JSX 条件渲染

// const isLoading = true
// const loadData =()=>{
//   if(isLoading){
//    return <div>loading...</div> 
//   }
//   return <div>数据加载完成，此处显示加载后的数据</div>
// }


// 三元表达式
// const loadData =()=>{
  
//   return isLoading?<div>loading...</div> :<div>数据加载完成，此处显示加载后的数据</div>
// }
// 逻辑与运算符
// const loadData =()=>{
  
//   return isLoading&&<div>loading...</div> 
// }
// const title =(
//   <h1>
//     条件渲染：
//     {loadData()}
//     </h1>
// )
// ReactDOM.render(title,document.getElementById("root"))

// ------------------------------------------------------

// JSX的列表渲染:

// 渲染一组数据，应该使用数组的map()方法
// 注意：渲染列表是应该添加key属性，key属性的值要保证唯一
// 原则：map()遍历谁，就给谁添加key属性
// 注意:尽量避免使用索引号作为key

//歌曲列表:
// const songs = [
//   {id:1,name:'痴心绝对'},
//   {id:2,name:'像我这样的人'},
//   {id:3,name:'南山南'}
// ]

// const list = (
//   <ul>
//     {songs.map(item => <li key={item.id}>{item.name}</li>)}
//   </ul>
// )

// ReactDOM.render(list,document.getElementById('root'))

// ---------------------------------------------------------------

/*
    JSX的样式处理
*/ 
// 行内样式（不推荐）
// const list = (
//   <h1 style={{color:'red',backgroundColor:"skyblue"}}>
//     JSX的样式处理
//   </h1>
// )

// 类名——className(推荐)
// const list = (
//   <h1 className="title" >
//     JSX的样式处理
//   </h1>
// )

// // 渲染react元素
// ReactDOM.render(list,document.getElementById("root"))

// --------------------------------------------------------
// React组件的两种创建方式

// 1.函数组件
// 函数组件：使用JS中的函数创建的组件
// 函数组件必须要有返回值
// 组件名称必须以大写字母开头，React据此区分 组件和 普通React元素
// 使用函数名作为组件标签名


//  function Hello(){
//   return(
//     <div>这是我的第一个函数组件</div>
//   )
//  }

// function Hello(){
//   return null
//  }

// 箭头函数

// const Hello =() =>{
//   return (
//         <div>这是我的第一个函数组件</div>
//       )
// }

// const Hello =() => <div>这是我的函数组件</div>      
//  ReactDOM.render(<Hello/>,document.getElementById("root"))

// 类组件
// 类组件：使用ES6的class创建的组件
// 约定1：类名称必须要以大写字母开头
// 约定2：类组件应该继承React.Component父类，从而可以使用父类中提供的方法或属性
// 约定3：类组件必须提供render()方法
// 约定4：render()方法必须有返回值，表示该组件的结构

// class Hello extends React.Component{
//   render(){
//     return (
//       <div>这是我的第一个类组件</div>
//     )
//   }
// }

// ReactDOM.render(<Hello/>,document.getElementById("root"))

/**
 * 将组件抽离为独立的JS文件
 */
// 1、创建Hello.js
// 2、在Hello.js中导入React
// 3、创建组件(函数 或 类)
// 4、在Hello.js中导出该组件
// 5、在index.js中导入Hello组件
// 6、渲染组件'

// ReactDOM.render(<Hello/>,document.getElementById("root"))
// -------------------------------------------------------------

/**
 * React事件处理
 * */ 


// 1、事件绑定

// 语法:on+事件名称={事件处理程序}，比如：onClick={()=>{}}
// 注意:React事件采用驼峰命名法，比如：onMouseEnter、onFocus

// 通过类组件实现绑定事件
// class App extends React.Component{

//   // 事件处理程序
//   HandleClick(){
//     console.log("单击事件触发了")
//   }


//   render(){
//       return (
//         <button onClick={this.HandleClick}>点我，点我</button>
//       )
//   }
// }

// 通过函数组件实现绑定事件
// function App(){
//     function HandleClick(){
//     console.log("单击事件触发了1")
//   }

//     return(
//       <button onClick={HandleClick}>点我，点我</button>
//     )
  
// }

// 箭头函数

//   function HandleClick(){
//     console.log("单击事件触发了2")
//   }
// const App =()=><button onClick={HandleClick}>点我，点我</button>

 

// 渲染组件
// ReactDOM.render(<App/>,document.getElementById("root"))

// ------------------------------------------------------

// 2、React事件对象

// 可以通过事件处理程序参数获取到事件对象
// React中的事件对象叫做：合作事件(对象)
// 合成事件：兼容所有浏览器，无需担心跨浏览器兼容问题

// class App extends React.Component{

//   HandleClick(e){
//     // 阻止浏览器的默认行为
//     e.preventDefault()

//     console.log("a标签点击事件触发了")
//   }
//   render(){
//     return(
//       <a href='https://wwww.baidu.com' onClick={this.HandleClick} >百度</a>
//     )
//   }

// }
// ReactDOM.render(<App/>,document.getElementById("root"))

// -------------------------------------------------------------

// 3.有状态组件和无状态组件

//  函数组件又叫做无状态组件，类组件又叫做有状态组件
//  状态（state）即数据
//  函数组件没有自己的状态，只负责数据展示（静）
//  类组件有自己的状态，负责更新 UI，让页面“动” 起来

// ---------------------------------------------------------------

// 4.组件中的state和setState

// 1.state的基本使用

//  状态（state）即数据，是组件内部的私有数据，只能在组件内部使用
//  state 的值是对象，表示一个组件中可以有多个数据

//  状态即数据
//  状态是私有的，只能在组件内部使用
//  通过 this.state 来获取状态

// class App extends React.Component{
  
// // constructor(){
// //   // 必须要有
// //   super()
// //   // 初始化state状态
// //   this.state={
// //     count:100
// //   }
// // }

// // 简化语法：初始化state(推荐)
//  state={
//    count:10
//  }

//   render(){
//     return(
//       <div>有状态组件:{this.state.count}</div>
//     )
//   }
// }
// ReactDOM.render(<App/>,document.getElementById("root"))

// 2.setState()修改状态
//  状态是可变的
//  语法：this.setState({ 要修改的数据 })
//  注意：不要直接修改 state 中的值，这是错误的！！！
//  setState() 作用：1. 修改 state 2. 更新UI
//  思想：数据驱动视图
// class App extends React.Component{

 
//    state={
//      count:10
//    }
  
//     render(){
//       return(
//         <div>
//           <h1>计数器:{this.state.count}</h1>
//           <button onClick={()=>{
//             this.setState({
//               count:this.state.count+1
//             })

//             // 错误
//             // this.state.count+=1
//           }}>+1</button>
//         </div>
//       )
//     }
//   }
//   ReactDOM.render(<App/>,document.getElementById("root"))


// 从 JSX 中抽离事件处理程序

// JSX 中掺杂过多 JS 逻辑代码，会显得非常混乱
// 推荐：将逻辑抽离到单独的方法中，保证 JSX 结构清晰

// class App extends React.Component{

 
//    state={
//      count:10
//    }

//   //  事件处理程序
//   onIncrement(){
//     console.log("事件处理程序中的this：",this)//this 为undefined
//     this.setState({
//       count:this.state.count+1
//     })
//   }
// //  原因：事件处理程序中 this 的值为 undefined
// //  希望：this 指向组件实例（render方法中的this即为组件实例）
//     render(){
//       return(
//         <div>
//           <h1>计数器:{this.state.count}</h1>
//           <button onClick={this.onIncrement}>+1</button>
//           {/* <button onClick={()=>{
//             this.setState({
//               count:this.state.count+1
//             })
//           }}>+1</button> */}
//         </div>
//       )
//     }
//   }
//   ReactDOM.render(<App/>,document.getElementById("root"))


  // 事件绑定 this 指向

  // 1.箭头函数
  //  利用箭头函数自身不绑定this的特点
  //  render() 方法中的 this 为组件实例，可以获取到 setState()
  class App extends React.Component{

 
    state={
      count:10
    }
 
   //  事件处理程序
   onIncrement(){
     console.log("事件处理程序中的this：",this)
     this.setState({
       count:this.state.count+1
     })
   }

     render(){
       return(
         <div>
           <h1>计数器:{this.state.count}</h1>
           <button onClick={()=>this.onIncrement()}>+1</button>
   
         </div>
       )
     }
   }
   ReactDOM.render(<App/>,document.getElementById("root"))