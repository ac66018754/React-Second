import React from 'react';
import { Input,List,Button } from 'antd';

const TodolistUI =(props)=>{
	return(
		<div>			
			<Input  
				placeholder="請輸入文字" 
				style={{width:'300px' }}  
				value={props.value}
				onChange={props.inputchange}
			/>
			<Button type="primary" onClick={props.handleBtnClick}>提交 </Button>
			<List
				style={{margin:'10px'}}
				bordered
				dataSource={props.list}
				renderItem={(item,index)=>(<List.Item onClick={(index)=>{props.delete(index)}}>{item}</List.Item>)}
			/>								
		</div>			
	)	
}

// class TodolistUI extends Component{
// 	render()
// 	{
// 		return(
// 			<div>			
// 				<Input  
// 					placeholder="請輸入文字" 
// 					style={{width:'300px' }}  
// 					value={this.props.value}
// 					onChange={this.props.inputchange}
// 				/>
// 				<Button type="primary" onClick={this.props.handleBtnClick}>提交 </Button>
// 				<List
// 					style={{margin:'10px'}}
// 					bordered
// 					dataSource={this.props.list}
// 					renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.delete(index)}}>{item}</List.Item>)}
// 				/>								
// 			</div>			
// 		)
		
// 	}
// }
export default TodolistUI;
		
