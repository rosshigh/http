
var http = require("http");
var ObservableArray = require("data/observable-array").ObservableArray;
var Observable = require("data/observable").Observable;

let url = "http://www.beer-tutorials.org/beers/beers.json";

function BeerListViewModel() {
    var viewModel = new Observable();
    viewModel.beerList = new ObservableArray();
    viewModel.aVariable = 'aValue';

    viewModel.load = function() {
        console.log('Loading...')

        http.getJSON(url).then(function(result) {
            result.forEach(item => {
                viewModel.push({
                    name: item.name,
                    description: item.description,
                    alcohol: item.alcohol,
                    img: 'http://www.beer-tutorials.org/' + item.img
                })
            });
        }, function(error) {
            console.error(JSON.stringify(error));
        });
    };
    
    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };

    return viewModel;
}

module.exports = BeerListViewModel;