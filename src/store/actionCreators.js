import {ADD,INPUT_CHANGE,DELETEITEM,INIT_LIST_ACTION,GET_INIT_LIST} from './actionTypes.js';
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
//()=>()函數 {}對象

export const getInitList =()=>({
	type:GET_INIT_LIST

	})
