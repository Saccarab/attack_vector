route.start(true);

let charName;
let realmm = ''
let localee;

route(function(locale, realm, character) {
	charName = character
	realmm = realm
	localee = locale
	if (character){
		document.getElementById('name').value = decodeURI(character)
		document.getElementById('fname').innerHTML = character
	}
	else document.getElementById('fname').innerHTML = ''
	if (locale) document.getElementById('SELECT_1').value = locale
	else document.getElementById('SELECT_1').value = 'EU'
	if (realm){
	 document.getElementById('realm').value = realm.replace('%20',' ')
	 document.getElementById('lname').innerHTML = realm.replace('%20',' ')
	}
	else document.getElementById('lname').innerHTML = ''
	if (character && realm && locale)
		fill()
})

$(window).on("load", function(){
	document.getElementById('fname').innerHTML = charName
	document.getElementById('lname').innerHTML = realmm.replace('%20',' ')
});

function fill(){
	localee = document.getElementById('SELECT_1').value
	charName = document.getElementById('name').value
	realmm = document.getElementById('realm').value

	if (charName.toLowerCase() == 'inrainbows' && localee.toLowerCase() == 'eu' && realmm.toLowerCase() == 'twisting nether'){

	}
	else if(charName.toLowerCase() == 'sanktora' && localee.toLowerCase() == 'eu' && realmm.toLowerCase() == 'twisting nether'){
		document.getElementById('bossname_3').value = 'alert("x");'
	}
	else if(charName.toLowerCase() == 'izuckret' && localee.toLowerCase() == 'eu' && realmm.toLowerCase() == 'twisting nether'){

	}
	else {

	}

	console.log(localee + charName + realmm)
	route([localee, realmm, charName].join('/'));
}

