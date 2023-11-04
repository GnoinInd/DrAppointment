import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";

class Membership extends Component{
    state={ }
    render(){
        return(
            <React.Fragment >
                <div className="free-Membership">
                    <div className="microLine"></div>
                    <div className="membership-Title">Free</div>
                    <div className="pb-3 text-center d-flex">
                        <div className="materialIcons pinktick"></div>
                        Browse Profiles
                    </div>
                    <div className="pb-3 text-center d-flex">
                        <div className="materialIcons pinktick"></div>
                        Shortlist & Send Interest
                    </div>
                    <div className="pb-3 text-center d-flex">
                        <div className="materialIcons pinktick"></div>
                        Message and chat with unlimited users
                    </div>
                    <span className="colorGray">
                        <div className="pb-3 text-center d-flex">
                            <div className="materialIcons pinktick2"></div>
                            Get up to 3x more matches daily
                        </div>
                        <div className="pb-3 text-center d-flex">
                            <div className="materialIcons pinktick2"></div>
                            Unlock access to advanced search
                        </div>
                        <div className="pb-3 text-center d-flex">
                            <div className="materialIcons pinktick2"></div>
                            View contact details
                        </div>
                        <div className="pb-3 text-center d-flex">
                            <div className="materialIcons pinktick2"></div> 
                            Make unlimited voice and video calls
                        </div>
                    </span>
                    <div className="freeRegister">Register Free</div>
                </div>
                <div className="paid-Membership">
                    <div className="microLine2"></div>
                    <div className="paid-Membership--Title">Paid</div>
                    <div className="pb-4 text-center d-flex">
                        <div className="materialIcons pinktick3"></div>
                        Browse Profiles
                    </div>
                    <div className="pb-4 text-center d-flex">
                        <div className="materialIcons pinktick3"></div>
                        Shortlist & Send Interest
                    </div>
                    <div className="pb-4 text-center d-flex">
                        <div className="materialIcons pinktick3"></div>
                        Message and chat with unlimited users
                    </div>
                    <div className="pb-4 text-center d-flex">
                        <div className="materialIcons pinktick3"></div>
                        Get up to 3x more matches daily
                    </div>
                    <div className="pb-4 text-center d-flex">
                        <div className="materialIcons pinktick3"></div>
                        Unlock access to advanced search
                    </div>
                    <div className="pb-4 text-center d-flex">
                        <div className="materialIcons pinktick3"></div>
                        View contact details
                    </div>
                    <div className="pb-4 text-center d-flex">
                        <div className="materialIcons pinktick3"></div> 
                        Make unlimited voice and video calls
                    </div>
                    <div className="paidRegister">Browse Membership Plans</div>
                </div>

            </React.Fragment>
              
        );
    }

}
export default Membership;