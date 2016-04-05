import * as ko from 'knockout';
import CityModel from './cityModel';

const initialCities = [
    {
        name: "Minsk"
    },
    {
        name: "London"
    },
    {
        name: "Moscow"
    }
];

const WeatherModel = function(initialCities) {
    const self = this;

    self.cities = ko.observableArray(initialCities.map(item => new CityModel(item)));
    self.newCity = ko.observable('');
    self.currentCity = ko.observable('');

    self.addCity = function() {
        if (self.newCity() !== '') {
            let city = new CityModel({
                name: self.newCity()
            });
            self.changeCurrentCity(city);
            self.cities.push(city);
            self.newCity("");
        }
    };

    self.changeCurrentCity = function(city) {
        self.currentCity(city);
        if(self.currentCity()) {
            self.currentCity().getDetail();
        }
    };

    self.removeCity = function(city) {
        self.cities.remove(city);
        if (self.currentCity().name === city.name) {
            self.changeCurrentCity(self.cities()[0]);
        }
    };

    self.changeCurrentCity(new CityModel(initialCities[0]));
};

ko.applyBindings(new WeatherModel(initialCities));