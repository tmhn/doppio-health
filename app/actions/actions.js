// app/actions/actions.js

import Reflux from 'reflux';

export var RecordAppActions = Reflux.createActions([
	'createRecord',
	'editRecord'
]);

export var ReminderAppActions = Reflux.createActions([
	'editReminder'
]);