import React from 'react'

function Popsconcept({headerInfo, cname, children}) {
  // props ek type ka custome parameter hai parent to child data paucha sakta hai

// function Popsconcept(props) {

  // console.log("He")
  // let {headerInfo,cname}=props; // destructured
  // console.log(headerInfo,cname)
  // console.log(props);

  return (
    <div>Popsconcept {headerInfo.email} {cname} {children}</div>
    // <div>Popsconcept </div>
  )
}

export default Popsconcept