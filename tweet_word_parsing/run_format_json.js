var project = require('./format_json_object.js');
var data = project.one();

var file1 = './aguilarpete_tweets'

jsonfile.writeFile(file1, data, function(err){
    console.log(err)
});