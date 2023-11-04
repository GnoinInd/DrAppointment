import {myAxios} from "./helper";
const signUp=(user)=>{
	return myAxios.post('/api/save').then((response)=>response.json())
};