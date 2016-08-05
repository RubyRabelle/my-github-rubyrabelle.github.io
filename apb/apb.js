//apb.js


//jquery function to load header & footer
$(function(){
	$("#header_inc").load("apb_header.html"); 
	$("#footer_inc").load("apb_footer.html");
});



function getTodayDate(){
	var dateObject = new Date();
	var month = dateObject.getMonth();
	var year = dateObject.getYear();
	var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    var dateToday = monthArray[month] + " "
        + dateObject.getDate() + ", "
        + dateObject.getFullYear();  
    return dateToday;
} 

function loadFormData(reportType) {
	var dateToday = getTodayDate();
	var subject_var = "Lost Pet: ";
	if (reportType =="found") subject_var = "Found Pet: ";
	
    console.log('subject_var: ' + subject_var);
  
    if (window.location.search > ""){
    	console.log("parameter passed:" + window.location.search);
    	var parameterValue = decodeURIComponent(window.location.search.match(/(\?|&)src\=([^&]*)/)[2]);
    	if (parameterValue > "") {
    		subject_var += parameterValue;
    	}
    }
	
	document.forms[1].theDate.value = dateToday;
	document.forms[1].theSubject.value = subject_var;
}

/*
function showPets(){
    window.alert('calling showpets')
	var pet = [
	    ['File_001.jpeg', 'found', 'dog', 'Description', 'black', 'white', ''],
	    ['File_002.jpeg', 'lost', 'dog', 'Description', 'black','', ''],
	    ['File_003.jpeg', 'lost', 'dog', 'Description', 'black', 'white', ''],
	    ['File_004.jpeg', 'lost', 'dog', 'Description', 'brown', 'black', 'white'],
	    ['File_005.jpeg', 'found', 'cat', 'Description', 'brown', 'white', ''],
	    ['File_006.jpeg', 'lost', 'cat', 'Description', 'gray', '', ''],
	    ['File_007.jpeg', 'found', 'dog', 'Description', 'black', 'white', ''],
		['File_008.jpeg', 'lost', 'cat', 'Description', 'black', 'orange', 'white'],
		['File_009.jpeg', 'found', 'dog', 'Description', 'brown', 'white', ''],
		['File_010.jpeg', 'lost', 'cat', 'Description',  'brown', 'white', ''],
		['File_011.jpeg', 'found', 'dog', 'Description', 'black', 'brown', 'white'],
		['File_012.jpeg', 'found', 'cat', 'Description', 'gray', 'white', ''],
		['File_013.jpeg', 'lost', 'cat', 'Description', 'white', 'orange', ''],
		['File_014.jpeg', 'found', 'dog', 'Description', 'brown', 'black', ''],
		['File_016.jpeg', 'found', 'dog', 'Description', 'brown', 'black', 'white'],
		['File_017.jpeg', 'lost', 'dog', 'Description', 'brown', 'white','black']
	];

	var show_all_pets = '';
	for (j in pet){
		//build the individual pet info
		var img_url = pet[j][0];
		var petStatus = pet[j][1];
		var species = pet[j][2];
		var description = pet[j][3];
		var color1 = pet[j][4];
		var color2 = pet[j][5];
		var color3 = pet[j][6];
		var pet_display = "";
		var pet_li = "";

		
		console.log(img_url +','+ petStatus +','+ species, ',' + color1);
		
		pet_display ='<div class="portfolio-item ' + petStatus + ' ' + species + ' ' + color1;
		pet_li = '<li><a href="#">' + species + '</a></li>'
				+'<li><a href="#">' + color1 + '</a></li>'
		if (color2 > "") {
			pet_display += ' ' + color2;
			pet_li += '<li><a href="#">' + color2 + '</a></li>';
		}
		if (color3 > "") {
			pet_display += ' ' + color3;
			pet_li += '<li><a href="#">' + color3 + '</a></li>'
		}
		pet_display += '"><!--pet-->';

		var item_box = '<div class="item-box" style="border: solid 1px; ">'
			+ '<figure><span class="item-hover">' 
			+ '<span class="overlay dark-5"></span><span class="inner"><!-- lightbox -->'
			+ "<a class='ico-rounded lightbox' href='assets/images/animals/"+ img_url + " data-plugin-options='{"type":"image"}'; >"
			+ '<span class="fa fa-plus size-20"></span></a><!-- details --><a class="ico-rounded" href="report_found.html">'
			+ '<span class="glyphicon glyphicon-option-horizontal size-20"></span></a></span></span>'
			+ '<img class="img-responsive src="assets/images/animals/' + img_url +'width="600" height="399" alt="">'
			+ '</figure><div class="item-box-desc">'
			+ '<h3>' + petStatus + '</h3>'
			+ '<ul class="list-inline categories nomargin">'
			+ pet_li + '</ul></div></div></div><!-- /item -->'
		pet_display += item_box;
		show_all_pets += pet_display;
	}
	return show_all_pets;
}
*/