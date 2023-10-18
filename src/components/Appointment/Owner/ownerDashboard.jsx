import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Switch, Route, Redirect } from "react-router-dom";
import ImgLogo from "../imgMenu.png"
import BuildProfile from "./buildProfile";
import MobileOtp from "./mobileOtp";
import MobileGmailVry from "./mobileGmailVry";
import AddHospital from "./addHospital";
import AddSpeciality from "./addSpeciality";
import AddDoctors from "../admin/addDoctors";
import MobileEmail from "../admin/mobileEmail";
import VryMobile from "../admin/VryMobile";
import VryEmail from "../admin/vryEmail";
class Dashboard extends Component{
    state={
        menuList:[
            {name:"Hospital",option:[{name:"Show hospital",link:"#"},{name:"Add Hospital",link:"/owner/buildProfile"},{name:"Update Hospital",link:"#"},{name:"Hospital Notification",link:"#"}]},
            {name:"Location",option:[{name:"Add Location",link:"#"},{name:"Show Location",link:"#"}]},
            {name:"Area",option:[{name:"Show area",link:"#"},{name:"Add area",link:"#"}]},
            {name:"Doctor",option:[{name:"Add doctor",link:"/owner/addDoctors"},{name:"Show doctor",link:"#"}]},
            {name:"Shift",option:[{name:"Add Shift",link:"#"},{name:"Show Shift",link:"#"}]},
            {name:"Specialization",option:[{name:"Show Specialization",link:"#"},{name:"Add Specialization",link:"/addSpecialization"}]},
            {name:"Notification",option:[{name:"Hospital Notification",link:"#"}]},
            {name:"Admin",option:[{name:"Show Admin",link:"#"},{name:"Update",link:"#"},{name:"Add admin",link:"#"}]},
            {name:"My Profile",option:[{name:"About",link:"#"},{name:"Basic Details",link:"#"},{name:"Address Details",link:"#"},{name:"Qualification Details",link:"#"},{name:"Work Experience",link:"#"},{name:"National Identifier",link:"#"},{name:"Language Details",link:"#"},{name:"View Role",link:"#"},{name:"My Photo",link:"#"},]},
            {name:"Role ",option:[{name:"Add Role",link:"#"},{name:"Show Role",link:"#"},{name:"Update Role",link:"#"}]},

        ],
        menuView:-1
    }

    handleChange=(e)=>{}
          
    handleView=(no)=>{
        let s1 = {...this.state};
        s1.menuView = s1.menuView===no?"-1":no;
        this.setState(s1);
    }

    render(){
        const {menuList, menuView} = this.state;
        return(
            <div className="" style={{background:"#00073d"}}>
                <div className="row KCDes3 mx-0" >
                    <div className=" col-8 d-flex px-0">
                        <div><img src="https://www.gnoin.com/images/new/gnoiin%201-2.png" width={130}/></div>
                        <div className="ml-4 pt-2"><span className="DCfdr4"><img src={ImgLogo} className="mr-2" width={30}/>Menu</span></div>
                        <div className="XSdew3 "><i className="fa-regular fa-circle-question mr-2"></i>Home</div>
                        <div className="XSdew3"><i className="fa-regular fa-circle-question mr-2"></i>Help</div>
                    </div>
                    <div className="col-4 JfcSe4">
                        <span><i className="fa-solid fa-bell"></i></span>
                        <span><img src="https://previews.123rf.com/images/gmast3r/gmast3r1503/gmast3r150300010/37887487-businessman-profile-icon-male-portrait-flat.jpg" width={20}  style={{borderRadius:"50%",marginBottom:"8px"}}/></span>
                        <span><i className="fa-solid fa-power-off "></i></span>
                    </div>
                </div>

                <div className="row text-white mx-0">
                    <div className="col-2 p-0">
                        <h6 className="pl-2">Menu</h6>
                        <div className="my-4">
                            <i className="fa-solid fa-magnifying-glass fa-xs pl-2"></i>
                            <input type="text" className="JFDCer2" name="search" value="" placeholder="Search" onChange={this.handleChange}/>
                        </div>

                        <div className="kjSW32">
                            {menuList.map((m1,index)=>(
                                <React.Fragment key={index}>
                                <div className="KHdse4" onClick={()=>this.handleView(index)}>
                                    <i className="fa-solid fa-house-chimney fa-xs"></i>
                                    <span>{m1.name}</span> 
                                    <span className="float-right">
                                        {menuView===index?<i className="fa-solid fa-chevron-right fa-2xs"></i>:<i className="fa-solid fa-chevron-down fa-2xs"></i>}
                                    </span>
                                </div> 
                                {menuView===index&&
                                <div className="mt-1">
                                    {m1.option.map((p1,index)=>(
                                        <Link  to={p1.link}>
                                            <li key={index}><i className="fa-solid fa-house-chimney fa-xs"></i>{p1.name}</li>
                                        </Link>
                                    ))}
                                </div>
                                }
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="col-10 px-0 text-dark bg-white">
                    
                        <Route path="/owner/buildProfile" component={BuildProfile}/>
                        <Route path="/owner/addHospital" component={AddHospital}/>
                        <Route path="/mobileVry" component={MobileOtp}/>
                        <Route path="/mobileGmailVry" component={MobileGmailVry}/>
                        <Route path="/addHospital" component={AddHospital}/>
                        <Route path="/addSpeciality" component={AddSpeciality}/>
                        <Route path="/owner/addDoctors" component={AddDoctors}/>

                        <Route path="/mobileEmail" component={MobileEmail}/>
                        <Route path="/vryMobile" component={VryMobile}/>
                        <Route path="/vryEmail" component={VryEmail}/>

                    </div>
                    
                                
                </div>
               
            </div>
        )
    }

}
export default Dashboard;








