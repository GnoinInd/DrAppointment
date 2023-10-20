import React, {Component} from "react";
import {Link} from "react-router-dom";
class UpdateLocation extends Component{
    state={

    }
    handleChange=()=>{

    }
   
    handleUpdate=()=>{
        alert("Send Success Msg Mobile and Email");
        this.props.history.push("/admin");
    }
    render(){
        return(
            <div style={{background:"#ffff"}}>

                <div className="container vhsda2 py-2">
                <h5 className="fw-bold text-center" >Update Location</h5>
                    <div className="row mt-3 mx-0">
                        <div className="col-lg-5 col-md-6 col-12 bg-primary rounded py-2">
                            <div className="row text-white">
                                <div className="col-3 Zaaq21 mt-3">
                                    <img className="jfwaS4"  src="https://cdn4.sharechat.com/img_467054_855c14b_1677775143880_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=880_sc.jpg" />            
                                </div>
                                <div className="col-8 Zaaq21" style={{fontSize:"14px"}}>
                                    <div>Dr Id</div>
                                    <div>Dr Name</div>
                                    <div>Designation</div>
                                    <div>Qualification</div>
                                    <div>Contact No</div>
                                    <div>Specialist</div>
                                    <div>Location</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Hospital Name</label>
                            <select className="form-select jnhSel" name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Hospital Name</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Designation</label>
                            <select className="form-select jnhSel " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Designation</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-2 col-md-4 col-8">
                            <label>Id</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Current Location</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <hr/>
                    
                    <div className="row kjhds3">
                    <h6 className="fw-bold mb-4">Update New Location</h6>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Location</label>
                            <select className="form-select jnhSel " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Location</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>City</label>
                            <select className="form-select jnhSel " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose City</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Area</label>
                            <select className="form-select jnhSel " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Area</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                    </div>        
                    <div className="text-center mt-4">
                        <Link className="btn btn-primary px-5" to="#" onClick={()=>this.handleUpdate()}>Update</Link>
                    </div>
                </div>
                
            </div>
        )
    }

}
export default UpdateLocation;