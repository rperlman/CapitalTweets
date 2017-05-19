
var getOutput = function(){    
    var usernames = [
    "SenatorRounds",
    "SenatorBaldwin",
    "SenJohnBarrasso",
    "SenBennetCO",
    "SenBlumenthal",
    "RoyBlunt",
    "CoryBooker",
    "JohnBoozman",
    "SenSherrodBrown",
    "SenatorBurr",
    "SenatorCantwell",
    "SenCapito",
    "SenatorCardin",
    "SenatorCarper",
    "SenBobCasey",
    "BillCassidy",
    "SaxbyChambliss",
    "SenThadCochran",
    "SenatorCollins",
    "ChrisCoons",
    "SenBobCorker",
    "SenBobCorker",
    "SenCortezMasto",
    "SenTomCotton",
    "MikeCrapo",
    "SenTedCruz",
    "SteveDaines",
    "SenDonnelly",
    "SenDuckworth",
    "SenatorDurbin",
    "SenatorEnzi",
    "joniernst",
    "SenFeinstein",
    "SenatorFischer",
    "JeffFlake",
    "SenFranken",
    "SenCoryGardner",
    "SenGillibrand",
    "GrahamBlog",
    "ChuckGrassley",
    "SenKamalaHarris",
    "SenatorHassan",
    "senorrinhatch",
    "MartinHeinrich",
    "SenatorHeitkamp",
    "SenDeanHeller",
    "maziehirono",
    "SenJohnHoeven",
    "PattyMurray",
    "SenatorIsakson",
    "timkaine",
    "JohnKennedyLA",
    "SenAngusKing",
    "amyklobuchar",
    "SenatorLankford",
    "SenatorLeahy",
    "SenMikeLee",
    "Sen_JoeManchin",
    "senmarkey",
    "SenJohnMcCain",
    "clairecmc",
    "SenateMajLdr",
    "SenatorMenendez",
    "SenJeffMerkley",
    "JerryMoran",
    "lisamurkowski",
    "ChrisMurphyCT",
    "PattyMurray",
    "SenBillNelson",
    "RandPaul",
    "sendavidperdue",
    "SenGaryPeters",
    "robportman",
    "SenJackReed",
    "SenatorRisch",
    "SenPatRoberts",
    "SenRonJohnson",
    "SenatorRounds",
    "marcorubio",
    "BernieSanders",
    "BenSasse",
    "brianschatz",
    "SenSchumer",
    "SenatorTimScott",
    "SenatorShaheen",
    "SenShelby",
    "SenStabenow",
    "lutherstrange",
    "SenDanSullivan",
    "SenatorTester",
    "SenJohnThune",
    "ThomTillis",
    "SenToddYoung",
    "SenToomey",
    "SenatorTomUdall",
    "ChrisVanHollen",
    "MarkWarner",
    "SenWarren",
    "SenWhitehouse",
    "SenatorWicker",
    "RonWyden",
    "HurdOnTheHill ",
    "JimPressOffice",
    "Rep_Tom_Garrett",
    "RepAbraham",
    "RepBuddyCarter",
    "RepCurbelo",
    "repdavidkustoff",
    "RepDonBacon",
    "RepDWStweets",
    "RepEspaillat",
    "RepJohnDuncanJr",
    "RepKClark",
    "RepKenBuck",
    "RepKihuen",
    "repmarkpocan",
    "RepMiaLove",
    "RepMikeBishop",
    "RepRubenGallego",
    "RepRutherfordFL",
    "RepSeanMaloney",
    "RepTimWalz",
    "USRepLong",
    "USRepRickNolan",
    "USRepRodney",
    "WarrenDavidson",
    "aguilarpete",
    "AustinScottGA08",
    "BennieGThompson",
    "BettyMcCollum04",
    "BillPascrell",
    "boblatta",
    "BradSherman",
    "Call_Me_Dutch",
    "cathymcmorris",
    "chelliepingree",
    "Clyburn",
    "ConawayTX11",
    "congbillposey",
    "CongBoyle",
    "CongCulberson",
    "CongMikeSimpson",
    "CongPalazzo",
    "CongressmanGT",
    "CongressmanHice",
    "CongressmanRaja",
    "CongressmanRuiz",
    "dandonovan_ny",
    "DarrellIssa",
    "daveloebsack",
    "davereichert",
    "DesJarlaisTN04",
    "DonaldNorcross",
    "DorisMatsui",
    "DrNealDunnFL2",
    "DrPhilRoe",
    "farenthold",
    "FrankPallone",
    "garretgraves",
    "GerryConnolly",
    "GKButterfield",
    "GOPLeader",
    "gracenapolitano",
    "GreggHarper",
    "GregoryMeeks",
    "HerreraBeutler",
    "JacksonLeeTX18",
    "jahimes",
    "janschakowsky",
    "jaredpolis",
    "jasoninthehouse",
    "JeffFortenberry",
    "Jim_Jordan",
    "JimLangevin",
    "JoaquinCastrotx",
    "JudgeCarter",
    "JudgeTedPoe",
    "JuliaBrownley26",
    "justinamash",
    "keithellison",
    "KeithRothfus",
    "KenCalvert",
    "LacyClayMO1",
    "LamarSmithTX21",
    "leezeldin",
    "louiseslaughter",
    "MacTXPress",
    "MarioDB",
    "MarkAmodeiNV2",
    "MarshaBlackburn",
    "MaxineWaters",
    "michaelcburgess",
    "mikecapuano",
    "MikeKellyPA",
    "NancyPelosi",
    "nikiinthehouse",
    "NitaLowey",
    "NormaJTorres",
    "NydiaVelazquez",
    "PatrickMcHenry",
    "PatTiberi",
    "PeteOlson",
    "PeterRoskam",
    "PeterWelch",
    "PeteSessions",
    "Raul_Labrador",
    "Rep_DevinNunes",
    "Rep_Hunter",
    "rep_stevewomack",
    "RepAdams",
    "RepAdamSchiff",
    "RepAdamSmith",
    "RepAdrianSmith",
    "RepAlexMooney",
    "RepAlGreen",
    "RepAlLawsonJr",
    "RepAmata",
    "RepAndreCarson",
    "RepAndyBarr",
    "RepAndyBiggsAZ",
    "RepAndyHarrisMD",
    "RepAnnaEshoo",
    "RepAnnieKuster",
    "RepAnnWagner",
    "RepAnthonyBrown",
    "RepArrington",
    "RepBarbaraLee",
    "RepBarragan",
    "RepBeatty",
    "repbenraylujan",
    "RepBera",
    "RepBetoORourke",
    "RepBillFlores",
    "RepBillFoster",
    "RepBillJohnson",
    "RepBillShuster",
    "RepBlainePress",
    "repblumenauer",
    "RepBobbyRush",
    "RepBobGibbs",
    "RepBonamici",
    "RepBonnie",
    "RepBost",
    "RepBradWenstrup",
    "RepBrady",
    "RepBrianBabin",
    "RepBrianFitz",
    "RepBrianHiggins",
    "RepBrianMast",
    "RepBRochester",
    "RepByrne",
    "RepCarbajal",
    "RepCarbajal",
    "RepCardenas",
    "RepCartwright",
    "RepCharlieCrist",
    "RepCharlieDent",
    "RepCheri",
    "RepChrisCollins",
    "RepChrisSmith",
    "RepChrisStewart",
    "RepChuck",
    "RepCicilline",
    "RepClayHiggins",
    "repcleaver",
    "RepCohen",
    "RepComstock",
    "RepCuellar",
    "RepCummings",
    "RepDanKildee",
    "RepDannyDavis",
    "RepDarrenSoto",
    "RepDaveBrat",
    "RepDaveJoyce",
    "repdavetrott",
    "RepDavid",
    "RepDavidEPrice",
    "RepDavidRouzer",
    "repdavidscott",
    "RepDavidValadao",
    "RepDavidYoung",
    "RepDebDingell",
    "RepDelBene",
    "RepDennisRoss",
    "RepDennyHeck",
    "RepDerekKilmer",
    "RepDeSantis",
    "RepDeSaulnier",
    "RepDianaDeGette",
    "RepDianeBlack",
    "repdinatitus",
    "RepDLamborn",
    "RepDonaldPayne",
    "RepDonBeyer",
    "repdonyoung",
    "RepDougCollins",
    "RepDrewFerguson",
    "RepDwightEvans",
    "RepEBJ",
    "RepEdRoyce",
    "RepEliotEngel",
    "RepErikPaulsen",
    "RepEsty",
    "RepEvanJenkins",
    "RepFilemonVela",
    "RepFrankLucas",
    "RepFredUpton",
    "RepFrenchHill",
    "RepGallagher",
    "RepGaramendi",
    "RepGeneGreen",
    "RepGonzalez",
    "RepGoodlatte",
    "RepGosar",
    "RepGraceMeng",
    "repgregwalden",
    "RepGrothman",
    "RepGusBilirakis",
    "RepGuthrie",
    "RepGutierrez",
    "RepGwenMoore",
    "RepHalRogers",
    "RepHanabusa",
    "RepHankJohnson",
    "RepHartzler",
    "RepHastingsFL",
    "RepHensarling",
    "RepHolding",
    "RepHuffman",
    "RepHuizenga",
    "RepHultgren",
    "RepJackBergman",
    "RepJackyRosen",
    "RepJasonLewis",
    "RepJasonLewis",
    "RepJasonSmith",
    "RepJBridenstine",
    "RepJeffDenham",
    "RepJeffDuncan",
    "RepJeffries",
    "RepJenniffer",
    "RepJerryNadler",
    "repjimcooper",
    "RepJimCosta",
    "RepJimmyPanetta",
    "RepJimRenacci",
    "RepJoeBarton",
    "RepJoeCourtney",
    "repjoecrowley",
    "RepJoeKennedy",
    "RepJoeWilson",
    "RepJohnConyers",
    "RepJohnDelaney",
    "RepJohnFaso",
    "RepJohnKatko",
    "RepJohnLarson",
    "RepJohnYarmuth",
    "RepJoseSerrano",
    "RepJoshG",
    "RepJuanVargas",
    "RepJudyChu",
    "RepKarenBass",
    "RepKathleenRice",
    "RepKayGranger",
    "RepKenMarchant",
    "RepKevinBrady",
    "RepKevinCramer",
    "RepKevinYoder",
    "RepKinzinger",
    "RepKristiNoem",
    "RepLaHood",
    "RepLaMalfa",
    "RepLanceNJ7",
    "RepLarryBucshon",
    "RepLawrence",
    "RepLindaSanchez",
    "RepLipinski",
    "RepLizCheney",
    "RepLloydDoggett",
    "RepLoBiondo",
    "RepLoisFrankel",
    "RepLouBarletta",
    "RepLouCorrea",
    "RepLoudermilk",
    "replouiegohmert",
    "RepLowenthal",
    "RepLujanGrisham",
    "RepLukeMesser",
    "RepLynnJenkins",
    "RepMaloney",
    "RepMarciaFudge",
    "RepMarcyKaptur",
    "RepMarkMeadows",
    "RepMarkTakano",
    "RepMarkWalker",
    "RepMarthaRoby",
    "RepMattGaetz",
    "RepMcCaul",
    "RepMcClintock",
    "RepMcEachin",
    "RepMcGovern",
    "RepMcKinley",
    "RepMcNerney",
    "RepMcSally",
    "RepMeehan",
    "RepMGriffith",
    "RepMikeBishop",
    "RepMikeCoffman",
    "RepMikeJohnson",
    "RepMikeQuigley",
    "RepMikeRogersAL",
    "RepMikeTurner",
    "RepMimiWalters",
    "RepMoolenaar",
    "RepMullin",
    "RepNewhouse",
    "RepOHalleran",
    "RepPaulCook",
    "RepPaulMitchell",
    "RepPaulTonko",
    "RepPerlmutter",
    "RepPeteKing",
    "RepPeterDeFazio",
    "reppittenger",
    "RepPoliquin",
    "RepRaskin",
    "RepRatcliffe",
    "RepRaulGrijalva",
    "RepRichardNeal",
    "RepRichHudson",
    "RepRichmond",
    "RepRickAllen",
    "RepRickCrawford",
    "RepRickLarsen",
    "RepRobinKelly",
    "RepRobWoodall",
    "RepRodBlum",
    "RepRohrabacher",
    "RepRoKhanna",
    "RepRonKind",
    "RepRooney",
    "RepRooney",
    "RepRoybalAllard",
    "RepRussell",
    "RepRWilliams",
    "RepRyanCostello",
    "RepSamGraves",
    "repsandylevin",
    "RepSanfordSC",
    "RepSarbanes",
    "RepSchneider",
    "RepSchrader",
    "RepScottPerry",
    "RepScottPeters",
    "RepScottTaylor",
    "RepSeanDuffy",
    "RepSheaPorter",
    "RepShimkus",
    "RepSinema",
    "RepSires",
    "RepSmucker",
    "RepSpeier",
    "RepStefanik",
    "RepStephenLynch",
    "RepStephMurphy",
    "RepSteveChabot",
    "RepStevePearce",
    "RepSteveStivers",
    "RepSusanDavis",
    "RepSwalwell",
    "RepTedBudd",
    "RepTedDeutch",
    "RepTedLieu",
    "RepTedYoho",
    "RepTenney",
    "RepTerriSewell",
    "RepThomasMassie",
    "RepThompson",
    "RepTimMurphy",
    "RepTimRyan",
    "RepTipton",
    "RepTomEmmer",
    "RepTomGraves",
    "RepTomMacArthur",
    "RepTomMarino",
    "RepTomReed",
    "RepTomRice",
    "RepTomSuozzi",
    "RepTrentFranks",
    "RepTrentKelly",
    "RepTrey",
    "RepValDemings",
    "RepVeasey",
    "RepVisclosky",
    "RepWalberg",
    "RepWalorski",
    "RepWalterJones",
    "RepWebster",
    "RepWesterman",
    "RepWilson",
    "RepYvetteClarke",
    "RepZoeLofgren",
    "Robert_Aderholt",
    "RodneyDavis",
    "rosadelauro",
    "RosLehtinen",
    "SamsPressShop",
    "SanfordBishop",
    "sethmoulton",
    "SpeakerRyan",
    "SteveKingIA",
    "SteveKnight25",
    "SteveScalise",
    "SusanWBrooks",
    "TGowdySC",
    "ToddRokita",
    "TomColeOK04",
    "TulsiPress",
    "TXRandy14",
    "USRepGaryPalmer",
    "USRepKCastor",
    "USRepKeating",
    "USRepMikeDoyle",
    "VernBuchanan",
    "virginiafoxx",
    "WhipHoyer",
    "realDonaldTrump",
    "stevenmnuchin1",
    "jeffsessions",
    "SecretarySonny",
    "RealBenCarson",
    "SecretaryPerry",
    "SecShulkin",
    "SecretaryZinke",
    "SecretaryRoss",
    "SecPriceMD",
    "SecElaineChao",
    "BetsyDeVos",
    "Reince",
    "ScottPruittOK",
    "nikkihaley",
    "Linda_McMahon",
    "mike_pence"
    ];

    var fs = require('fs');
    fs.writeFileSync('./word_count.json', '')
    var allUserWords = {};
    var wordOutput = [];
    // loop over all usernames
    for (var x = 0; x < usernames.length; x++) {
        allUserWords.username = usernames[x];
        allUserWords.analysis = {};
        allUserWords.analysis.tweets = [];
        allUserWords.analysis.words = '';
        allUserWords.analysis.text = '';
        

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
        //fs.writeFileSync('./'+usernames[x]+'.txt',allUserWords.analysis.finalTextArray);


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
            if(result.hasOwnProperty(property) && result[property] >= 1){
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
        
    
        
        //fs.appendFileSync('./word_count.json', JSON.stringify(topWords));
        //console.log(topWords.sortedWords);
        wordOutput.push(topWords);
    };
    fs.writeFileSync('./wordoutputtest.json', JSON.stringify(wordOutput)); 
}
getOutput();
//var output = wordOutput.sortedWords;
//console.log(output);


