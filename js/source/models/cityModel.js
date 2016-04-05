import * as ko from "knockout";
import * as $ from 'jquery';

const CityModel = function(city) {
    const self = this;

    self.name = city.name;
    self.weather = ko.observable('');
    self.error = ko.observable('');

    self.getDetail = function() {
        $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=b2c2abb51c4e73699414acdf1747e4df`)
            .then(data => {
                self.weather(data);
            })
            .then(null, err => {
                //throw err;
                console.error(err);
                self.error('error');
            });
    };
};

export default CityModel;