$(document).ready(function(){
    /**
     * Delete alert
     * @param parameter to delete
     */
     deleteMethod =  function (encrypted_id) {
        swal({
            title: "Are you sure?",
            text: "This data will be deleted permanently!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                window.location = window.location.pathname+'/delete/'+encrypted_id;
            }
        });
    }
    /**
     * Inactive alert
     * @param parameter to inactive
     */
     inactiveMethod =  function (encrypted_id) {
        swal({
            title: "Are you sure?",
            text: "After Removing, You can recover by updating STATUS!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                window.location = window.location.pathname+'/inactive/'+encrypted_id;
            }
        });
    }
    
    /**
     *  All About Search
     */
    $('#searchField').prop('selectedIndex',0); // Reset Search Select
    var searchItems = "&nbsp;"+"disableed";
    var countSelect = 0;
    $("select").change(function(){
        var newField = '&nbsp' + $(this).val() + '&nbsp';
        if(newField != null && newField != ""){
            var name = $(this).val();
            var placeholder = $("#searchField option:selected").text();
            var html = "<div style=\"margin: 4px 0;\" class=\"col-md-2\">\n" +
            "<input id='search' type=\"text\" name=\"" + name + "\" placeholder=\"" + placeholder + "\" class=\"form-control\">\n"  +
            "</div>";
            if(searchItems.indexOf(newField) == -1){
                countSelect = countSelect + 1;
                $(".search-field").append(html);
                $("#searchForm").show();
                $("#searchButton").show();
                searchItems = searchItems + newField + '&nbsp;';
                if (countSelect > 5) {
                    $("#searchButton").css({
                        //'margin-left': '5px',
                        //'margin-top': '5px'
                    });
                }
            }
        }
    });
    /*
    * Avro Bangla
    */

    $('input[type=text], input[type=number], input[type=email], input[type=search]').focus(function(){
        if ($(this).hasClass('avro_bn')) {
            $('.lang_pen').text('বাংলা ');
            $('.lang_pen_parent').show();
        }else{
            $('.lang_pen').text('Eng ');
            $('.lang_pen_parent').show();
        } 
        $(this).blur(function(){
            $('.lang_pen_parent').hide();
        });
    });
    $('textarea').focus(function(){
        if ($(this).hasClass('avro_bn')) {
            $('.lang_pen').text('বাংলা ');
            $('.lang_pen_parent').show();
        }else{
            $('.lang_pen').text('Eng ');
            $('.lang_pen_parent').show();
        } 
        $(this).blur(function(){
            $('.lang_pen_parent').hide();
        });
    });


    
    // alert($('h1').children('i').attr('class'));
    $(window).scroll(function(){
        if ($(window).width() >= 768) {
            if ($(window).scrollTop() > $('.app-header').height() - 30 + $('.card-header').height() + /*$('.app-title').height() +*/ parseInt($('.app-title').css('margin-bottom'))) {
                $('.app-nav_custom_item').fadeIn().html('<i class="'+$('h1').children('i').attr('class')+'"></i>'+$('.card-header .row .col-md-6 h2').text());
            } else {
                $('.app-nav_custom_item').fadeOut();
            }
        }
    });
    
});

Vue.config.productionTip = false;

$(document).ready(function() {

 var table = $('#datatable').DataTable({
        // "scrollY": "350px",
        "paging": true,
        "pageLength": 50,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
      });

 $('a.toggle-vis').on( 'click', function (e) {
   e.preventDefault();

      // Get the column API object
      var column = table.column( $(this).attr('data-column') );

      // Toggle the visibility
      column.visible( ! column.visible() );
    });
});
$(document).ready(function() {

  $("body").tooltip({ selector: '[data-toggle=tooltip]' });

  $(".simplebar-content").click(function(){
    if ($(".simplebar-offset").css('bottom') == '-17px') {
      document.getElementById('app-sidebar__toggle').click();
    }
  });
  $(".simplebar-content").hover(function(){
    if ($(".simplebar-offset").css('bottom') == '-17px') {
      document.getElementById('app-sidebar__toggle').click();
    }
  });

});

/*javascript pluralize a string*/
String.prototype.plural = function(revert){

  var plural = {
    '(quiz)$'               : "$1zes",
    '^(ox)$'                : "$1en",
    '([m|l])ouse$'          : "$1ice",
    '(matr|vert|ind)ix|ex$' : "$1ices",
    '(x|ch|ss|sh)$'         : "$1es",
    '([^aeiouy]|qu)y$'      : "$1ies",
    '(hive)$'               : "$1s",
    '(?:([^f])fe|([lr])f)$' : "$1$2ves",
    '(shea|lea|loa|thie)f$' : "$1ves",
    'sis$'                  : "ses",
    '([ti])um$'             : "$1a",
    '(tomat|potat|ech|her|vet)o$': "$1oes",
    '(bu)s$'                : "$1ses",
    '(alias)$'              : "$1es",
    '(octop)us$'            : "$1i",
    '(ax|test)is$'          : "$1es",
    '(us)$'                 : "$1es",
    '([^s]+)$'              : "$1s"
  };

  var singular = {
    '(quiz)zes$'             : "$1",
    '(matr)ices$'            : "$1ix",
    '(vert|ind)ices$'        : "$1ex",
    '^(ox)en$'               : "$1",
    '(alias)es$'             : "$1",
    '(octop|vir)i$'          : "$1us",
    '(cris|ax|test)es$'      : "$1is",
    '(shoe)s$'               : "$1",
    '(o)es$'                 : "$1",
    '(bus)es$'               : "$1",
    '([m|l])ice$'            : "$1ouse",
    '(x|ch|ss|sh)es$'        : "$1",
    '(m)ovies$'              : "$1ovie",
    '(s)eries$'              : "$1eries",
    '([^aeiouy]|qu)ies$'     : "$1y",
    '([lr])ves$'             : "$1f",
    '(tive)s$'               : "$1",
    '(hive)s$'               : "$1",
    '(li|wi|kni)ves$'        : "$1fe",
    '(shea|loa|lea|thie)ves$': "$1f",
    '(^analy)ses$'           : "$1sis",
    '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$': "$1$2sis",        
    '([ti])a$'               : "$1um",
    '(n)ews$'                : "$1ews",
    '(h|bl)ouses$'           : "$1ouse",
    '(corpse)s$'             : "$1",
    '(us)es$'                : "$1",
    's$'                     : ""
  };

  var irregular = {
    'move'   : 'moves',
    'foot'   : 'feet',
    'goose'  : 'geese',
    'sex'    : 'sexes',
    'child'  : 'children',
    'man'    : 'men',
    'tooth'  : 'teeth',
    'person' : 'people'
  };

  var uncountable = [
  'sheep', 
  'fish',
  'deer',
  'moose',
  'series',
  'species',
  'money',
  'rice',
  'information',
  'equipment'
  ];

  // save some time in the case that singular and plural are the same
  if(uncountable.indexOf(this.toLowerCase()) >= 0)
    return this;

  // check for irregular forms
  for(word in irregular){

    if(revert){
      var pattern = new RegExp(irregular[word]+'$', 'i');
      var replace = word;
    } else{ var pattern = new RegExp(word+'$', 'i');
    var replace = irregular[word];
  }
  if(pattern.test(this))
    return this.replace(pattern, replace);
}

if(revert) var array = singular;
else  var array = plural;

  // check for matches using regular expressions
  for(reg in array){

    var pattern = new RegExp(reg, 'i');

    if(pattern.test(this))
      return this.replace(pattern, array[reg]);
  }

  return this;
}

$(document).ready(function() {
  var table = '';
  var a_index = 0;
  var column = 0;

  /*checking wheather datatable has been called or not*/
  if($('.card-body[data-my-table="table-1"]').find('#datatable').length == 0) {
    /*showing my pagination*/
    $('.custom_pagination').show();

    /*table search*/
    $("#my-table-search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#my-table tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

  /*coloring column title on hide/show*/
  $('.toggle-vis').click(function(event) {

    table = $(this).closest('.card').find('table');

    if($(this).hasClass('text-danger'))
      $(this).removeClass('text-danger');
    else
      $(this).addClass('text-danger');

    //a_index = $(this).index();
    column = parseInt($(this).closest('a').attr('data-column'))+1;
    // console.log(column);

    if (/*document.getElementById('pagination_container') && */table.attr('id') != 'datatable') {
      table.find('td:nth-child('+column+')').each(function() {
          $(this).toggle();
      });
      table.find('th:nth-child('+column+')').toggle();
    }
  });
  $('.toggle-vis').each(function(){
    if($(this).hasClass('hide-on-load'))
      $(this).click();
  });
});