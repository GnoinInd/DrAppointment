import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import Home from "./user/home";
import  "./style.css";
import Specialization from "./user/specialization";
import Rank from "./user/ranks";
import Hospital from "./user/hospitals";
import ChooseDoctors from "./user/Doctors";
import SignIn from "./user/signIn";
import PatientDetails from "./user/patientDetails";
import MobileVerify from "./user/mobileVerify";
import PaymentDetails from "./user/paymentDetails";
import ConfirmAppoint from "./user/confirmAppoint";

import Admin from "./admin/adminDashboard";
import EducationalDetails from "./admin/educationalDetails";
import AddDoctors from "./admin/addDoctors";
import MobileEmail from "./admin/mobileEmail";
import VryMobile from "./admin/VryMobile";
import VryEmail from "./admin/vryEmail";


import Owner from "./Owner/ownDashboard";
import BuildProfile from "./Owner/buildProfile";
import MobileOtp from "./Owner/mobileOtp";
import MobileGmailVry from "./Owner/mobileGmailVry";
import AddHospital from "./Owner/addHospital";
import AddSpeciality from "./Owner/addSpeciality";
import Profile from "./Owner/profile";
import ChangeShift from "./Owner/changeShift";
import UpLocation from "./Owner/upLocation";
import AddSpecialization from "./Owner/addSpecialization";

import Doctor from "./Doctor/drDashboard";



import BasicDetails from "./Owner/basicDetails";
import Nationality from "./Owner/nationality";
import Communication from "./Owner/communication";
import Address from "./admin/address";


import Xdemo from "./xdemo";




class MainComponent extends Component{
    state={isOpen:false

    }
    componentDidMount(){
        // setTimeout(this.togglePopup, 2000);
    }
    togglePopup=()=>{
        let s1={...this.state};
        s1.isOpen=true;
        this.setState(s1);
    }
    handleClose=()=>{
        let s1={...this.state}; 
        setTimeout(this.togglePopup, 300000);
        !s1.isOpen?s1.isOpen=true:s1.isOpen=false;
        this.setState(s1);
    }
   
    render(){
        const {isOpen} = this.state;
        return(

            <div>
                <Switch>

                    <Route path="/demo" component={Xdemo}/>


                    <Route path="/address" component={Address}/>
                    <Route path="/communication" component={Communication}/>
                    <Route path="/basic" component={BasicDetails}/>

                    {/* Owner */}
                    <Route path="/owner" component={Owner}/>
                    <Route path="/buildProfile" component={BuildProfile}/>
                    <Route path="/mobileVry" component={MobileOtp}/>
                    <Route path="/mobileGmailVry" component={MobileGmailVry}/>
                    <Route path="/addHospital" component={AddHospital}/>
                    <Route path="/addSpeciality" component={AddSpeciality}/>
                    <Route path="/changeShift" component={ChangeShift}/>
                    <Route path="/upLocation" component={UpLocation}/>
                    <Route path="/addSpecialization" component={AddSpecialization}/>

                    {/* Admin  */}
                    <Route path="/profile" component={Profile}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/educationalDetails" component={EducationalDetails}/>
                    <Route path="/addDoctors" component={AddDoctors}/>
                    <Route path="/mobileEmail" component={MobileEmail}/>
                    <Route path="/vryMobile" component={VryMobile}/>
                    <Route path="/vryEmail" component={VryEmail}/>

                    
                    
                    {/* Dr */}
                    <Route path="/doctor" component={Doctor}/>

                    {/* User */}
                    <Route path="/confirmAppoint" component={ConfirmAppoint}/>
                    <Route path="/payment" component={PaymentDetails}/>
                    <Route path="/mobileverify" component={MobileVerify}/>
                    <Route path="/patientDetails" component={PatientDetails}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/chooseDoctors/:hid" component={ChooseDoctors}/>
                    <Route path="/hospitals/:specizId" component={Hospital}/>
                    <Route path="/rank" component={Rank}/>
                    <Route path="/Specialization" component={Specialization}/>
                    <Route path="/home" component={Home}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                <div>
                    {isOpen &&
                    <div className="popup-box">
                        <div className="box">
                            <span className="close-icon" onClick={this.handleClose}>✕</span>
                            {<SignIn/>}
                        </div>
                    </div>
                    }
                </div>
                
            </div>
        );
    }

}
export default MainComponent;