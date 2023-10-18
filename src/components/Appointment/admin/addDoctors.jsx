import React, {Component} from "react";
import {Link} from "react-router-dom";
import Select from 'react-select';
class AddDoctors extends Component{
    state={
        optionArr:[{value:"Abc",label:"Abc"},{value:"Cde",label:"Cde"}],selectedOption: null,
    }


    render(){
        const {optionArr,selectedOption} = this.state;
        return(
            <div className="py-4 " style={{background:"#f2f3f3"}}>
                <div className="container vhsda2">
                    <h4 className="fw-bold" >Basic Details</h4>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Hospital Name<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Location<span className="text-danger"> *</span></label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Location</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>City<span className="text-danger"> *</span></label>
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
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Specialization<span className="text-danger"> *</span></label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Specialization</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Sub-Specialization<span className="text-danger"> *</span></label>
                            <Select isMulti={true} value={selectedOption} onChange={this.handleChange} option={optionArr}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Designation<span className="text-danger"> *</span></label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Designation</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>ID</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Title<span className="text-danger"> *</span></label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Title</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>First Name<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Middle Name<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Last Name</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Preferred Name<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>DOB<span className="text-danger"> *</span></label>
                            <input type="date" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Gender<span className="text-danger"> *</span></label>
                            <div className="mt-2">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input mt-1 mx-2" type="radio" name="gender" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input mt-1 mx-2" type="radio" name="gender" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Blood Group</label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Blood Group</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Password<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Re Enter Password<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        
                    </div>

                    <div className="text-center mt-4 py-3" >
                        <Link className="btn btn-primary px-5" to="/mobileEmail">Next</Link>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default AddDoctors;