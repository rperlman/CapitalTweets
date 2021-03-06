#!/usr/bin/env python
# encoding: utf-8

# source code from https://github.com/tweepy/tweepy
# CODE MODIFIED BY RACHEL PERLMAN AND DAN PASQUALE

import tweepy #https://github.com/tweepy/tweepy
import csv
import json

#Twitter API credentials
consumer_key = '1rmxBgx0qJxmJTw2G7RQoCUea'
consumer_secret = 'v7eSsmOcq0B6Z6GIGbuQII1kKUxcZfjaA8NTjSXPbPGrDCIPCn'
access_key = '852149770089115648-2HXcWbHmqnb60bIMDcUIl9h4iq5GOYb'
access_secret = '7WOpy4mVBShNVw4uej7OChpJfCjFzOkYDFQ5NgA0XdEA9'


def get_all_tweets(screen_name):
	#Twitter only allows access to a users most recent 3240 tweets with this method
	
	#authorize twitter, initialize tweepy
	auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
	auth.set_access_token(access_key, access_secret)
	api = tweepy.API(auth)
	
	#initialize a list to hold all the tweepy Tweets
	alltweets = []	
	
	#make initial request for most recent tweets (200 is the maximum allowed count)
	new_tweets = api.user_timeline(screen_name = screen_name,count=200)
	
	#save most recent tweets
	alltweets.extend(new_tweets)
	
	#save the id of the oldest tweet less one
	oldest = alltweets[-1].id - 1
	
	#keep grabbing tweets until there are no tweets left to grab
	while len(new_tweets) > 0:
		print "getting tweets before %s" % (oldest)
		
		#all subsiquent requests use the max_id param to prevent duplicates
		new_tweets = api.user_timeline(screen_name = screen_name,count=200,max_id=oldest)
		
		#save most recent tweets
		alltweets.extend(new_tweets)
		
		#update the id of the oldest tweet less one
		oldest = alltweets[-1].id - 1
		
		print "...%s tweets downloaded so far" % (len(alltweets))
	
	#transform the tweepy tweets into a 2D array that will populate the csv	
	outtweets = [[tweet.id_str, str(tweet.created_at), tweet.text.encode("utf-8")] for tweet in alltweets]
	
	#write the csv	
	with open('%s_tweets.json' % screen_name, 'wb') as f:
		json.dump(outtweets, f)
		# generates json with the outweets to file
	
	pass

# list of politicians twitter usernames
usernames = [
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
]

# loop over all usernames
for i in range(len(usernames)):
	#pass in the username of the account you want to download
	print("getting tweets from " + usernames[i])
	get_all_tweets(usernames[i])