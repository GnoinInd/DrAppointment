import React, {Component} from "react";
import {Link} from "react-router-dom";
class Index extends Component{
    state={

    }


    render(){


        return(
            <div className="container-fluid " style={{background:"rgb(230, 230, 230)"}}>
                <div className="kmdSe3">
                    <h4 className="kcdfS4">Book An Appointment</h4>
                    
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-12 col-md-6">
                                <div className="sdCfr4"><Link className="mjfcS4" to="/Specialization">Choose Specialization</Link></div>
                                <div className="sdCfr4"><Link className="mjfcS4" to="/">Choose Hospital</Link></div>
                                <div className="sdCfr4"><Link className="mjfcS4" to="/">Choose Location</Link></div>
                                <div className="sdCfr4"><Link className="mjfcS4" to="/">Choose DR</Link></div>
                                <div className="sdCfr4"><Link className="mjfcS4" to="/">Choose by Hospital Category</Link></div>
                                <div className="sdCfr4"><Link className="mjfcS4" to="/">Choose DR by Rating</Link></div>
                            </div>
                            <div className="col-12 col-md-6">
                                
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default Index