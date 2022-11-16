import React from 'react'
import ReactDOM, { render } from 'react-dom'

// 引入CSS
import './index.css'

import PropTypes from 'prop-types'
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
  // class App extends React.Component{


  //   state={
  //     count:10
  //   }
 
  //  //  事件处理程序
  //  onIncrement(){
  //    console.log("事件处理程序中的this：",this)
  //    this.setState({
  //      count:this.state.count+1
  //    })
  //  }

  //    render(){
  //      return(
  //        <div>
  //          <h1>计数器:{this.state.count}</h1>
  //          {/* // 箭头函数中的this指向外部环境，此处为：render()方法 
  //          render() 方法中的 this 为组件实例，可以获取到 setState()*/}
  //          <button onClick={()=>this.onIncrement()}>+1</button>
   
  //        </div>
  //      )
  //    }
  //  }
  //  ReactDOM.render(<App/>,document.getElementById("root"))

//    2. Function.prototype.bind()
//  利用ES5中的bind方法，将事件处理程序中的this与组件实例绑定到一起

// class App extends React.Component{

//   // state={
//   //   count:10
//   // }

//   constructor(){
//     super()
//     this.state={
//       count:10
//     }
//     this.onIncrement = this.onIncrement.bind(this)
//   }
//  //  事件处理程序
//  onIncrement(){
//    console.log("事件处理程序中的this：",this)
//    this.setState({
//      count:this.state.count+1
//    })
//  }

//    render(){
//      return(
//        <div>
//          <h1>计数器:{this.state.count}</h1>
//          <button onClick={this.onIncrement}>+1</button>
 
//        </div>
//      )
//    }
//  }
//  ReactDOM.render(<App/>,document.getElementById("root"))

//  3. class 的实例方法(推荐)
//  利用箭头函数形式的class实例方法
//  注意：该语法是实验性语法，但是，由于babel的存在可以直接使用

  // class App extends React.Component{


  //   state={
  //     count:10
  //   }
 
  //  //  事件处理程序
  //  onIncrement = ()=>{
  //    console.log("事件处理程序中的this：",this)
  //    this.setState({
  //      count:this.state.count+1
  //    })
  //  }

  //    render(){
  //      return(
  //        <div>
  //          <h1>计数器:{this.state.count}</h1>
  //          {/* // 箭头函数中的this指向外部环境，此处为：render()方法 
  //          render() 方法中的 this 为组件实例，可以获取到 setState()*/}
  //          <button onClick={this.onIncrement}>+1</button>
   
  //        </div>
  //      )
  //    }
  //  }
  //  ReactDOM.render(<App/>,document.getElementById("root"))

  /**
   * 
   * 表单处理
   * 
   * */
//    受控组件
// 步骤：
// 1. 在 state 中添加一个状态，作为表单元素的value值（控制表单元素值的来源）
// 2. 给表单元素绑定 change 事件，将 表单元素的值 设置为 state 的值（控制表单元素值的变化）

// class App extends React.Component{

//   state = {
//     txt : '',
//     contant:"",
//     city:"sh",
//     isChecked:"false"
//   }
//   handleChange = e=>{
//     console.log(e.target.value)

//     this.setState({
//       txt : e.target.value
//     })
//   }

//   handleContant = e =>{
//     console.log(e.target.value)
//     this.setState({

//       contant:e.target.value
//     })
//   }
//   handleCity = e =>{
//     console.log(e.target.value)
//     this.setState({
//       city : e.target.value
//     })
//   } 
//   handleChecked = e=>{
//     console.log(e.target.checked)
//     this.setState({
//       isChecked:e.target.checked
//     })
//   }
//   render(){
//     return(
      
//       <div>
//         {/* 文本框 */}
//         <input type = "text" value={this.state.txt} onChange ={this.handleChange}></input>
//         <br/>
//         {/* 富文本框 */}
//         <textarea value={this.state.contant} onChange={this.handleContant}></textarea>
//         <br/>
//         {/* 下拉框 */}
//         <select value={this.state.city} onChange={this.handleCity}>
//           <option value = "bj">北京</option>
//           <option value = "sh">上海</option>
//           <option value = "gz">广州</option>
//         </select>
//         <br/>
//         {/* 复选框 */}
//         <input type = "checkbox" checked = {this.state.isChecked} onChange={this.handleChecked}></input>
        
//       </div>
      
//     )
//   }

//   }
//   ReactDOM.render(<App/>,document.getElementById("root"))


//   多表单元素优化：
//  问题：每个表单元素都有一个单独的事件处理程序处理太繁琐
//  优化：使用一个事件处理程序同时处理多个表单元素

// 1. 给表单元素添加name属性，名称与 state 相同
// 2. 根据表单元素类型获取对应值
// 3. 在 change 事件处理程序中通过 [name] 来修改对应的state


// class App extends React.Component{

//   state = {
//     txt : '',
//     contant:"",
//     city:"sh",
//     isChecked:"false"
//   }

//   handleForm = e =>{

//     const value = e.target.type ==="checkbox" ? e.target.checked:e.target.value

//     const name=e.target.name
//     console.log(value)
//     this.setState({
//       [name]:value
//     })
//   }
 
//   render(){
//     return(
      
//       <div>
//         {/* 文本框 */}
//         <input type = "text" name="txt" value={this.state.txt} onChange ={this.handleForm}></input>
//         <br/>
//         {/* 富文本框 */}
//         <textarea value={this.state.contant} name="contant" onChange={this.handleForm}></textarea>
//         <br/>
//         {/* 下拉框 */}
//         <select value={this.state.city} name="city"onChange={this.handleForm}>
//           <option value = "bj">北京</option>
//           <option value = "sh">上海</option>
//           <option value = "gz">广州</option>
//         </select>
//         <br/>
//         {/* 复选框 */}
//         <input type = "checkbox" name="isChecked" checked = {this.state.isChecked} onChange={this.handleForm}></input>
        
//       </div>
      
//     )
//   }

//   }
//   ReactDOM.render(<App/>,document.getElementById("root"))



//   非受控组件
//  说明：借助于 ref，使用原生 DOM 方式来获取表单元素值
//  ref 的作用：获取 DOM 或组件

// 使用步骤：
// 1. 调用 React.createRef() 方法创建一个 ref 对象
// 2. 将创建好的 ref 对象添加到文本框中
// 3. 通过 ref 对象获取到文本框的值

// class App extends React.Component{

//   constructor(){
//     super()

//     this.txtRef = React.createRef()
//   }
 
//   getTxt = () =>{
//       console.log(this.txtRef.current.value);
//   }
 
//   render(){
//     return(
      
//       <div>
//           <input type="text"  ref={this.txtRef}/>
//           <button onClick={this.getTxt}>获取文本框的值</button>
//       </div>
      
//     )
//   }

//   }
//   ReactDOM.render(<App/>,document.getElementById("root"))

// -------------------------------------------------------------------------------------------
/* 
  评论列表案例

  comments: [
    { id: 1, name: 'jack', content: '沙发！！！' },
    { id: 2, name: 'rose', content: '板凳~' },
    { id: 3, name: 'tom', content: '楼主好人' }
  ]
*/

// class App extends React.Component {
//   state = {
//     // 初始化状态
//     comments: [
//       { id: 1, name: 'jack', content: '沙发！！！' },
//       { id: 2, name: 'rose', content: '板凳~' },
//       { id: 3, name: 'tom', content: '楼主好人' }
//     ],
//     userName:'',
//     userContent:''
    
//   }

//   handleForm = e =>{
//     const name = e.target.name
//     this.setState({
//       [name]:e.target.value
//     })
//     console.log(e.target.value)
//   }

//   addComment = () =>{
//     const newId =Math.random()
//     // const {comments,userName,userContent } =this.state

//     const newUserName =this.state.userName
//     const newUserContent =this.state.userContent
//     const comments =this.state.comments

//   // 非空校验
//   if( newUserName.trim()=== '' || newUserContent.trim() === '' ){
//     alert('请输入评论人和评论内容')
//     return
//   }

//     const newComments = [
//       {
//         id:newId,
//         name:newUserName,
//         content:newUserContent,
        
//       }, ...comments
//     ]
//     console.log(newComments)

//     // 文本框如何清空?要清空文本框只需要将其对应的state清空即可
//     this.setState({
//       comments : newComments,
//       userName:'',
//       userContent:''
//     })
    
  
//   }

//   //渲染评论列表:
  
//   renderList(){
//     return (
//       this.state.comments.length === 0 ? (
//         <div className="no-comment">暂无评论，快去评论吧~</div>
//       ) : (
//         <ul>
//           {this.state.comments.map(item =>
//             <li  key={item.id}>
//               <h3>评论人：{item.name}</h3>
//               <p>评论内容：{item.content}</p>
//             </li>
//             )}
//       </ul>
//      )
//     )
    
//   }

//   render() {
//     return (
//       <div className="app">
//         <div>
//           <input className="user" type="text" placeholder="请输入评论人" value={this.state.userName}  name="userName"  onChange={this.handleForm} />
//           <br/>
//           <textarea
//             className="content"
//             cols="30"
//             rows="10"
//             placeholder="请输入评论内容"
//             value={this.state.userContent}
//             name="userContent"
//             onChange={this.handleForm}

//           />
//           <br/>
//           <button onClick={this.addComment}>发表评论</button>
//         </div>
      
//         {/* 通过条件渲染决定渲染的内容 */}

//         {this.renderList()}

//         {/* {
//           this.state.comments.length === 0 ? (
//             <div className="no-comment">暂无评论，快去评论吧~</div>
//           ) : (
//             <ul>
//               {this.state.comments.map(item =>
//                 <li  key={item.id}>
//                   <h3>{item.name}</h3>
//                   <p>{item.content}</p>
//                 </li>
//                 )}
//           </ul>
//          )
//         } */}
          

        

//       </div>
//     )
//   }
// }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
// ReactDOM.render(<App />, document.getElementById('root'))

// -----------------------------------------------------------------------------------------------

/**
 * 组件的 props
 */

//  组件是封闭的，要接收外部数据应该通过 props 来实现
//  props的作用：接收传递给组件的数据
//  传递数据：给组件标签添加属性
//  接收数据：函数组件通过参数props接收数据，类组件通过 this.props 接收数据


// 特点
// 1. 可以给组件传递任意类型的数据
// 2. props 是只读的对象，只能读取属性的值，无法修改对象
// 3. 注意：使用类组件时，如果写了构造函数，应该将 props 传递给 super()，否则，无法在构造函数中获取到 props！

// 函数组件

// 2 接收数据
// const App = props =>{

//   console.log(props);
//   return(
//     <div>接收到数据:{props.name}</div>
//   )
// }
// // 1 传递数据
// ReactDOM.render(<App name="jack" age={19} />,document.getElementById("root"))

// 类组件

// class App extends React.Component{
// // constructor(props){
// //     super(props)
// // }
// render(){
//     console.log(this.props)
//     this.props.fn()
//     return(
//       <div>
//         props:{this.props.name},{this.props.age}
//         {this.props.tag}
//       </div>
//     )
//   }

// }

// ReactDOM.render(<App name="rose" age={19} color={['red','green','blue']} fn={()=>console.log("这是一个函数")} tag={<p>这是一个P标签</p>}/>,document.getElementById("root"))

// -----------------------------------------------------------------------------------------------------------------

//  组件通讯的三种方式

// 组件之间的通讯分为 3 种：
// 1. 父组件 -> 子组件
// 2. 子组件 -> 父组件
// 3. 兄弟组件

// 父组件传递数据给子组件
// 1. 父组件提供要传递的state数据
// 2. 给子组件标签添加属性，值为 state 中的数据
// 3. 子组件中通过 props 接收父组件中传递的数据

// 父组件
// class Parent extends React.Component{

//   state={
//     lastName:'王'
//   }
//   render(){
//     return(
//       <div className='parent'>
//             父组件：
//             <Child  name={this.state.lastName}/>
//             <div>sjbsusu</div>
//       </div>
//     )
//   }
// }
// // 子组件
// const Child = props =>{
//   console.log('子组件：',props)
//   return(
//       <div className='child'><p>子组件，接收到父组件的数据：{props.name}</p></div>
//   )
// }
// ReactDOM.render(<Parent/>,document.getElementById("root"))

// 子组件传递数据给父组件
// 思路：利用回调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数。
// 1. 父组件提供一个回调函数（用于接收数据）
// 2. 将该函数作为属性的值，传递给子组件

// 父组件
// class Parent extends React.Component{

//   state={
//     childMsg:''
//   }

//   // 提供回调函数，用来接收数据
//   getChildMsg =data=>{
//     console.log("接收到子组件中传递过来的数据",data)
//     this.setState({
//       childMsg:data
//     })

//   }
  
// render(){
//   return(
//     <div>
//       <p>父组件数据:{this.state.childMsg}</p>
//       <Child getMsg={this.getChildMsg}/>
//     </div>
//   )
// }

// }

// // 子组件
// class Child extends React.Component{
//   state={
//     msg:"12321"
//   }

//   handleClick = ()=>{
//     // 子组件调用父组件中传递过来的回调函数
//       this.props.getMsg(this.state.msg)
//   }

//   render(){
//     return(
//         <div>
//             子组件中
//             <button onClick={this.handleClick}>子组件向父组件传递数据</button>
//         </div>
//     )
    
//   }
// }
// ReactDOM.render(<Parent/>,document.getElementById("root"))

// 兄弟组件

// 将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态
// 思想：状态提升
// 公共父组件职责：1. 提供共享状态 2. 提供操作共享状态的方法
// 要通讯的子组件只需通过 props 接收状态或操作状态的方法

// 父组件
// class Parent extends React.Component{

//   // 提供共享状态
//   state={
//     count : 0
//   }

//   // 提供修改状态的方法
//   onIncreament=()=>{
//       this.setState({
//         count:this.state.count +1
//       })
//   }
//   render(){
//     return(
//       <div>
//         <Child1 getCount={this.state.count}/>
//         <Child2 getIncreament={this.onIncreament}/>
//       </div>
//     )
//   }
// }
// // 兄弟组件
// class Child1 extends React.Component{

 
//   render(){
//     return(
//       <h1>计数器：{this.props.getCount}</h1>
//     )
//   }
// }


// class Child2 extends React.Component{

//   handleClick =()=>{
//     this.props.getIncreament()
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>+1</button>
//     )
//   }
// }
// ReactDOM.render(<Parent/>,document.getElementById("root"))

// -------------------------------------------------------------------
/**
 * Context
 */
//  作用：跨组件传递数据（比如：主题、语言等）

//  使用步骤：
// 1. 调用 React. createContext() 创建 Provider（提供数据） 和 Consumer（消费数据） 两个组件。
// 2. 使用 Provider 组件作为父节点
// 3. 设置 value 属性，表示要传递的数据。
// 4. 调用 Consumer 组件接收数据

// 总结：
// 1. 如果两个组件是远方亲戚（比如，嵌套多层）可以使用Context实现组件通讯
// 2. Context提供了两个组件：Provider 和 Consumer
// 3. Provider组件：用来提供数据
// 4. Consumer组件：用来消费数据

// 创建context得到两个组件
// const { Provider, Consumer } = React.createContext()

// class App extends React.Component {
//   render() {
//     return (
//       <Provider value="pink">
//         <div className="app">
//           <Node />
//         </div>
//       </Provider>
//     )
//   }
// }

// const Node = props => {
//   return (
//     <div className="node">
//       <SubNode />
//     </div>
//   )
// }

// const SubNode = props => {
//   return (
//     <div className="subnode">
//       <Child />
//     </div>
//   )
// }

// const Child = props => {
//   return (
//     <div className="child">
//       <Consumer>{data => <span>我是子节点 -- {data}</span>}</Consumer>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// -----------------------------------------------------------------------------
/**
 * props深入
 */

// children 属性
// children 属性：表示组件标签的子节点。当组件标签有子节点时，props 就会有该属性
// children 属性与普通的props一样，值可以是任意值（文本、React元素、组件，甚至是函数）

// children为：文本节点
/* const App = props => {
  console.log(props)
  return (
    <div>
      <h1>组件标签的子节点：</h1>
      {props.children}
    </div>
  )
}

ReactDOM.render(<App>我是子节点</App>, document.getElementById('root')) */


// children 为:jsx或组件 
// const Test =()=><button>我是button组件</button>
// const App = props => {
//   console.log(props)
//   return (
//     <div>
//       <h1>组件标签的子节点：</h1>
//       {props.children}
//     </div>
//   )
// }
// ReactDOM.render(
// <App>
//   {/* <p>我是子节点,一个p标签</p> */}
//   <Test></Test>
//   </App>,
//    document.getElementById('root')
//    )


// const App = props => {
//   console.log(props)
//   props.children()
//   return (
//     <div>
//       <h1>组件标签的子节点：</h1>
//       {/* {props.children} */}
//     </div>
//   )
// }
// ReactDOM.render(
// <App>
//  {
//   ()=>console.log("这是一个函数子节点")
//  }
//   </App>,
//    document.getElementById('root')
  //  )
//    5.2 props 校验
// 使用步骤
// 1. 安装包 prop-types （yarn add prop-types / npm install prop-types）2. 导入 prop-types 包
// 3. 使用组件名.propTypes = {} 来给组件的props添加校验规则
// 4. 校验规则通过 PropTypes 对象来指定
const App = props => {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={index}>{item}</li>)

  return <ul>{lis}</ul>
}

// 添加props校验
App.propTypes = {
  colors: PropTypes.array
}

ReactDOM.render(
  <App colors={['red', 'blue']} />,
  document.getElementById('root')
)

// 约束规则
// 1. 常见类型：array、bool、func、number、object、string
// 2. React元素类型：element
// 3. 必填项：isRequired
// 4. 特定结构的对象：shape({ })