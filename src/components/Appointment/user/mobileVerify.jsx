import React, {Component} from "react";
import {Link} from "react-router-dom";
class MobileVerify extends Component{
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
                        <h5 style={{color:"#e86a25"}}>Mobile Verify Number</h5>

                        <div className="form-group">
                            <label>Mobile Number or Email:</label>
                            <input type="text" className={"form-control "+(errors.mobileNo?"border-danger":"")} name="mobileNo" placeholder="Enter MobileNo/Email" onChange={this.handleChange} onBlur={this.handleValidate}/>
                        </div>
                        <div className="form-group">
                            <label>Please enter verification code(OTP)*:</label>
                            <input type="text" className="form-control"  placeholder="Enter OTP"/>
                            <div className="text-primary text-end"><small>Still not received OTP?</small></div>
                        </div> 
                        <div className="mt-3 text-end" >
                            <button className="dgtrF4 float-start" onClick={()=>this.handleSubmit()}>Submit OTP</button>
                            <button className="dgtrA2">Resend OTP</button>
                        </div>   
                    </div>
                    <div className="row mx-0 mt- pb-3" style={{background:"#dadada"}}>
                        <div className="my-2">Download our <span className="text-primary">Ask</span> <span className="text-warning">Apollo</span> App</div>
                        <div className="col-6"><img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadGoogle.svg" width="100%"/></div>
                        <div className="col-6 text-end"><img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadApple.svg" width="90%"/></div>
                    </div>
                </div>
            </div>
        )
    }

}
export default MobileVerify;