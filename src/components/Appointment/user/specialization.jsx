import React, {Component} from "react";
import {Link} from "react-router-dom";
import http from "../../../services/httpService";
class Specialization extends Component{
    state={
        specztions:[],pageNo:1,findSpeztion:{speci:"",search:""},
    }

    async componentDidMount(){
        let response =await http.get("/specztions");
        const {data} = response;
        console.log(data);
        this.setState({specztions:data});
    }
    
    handlePage=(page)=>{
        let s1 = {...this.state};
        s1.pageNo = page;
        this.setState(s1);
    }
    handleChange=(e)=>{
        const {"currentTarget":input} = e;
        let s1 = {...this.state};
        s1.findSpeztion[input.name] = input.value;
        this.setState(s1);
        // console.log(hh);
    }
    handleSrch=()=>{
        let s1 = {...this.state};
        s1.findSpeztion = s1.search?s1.specztions.filter(sp=> sp.indexOf(s1.search)>=0?true:false):s1.specztions;
        this.setState(s1);
    }


    render(){
        const {specztions,findSpeztion,arrSpeci,pageNo} = this.state;
        const {speci,search} = findSpeztion;
        let size = 6;
        let valueArr = speci?specztions.filter(s1=>s1.name===speci):specztions;
        let startIndex = (pageNo-1)*size;
        let endIndex = specztions.length>(startIndex +size-1)? (startIndex + size-1):specztions.length-1;
        let specztions1 = valueArr.filter((s1,index)=>(index>=startIndex && index<=endIndex));
        // console.log(arrSpeci1);
        let pageArr=[];
        let pageLen = Math.ceil(specztions.length/size);
        for(let i=1;i<=pageLen;i++){pageArr.push(i)}
        // console.log(search);



        return(

            <div className="container-fluid py-3" style={{background:"#e7eeff "}}>
               
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-5 col-10" >
                            <select className="form-select cdsAw2" name="speci" value={speci} onChange={this.handleChange}>
                                <option value="" disabled >Choose Specialization</option>
                                {specztions.map((s1,index)=>(
                                    <option key={index}>{s1.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-lg-7 col-sm-5 col-10 kjhds3 d-flex">
                            <div className="njCds4" >
                                <input className="form-control sdWqe3" type="text" name="search"  placeholder="Search..." autoComplete="off" onChange={this.handleChange} />  
                            </div>
                            <div className="">
                                <button className="cgDSe4" onClick={()=>this.handleSrch()}><i className="fa-solid fa-magnifying-glass" ></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="row">
                    {specztions1.map((sp,index)=>(
                        <div className="col-lg-4 col-sm-6 col-12 mt-5 " key={index}>
                        <Link to={{pathname:`/hospitals/${sp.id}`,state:{specztions:sp.name}}}>
                            <div className="fdeAw3">
                                <div className="KCds32" style={{backgroundImage:`linear-gradient(to bottom, transparent 82%, #000000bd 90%, #000000 100%),url("${sp.img}")`}}>
                                    <div className="laSew3">{sp.name}</div>
                                </div>
                                {/* <img src={sp.img} width="100%" height="284px" className="rounded" />  */}
                               
                            </div>
                            </Link>
                        </div>
                    ))}
                    </div>
                    <div className="my-4 text-center">
                    {valueArr.length>size? 
                    <React.Fragment>
                    {pageArr.map((p1,index)=>(
                        <span className={"kjUde3 "+(pageNo==p1?"text-white bg-dark border-0":"")} key={index} onClick={()=>this.handlePage(p1)}>{p1}</span>
                    ))}
                    </React.Fragment>
                    :""}
                        
                    </div>
                </div>
                

            </div>
        )
    }

}
export default Specialization;
