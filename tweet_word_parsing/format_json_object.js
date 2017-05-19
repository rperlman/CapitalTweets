var input = require('./aguilarpete_tweets.json');

var project = {};

project.one = function(){
    var treatment = function(element){
        var obj = {};
        obj.id = element[0];
        obj.date = element[1];
        obj.tweet = element[2];
        return obj;
    };
    return input.map(treatment);
};

module.exports = project;