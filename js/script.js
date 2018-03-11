var curArr = [];
var currentCard;
var j = 0;
var rezFind;
var playerIndex;
var on = 0;
var cardCounter = 0;
var cardLength = 2;

$('.wrapper').children().hide();
$('.play').show();
$('.desc').show();

$('.play').click(function () {
	$('.wrapper').children().show();
	$('.play').hide();
	$('.res').hide();
	$('.desc').hide();
});


$('.card').click(function () {
	if (j == 0) {
		random();
	}
	rubaha = $(this).attr('class');
	if (rubaha == 'card shirt') {
		$(this).removeClass('shirt').addClass("c" + currentCard);
		curArr[j] = currentCard;
		j++;
		randCheck();
	}
	cardCounter++;
	endGame();
});

var start = function () {
	$('.card').removeClass().addClass('hide');
	for (var i = 0; i < 2; i++) {
		$('.hide:first').removeClass().addClass('card shirt');
	}
}
start();

var random = function() {
	currentCard = Math.floor(Math.random() * 13 + 1);
}

var randCheck = function () {
	random();
	find();
	if (rezFind == 1) {
		rezFind = 0;
		return randCheck();
	}
}

var find = function () {
	
	for (var i = 0; i < curArr.length; i++) {
		if (currentCard == curArr[i]) {
			rezFind = 1;
		}
	}
}

$('.player').click(function () {
	playerIndex = $(this).index() + 2;
	addCard();
});

function addCard() {
	$('.card').removeClass().addClass('card shirt');
	curArr = [];
	$('.card').removeClass().addClass('hide');
	for (var i = 0; i < playerIndex; i++) {
		$('.hide:first').removeClass().addClass('card shirt');
	}
	$('.res').hide();
	cardLength = playerIndex;
	cardCounter = 0;
}
cardCounter = 0;
$('.player').hide();

$('.burg').click(function () {
	$('.bar').toggleClass('change');
	$('.player').toggle('slide');
	$('.help').hide();
});

$('.res').hide();

var endGame = function () {
	if (cardCounter == cardLength) {
		cardCounter = 0;
		$('.res').show('slow');
	}
}

$('.res').click(function () {
	curArr = [];
	$('.card').removeClass().addClass('card shirt');
	$('.res').hide('slow');
});

$('.bg').hide();

$('.bgBurg').click(function () {
	var i = 1;
	i++;
	$('.fa-angle-down').toggleClass('change');
	$('.bg').slideToggle('slow');
	$('.helpBg').hide();
});

$('.bg6').css('border-color', 'blue');

$('.bg').click(function () {
	$('.bg').css('border-color', '#c3c3c3');
	var bgInd = $(this).index() + 1;
	$(this).css('border-color', 'blue').next().css('border-top','1px solid blue');
	$('.wrapper').css('background', 'url(./img/bg' + bgInd + '.jpg) no-repeat').css('background-size', 'cover');
});

