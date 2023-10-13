import React, {Component} from "react";
import {Link} from "react-router-dom";
class Demo extends Component{
    state={
      
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
                            <div className="KHdse4">
                                <span>Dashboard</span> 
                            </div> 
                            <div className="KHdse4">
                                <i className="fa-solid fa-house-chimney fa-lg"></i>
                                <span>Product</span> 
                                <span className="float-right">
                                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                                </span>
                            </div> 
                            <div className="KHdse4">
                                <i className="fa-solid fa-house-chimney fa-lg"></i>
                                <span>Customers</span> 
                                <span className="float-right">
                                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                                </span>
                            </div> 
                            <div className="KHdse4">
                                <i className="fa-solid fa-house-chimney fa-lg"></i>
                                <span>Income</span> 
                                <span className="float-right">
                                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                                </span>
                            </div> 
                            <div className="KHdse4">
                                <i className="fa-solid fa-house-chimney fa-lg"></i>
                                <span>Promote</span> 
                                <span className="float-right">
                                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                                </span>
                            </div> 
                            <div className="KHdse4">
                                <i className="fa-solid fa-house-chimney fa-lg"></i>
                                <span>Help</span> 
                                <span className="float-right">
                                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                                </span>
                            </div> 
                        </div>
                    </div>
                    <div className="col-10 bg-white"></div>
                </div>
               
            </div>
        )
    }

}
export default Demo;








