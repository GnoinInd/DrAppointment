import React, {Component} from "react";
import {Link} from "react-router-dom";
class MobileGmailVry extends Component{
    state={
        mobileForm:{mobileNo:""},errors:{},selectData:this.props.location.state
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
        let errors = this.validateAll();
        if(this.isValid(errors)){
            console.log(s1.patientForm);
            // this.postData("/",s1.mobileForm)
            this.props.history.push({pathname:"/confirmAppoint",state:s1.selectData});
        }
        else {
            s1.errors = errors;
        }
        this.setState(s1);
    }
    handleValidate=(e)=>{
        let {currentTarget:input} = e;
        let s1 = {...this.state};
        switch(input.name){
            case "mobileNo":
                s1.errors.mobileNo = this.validateMobileNo(input.value);
                break;
            default:
                break;
        }  
    }
    isValid=(errors)=>{
        let keys = Object.keys(errors);
        let count = keys.reduce((acc,curr)=>(errors[curr]?acc+1:acc),0);
        return count==0;
    }
    
    validateAll=()=>{
        let {mobileNo} = this.state.mobileForm;
        let errors={};
        errors.mobileNo = this.validateMobileNo(mobileNo);
        return errors;
    }
    validateMobileNo=(mobileNo)=>(!mobileNo?"mobileNo must be entered":isNaN(mobileNo)?
    "Invalid Input":mobileNo.length<10 || mobileNo.length>10?"mobileNo should have minimum 10 Digits":"")
    
    
    render(){
        const {mobileForm,errors} = this.state;
        const {mobileNo} = mobileForm;

        return(
            <div className="container-fluid py-4 px-2" style={{background:"#ebebeb",height:"100vh"}}>
                <div className="CGrew2">
                    <div className="px-4 py-3">
                        <h5 className="text-primary">Mobile Verify</h5>
                        <div>
                            <img width="90%" src="https://imageupload.io/ib/UxMvi6m2zq3aKAA_1696845702.png" />
                        </div>
                        <div className="form-group">
                            <label className="fw-bold">Verify Mobile</label>
                            <input type="text" className="form-control" name="mobileNo" onChange={this.handleChange} onBlur={this.handleValidate}/>
                        </div>
                        <div className="bg-primary py-2 text-center rounded mb-5 text-white" onClick={()=>this.handleSubmit()} style={{cursor:"pointer",fontSize:"14px"}}>
                            Verify Mobile
                        </div>
                        
                        <div className="form-group">
                            <label className="fw-bold">Verify Email</label>
                            <input type="text" className="form-control"  placeholder=""/>
                            <div className="text-primary text-end"></div>
                        </div> 
                        <Link to="/addHospital">
                            <div className="bg-primary py-2 text-center rounded mb-5 text-white" onClick={()=>this.handleSubmit()} style={{cursor:"pointer",fontSize:"14px"}}>
                                Verify Email
                            </div>
                        </Link>
                    </div>
                 
                </div>
            </div>
        )
    }

}
export default MobileGmailVry;
