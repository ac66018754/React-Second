import React, { Component } from 'react';
import 'antd/dist/antd.css';

import store from './store/index.js';
import TodolistUI from './TodolistUI';
import axios from 'axios';

//import {ADD,INPUT_CHANGE,DELETEITEM,INIT_LIST_ACTION} from './store/actionTypes.js'; 
import {getInputGhangeAction,getAddAction,getDeleteAction,init_list_action} from './store/actionCreators.js';

class Todolist extends Component{

	constructor(props){
		super(props);
		this.state=store.getState();
		this.inputchange=this.inputchange.bind(this);
		this.storeChange=this.storeChange.bind(this);
		this.handleBtnClick=this.handleBtnClick.bind(this);
		this.delete=this.delete.bind(this);
		store.subscribe(this.storeChange);
	}

	render(){
		return(
			<TodolistUI 
				value={this.state.inputValue}
				inputchange={this.inputchange}
				handleBtnClick={this.handleBtnClick}
				list={this.state.list}
				delete={this.delete}
			/>
		)
	}
	componentDidMount(){
		axios.get('/todolist.json').then((res)=>{
			const data=res.data;
			const action =init_list_action(data);		 
			store.dispatch(action);			
		})			
		
		
		// axios.get('/todolist.json').then((res)=>{
		// 	const action={
		// 		type:'ajaxAdd',
		// 		res
		// 	};
		// 	console.log(res.data)
		// 	store.dispatch(action);			
		// })
	}
	handleBtnClick()
	{
		const action=getAddAction();
		store.dispatch(action);
	}
	inputchange(e)
	{
		const action=getInputGhangeAction(e.target.value); //會return type value等
		store.dispatch(action);
		// const action={
		// 	type:INPUT_CHANGE,
		// 	value:e.target.value
		// };
		
	}
	delete(index)
	{
		const action=getDeleteAction(index);
		store.dispatch(action);
	}	
	storeChange()
	{
		this.setState(store.getState());
	}

}
export default Todolist;