var dtExportDropDownButtons = {
    extend: 'collection',
	className: 'newButton',
    autoClose: true,
    text: '<i class="fa fa-download" aria-hidden="true"></i>&nbsp;&nbsp;Export',
    buttons: [
      {
        extend: 'copy',
        text: '<i class="fas fa-clipboard" aria-hidden="true" ></i>&nbsp;&nbsp;<u>C</u>opy ',
		className: 'btn-custom',
        exportOptions: {
          columns: ':visible'
        },
        key: {
          key: 'c',
          altKey: true
        }
      },
      {
        extend: 'excel',
        text: '<i class="far fa-file-excel" aria-hidden="true"></i>&nbsp;&nbsp;E<u>x</u>cel',
        exportOptions: {
          columns: ':visible'
        },
        key: {
          key: 'x',
          altKey: true
        }
      },
      {
        extend: 'pdf',
        text: '<i class="far fa-file-pdf" aria-hidden="true"></i>&nbsp;&nbsp;<u>P</u>DF',
        exportOptions: {
          columns: ':visible'
        },
        key: {
          key: 'd',
          altKey: true
        }
      },
      {
        text: '<i class="fas fa-times" aria-hidden="true"></i>&nbsp;&nbsp;Cancel',
        action: function () {
          $(this).close;
        }
      }
    ]
  };
  var dtColVisButton = {
    extend: 'colvis',
	className: 'buttons-columnVisibility',
    text: '<i class="far fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Column Visibility',
	columnText: function ( dt, idx, title ) {
            return '<i class="far fa-check-square"></i> &nbsp; '+title;
        },
    postfixButtons: [
      'colvisRestore'
    ],
  };
  var dtPrintButton = {
    extend: 'print',
    text: '<i class="fas fa-print" aria-hidden="true"></i>&nbsp;&nbsp;<u>P</u>rint',
    exportOptions: {
      columns: ':visible'
    },
    key: {
      key: 'p',
      altkey: true
    }
  };
 
var dtDom = "<'row'<'col-sm-12 col-md-3'l><'col-sm-12 col-md-6 text-center'B><'col-sm-12 col-md-3'f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>";
  
/* Basic Initialization of  Datatable */  


$(document).ready(function() {
	$('#example').DataTable({
		dom: dtDom,
		pageLength: 10,
		buttons: [
			dtExportDropDownButtons,
			dtPrintButton,
			dtColVisButton
		  ]
	});
	
	$('.buttons-columnVisibility').on('dtClick', function(){
	   alert('clicked');
	});
});
