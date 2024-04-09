// import React from 'react'
// import img from './imageim.png'
import img from './image/im.png';
import  k from './image/im.png'


 function Carddiv() {
    return (
        <div>
           
           {/* <col lg='3' md='6'>
      <card>
        <card-body>
          <card.Title>Course1</card.Title>
          <card.Text>
            With supporting text below as a natural lead-in to additional content.
          </card.Text>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </card-body>
      </card>

    </col> */}
    
    <div className="container">
      <div className="row">
      <div class="card" >
  <img src="img" class="card-img-top" alt="load img fail"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
    </div>

<img src={require('./image/im.png')}/>
<img src={k}/>



        </div>
    )
}
export default Carddiv;

