import {takeEvery,put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes.js';
import axios from 'axios';
import {init_list_action} from './actionCreators';

function* getInitList(){
	try{
		const res =yield axios.get('todolist.json');
		const action =init_list_action(res.data);
		yield put(action);
	}
	catch(e)
	{
		alert('網路請求失敗');
	}
				
}

function* mySaga() {
	yield takeEvery (GET_INIT_LIST,getInitList);
}

export default mySaga;