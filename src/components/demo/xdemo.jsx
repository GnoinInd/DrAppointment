import React, {Component} from "react";
class Demo extends Component{
    state={ }

    render(){
        const circle2={
            margin: "25px 0",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "18px solid transparent",
            backgroundSize: "100% 100%, 30% 50%, 70% 70%, 40% 50%, 60% 70%",
            backgroundRepeat: "no-repeat",
            backgroundImage: "linear-gradient(white, white),  linear-gradient(30deg, lightgrey 36%, lightgrey 30%),linear-gradient(120deg, #f33e9d 50%, #5c35ea 8%),linear-gradient(300deg, lightgrey 36%, lightgrey 30%),linear-gradient(210deg, #5c35ea 100%, lightgrey 30%)",
            backgroundPosition: "center center, left top, right top, left bottom, right bottom",
            backgroundOrigin: "content-box, border-box, border-box, border-box, border-box",
            backgroundClip: "content-box, border-box, border-box, border-box, border-box",
            transform: "rotate(30deg)",
        }
        return(
            
            < div className="row mx-0 text-light">
                <div className="col-2 pl-3" style={{background:"#040440",height:"100vh"}}>
                    <h5 className="pt-4"><i class="fa-solid fa-circle-stop mx-3"></i>Dashborad</h5>

                    <h6 className="mt-4 py-2 rounded pl-2" style={{background:"#2d2d69"}}><i class="fa-solid fa-table-columns mx-3"></i>Dashborad</h6>
                    <div className="">
                        <div className="my-4"><i class="fa-brands fa-product-hunt mx-3"></i>Product <span className="float-right text-end"><i class="fa-solid fa-chevron-right fa-xs"></i></span></div>
                        <div className="my-4"><i class="fa-solid fa-user mx-3"></i>Customers <span className="float-right"><i class="fa-solid fa-chevron-right fa-xs"></i></span></div>
                        <div className="my-4"><i class="fa-solid fa-coins mx-3"></i>Income <span className="float-right"><i class="fa-solid fa-chevron-right fa-xs"></i></span></div>
                        <div className="my-4"><i class="fa-solid fa-percent mx-3"></i>Promote <span className="float-right"><i class="fa-solid fa-chevron-right fa-xs"></i></span></div>
                        <div className="my-4"><i class="fa-brands fa-hire-a-helper mx-3"></i>Help <span className="float-right"><i class="fa-solid fa-chevron-right fa-xs"></i></span></div>

                    <div>
                            <div className="rounded pl-5 py-1 mb-5" style={{background:"#2d2d69",position:"absolute",bottom:'0'}}>
                                <span className="pr-5">Vishal</span> 
                                <span className="float-right pl-5 pr-2"><i className="fa-solid fa-chevron-down fa-xs"></i></span>
                                <div><small>Project Manager</small></div>
                            </div>

                        </div>
                    </div>

                </div>

                <div div className="col-10" style={{background:"#e3e7f0"}}>
                    <div className="mt-3 text-dark">
                     Hellow Shahrukh 👋 
                        <span className="text-end float-right">
                                <input className="mt-2 mx-3 rounded border-0"type="search" placeholder="Search" aria-label="Search"/>
                        </span>
                    </div>
                
                    <div className="row mt-4 px-3">
                            <div className="col-3">
                                <div className="row bg-white py-3 rounded mx-0">
                                    <div className="col-5">  
                                        <img src="https://imageupload.io/ib/dVBrt5WrUbtnDZ2_1697365542.png" className="p-3" width="90px" style={{background:"#e0ffef",borderRadius:"50%"}} />
                                    </div>
                                    <div className="col-7 px-0 text-dark">
                                        <div className="text-secondary"> Earning</div>
                                        <h3>&#36;198K</h3>
                                        <div className="fw-bold"><span style={{color:"#46a872"}}><i class="fa-solid fa-arrow-up"></i>37.8%</span><span className="text-secondary">this month</span></div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className="row bg-white rounded py-3 mx-0">
                                    <div className="col-5">
                                        <img src="https://imageupload.io/ib/1KbTLUEzNKurpjt_1697386377.png" className="p-3" width="90px" style={{background:"#e7dbff",borderRadius:"50%"}} />
                                    </div>

                                    <div className="col-7 pl-0 text-dark">
                                        <div className="text-secondary">Order</div>
                                        <h3>&#36;2.4K</h3>
                                        <div className="fw-bold"><span style={{color:"#d82e6a"}}><i className="fa-solid fa-arrow-down"></i>2%</span><span className="text-secondary">this month</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row bg-white rounded py-3 mx-0">
                                    <div className="col-5">
                                        <img src="https://imageupload.io/ib/mldHvEyD8TsZgUA_1697391001.png" className="p-3" width="80px" style={{background:"#e0ffef",borderRadius:"50%"}} />
                                    </div>

                                    <div className="col-7 pl-0 text-dark">
                                        <div className="text-secondary">Balance</div>
                                        <h3>&#36;2.4K</h3>
                                        <div className="fw-bold"><span style={{color:"#d82e6a"}}><i className="fa-solid fa-arrow-down"></i>2%</span><span className="text-secondary">this month</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row bg-white rounded py-3 mx-0">
                                    <div className="col-5">
                                        <img src="https://imageupload.io/ib/U83yQDbjNjrmvln_1697423787.png" className="p-3" width="80px" style={{background:"#ffbde2",borderRadius:"50%"}} />
                                    </div>

                                    <div className="col-7 pl-0 text-dark">
                                        <div className="text-secondary">Total Sales</div>
                                        <h3>&#36;89K</h3>
                                        <div className="fw-bold"><span style={{color:"#46a872"}}><i class="fa-solid fa-arrow-up"></i>11%</span><span className="text-secondary">this month</span></div>
                                    </div>
                                </div>
                            </div>

                        
                    </div>  

                    <div className="row mx-0 mt-2 px-3 text-dark" style={{height:"300px"}}>
                        <div className="col-7 bg-white  rounded px-4 py-3">
                                <div className="row">
                                    <div className="col-6">
                                        <h5 className="fw-bold mb-0">Overview</h5>
                                        <small className="text-secondary">Monthly arning</small>
                                    </div>
                                    <div className="col-6">
                                        <small className="float-right bg-light rounded px-1">Quarterly
                                        <i class="fa-solid fa-chevron-down fa-xs px-1"></i>
                                        </small>
                                    </div>
                                </div>
                                <div >
                                    <div className=""> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Jan</small>
                                    </div>
                                    <div className="" style={{marginLeft:"8.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Feb</small>
                                    </div>
                                    <div className="" style={{marginLeft:"16.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Mar</small>
                                    </div>
                                    <div className="" style={{marginLeft:"24.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Apr</small>
                                    </div>
                                    <div className="" style={{marginLeft:"32.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>May</small>
                                    </div>
                                    <div className="" style={{marginLeft:"40.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Jun</small>
                                    </div>
                                    <div className="" style={{marginLeft:"48.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Jul</small>
                                    </div>
                                    <div className="" style={{marginLeft:"56.8%"}}> 
                                        <span className="rounded mb-5 bg-primary" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Aug</small>
                                    </div>
                                    <div className="" style={{marginLeft:"64.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Sep</small>
                                    </div>
                                    <div className="" style={{marginLeft:"72.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Oct</small>
                                    </div>
                                    <div className="" style={{marginLeft:"80.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Nov</small>
                                    </div>
                                    <div className="" style={{marginLeft:"88.8%"}}> 
                                        <span className="rounded mb-5" style={{width:"38px",height:"100px",position:"absolute",bottom:"0",background:"#e3e7f0"}}></span>
                                        <small className="my-3 pl-1" style={{position:"absolute",bottom:"0"}}>Dec</small>
                                    </div>
                                </div>
                                

                                
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4 bg-white rounded p-3">
                                <div>
                                    <h5 className="fw-bold mb-0">Customers</h5>
                                    <small className="text-secondary">Customers that buy products</small>
                                </div>
                                <div className="" style={{marginLeft:"30%"}}>
                                    <div className="fw-bold " style={{width:"80px",position:"absolute",zIndex:"99", margin:"24px 45px "}}>
                                        <span style={{fontSize:"26px"}}>65% </span>
                                        <small className="fw-bold">Total New Customer</small>
                                    </div>
                                    <div style={circle2}></div>   
                                </div> 
                        </div>
                    </div>


                    <div className="mt-3 p-3 bg-white text-dark rounded">
                        <div className="row py-3 ">
                            <div className="col-5 mx-0 fw-bold">Product Sell</div> 
                            <div className="col-2"></div>
                            <div className="col-2 mr-4">
                                <input className="p-2 rounded bg-light border-0"type="search" placeholder="Search" aria-label="Search"/>
                            </div>
                            <div className="col-2 ml-3">
                                <input className="p-2 rounded bg-light border-0"type="Last 30 days"placeholder="Last 30 days" aria-label="Last 30days"/>
                            </div>
                        </div>

                        <div className="row mx-0 py-3 text-secondary">
                            <div className="col-6">Product Name</div> 
                            <div className="col-2">Stock</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Total Sales</div>
                        </div>

                        <div className="row mx-0">
                            <div classname="col-2" style={{width:"120px"}}> 
                                <img src="https://imageupload.io/ib/fAxq0vDxnGG3k58_1697547638.png" className="" height="60px" width="100px"  /> 
                            </div>
                            <div className="col-4"> 
                                <div className="fw-bold">Abstract 3D</div>
                                <small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing.</small>
                            </div> 
                            <div className="col-2 ml-5">32 in inch</div>
                            <div className="col-2 fw-bold">$  45.99</div>
                            <div className="col-2 pl-5 ">20</div>
                        </div>
                        <div className="row mx-0 mt-3">
                            <div classname="col-2" style={{width:"120px"}}> 
                                <img src="https://imageupload.io/ib/MXzUIIcRTryK1Dm_1697548044.png" className="" height="60px" width="100px"  /> 
                            </div>
                            <div className="col-4"> 
                                <div className="fw-bold">Abstract 3D</div>
                                <small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing.</small>
                            </div> 
                            <div className="col-2 ml-5">32 in inch</div>
                            <div className="col-2 fw-bold">$  45.99</div>
                            <div className="col-2 pl-5 ">20</div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}
export default Demo;










