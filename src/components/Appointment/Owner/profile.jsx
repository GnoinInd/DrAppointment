import React, {Component} from "react";
import {Link} from "react-router-dom";
class MobileVerify extends Component{
    state={
        mobileForm:{mobileNo:""},errors:{},selectData:this.props.location.state,
    }

    handleChange=(e)=>{
        const {"currentTarget":input} = e;
        let s1 = {...this.state};
        s1.mobileForm[input.name] = input.value;
        this.handleValidate(e);
        this.setState(s1);
        // console.log(hh);
    }
    handleSubmit=()=>{
        let s1 = {...this.state};
        alert("Success")
        this.props.history.push("/admin");
    }
    
    render(){
        const {mobileForm,errors} = this.state;
        const {mobileNo} = mobileForm;

        return(
            <div className="" style={{background:"#ebebeb"}}>
                
                    <div className="container">
                    <div className="px-4 py-3">
                        <div className="row mt-5 mx-0">
                            <div className="col-lg-4 col-md-6 col-11 bg-primary rounded py-2">
                                <div className="row text-white">
                                    <div className="col-4 ">
                                        <img className="jfwaS4" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />            
                                    </div>
                                    <div className="col-8" >
                                        <small>12541-2541</small>
                                        <h5>Vishal Kumar</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Hospital Name</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Location</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>City</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Area</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Specialization</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Sub-Specialization</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Designation</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>ID</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Name</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Reg No.</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Password</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Re enter password</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                    </div>
                        <div className="mt-5 mb-3 text-center" >
                            <button className="btn btn-primary btn-sm px-5" onClick={()=>this.handleSubmit()}>Next</button>
                        </div>   
                    </div>
                </div>
                
            </div>
        )
    }

}
export default MobileVerify;
