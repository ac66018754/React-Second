import {ADD,INPUT_CHANGE,DELETEITEM,INIT_LIST_ACTION} from './actionTypes.js';
import axios from 'axios';

export const getInputGhangeAction=(value)=>({
	type:INPUT_CHANGE,
	value
});

export const getAddAction=()=>({
	type:ADD
});

export const getDeleteAction=(index)=>({
	type:DELETEITEM,
	index
});

export const init_list_action=(data)=>({
	type:INIT_LIST_ACTION,
	data
})

export const getTodoList=()=>{
	return(dispatch) => {
		axios.get('/todolist.json').then((res)=>{
			const data=res.data;
			const action =init_list_action(data);		 
			dispatch(action);			
		})		
	}
}