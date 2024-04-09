import React, { useState, useEffect } from 'react'


// function UseEffect() {

//     const [color, setColor] = useState('white')

//     const changeColor=()=>{
//         setColor(color=== 'white'? 'lightblue': 'white')
//     }
//     let [open, setOpen] = useState(false);

//   return (
//     <div>
//         <div style={{backgroundColor: color, width: '100%', height:'100vh'}}>
//             <button onClick={changeColor}>change color</button>
//         </div>
//     </div>


// function UseEffect() {
//     let [count, setCount] = useState(0);
//     let [data, setData] = useState('hello')

//     const fun1 = () => {
//         setCount(count + 1);
//         setData('h');
//     }
//     useEffect(() => {
//         alert("i am clicked");
//     },[]);

//     return (
//         <div>

//             <p>{count}</p>
//             <h3 id='one'>{data}</h3>
//             <button onClick={fun1}>Click kro</button>

//         </div>
//     )
// }
function UseEffect() {
    let [count, setCount] = useState(0);
    let [data, setData] = useState(0)

 
    useEffect(() => {
        alert("i am clicked");
        console.log("hellow");
    },[count]);

    return (
        <div>

            
            
            <button onClick={()=>{setCount(count+1)}}>Click kro1{count}</button>
            <button onClick={()=>{setData(data+1)}}>Click kro2{data}</button>

        </div>
    )
}

//   {/*  user effect router dom filter       */}





export default UseEffect
