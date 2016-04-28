#DoppioHealth
React Native iOS Application developed for my undergraduate dissertation project

iOS Application communicating with [Doppio](https://github.com/tmhn/doppio)

##Installation
```bash
git clone

cd DoppioHealth

npm install

npm start

open ios/DoppioHealth.xcodeproj
```

####Purpose

The purpose of this project is to allow healthcare professionals to produce small _HealthBits_ for patients that they can use to monitor their health and lifestyle. 

####HealthBits

The healthcare professional generates the _HealthBits_ from the Doppio website, the _HealthBits_ can then be viewed by the mobile application. 

####Bundles

The options for _Bundles_ are Regime, Record, Reminder


####Coding Style

Coding style for DoppioHealth has been inspired by [Airbnb's React Style Guide](https://github.com/airbnb/javascript/tree/master/react) and [Team Oauth](https://github.com/team-oath/uncovery/wiki/React-Native-Style-Guide)

####Principles

* DoppioHealth consumes a Theme file that is a collection of all styles, keeping components lightweight


####Further Work
_\( not to be confused with [ToDos](https://github.com/tmhn/doppio-health/blob/master/todo.md) \)_

* Integrate with an auto-updater library to allow users to recieve specific updates
* Danger Levels - If you have taken a medicine, then an alert will show if you are close to the recommended dosage


