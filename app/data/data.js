module.exports = {
	"userInfo": [{
		"username": "tom",
		"password": "tom",
		"firstName": "Tom",
		"lastName": "Hanson",
		"age": 21,
		"homeBio": "Welcome to DoppioHealth"
	}],
	"apps": [{
		"ref": "fruit",
		"title": "Fruit",
		"bundle": "record",
		"component": "Fruit",
		"props": [{
			"name": "Apple",
			"bio": "Pink Lady",
			"count": 3,
			"frequencyText": "3x daily"
		}, {
			"name": "Banana",
			"bio": "Candy banana",
			"count": 5,
			"frequencyText": "4x daily"
		}],
		"bio": "Not nearly enough mangoes"

	}, {
		"ref": "smoking",
		"title": "Smoking",
		"bundle": "record",
		"component": "Smoking",
		"bio": "Helping keeping a count on cigarettes"
	}, {
		"ref": "pills",
		"title": "Pills",
		"bundle": "record",
		"component": "Pills",
		"bio": "Winter Pill counter"
	}]
};