import React, {Component} from "react";
import {Link} from "react-router-dom";
class AddDoctors extends Component{
    state={

    }


    render(){
        return(
            <div className="" style={{background:"#f2f3f3"}}>
                <div className="container vhsda2 py-3">
                    <h4 className="fw-bold" >Basic Details</h4>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Hospital Name<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Location<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>City<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Area</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Specialization<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Sub-Specialization<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Designation<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>ID</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Title<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
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
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Gender<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Blood Group</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
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