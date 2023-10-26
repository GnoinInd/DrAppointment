import React, {Component} from "react";
import {Link} from "react-router-dom";
class index extends Component{
    state={
        MotherTongue:[{name:"Bihari",link:"#"},{name:"Bengali",link:"#"},{name:"Hindi Delhi",link:"#"},{name:"Hindi",link:"#"},{name:"Gujarati",link:"#"},{name:"Kannada",link:"#"},{name:"Malayalam",link:"#"},{name:"Marathi",link:"#"},{name:"Oriya",link:"#"},{name:"Punjabi",link:"#"},{name:"Rajasthani",link:"#"},{name:"Tamil",link:"#"},{name:"Telugu",link:"#"},{name:"Hindi",link:"#"},{name:"Hindi MP",link:"#"},{name:"Konkani",link:"#"},{name:"Himachali",link:"#"},{name:"Haryanvi",link:"#"},{name:"Assamese",link:"#"},{name:"Kashmiri",link:"#"},{name:"Sikkim Nepali",link:"#"},{name:"Tulu",link:"#"}]
    }
    
    render(){
        const {MotherTongue} = this.state;
        return(
            <div className="">

                <div className="homePage">
                    <header className="header-container">
                        <div className="header--modifier text-white">
                            <div>
                                <Link className="jeevansathi-logo" to="#">
                                    <img height="100%" width="100%"  src="https://static.jeevansathi.com/images/jspc/commonimg/desktopLogo.svg"/>
                                </Link>
                            </div>
                            <div className="menu-navbar">
                                <div className="pl-4">
                                    <ul className="pt-4 menu-list list-inline">
                                        <li>
                                            <Link to="#">BROWSE PROFILES BY<i className="fa-solid fa-chevron-down fa-sm pl-2"></i></Link>
                                            <div className="contentHome">
                                                <div className="browse-Menu">
                                                    <Link class="" id="Mother_Tongue" href="#">Mother Tongue</Link>
                                                    <Link class="" id="Caste" href="#">Caste</Link>
                                                    <Link class="" id="Religion" href="#">Religion</Link>
                                                    <Link class="" id="City" href="#">City</Link>
                                                    <Link class="" id="Occupation" href="#">Occupation</Link>
                                                    <Link class="" id="State" href="#">State</Link>
                                                    <Link class="" id="NRI" href="#">NRI</Link>
                                                    <Link class="" id="College" href="#">College</Link>
                                                </div>
                                                <div className="browseContent">
                                                    <div className="row ml-2 mr-3 mt-1">
                                                        {MotherTongue.map((m1,index)=>(
                                                            <div className="col-4 list-element" key={index}><Link to={m1.link}>{m1.name}</Link></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ml-5" >
                                                <Link to="#">SEARCH<i className="fa-solid fa-chevron-down fa-sm pl-2"></i></Link>
                                        </li>
                                        <li className="ml-5">
                                                <Link to="#">HELP</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-navbar--second">
                                <div className="signupMenu">
                                    <div className="loginPart" style={{width:"160px",lineHeight: "63px"}}>
                                        <Link>LOGIN</Link>
                                    </div>
                                    <div className="registerPart" >
                                        <Link>REGISTER FREE</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="bgImage">

                    </div>
                </div>
                
            </div>
        )
    }

}
export default index;

