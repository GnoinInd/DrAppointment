import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Country, State, City }  from 'country-state-city';
import http from "../../../services/httpService";
class Hospital extends Component{
    state={hospitals:[],allhospitals:[],prevData:[], pageNo:1,filterHospital:{state:"",city:""},no:0,
            selectData:this.props.location.state,pagination:{indexSt:0,indexEd:5}
       
    }

    async componentDidMount(){
        let response =await http.get("/hospitals");
        let response2 =await http.get("/allhospitals");
        const {data} = response;
        this.setState({hospitals:data,allhospitals:response2.data});
    }
    handleChange=(e)=>{
        const {"currentTarget" : input} = e;
        let s1 = {...this.state};
        // const {state,city} = s1.filterHospital;
        s1.filterHospital[input.name] = input.value;
        s1.filterHospital.city=input.name=="state"?"":s1.filterHospital.city;
       if(input.name=="city"){
        let city = s1.hospitals.find(h1=>h1.statename==s1.filterHospital.state).cities;
        s1.prevData = city.find(h1=>h1.name==s1.filterHospital.city).hospitals;
       }
  
        this.setState(s1);
    }
    handlePage=(page)=>{
        let s1 = {...this.state};
        s1.pageNo = page;
        this.setState(s1);
    }

    
    render(){
        const {hospitals,allhospitals,prevData,filterHospital,selectData,pageNo,pagination} = this.state;
        let {pageSt,pageEd,indexSt,indexEd} = pagination;
        const {state,city} = filterHospital;
        let specizId = this.props.match.params.specizId; 
        let cities = state?hospitals.find(h1=>h1.statename==state).cities:[];
        let hospital = state && city?cities.find(h1=>h1.name==city).hospitals:
                        prevData[0]?prevData:allhospitals.filter(h1=>h1.services.find(s1=>s1==specizId));

        let size = 8;
        let startIndex = (pageNo-1)*size;
        let endIndex = hospital.length>(startIndex +size-1)? (startIndex + size-1):hospital.length-1;
        let hospital1 = hospital.filter((s1,index)=>(index>=startIndex && index<=endIndex));
        let pageArr=[];
        let pageLen = Math.ceil(hospital.length/size);
        for(let i=1;i<=pageLen;i++){pageArr.push(i)}
        let states = State.getStatesOfCountry("IN");

        if(pageNo>0 && pageNo<5){indexSt=0;indexEd=5;}
        else if(pageNo>=5 && pageNo<8){indexSt=3;indexEd=8;}
        else if(pageNo>=8 && pageNo<11){indexSt=6;indexEd=11;}
        else if(pageNo>=11 && pageNo<14){indexSt=9;indexEd=14;}
        else if(pageNo>=14 && pageNo<17){indexSt=12;indexEd=17;}
        else if(pageNo>=17 && pageNo<20){indexSt=15;indexEd=20;}
        else if(pageNo>=20 && pageNo<23){indexSt=18;indexEd=23;}
        else if(pageNo>=23 && pageNo<26){indexSt=21;indexEd=26;}
        else if(pageNo>=26 && pageNo<29){indexSt=24;indexEd=29;}
        else if(pageNo>=29 && pageNo<32){indexSt=27;indexEd=32;}
        else if(pageNo>=32 && pageNo<35){indexSt=30;indexEd=35;}

        
        console.log(pageNo,indexSt,indexEd);
        // console.log(selectData);
        
        return(
            <div className="container-fluid py-3 h" style={{background:"#e7eeff"}}>
                <div className="container jhYgt5">
                    <div className="d-flex mr-4" style={{width:"300px"}}>
                        <select className="form-select cdsAw2" name="state" value={state} onChange={this.handleChange}>
                            <option disabled value="" >Choose Location</option>
                            {hospitals.map((s1,index)=>(
                                <option key={index} style={{textTransform:"capitalize"}}>{s1.statename}</option>
                            ))}
                        </select>
                        <label className="mx-2 mt-1 fw-bold">Location</label>
                    </div>
                    <div className="d-flex kcdSw" style={{width:"300px"}}>
                        <select className="form-select cdsAw2" name="city" value={city} onChange={this.handleChange}>
                            <option disabled value="" >Choose city</option>
                            {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))}
                            
                        </select>
                        <label className="mx-2 mt-1 fw-bold">Area</label>
                    </div>
                </div>

                <div className="mt-2">
                    <div className="row mx-0">
                            {hospital1.map((m1,index)=>(
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-4" key={index}>
                                <Link to={{pathname:`/chooseDoctors/${m1.id}`,state:selectData}}>
                                <div className="fdekiu">
                                    <img  src={m1.img} className="AQW21w" width="100%" height="200px" />
                                    <div className="p-2">
                                        <div className="fw-bold lkSwEd">{m1.name}</div>
                                        <div className="sdWeAa"><i className="fa-solid fa-location-dot mr-1"></i>{m1.location}</div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            ))}
                    </div>
                    <div className="my- vLOJn3 text-">
                    {/* {pageArr.map((p1,index)=>(
                        <React.Fragment>
                        {(pageNo>0&&pageNo<15) && (index>=0 && index<20)?
                            <span className={"kjUde3 "+(pageNo==p1?"text-white bg-dark border-0":"")} key={index} onClick={()=>this.handlePage(p1)}>{p1}</span>
                        :(pageNo>15&&pageNo<30) && (index>=10 && index<30)?<span className={"kjUde3 "+(pageNo==p1?"text-white bg-dark border-0":"")} key={index} onClick={()=>this.handlePage(p1)}>{p1}</span>:""}   
                        </React.Fragment>
                    ))} */}
                  
                    </div>


                    <div className="my-4 text-center">
                    {pageArr.map((p1,index)=>(
                        <React.Fragment>
                        {(index>=indexSt && index<indexEd)?
                            <span className={"kjUde3 "+(pageNo==p1?"text-white bg-dark border-0":"")} key={index} onClick={()=>this.handlePage(p1,index)}>{p1}</span>
                        :""}   
                        </React.Fragment>
                    ))}
                  
                    </div>
                </div>
                
            </div>
        )
    }

}
export default Hospital;


