if(!AT_divID) var AT_divID = 'AT_content'; 
if(!AT_HTTP) var AT_HTTP = 'http'; 

function parseRequestSearch(response){
   try{
      div_str = '';
        
      tour_array = response[0];
      div_str +=  decodeURIComponent(tour_array.search_form); 
      $("div#AT_search_content").html(div_str);
      
      var hash = location.hash;
      if(hash.indexOf('tourID') != -1){
         setTimeout(function(){createScriptTag('')}, 1000);       
      }
         
   }
   catch(an_exception){
      console.log(an_exception);
   }
}


function getEasySearchResult(){
   var url_str = '';
   
   if($('select#travel_type_sel').val() != '') url_str  += '&travel_type=' + $('select#travel_type_sel').val();
   if($('select#tour_country_sel').val() != '') url_str  += '&land_id=' + $('select#tour_country_sel').val();
   if($('input#price_sel').val() != '') url_str  += '&price_sel=' + $('input#price_sel').val(); 
   
   if($('input#start_date_sel').val() != '') url_str  += '&start_date_sel=' + $('input#start_date_sel').val();     
   if($('input#end_date_sel').val() != '') url_str  += '&end_date_sel=' + $('input#end_date_sel').val();     
     
   url_str  += '&nightless_tour_sel=' + $('input[name=nightless_tour_sel]:checked').val();     
   if($('input#spo_tour_sel').attr('checked')) url_str  += '&spo_tour_sel=true';     
   if($('input#act_tour_sel').attr('checked')) url_str  += '&act_tour_sel=true';                             

   res_url_str = AT_HTTP + '://www.accordtour.com/js/easy_xml/get-xml-test.php?callback=parseRequest' + url_str + '&hide_photos=' + hide_photos + '&lang=' + content_lang + '&sprite_color=' + sprite_color;

   $("div#" + AT_divID).attr("rel", res_url_str)
   createScriptTag(res_url_str);
   $('html,body').animate({scrollTop: $("div#" + AT_divID).offset().top}, 'slow');   

}  

function xmlDisableCallback(){
   $("div#AT_search_content").html('Сервис временно недоступен! <a href="https://www.accordtour.com">www.accordtour.com</a>');
   stopScroll = true;  
}