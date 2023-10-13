import React, {Component} from "react";
import {Link} from "react-router-dom";
class UpdateLocation extends Component{
    state={

    }
    handleChange=()=>{

    }
   
    handleUpdate=()=>{
        alert("Send Success Msg Mobile and Email");
        this.props.history.push("/owner");
    }
    render(){
        return(
            <div className="" style={{background:"rgb(230, 230, 230)"}}>

                <div className="container vhsda2 py-3">
                <h4 className="fw-bold" >Update Location</h4>
                    <div className="row mt-5 mx-0">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital Name</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Designation</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-4 col-8">
                            <label>Id</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Location</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>City</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Area</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
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