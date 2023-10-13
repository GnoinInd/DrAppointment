import React, {Component} from "react";
import {Link} from "react-router-dom";
import ImgLogo from "../imgMenu.png"
class Dashboard extends Component{
    state={
        menuList:[
            {name:"Appointment",option:[{name:"",link:"#"}]},
            {name:"DR Profile",option:[{name:"Set Image",link:"#"},{name:"Update Location",link:"#"},{name:"Update MobileNo",link:"#"},{name:"Update Certificate",link:"#"},{name:"Update email",link:"#"},{name:"Update Password",link:"#"}]},
            {name:"leave",option:[{name:"",link:"#"}]},
            {name:"Attendance",option:[{name:"Timesheet",link:"#"},{name:"View Attendance",link:"#"}]},
            {name:"Shift",option:[{name:"View shift",link:"#"}]},
            {name:"Qualification",option:[{name:"View Qualification",link:"#"},{name:"Add Qualification",link:"#"}]},
            {name:"Specializations",option:[{name:"View Specializations",link:"#"},{name:"Add Specializations",link:"#"}]},
            {name:"Hospital",option:[{name:"View Hospital Details",link:"#"}]},
            {name:"Notification",option:[{name:"Patient Notification",link:"#"},{name:"Admin Notification",link:"#"},{name:"Shift Notification",link:"#"}]},
            
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
                    <div className="col-10 bg-white"></div>
                </div>
            </div>
        )
    }

}
export default Dashboard;








