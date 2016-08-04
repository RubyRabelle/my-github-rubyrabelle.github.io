//jquery function to load header & footer
$(function(){
	$("#header_inc").load("views/header.html"); 
	$("#footer_inc").load("views/footer.html");
});

//calculate the total of items ordered off menu.html
function calculate(){
              
	var dish = new Array('Rumaki with Pineapple','Crab Rangoon','Coconut Shrimp', 'Ono Spareribs', 'Aloha Chicken Burger', 'Lomi Lomi');
	var dish_name = new Array("rumaki", "crab", "shrimp", "ribs", "burger", "lomi")
	var price = new Array(10.75, 12.00, 15.50, 19.00, 11.50, 9.50);
	var qty = new Array(6);
	var order_confirmation = "Order Summary:"
	var sub_total = 0;
	var total = 0;
	var error = false;

	for (var i=0; i<dish.length; ++i) {
		x = document.forms[0][dish_name[i]].value;
		//window.alert("value for "+ dish[i] + " = " + x);
		if (isNaN(x) || x < 0 || x == "") {                  
		  window.alert("A numeric value is required when ordering " + dish[i]);
		  error = true;
		  break;
		}
		else if (x > 0) {
		  qty[i] = parseInt(x);
		  sub_total += qty[i] * price[i];   
		  order_confirmation += "\n Qty "+ qty[i] +" - "+ dish[i]+ " @ $" + price[i].toFixed(2) + " ea";
		}
    
	} // end for

	if (!error) {
		total = sub_total * 1.0825;
		document.forms[0].cart.value = total.toFixed(2);
		if (total == 0) {
		  window.alert('Your total is $0.00 because a dish has not been selected.');  
		}
		else {
		window.alert(order_confirmation + "\n \n Subtotal: $" + sub_total.toFixed(2)
		  + "\n Total with 8.25% tax: $" + total.toFixed(2));
		}
	}
} //end function calculate

function checkForNumber(fieldValue){
	var numberCheck = isNaN(fieldValue);
	if (numberCheck == true) {
	    window.alert("You must enter a number value!");
	    return false;
	}
	else
	    return true;
}

//confirm email on jobs.htm 
function confirmEmail(){
	if(document.forms[0].email_confirm.value!=document.forms[0].email.value){
	    window.alert("You did not enter the same email!");
	    document.forms[0].email.focus();
	}
	else {
	    //window.alert("still checking email.");
	    var x = document.forms[0].email.value;
	    //window.alert(x);
	    var re = /[\@]*[\.]/;
	    //window.alert('regexp' + x.search(re));
	    if (x.search(re) == -1){
	          window.alert("Please enter a valid email.")
	          document.forms[0].email.focus();
	    }
	}
}

//confirm submit of jobs.htm application
function confirmSubmit(){
	if (document.forms[0].firstname.value==""
	    || document.forms[0].lastname.value==""
	    || document.forms[0].address.value==""
	    || document.forms[0].city.value==""
	    || document.forms[0].state.value==""
	    || document.forms[0].zip.value=="")  {
	          window.alert("You must enter your name and address information.");
	          return false;
	}
	else if (document.forms[0].area.value==""
	    || document.forms[0].exchange.value==""
	    || document.forms[0].phone.value=="") {
	          window.alert("You must enter your telephone number.");
	          return false;
	}
	else if (document.forms[0].email.value==""
	    || document.forms[0].email_confirm.value =="") {
	          window.alert("You must enter your email address.");
	          return false;
	}
	var employmentSelected = false;
	for (i=0; i<3; ++i) {
	    if (document.forms[0].employment[i].checked == true){
	          employmentSelected = true;
	          break;
	    }    
	}
	if (employmentSelected != true) {
	    window.alert("You must select a employment type option.");
	    return false;
	}
	else if (document.forms[0].position.value == "none"){
	    window.alert("You must select a position.");
	    return false;
	}
	else if (document.forms[0].resume.value ==""){
	    window.alert("Please enter your qualifications or paste your resume.");
	    return false;
	}
}

function confirmReset() {
	var resetForm = window.confirm("Are you sure you want to reset the form?");
	return resetForm;
}

//pop a new window with the specials on project4.htm
var specWindow;
function showSpecials(linkTarget){
	var propertyWidth=400;
	var propertyHeight=500;
	var winLeft = (screen.width-propertyWidth)/2;
	var winTop = (screen.height-propertyHeight)/2;
	var winOptions = "toolbar=no, menubar=no, location=no, scrollbars=no, resizable=no";
	winOptions += ",width=" + propertyWidth;
	winOptions += ",height=" + propertyHeight;
	winOptions += ",left=" + winLeft;
	winOptions += ",top=" + winTop;
	specWindow =  window.open(linkTarget, "carInfo", winOptions);
	specWindow.focus();
}

//rotate banner ad on home page
var curImage="banner1";
function bannerAd() {
	if (curImage == "banner2"){
	    document.images[0].src = "img/karaoke.png";
	    curImage = "banner1";
	}
	else{
	    document.images[0].src="img/happy_hour.png";
	    curImage = "banner2";
	}
}
                        