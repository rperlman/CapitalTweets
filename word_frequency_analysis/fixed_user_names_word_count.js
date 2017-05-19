
// import fs package
var fs = require('fs');


var getOutput = function(){    
    var usernames = [
        "BernieSanders"
    ];

    // TEST
    console.log('test');

    var allUserWords = {};
    var wordOutput = [];

    // loop over all usernames
    for (var x = 0; x < usernames.length; x++) {
        allUserWords.username = usernames[x];
        allUserWords.analysis = {};
        allUserWords.analysis.tweets = [];
        allUserWords.analysis.words = '';
        allUserWords.analysis.text = '';
        
        // TEST
        console.log('test');

        

        var tweet = fs.readFileSync('./'+usernames[x]+'_tweets.json');
        var format = (JSON.parse(tweet));
        var content = format.forEach(function(item){
            allUserWords.analysis.tweets.push(item[2]);
        })
        var justWords = allUserWords.analysis.tweets.reduce(function(previous,current){
            return previous+ ' ' + current;
        });
        allUserWords.analysis.words=justWords.split(' ');
        
        //NEED TO FIX REGULAR EXPRESSION
        var justText = allUserWords.analysis.words.map(function(item){
                return item.toLowerCase().match(/([a-z]+)/g);;
            });

        rejects = [usernames[x].toLowerCase(),'get','out','are','you','will','all', 'be','by','from','that', 'with','is','my', 'on','rt','our','at','https','http','in','co','we','this','it','amp','of','and','but','for','or','they','there','their','to','the','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        justText = justText.filter(function(item){
            return item !== null && rejects.includes(item[0]) === false;
        });
        
        allUserWords.analysis.finalTextArray = justText;
        //console.log(analysis.finalTextArray);
        fs.writeFileSync('./'+usernames[x]+'_allwords.txt',allUserWords.analysis.finalTextArray);

        

        //count the occurance of each word
        var result = justText.reduce(function(previous,current){
            if (current in previous){
                previous[current] += 1;
            }
            else{
                previous[current] = 1;
            }
            return previous;
        }, {});
        
        var words = [];
        
        for (property in result){
            if(result.hasOwnProperty(property) && result[property] >= 25){
                var obj = {word: property, count: result[property]};

                words.push(obj);
            };
        };
        console.log(usernames[x])
        
        //words.filter(function(item){

        //})
        var topWords = {};
        
        topWords.username = usernames[x];
        topWords.sortedWords = words.sort(function(word1, word2){
            return word2.count - word1.count;;
        });
        //console.log(topWords.sortedWords);
        var filteredWords = {};
    
        
        fs.appendFileSync('./word_count_above_25.json', JSON.stringify(topWords));
        //console.log(topWords.sortedWords);
        wordOutput.push(topWords);
    };
    //console.log(wordOutput);
    return wordOutput;
    
};

getOutput();
