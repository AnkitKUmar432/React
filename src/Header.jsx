import React from 'react'
// import CompA from "./CompA";
const Header=()=>{
    // console.log(a.b)
    const user = 'hello';
    
    return (
        <div>
           
            <h1>Welcome to Header Section</h1>
            <p>component{}</p>
            {/* <CompA m={a}/> */}
            <li key={user}>{user}</li>
        </div>
    )
}
// function Header(headerInfo,cname,children){
    // function Header(props,){
    // console.log(props.headerInfo.phone)
    // console.log(props.headerInfo.email)

    // let {headerInfo,cname} = props;
    // console.log(headerInfo,cname);
    
//     return(
//         <div>
//             {children}
//             <h1>Welcome to header file</h1>
//             <h1>{headerInfo.email}{cname}</h1>
//         </div>
//     )
// }
export default Header;