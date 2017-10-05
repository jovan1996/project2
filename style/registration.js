/*REGISTRATION*/


function registracija(obj){

	/* definisanje promenjivih*/
	var x = document.registration;
	var ime = x.tbname.value;
	var prezime = x.tbLname.value;
	var username = x.tbRegUsername.value;
	var email = x.tbEmail.value;
	var pass1 = x.tbRegPassword.value;
	var pass2 = x.tbRegRePassword.value;

	/*kraj definisanje promenjivih*/

	/*ime*/
var reIme = /^[A-Z]{1}[a-z]{2,14}$/;  
if(!ime.match(reIme)){
	document.getElementById('LNAlert').innerHTML="Ime ne valja!";
	red("#LNAlert");
}
else{ 
	document.getElementById('LNAlert').style.display="none";
}
   /*kraj imena*/


   	/*prezime*/
var rePrezime = /^[A-Z]{1}[a-z]{2,24}$/;  
if(!prezime.match(rePrezime)){
	document.getElementById('NAlert').innerHTML="Prezime ne valja!";
	red("#NAlert");
}
else{ 
	document.getElementById('NAlert').style.display="none";
}
   /*kraj prezimena*/



/*korisnicko ime*/
var reUsername = /^[a-z]{2,30}\.*/;
if(!username.match(reUsername)){
	document.getElementById('UserAlert').innerHTML="Unesite samo mala slova,<br/> bez korišćenja brojeva i simbola<br/> primer@primer.com";
	red("#UserAlert");
}
else{ 
	document.getElementById('UserAlert').style.display="none";
}

/*kraj korisnickog imena*/

/*EMAIL*/
var reMai=/^\w([\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if(!email.match(reMai)){
	document.getElementById('mailAlert').innerHTML="Email nije dobar";
	red("#mailAlert");
}
else{ 
	document.getElementById('mailAlert').style.display="none";
}
/*KRAJ EMAILA*/


/*sifra*/
if(pass1.length==0) {
	document.getElementById('passwordAlert').innerHTML="Unesite šifru";
	red("#passwordAlert");
}
if(pass1!==pass2){
	document.getElementById('passwordAlert').innerHTML="šifre se ne poklapaju";
	red("#passwordAlert");
}

/*kraj sifre*/
/*tekst crveno*/
function red(obj){
    $(obj).addClass("red");
}
/*tekst crveno*/

} // kraj funkcije registracija