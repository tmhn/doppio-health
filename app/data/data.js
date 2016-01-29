module.exports = {
	"userInfo": {
		"username": "tom",
		"password": "tom",
		"firstName": "Tom",
		"lastName": "Hanson",
		"age": 21,
		"bloodGroup": 'O+',
		"allergies": "Penecillin",
		"homeBio": "Welcome to DoppioHealth iOS"
	},
	"apps": [{
		"ref": "fruit",
		"title": "Fruit",
		"bundle": "record",
		"component": "Fruit",
		"cats": [{
			"name": "Apple",
			"bio": "Pink Lady",
			"count": 3,
			"frequencyText1": "3x daily"
		}, {
			"name": "Banana",
			"bio": "Candy banana",
			"count": 5,
			"frequencyText1": "4x daily"
		}],
		"bio": "Not nearly enough mangoes"

	}, {
		"ref": "smoking",
		"title": "Smoking",
		"bundle": "record",
		"component": "Smoking",
		"cats": [{
			"name": "Cigarette",
			"bio": "Marlboro",
			"count": 3,
			"frequencyText1": "3x daily"
		}, {
			"name": "Cigar",
			"bio": "Churchill",
			"count": 5,
			"frequencyText1": "4x daily"
		}],
		"bio": "Helping keeping a count on cigarettes"
	}, {
		"ref": "pills",
		"title": "Pills",
		"bundle": "reminder",
		"component": "Pills",
		"cats": [{
			"name": "Paracetamol",
			"bio": "Hospital strength",
			"count": 3,
			"frequencyText1": "7AM - 9AM",
			"frequencyText2": "3PM - 6PM"
		}, {
			"name": "Ibuprofen",
			"bio": "Not too many now",
			"count": 5,
			"frequencyText1": "10AM - 12PM",
			"frequencyText2": "3PM - 6PM"
		}, {
			"name": "Codeine",
			"bio": "Terribly moreish",
			"count": 5,
			"frequencyText1": "8AM - 9AM",
			"frequencyText2": "1PM - 2PM"
		}, {
			"name": "Fluclox",
			"bio": "Not too many now",
			"count": 5,
			"frequencyText1": "11:30AM - 12PM",
		}],
		"bio": "Winter Pill counter"
	}]
};