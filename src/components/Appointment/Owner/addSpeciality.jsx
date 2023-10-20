import React, {Component} from "react";
import {Link} from "react-router-dom";
import Select from 'react-select';
class AddSpeciality extends Component{
    state={
        optionArr:[{value:"",label:""}],selectedOption: null,
    }
    handleSubmit=()=>{
        let s1 = {...this.state};
        alert("Success")
        this.props.history.push("#");
    }

    render(){
        const {optionArr,selectedOption} = this.state;
        return(
            <div className="py-2" style={{background:"#ffff"}}>
                <div className="container vhsda2 py-3">
                    <h4 className="text-center text-primary" >Add Speciality</h4>
                    <div className="d-flex py-4" > 
                        
                        <div className="arrowc4">
                            <div className="lineW3 lineQ1"></div>
                            <div className="cdsWq3 khcdx1">Build Profile</div>
                        </div>
                        <div className="arrowc4">
                            <div className="lineW3 lineQ1"></div>
                            <div className="cdsWq3 khcdx1">Hospital Details</div>
                        </div>
                        {/* <div className="arrowc4">
                            <div className="lineW3"></div>
                            <div className="cdsWq3 khcdx1">Add Specialist</div>
                        </div> */}
                        <div className="circled4">
                            <div className="cdsWqs3 khcdx1">Add Specialist</div>
                        </div>
                    </div>
                    <div className="row pt-5">
                       
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
                            <label>Area</label>
                            <select className="form-select jnhSel " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Area</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital Name</label>
                            <select className="form-select jnhSel " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Hospital Name</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                    </div>
                    <div className="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Speciality</label>
                            <select className="form-select jnhSel " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose Area</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Sub Speciality</label>
                            <Select isMulti={true} value={selectedOption} onChange={this.handleChange} option={optionArr}/>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <buttom className="btn btn-primary px-5" onClick={()=>this.handleSubmit()}>Save</buttom>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default AddSpeciality;