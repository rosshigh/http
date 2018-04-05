
var BeerListViewModel = require("./main-view-model");
var observableModule = require("data/observable");

var viewModel = new BeerListViewModel();
var pageData = new observableModule.fromObject({
    beerList: viewModel
});

function onNavigatingTo(args) {
    
    viewModel.load();

    var page = args.object;
    page.bindingContext = pageData;
}
exports.onNavigatingTo = onNavigatingTo;