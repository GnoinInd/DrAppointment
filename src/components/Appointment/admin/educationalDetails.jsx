import React, {Component} from "react";
import {Link} from "react-router-dom";
import Select from 'react-select';
class EducationalDetails extends Component{
    state={
        optionArr:[{value:"",label:""}],selectedOption: null,
    }
   
    handleSubmit=()=>{
        alert("Send Success Msg Mobile and Email")
        this.props.history.push("/admin");
    }
    render(){
        const {optionArr,selectedOption} = this.state;
        return(
            <div style={{background:"rgb(230, 230, 230)"}}>
                <div className="container vhsda2">
                <h5 className="fw-bold text-center" >Educational Details</h5>
                    <div className="row mt-3 mx-0">
                        <div className="col-lg-5 col-md-6 col-12 bg-primary rounded py-2">
                            <div className="row text-white">
                                <div className="col-3">
                                    <img className="jfwaS4"  src="https://cdn4.sharechat.com/img_467054_855c14b_1677775143880_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=880_sc.jpg" />            
                                </div>
                                <div className="col-8" style={{fontSize:"14px"}}>
                                    <div>Admin Id</div>
                                    <div>Admin Name</div>
                                    <div>Hospital Name</div>
                                    <div>Designation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Location</label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Location</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>City</label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose City</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Area</label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Area</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Specialization</label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Specialization</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Sub-Specialization</label>
                            <Select isMulti={true} value={selectedOption} onChange={this.handleChange} option={optionArr}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Designation</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>ID</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Show DR Reg. No</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>According to Reg. No</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Educational Type</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Enter Educational Name</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Passing Year</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Start Date</label>
                            <input type="date" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>End Date</label>
                            <input type="date" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link className="btn btn-primary px-5" to="#" onClick={()=>this.handleSubmit()}>Submit</Link>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default EducationalDetails;