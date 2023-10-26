import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import  "./style.css";
import Index from "./index";

class MainComponent extends Component{
    state={
    }
    
    render(){
        return(
            

            <div>
                <Switch>


                    <Route path="/home" component={Index}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                
            </div>
        );
    }

}
export default MainComponent;