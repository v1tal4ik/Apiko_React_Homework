import { combineReducers } from 'redux';
import {currentMode,taskList} from './reducers';

export default combineReducers({
    currentMode,
    taskList
});

