import logo from './logo.svg';
import React from 'react'
// import '../node_modules';

import { useState } from 'react';
import './App.css';
import Carddiv from './Carddiv';
import Header from './Header';
import Navbar from './Navbar';
import Popsconcept from './Popsconcept';
import blog from './blog';
import Clock from './Clock';
import { Route } from 'react-router-dom';
import { questions } from './Data/faqQestion';
import Faqs from './Faqs';
// import tabs from './image/tabs'
import tabs from './Data/tabss'
import UseEffect from './UseEffect';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Forms from './Forms';
import Passowordgen from './Passowordgen';
import Todolist from './Todolist';
function App(){
  let [input, setInput] = useState({
    firstName:"",
    lastName:"", 
    email:"",
    password:""
  })
  function fun1(e){
    // console.log(e.target.value, e.target.name)
    const {name, value} = e.target;
    setInput({...input, [name]:value})
    console.log(input,"input");
  }

  const done = (e)=>{
    e.preventDefault();
    console.log("he");
    console.log(input);
  }
  function localsave(e){
    e.preventDefault();
    console.log(input);
    let a = JSON.stringify(input)
    localStorage.setItem('data', a)

  }

  return(
    <div>
      <div>
        
      </div>
      
      <form onSubmit={localsave}>
        <input  type='text' required  onChange={fun1} name='firstName' value={input.firstName}  placeholder='Enter your  firstName '/>
        <br/>
        <br/>

        <input  type='text' required onChange={fun1}  name='lastName'  value={input.lastName} placeholder='Enter your lastName '/>
        <br/>
        <br/>
        <input  type='email' required  onChange={fun1} name='email' value={input.email}  placeholder='email'/>
        <br/>
        <br/>
        <input  type='password' required onChange={fun1}  name='password' value={input.password}   placeholder='PassWord'/>
        <br/>
        <br/>
        <button> addd</button>

      </form>

      
   

    </div>
  )
}

// function App(){
//   const [input, setInput] = useState();
//   const [data, setData] = useState([]);
//   const funct1=(e)=>{

//     setInput(e.target.value);
//   }
//   const add=()=>{
//     setData([...data, input]);
//     setInput('');
//   }
//   return(

//   <div>
//     <input name='input' value={input} onChange={funct1} type='text' placeholder='Enter Your text'/>
//     <button onClick={add}>Add</button>
//    {
//     data.map((a,b,c)=>{
//       return(
//         <>
//         <li>{a}</li>
//         </>
//       )
//     })
//    }
  
//   </div>


//   )
// }

// function App(){
//   return(

//   <div>
//   {/* <Passowordgen/> */}
// {/* <Todolist/> */}
// <fromi/>
//   </div>


//   )
// }

// function App(){
//   let [uname, setUname] = useState('')
//   let [passw, setPassw] = useState('')

//   let handleSubmit=(event)=>{
 
//     event.preventDefault()
//     console.log(uname, passw);
//     // console.log('he');
//   }

//   // This is another method to control form
//   // let getUname=(event)=>{
//   //   setUname(event.target.value);
//   // }



//   return(
//     <div className='App'>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-lg-6'>
//             <form  className='form' onSubmit={handleSubmit}>
//               <div className='text-start my-3'>
//                 <lable>UserName</lable>
//                 <input type='text' onChange={(event)=>setUname(event.target.value)}  className='form-control' value={uname}/>
//                 {/* <input type='text'  onChange={getUname} value={passw}  className='form-control'/> */}

//               </div>
//               <div className='text-start my-3'>
//                 <lable>password</lable>
//                 <input type='password'  onChange={(event)=>setPassw(event.target.value)} value={passw}  className='form-control'/>
//                 {/* <input type='password'  onChange={getUname} value={passw}  className='form-control'/> */}
//               </div>
//               <div className='text-start my-3'>
//                 <button>Login</button>
//               </div>
//             </form>

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

export default App

// function App(){
//   return(
//     <div>
//       <UseEffect/>
//     </div>
//   )
// }

// export default App

// import Navbar2 from './Navbar2';
// // import Navbar from './Navbar'
// import './App.css'
// import {Route,Routes}  from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// // import { useState } from 'react';
// import React, { useState } from 'react'


// import Home1 from './linkFile/Home1';
// import Head from './Head';
// import About1 from './linkFile/About1';
// import Contact1 from './linkFile/Contact1';
// import { Button } from 'bootstrap';

// const App = () => {
//   return (
//     <>

//       <Navbar2/>
//       <Routes>

//         <Route   path='/home' element={<Home/>} />
//         <Route   path='/about' element={<About/>} />
//         <Route   path='/contact' element={<Contact/>} />

//       </Routes> 



     
      
//     </>
//   )
// }
// const App = () => {

//   let [open, setOpen] = useState(false);
//   return (
//     <div>
   
//    <div className={(open? 'change': '')}   onClick={setOpen(!open)}>
//         < Button>Click here</Button>
//       </div>
   
  
//     </div>
//   )
// }

// export default App


// function App(){


// return(
//   <Navbar2/>

//   <Router>
//     <Route/>
//   </Router>
 
// )
// }


// export default App;

// function App(){
//   return(
//     <div>Hellow</div>
//   )
// }

// function App(){
//   let [activeTabs, setActiveTabs] = useState(0)
//   let [activeContents, setActiveContents] = useState(tabs[0])

//   let changeData = (index)=>{
//     setActiveTabs(index);
//     setActiveContents(tabs[index])

//   }

//   return(
// <div className='App'>
//   <div className='tabsOuter'>
//   <h1 style={{textAlign:'left'}}>Law Prep Vision Mission and Values</h1>
//   <ul>
    
//     {tabs.map((tabsItems, index)=>{
//       return(
//         <li>
//           <button  onClick={()=>changeData(index)} className={activeTabs==index}>{tabsItems.title}</button>
//         </li>
//       )
//     })}
//   </ul>
//   {activeContents!==undefined ?
//   <p>
//     {activeContents.description}
//   </p>
//   : ''
//   }

//   </div>

// </div>
//   )
// }

// export default App

// function App(){
//   let [todolist, setTodolist]= useState([])

//   let saveToDoList=(event)=>{
//     let toname = event.target.toname.value;
//     if(!todolist.include(toname)){
//       let finalDoList=[...todolist, toname]
//       setTodolist(finalDoList)
//     }
//     else{
//       alert("ToDo   name Already Exists...")
//     }
//     event.preventDefault();
//   }
//   let list = todolist.map((value, index)=>{
//     return(
//       <ToDoListItems value ={value} key={index} indexNumber={index}
//       todolist={todolist} setTodolist={setTodolist} />
//     )
//   })
//   return(

//     <div className='App'>

// <h1>ToDo Lists</h1>
// <form onSubmit={saveToDoList}>
//   <input type='text' name='toname' placeholder='Type something  '/>
//   <button>Save</button>
// </form>
// <div className='outerDiv'>
//   <ul>
    
//     {list}
//   </ul>

// </div>
//     </div>

//   )
// }
// export default App


// function ToDoListItems({value, indexNumber, todolist, setTodolist}){
//   let [status, setStatus] = useState(false)
//   let deleteRow=()=>{
//     let finalData = todolist.filter((v,i)=>i!=indexNumber)
//     setTodolist(finalData)

//   }
//   let checkStatus=()=>{
//     setStatus(!status)

//   }
//   return(
//     <li className={(status ? 'completetodo': '')} onClick={checkStatus}> {indexNumber+1} {value} <span onClick={deleteRow}>X</span> </li>
//   )
// }


//  function App(){
//   return(
//     <div>
//       <Faqs/>
//     </div>
//   )
//  }
// function App(){
  
//   let [showAns, setShowAns] = useState(questions[0].id);
//   return(
//     <div className='App'>
//       <div>
//         <h1>
//         Frequently Asked Questions (FAQs)
//         </h1>
//         <div className='faqouter'>
//           {
//             questions.map((faqItems, i)=>{
//               return(
//                 <div className='faqItems'> 
//                 <h2 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question}</h2>
//                 <p className={showAns==faqItems.id ? 'activeAns':''}>{faqItems.answer}</p>


//                 </div>
//               )
//             })
            
//           }
           
//         </div>
//       </div>

//     </div>
//   )
// }

// function App(){

//   let [modelstatus, setModelstatus] = useState(false)

//   return(
//     <div className='App'>
//       <button className='en' onClick={()=>setModelstatus(true)}> Enquire Now </button>

    
//     <div onClick={()=>setModelstatus(false)} className={`modelOverlay ${modelstatus ? 'modalShow': ''}`}>  </div>
//       <div className={`ModalDiv ${modelstatus ? 'showModalDiv': ''}`}>
//         <h1>Enquiry Now <span onClick={()=>setModelstatus(false)}> X</span></h1>

//       </div>

//     </div>

//   )
// }

// import logo from './image;

// import  './Style';

// function App(){
//   let temp ='';
//   let [check, setCheck] = useState(false)
//   let [count, setCount] = useState(1)
  
//     if(check){
//       temp=<>
//         <button onClick={()=>{setCheck(!check)}}>Hide</button>
//         <p> Hide, It is working </p>
//       </>

//     }
//     else{
      
//       temp =<>
//        <button onClick={()=>{setCheck(!check)}}>Show</button>
//         <p>It is working show </p>
       
//        </>
//     }
  
//   function dispData(){
//     setCount(count+1);

//   }
//   return(
//     <div>
   
//    <button onClick={dispData}>click kro </button>
   
//    <h1>{count}</h1>
//    <h1>{temp}</h1>
//     </div>
//   )
// }
// function App(){
//   let name = 'ankit';
//   let  status = true;
//    let [sonu, setSonu] = useState(false)

//   let arr =[12,34,34,54];
//   let obj={
//     name: 'mernStack',
//     course: 'Btech',
//     Year: 'final Year'
//   }
//   return(
//     <div>
//       <h1>Hellow React</h1>
//       {arr.map((v)=>{
// return(
//   <p>{v}</p>
// )
//       })}
//     <button onClick={()=>setSonu(!sonu)}>click on button</button>

//       {/* {obj.name} */}
//       {
//         sonu? 
//         <h1>Hello</h1>
//         :
//          'not print'
        
//       }
//     </div>
//   )
// //     <button className='micon' onClick={()=>setMenustatus(!menustatus)}>


// }


// function App() {
//   let name ='ankit';
//   let l=[10,20,30]
//   let obj ={
//     'name':"ankit",
//     'cName':"MERN",
//     'desc':"REACT js"
//   }
  


//   return (
//     <div className="main">
//       {/* <Header/> */}
//       <div className='row'>
//        <card1/>
//       </div>
//       <h>react start ho gaya hai</h>
//       {l.map((v)=>{
//         return(
//           <div>{v*2}</div>
//         )
//       })}
//        <div>{obj.name}</div>
//     </div>
//   );
// }
// function card() {
//   const fun1 = () => {



//   }
//   return (<>
//     <h1 onClick={fun1} className=''> cardddd</h1></>)
// }

// let elements =
//   (<>
//     <h2>Hellow</h2>
//     <card/></>)


// function App() {
//   let arr = [1, 2, 3, 4, 5]
//   // let user = 'hello';
//   return (
//     <div>

//       <Header/>
//       {
//         arr.map((a, b) => {
//           return (
//             <li key={b}>{a}</li>
//           )
//         })
//       }

//     </div>
//   )
// }
// function App(){
//   let headerInfo={
//     email:"ankit@gamil.com",
//     phone:'2343234259'
//   }
//   return(
//     <div className='main'>
//      < Header headerInfo={headerInfo}/>
//      <p>This is App   {headerInfo.phone}</p>

//     </div>
//   )
// }
// function App(){
//   let name = 'boostrap';
//   return(
//     <>
//     <h1>Boostrap dry run in reactjs</h1>
//     <div className='container'>
//       <h1>Hellow {name}</h1>
//     </div>
//     </>
//   )
// }
// function App() {
//   let name = 'boostrap';
//   return (
//     <>

//       <Navbar/>
//     </>
//   )
// }



// function App(){
//   return(
//     <>
//     <Navbar/>
//     </>
//   )
// }
// function App(){
//   let headerInfo={
//     email:'Ws@gmail.com',
//     phone:'23497289'
//   }
//   return(
//     <>
//     <Popsconcept headerInfo={headerInfo} cname="ankit">
//       <h1>child props</h1>
//       </Popsconcept>
//     </>
//   )
// }
// function App(){

//   return(
//     <>
//   <Carddiv/>
//     </>
//   )
// }

// function App() {
//   return (
//     <div>
//       <div className='container'>
//         <div className='row'>
//           {blog.map((v, i) => {
//             return (
//               <Carddiv/>
//             )
//           })}

//         </div>
//       </div>


//     </div>
//   )
// }


// import im from './image/im.png';
// function App(){
//   return(
//     <div>
//       <img src={im}></img>
//       <img width='300px' height='300px' src={require('./image/im.png')}></img>
//       <img src='https://cdn.pixabay.com/photo/2020/10/22/06/25/computer-5675047_960_720.png' width='300px' height='300px'></img>
//     </div>
//   )
// }


// function App(){
//   let [count,setCount]=useState(100);
//   let displayData=()=>{
//     setCount(count+1);
//   }

//   // let n=10;
//   // let displayData=()=>{
//   //   n++;
//   //   alert("Ankit sharma");

//   //   console.log("click ho gaya");
//   //   console.log(n);
//   // }

//   return(
//     <div>
//     <h1>{count} {setCount}</h1>
//       <div onClick={displayData}>PLease Click Button </div>

      
//     </div>
//   )
// }

// function App(){
//   let template ='';
//   let [count, setCount]=useState(1);
//   let [pshow, setPshow]=useState(false);
  
//   if(pshow){
//     template=<>
//     <button onClick={()=>setPshow(!pshow)}>Hide</button>
//     {/* <P>Welcome to Ws</P> */}
//     </>

//   }
//   else{
//     template=<button  className='bg-[red] p-4' onClick={()=>setPshow(!pshow)}>Show</button>
//   }

  

//   return(
//     <div>
//     <h1>{count} {setCount}</h1>
    

      
//     </div>
//   )
// }


// function App(){
//   let [status, setStatus]=useState(false);
//   return(
//     <div className='App'>
//       <button onClick={()=>{setStatus(!status)}}>
//         {(status)? 'Hide' : 'Show'}
//       </button>
//       {
//         (status)? <div className='para'>
//           Welcome to Terniary operator
//         </div> :''
//       }

//     </div>

//   )
// }


// import btnModule from "./Button.module.css"
// function App(){
 
//   let [pstatus, setPstatus] = useState(false);
//   let [menustatus, setMenustatus] = useState(false);

//   return(
//  <div className='App'>
      
    
//     <input type={pstatus? 'text': 'password'}/> <button onClick={()=>{setPstatus(!pstatus)}}>{pstatus? 'Hide':'Show'}</button>
//     <br></br>
//     <button className={btnModule.error}>Error</button>
//     <button className={btnModule.warning}>warning</button>
//     </div>

//   )
// }
// function App(){
//   let [menustatus, setMenustatus] = useState(false);

//   return(
//    <div className='App'>
//     <button className='micon' onClick={()=>setMenustatus(!menustatus)}>
//       {
//         menustatus ?
//         <span>X</span>
//       : <span>+</span>}

      
//       </button>
//     <div className={`menu ${menustatus ? 'activeMenu':''}`}>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Course</li>
//         <li>Gallery</li>
//         <li>Contact</li>
//       </ul>
//     </div>

//    </div>
    
//   )
// }

// const App=()=>{
//   let [time, setTime] = useState()
//   setInterval(() => {
//     let a = new Date().toLocaleTimeString()
//     setTime(a)
//   });

//   return(
//   <>
//   <h1>{time}</h1>
   

//   </>
    
//   )
// }
// function App(){
//   return(
//     <div>
//       <Clock/>
//     </div>
//   )
// }function App(){
//   import img from './image/im.png'

//   function App(){

  
//   return(
//     <div>
//       <Carddiv/>
//       <img src={require('./image/im.png')}/>
//     </div>
//   )
// }





// function ProductItems() {
//   return (
   
//   )
// }

// function card1(){
//   return(
//     <div className='cardItems'>Card Div</div>
//   )
// }
