import { createAction } from 'redux-actions';

export const addOneFromToTaskList = createAction('TODO_LIST/ADD_ONE_TASK_LIST');
export const editOneFromTaskList = createAction('TODO_LIST/EDIT_ONE_TASK_LIST');
export const removeOneFromTaskList = createAction('TODO_LIST/REMOVE_ONE_TASK_LIST');

export const changeCurrentMode = createAction('MODE/CHANGE_CURRENT_MODE');