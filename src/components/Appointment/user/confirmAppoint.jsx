import React, {Component} from "react";
import {Link} from "react-router-dom";
class ConfirmAppoint extends Component{
    state={selectData:this.props.location.state,bookFor:true }

    handleFor=(val)=>{
        let s1 = {...this.state};
        s1.bookFor = val;
        this.setState(s1);
    }
    render(){
        const {selectData,bookFor} = this.state;
        const {hospital,location,doctor,qualifi,date,time,firstName,lastName,email,specztions,mobileNo,DOB,gender} = selectData;

        console.log(selectData);

        return(
            <div className="container-fluid py-5" style={{background:"#e7eeff",height:"auto"}}>
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 Dse2we"> 
                        <div className="row py-3 px-2">
                            <div className="col-sm-6 col-12 sdAwq2 mr-4 border">
                                <div className="dseFre"> <i className="fa-regular fa-calendar fa-xl"></i>  </div>
                                <div className="py-1">
                                    <small style={{fontSize:"14px",fontWeight:"500"}}>Appointment Date</small>
                                    <div style={{color:"#0774a2",fontWeight:"500",fontSize:"14px"}}>{date.monthlong} {date.day}, {date.year}</div>
                                </div>  
                            </div>
                            <div className="col-sm-6 col-12 sdAwq2 border">
                                <div className="dseFre"> <i className="fa-regular fa-clock fa-xl"></i> </div>
                                <div className="py-1">
                                    <small style={{fontSize:"14px",fontWeight:"500"}}>Appointment Time</small>
                                    <div style={{color:"#0774a2",fontWeight:"500",fontSize:"14px"}}>{time}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-2 ">
                            <div className="col-sm-4 col-12 mb-2 text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJABO838SvPqz39uGQ8dWKV19eSR7OE-BYQ&usqp=CAU" width="140px" style={{borderRadius:"50%"}}/>
                            </div>
                            <div className="col-sm-8  col-12">
                                <div style={{color:"#0774a2",fontSize:"20px",fontWeight:"500"}}>{doctor}</div>
                                <small>{qualifi.join(", ")}</small>
                                <div><small style={{fontWeight:"500"}}>{specztions}</small></div>
                            </div>
                        </div>
                        <hr className="m-0 p-0"/>
                        <div className="row py-3 ">
                            <div className="col-sm-4 col-12 text-center">
                                {/* <img src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.064197704573!2d87.02662959033738!3d23.242503030696007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7af36cbad1eab%3A0x7c09e6af494eeb9!2sApollo%20Hospitals%20Information%20Center!5e0!3m2!1sen!2sin!4v1694714469893!5m2!1sen!2sin" width="140px" style={{borderRadius:"50%"}}/> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.064197704573!2d87.02662959033738!3d23.242503030696007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7af36cbad1eab%3A0x7c09e6af494eeb9!2sApollo%20Hospitals%20Information%20Center!5e0!3m2!1sen!2sin!4v1694714469893!5m2!1sen!2sin" width="140px" style={{borderRadius:"50%"}}/>
                            </div>
                            <div className="col-sm-8 col-12 mt-2">
                                <div style={{color:"#0774a2",fontWeight:"500"}}> {location}</div>
                                <small> Apollo Multispecialty Hospitals</small>
                                <div><small style={{color:"#0774a2",fontWeight:"500"}}><i className="fa-solid fa-location-dot mr-2"></i>Get Direction</small></div>
                            </div>
                        </div>
                       
                    </div>

                    
                    <div className="col-lg-6 col-12  mt-4  ">
                        <div className="p-4 Dse2we">
                            <div>
                                <span style={{color:"#0774a2",fontWeight:"700",marginRight:"40px"}}>Booking For:</span>
                                <button className={"khDse4 "+(bookFor?"DSew34":"")} onClick={()=>this.handleFor(true)}>Self</button>
                                <button className={"khDse4 "+(bookFor?"":"DSew34")} onClick={()=>this.handleFor(false)}>Relative</button>
                            
                            </div>
                            <hr className="mt-3 mb-2"/>
                            <small className="fw-bold">UHD's Linked to your mobile no :</small>
                            <div>
                                <select className="form-select sdeZa3" >
                                    <option  >Choose</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <div style={{color:"#0774a2",fontWeight:"700",marginBottom:"10px"}}>My Details</div>
                                <div className="row SDkf43">
                                    <small className="col-3">First Name<span className="float-right">:</span></small>
                                    <small className="col-9">{firstName}</small>
                                </div>
                                <div className="row SDkf43">
                                    <small className="col-3">Last Name<span className="float-right">:</span></small>
                                    <small className="col-7">{lastName}</small>
                                </div>
                                <div className="row SDkf43">
                                    <small className="col-3">MobileNo<span className="float-right">:</span></small>
                                    <small className="col-7">{mobileNo}</small>
                                </div>
                                <div className="row SDkf43">
                                    <small className="col-3">Email<span className="float-right">:</span>hhhy</small>
                                    <small className="col-7">{email}</small>
                                </div>
                                <div className="row SDkf43">
                                    <small className="col-3">DOB<span className="float-right">:</span></small>
                                    <small className="col-7">{DOB}</small>
                                </div>
                                <div className="row SDkf43">
                                    <small className="col-3">Gender<span className="float-right">:</span></small>
                                    <small className="col-7">{gender}</small>
                                </div>
                            </div>
                            <div>
                                <h1></h1>
                            </div>
                        </div>
                        <div className="mt-3">
                            <input type="checkbox"/>
                            <small className="ml-3">I Agree to the <span className="text-primary">Terms & Conditions</span></small>
                        </div>
                        <Link to="/payment"> 
                            <div className="text-center mt-3 rounded" style={{background:"#e86a25"}}>
                                <button className="btn text-white btn-sm">Confirm Appointment</button>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
            </div>
        )
    }

}
export default ConfirmAppoint;