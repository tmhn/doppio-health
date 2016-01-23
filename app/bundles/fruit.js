'use strict';

import React from 'react-native';
import Record from './components/record/record';

let {
	Component
} = React;

module.exports = class Fruit extends Component{
	render(){
		var feedItems = [
			{'id': '1', 'name': 'Apple', 'bio': 'Pink Lady', 'count': 3, 'frequencyText': '3x daily'}, 
	    	{'id': '2', 'name': 'Banana', 'bio': 'Normal', 'count': 8, 'frequencyText': '2x daily'}, 
	    	{'id': '3', 'name': 'Strawberries', 'bio': 'Great British', 'count': 2, 'frequencyText': '250g daily'}, 
	    	{'id': '4', 'name': 'Oranges', 'bio': 'Mandarin', 'count': 6}
		];

		return (
			<Record data={feedItems} />
		);
	}
};