import React, {Component} from "react";
import {Link} from "react-router-dom";
class VeyMobile extends Component{
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
        alert("Send Success Msg");
        this.props.history.push("/admin");
    }

    
    render(){
        const {mobileForm,errors} = this.state;
        const {mobileNo} = mobileForm;

        return(
            <div className="container-fluid py-4 px-2" style={{background:"#ebebeb",height:"100vh"}}>
                <div className="CGrew2">
                    <div className="px-4 py-3">
                        <h5 className="text-primary">Email Verify</h5>
                        <div>
                            <img width="90%" src="https://imageupload.io/ib/UxMvi6m2zq3aKAA_1696845702.png" />
                        </div> 
                        <div className="form-group">
                            <label className="fw-bold">Verify Email</label>
                            <input type="text" className="form-control"  placeholder=""/>
                        </div> 
                       <div className="text-center my-5">
                            <button className="btn btn-primary btn-sm px-5" onClick={()=>this.handleSubmit()}>Verify Email</button>
                       </div>
                    </div>
                 
                </div>
            </div>
        )
    }

}
export default VeyMobile;
