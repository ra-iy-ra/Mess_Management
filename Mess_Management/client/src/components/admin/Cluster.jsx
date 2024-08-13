import React from 'react'

const Cluster = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between', margin:'50px'}}> 
      <div class="card" style={{width: '18rem'}}>
  {/* <img src={img2} class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">OLive </h5>
    {/* <p class="card-text">Fried rice</p>
    <h6>Rs.70</h6> */}
    <a href="/table" class="btn btn-primary">Show Details</a>
  </div>
</div>


<div class="card" style={{width: '18rem'}}>
  {/* <img src={img2} class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">Rose </h5>
    {/* <p class="card-text">Fried rice</p>
    <h6>Rs.70</h6> */}
    <a href="/table" class="btn btn-primary">Show Details</a>
  </div>
</div>




<div class="card" style={{width: '18rem'}}>
  {/* <img src={img2} class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">Jasmine </h5>
    {/* <p class="card-text">Fried rice</p>
    <h6>Rs.70</h6> */}
    <a href="/table" class="btn btn-primary">Show Details</a>
  </div>
</div>
    </div>
  )
}

export default Cluster
