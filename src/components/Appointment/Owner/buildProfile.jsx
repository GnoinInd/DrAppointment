import React, {Component} from "react";
import {Link} from "react-router-dom";
class BuildProfile extends Component{
    state={

    }
    handleChange=(e)=>{
        const {"currentTarget":input} = e;
        let s1 = {...this.state};
        // s1.mobileForm[input.name] = input.value;
        // this.handleValidate(e);
        this.setState(s1);
        // console.log(hh);
    }

    render(){
        return(
            <div className="py-2" style={{background:"#ffff"}}>
                <div className="container vhsda2 py-2">
                    <h4 className="text-center text-primary" >Build Your Hospital Profile</h4>
                    <div className="d-flex py-4"> 
                        <div className="arrowc4">
                            <div className="lineW3"></div>
                            <div className="cdsWq3 khcdx1">Build Profile</div>
                        </div>
                        <div className="arrowd3">
                            <div className="lineW3"></div>
                            <div className="cdsWq3">Hospital Details</div>
                        </div>
                        {/* <div className="arrowd3">
                            <div className="lineW3"></div>
                            <div className="cdsWq3">Add specialist</div>
                        </div> */}
                        <div className="circled3">
                            <div className="cdsWqs3 ">Add specialist</div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital Name:</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital location:</label>
                            <select className="form-select jnhSel" name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose city</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>City:</label>
                            <select className="form-select jnhSel" name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose city</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */}
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital Area:</label>
                            <select className="form-select jnhSel" name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose city</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */}
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Address line 1:</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Pin Code:</label>
                            <input type="text" className="form-control jnhXd4 w-50" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Phone No.:</label>
                            <input type="text" className="form-control jnhXd4 w-75" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Helpline No:</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Email ID:</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Fax No.:</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Password:</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Re-Enter Password:</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="text-center mt-4">
                    <Link className="btn btn-primary" to="/mobileVry">Register Hospital</Link>
                    </div>
                </div>


                <div>
                          
                </div>
            </div>
        )
    }

}
export default BuildProfile;


