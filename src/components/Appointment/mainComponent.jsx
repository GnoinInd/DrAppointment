import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
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
import ChangeShift from "./admin/changeShift";
import AddSpecialization from "./admin/upSpecialization";
import UpLocation from "./admin/upLocation";


import Owner from "./Owner/ownerDashboard";
import BuildProfile from "./Owner/buildProfile";
import MobileOtp from "./Owner/mobileOtp";
import MobileGmailVry from "./Owner/mobileGmailVry";
import AddHospital from "./Owner/addHospital";
import AddSpeciality from "./Owner/addSpeciality";
import Profile from "./Owner/profile";

import Doctor from "./Doctor/drDashboard";



import BasicDetails from "./Owner/basicDetails";
import Nationality from "./Owner/nationality";
import Communication from "./Owner/communication";
import Address from "./admin/address";



import Tesst from "../demo/test";

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



                    <Route path="/address" component={Address}/>
                    <Route path="/communication" component={Communication}/>
                    <Route path="/basic" component={BasicDetails}/>

                    {/* Owner */}
                    <Route path="/owner" component={Owner}/>
                    <Route path="/owner/buildProfile" render={() => <Owner><BuildProfile/></Owner>}/>
                    <Route path="/mobileVry" render={() => <Owner><MobileOtp/></Owner>}/>
                    <Route path="/mobileGmailVry" render={() => <Owner><MobileGmailVry/></Owner>}/>
                    <Route path="/addHospital" render={() => <Owner><AddHospital/></Owner>}/>
                    <Route path="/addSpeciality" render={() => <Owner><AddSpeciality/></Owner>}/>

                    <Route path="/owner/addDoctors" render={() => <Owner><AddDoctors/></Owner>}/>
                    <Route path="/mobileEmail" render={() => <Owner><MobileEmail/></Owner>}/>
                    <Route path="/vryMobile" render={() => <Owner><VryMobile/></Owner>}/>
                    <Route path="/vryEmail" render={() => <Owner><VryEmail/></Owner>}/>

                    
                    
                    {/* Admin  */}
                    <Route path="/admin" component={Admin}/>

                    <Route path="/admin/addDoctors" render={() => <Admin><AddDoctors/></Admin>}/>
                    <Route path="/admin/educationalDetails" render={() => <Admin><EducationalDetails/></Admin>}/>
                    <Route path="/mobileEmail" render={() => <Admin><MobileEmail/></Admin>}/>
                    <Route path="/vryMobile" render={() => <Admin><VryMobile/></Admin>}/>
                    <Route path="/vryEmail" render={() => <Admin><VryEmail/></Admin>}/>
                    <Route path="/admin/upSpecialization" render={() => <Admin><AddSpecialization/></Admin>}/>
                    <Route path="/admin/changeShift" render={() => <Admin><ChangeShift/></Admin>}/>
                    <Route path="/admin/upLocation" render={() => <Admin><UpLocation/></Admin>}/>
                    <Route path="/admin/buildProfile" render={() => <Admin><BuildProfile/></Admin>}/>
                    <Route path="/mobileVry" render={() => <Admin><MobileOtp/></Admin>}/>
                    <Route path="/mobileGmailVry" render={() => <Admin><MobileGmailVry/></Admin>}/>
                    <Route path="/addHospital" render={() => <Admin><AddHospital/></Admin>}/>
                    <Route path="/addSpeciality" render={() => <Admin><AddSpeciality/></Admin>}/>

                                   
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