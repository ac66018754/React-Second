import {ADD,INPUT_CHANGE,DELETEITEM,INIT_LIST_ACTION} from './actionTypes.js';

const defaultState={ 
 	inputValue:'',
 	list:[]
 }

//reducer可以接收state，但不能修改state

 const reducer= (state = defaultState,action)=>{
 	if(action.type===INPUT_CHANGE){
 		const newState = JSON.parse(JSON.stringify(state));  //copy
 		newState.inputValue = action.value;  //change
 		return newState;
 	}
 	if(action.type===ADD){
 		const newState=JSON.parse(JSON.stringify(state));//copy
 		newState.list.push(newState.inputValue); //change list
 		newState.inputValue=''; //change input
 		return newState;
 	}
	if(action.type===DELETEITEM){
 		const newState=JSON.parse(JSON.stringify(state));//copy
 		newState.list.splice(action.index,1); //change list
 		return newState;
 	} 
    if(action.type===INIT_LIST_ACTION){
        const newState=JSON.parse(JSON.stringify(state));//copy
        newState.list=action.data; //change list
        return newState;

    }

    // if(action.type==='ajaxAdd'){
    //     const newState=JSON.parse(JSON.stringify(state));//copy
    //     newState.list=action.res.data; //change list
    //     return newState;

    //     return()=>{
    //         axios.get('/todolist.json').then((res)=>{
                           
    //         })            
    //     }
    // }     
 	return state;
 }
 export default reducer;