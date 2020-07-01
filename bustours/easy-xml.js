if(typeof jQuery != "undefined")
   $ = jQuery.noConflict();    
   
if(!AT_divID) var AT_divID = 'AT_content';
if(!AT_HTTP) var AT_HTTP = 'http';                       
                      
function parseRequest(response){
   try{

      var hash = location.hash;
      if(hash.indexOf('tourID') != -1){
         createScriptTag('');
      }
      else{      
         div_str = '';
         
         if(show_filter){
            var filterWidth = contentDivWidth>650?650:(contentDivWidth-40);
            div_str +=    
               '<table width="100%" align="center" cellspacing="0" cellpadding="0" style="width: 100% !important; line-height: normal !important; margin-bottom: 5px !important; border: 1px solid #' + table_border_color + ' !important;">' +
               '<tr><td align="center" style="border: none !important; background: #' + filter_bg_color + ' !important; padding: 1px; !important;">' +
               '<div class="layout" style="width: ' + filterWidth + 'px !important; max-width: 600px !important; margin: auto !important; padding: 10px !important; text-align: center !important;">' +
                     '<div style="float: left !important; margin: 5px !important;">' +
                     '<table cellspacing="0" cellpadding="0" align="center" style="margin: 0 !important; padding: 0 !important; border: none !important; line-height: normal !important;">' +
                        '<tr>' +
                           '<td style="font: bold 12px Verdana, Sans-Serif !important; text-shadow: none !important; padding: 0 5px 0 0 !important; color: #' + filter_text_color + ' !important; text-align: right !important; border: none !important;" align="right">' + (content_lang=='ru'?'Страны':'Країни') +': </td>' +
                           '<td align="left" style="padding: 0 !important; border: none !important;"><select onChange="dayFilter()" id="select_country" name="select_country" style="width: 120px !important; font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; color: #000000 !important; margin: 0 !important; padding: 3px !important; border: solid 1px #cccccc !important;"></select></td>' +
                        '</tr>' +
                     '</table>' +
                     '</div>' +    
                     '<div style="float: left !important; margin: 5px !important;">' +
                     '<table cellspacing="0" cellpadding="0" align="center" style="margin: 0 !important; padding: 0 !important; border: none !important; line-height: normal !important;">' +
                        '<tr>' +
                           '<td style="font: bold 12px Verdana, Sans-Serif !important; text-shadow: none !important; padding: 0 5px 0 0 !important; color: #' + filter_text_color + ' !important; text-align: right !important; border: none !important;" align="right">' + (content_lang=='ru'?'Дни':'Дні') +':</td>' +
                           '<td align="left" style="padding: 0 !important; border: none !important;"><input onKeyUp="dayFilter()" placeholder="' + (content_lang=='ru'?'Длительность тура':'Тривалість туру') +'" value="" type="text" style="width: 130px !important; font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; color: #000000 !important; margin: 0 !important; padding: 3px !important; border: solid 1px #cccccc !important;" id="day_filter" name="day_filter"></td>' +
                        '</tr>' +
                        '<tr><td style="border: none !important;">&nbsp;</td><td align="left" style="padding: 2px !important; border: none !important;"><span style="font: bold 10px Verdana, Sans-Serif !important; text-shadow: none !important; color: #' + filter_text_color + ' !important;">' + (content_lang=='ru'?'Пример':'Приклад') +': </span><span style="font: normal 10px Verdana, Sans-Serif !important; text-shadow: none !important; color: #' + filter_text_color + ' !important;">4,5 ' + (content_lang=='ru'?'или':'або') +' 3-5 дней</span></td></tr>' +
                     '</table>' +
                     '</div>' +
                     '<div style="float: left !important; margin: 5px !important;">' +
                     '<table cellspacing="0" cellpadding="0" align="center" style="margin: 0 !important; padding: 0 !important; border: none !important; line-height: normal !important;">' +
                        '<tr>' +
                           '<td style="font: bold 12px Verdana, Sans-Serif !important; text-shadow: none !important; padding: 0 5px 0 0 !important; color: #' + filter_text_color + ' !important; text-align: right !important; border: none !important;" align="right">' + (content_lang=='ru'?'Цена':'Ціна') +':</td>' +
                           '<td align="left" style="padding: 0 !important; border: none !important;"><input onKeyUp="dayFilter()" placeholder="' + (content_lang=='ru'?'Цена тура':'Ціна туру') +'" value="" type="text" style="width: 100px !important; font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; color: #000000 !important; margin: 0 !important; padding: 3px !important; border: solid 1px #cccccc !important;" id="price_filter" name="price_filter"></td>' +
                        '</tr>' +
                        '<tr><td style="border: none !important;">&nbsp;</td><td align="left" style="padding: 2px !important; border: none !important;"><span style="font: bold 10px Verdana, Sans-Serif !important; text-shadow: none !important; color: #' + filter_text_color + ' !important;">' + (content_lang=='ru'?'Пример':'Приклад') +': </span><span style="font: normal 10px Verdana, Sans-Serif !important; text-shadow: none !important; color: #' + filter_text_color + ' !important;">2500-4000</span></td></tr>' +
                     '</table>' +
                     '</div>' +
               '</div>' +
               '</td></tr>' +
               '</table>';
         }
         
         div_str += 
            '<table cellspacing="1" cellpadding="10" style="width: 100% !important; font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; white-space: normal !important; line-height: normal !important; border-collapse: separate !important; border-spacing: 1px !important; color: #000000 !important; background: #' + table_border_color + ' !important;" width="100%" id="tour_tbl">' +
		          '<tr align="center" style="background: #' + header_bg_color + ' !important;">' +
		              '<td style="padding: 10px !important;">&nbsp;</td>' +
		              '<td style="font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; color: #' + header_text_color +' !important; text-align: center !important; padding: 10px !important;">' + (content_lang=='ru'?'Название тура':'Назва туру') +'</td>' +
		              '<td style="width: 40px !important; font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; color: #' + header_text_color +' !important; text-align: center !important; padding: 10px !important;">' + (content_lang=='ru'?'Дни':'Дні') +'</td>' +
		              '<td style="font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; color: #' + header_text_color +' !important; text-align: center !important; padding: 10px !important;">' + (content_lang=='ru'?'Даты выездов':'Дати виїздів') +'</td>' +
		              '<td style="font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; color: #' + header_text_color +' !important; text-align: center !important; padding: 10px !important;">' + (content_lang=='ru'?'Цена':'Ціна') +'</td>' +
                  '</tr>';
               
         if(response != ""){
            for (var x in response){ 
               tour_array = response[x];
               div_str +=
                  '<tr style="color: #' + table_text_color +' !important; background: #' + body_bg_color + ' !important;" rel_id="' + tour_array.id + '" rel_price="' + tour_array.price_raw + '" rel_day="' + tour_array.days + '" rel_tour="tour_tr">' + 
                     '<td style="min-width: 22px !important; font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; text-align: center !important; padding: 10px !important; background: #' + body_bg_color + ' !important;">' + decodeURIComponent(tour_array.iso_str) + '</td>' + 
                     '<td style="text-align: center !important; padding: 10px !important; background: #' + body_bg_color + ' !important;"><span onClick="createScriptTag(\'' + AT_HTTP + '://www.accordtour.com/js/easy_xml/get-tour-test.php?callback=parseTourRequest&product_id=' + tour_array.id + '&hide_photos=' + hide_photos + '&lang=' + content_lang + '&sprite_color=' + sprite_color +'\'); window.location.hash=\'#tourID_' + tour_array.id + '\'; " style="cursor:pointer; text-decoration:underline; font: bold 12px Verdana, Sans-Serif !important;">' + tour_array.name + '</span><br/>' +
                     '<span style="font: normal 10px Verdana, Sans-Serif !important;">' + tour_array.description  + '</span>';
                     if(tour_array.gb_cnt && tour_array.gb_cnt > 0){
                        div_str += '<table cellpadding="2" align="center" style="width: 120px !important; margin-top: 5px !important;">' +
                                      '<tr><td align="right" style="width: 25px !important; background: #' + body_bg_color +' !important;"><img src="' + AT_HTTP + '://www.accordtour.com/images/bubble.png"></td>' +
                                          '<td align="left" style="white-space:nowrap; background: #' + body_bg_color +' !important;"><span onClick="createScriptTag(\'' + AT_HTTP + '://www.accordtour.com/js/easy_xml/get-tour-test.php?callback=parseTourRequest&is_gb=true&product_id=' + tour_array.id + '&hide_photos=' + hide_photos + '&lang=' + content_lang + '&sprite_color=' + sprite_color +'&category_id=' + getCategoryId() + '\'); if(typeof AT_noHash == \'undefined\' || !AT_noHash) window.location.hash=\'#tourID_' + tour_array.id + '\';" style="color:#' + table_text_color + '; font-weight:bold; font-size:11px; cursor:pointer; text-decoration:underline">Отзывы (' + tour_array.gb_cnt + ')</span></td>' +
                                      '</tr>' +
                               '</table>';
                     }                      
               div_str += '</td>' +
                     '<td style="width: 40px !important; font: normal 11px Verdana, Sans-Serif !important; text-shadow: none !important; text-align: center !important; padding: 10px !important; background: #' + body_bg_color + ' !important;">' + tour_array.days + '</td>' + 
                     '<td style="color: #' + table_text_color +' !important; text-align: center; padding: 10px !important; background: #' + body_bg_color + ' !important;" valign="middle" align="center" width="25%" rel="date_td_w">' + decodeURIComponent(tour_array.tour_date) + '</td>' + 
                     '<td style="width: 100px !important; padding: 10px 5px !important; background: #' + body_bg_color + ' !important;"><div class="select_currency_from">' + (content_lang=='ru'?'от':'від') +'</div> ' + tour_array.price + 
                        '<div style="width: 25px !important; height: 25px !important; margin: auto !important; clear: both !important; position: static;"><a onClick="getTBForm(\'' + tour_array.id + '\')" style="color:#FE0000; font:bold 12px Verdana !important; text-shadow: none !important; cursor:pointer"><img title="' + (content_lang=='ru'?'Перезвоните мне':'Передзвоніть мені') +'" alt="' + (content_lang=='ru'?'Перезвоните мне':'Передзвоніть мені') +'" src="' + AT_HTTP + '://www.accordtour.com/images/tour/phone.png"></a></div>' +
                     '</td>' +
                   '</tr>';   
            } 
         }
         div_str += '</table>';
         $("div#" + AT_divID).html(div_str).show();
         buildCountrySelect();
           
         $('div.tour_date_div_class', 'div#' + AT_divID).each(
            function(){
                 $(this).css("width", dateDivWidth + "px");
                 $("div.tour_date_div_inner", this).css("width", $("div.tour_date_div_inner>div", this).size()*60 + "px");
                 if($("div.tour_date_div_inner", this).width() <= $(this).width()){
                    $("#tour_date_left_arrow_" +  $(this).attr("rel")).hide();
                    $("#tour_date_right_arrow_" + $(this).attr("rel")).hide();
                 }
                 
                 if($("div", this).eq(0).text() == ''){
                    var empty_tr = $(this).parent().parent().parent().parent().parent().parent();
                    $(empty_tr).appendTo($(empty_tr).parent());               
                 }
                 

            })  
            
         $('td[rel=date_td_w]>table', 'div#' + AT_divID).each(
            function(){
                 $(this).css("width", dateDivWidth + 70 + "px");
         });

            $('img', 'div#' + AT_divID).each(
            function(){
               $(this)
                  .css("-webkit-box-shadow", "none")
	               .css("-moz-box-shadow", "none")
	               .css("box-shadow", "none")
            })
      }
   }
   catch(an_exception){
      console.log(an_exception);
   }
}


function parseTourRequest(response){
   try{
      div_str = '';
      //for (var x in response){
         if(response[0]){
            if(header_bg_color == header_text_color){
               header_bg_color = 'FFF';
               header_text_color = '000';
            }

            tour_array = response[0];
            //console.log(tour_array);
            div_str +=
            '<table cellspacing="0" cellpadding="5" style="width: 100%; color: #000; background: #' + body_bg_color + ' !important;" width="100%">' + 
               '<tr><td style="background: #' + body_bg_color + ' !important; color:#' + table_text_color +';" align="left"><span id="AT_back_span" style="display: block; width: 75px; padding: 10px; background: #' + header_bg_color + ' !important; color: #' + header_text_color +'; cursor: pointer; font: bold 16px Verdana, Sans-Serif !important;" onClick="if(typeof AT_noHash == \'undefined\' || !AT_noHash) window.location.hash=\'\'; createScriptTag($(\'div#'  + AT_divID + '\').attr(\'rel\'));">&laquo; Назад</span></td></tr>';

            if(tour_array.tour_gb){
               div_str +=
               '<tr><td style="padding-top:30px; background: #' + body_bg_color + ' !important; color:#' + table_text_color +'; font: bold 14px Verdana, Sans-Serif !important;" align="left">' +
                  '<div id="tour_tab" onClick="changeTourTab(\'tour\')" style="cursor:pointer; padding:10px; float:left; background: #' + body_bg_color + ' !important; border: 2px solid #' + table_border_color + '; border-bottom:none;">Программа тура</div>' +
                  '<div style="height: 39px; float:left; width: 5px; border-bottom: 2px solid #' + table_border_color + '"></div>' +
                  '<div id="gb_tab" onClick="changeTourTab(\'gb\')" style="cursor:pointer; padding:10px; float:left; background: #' + header_bg_color + ' !important; border: 2px solid #' + table_border_color + '">Отзывы</div>' +
                  '<div style="height: 39px; float:left; width: 55%; border-bottom: 2px solid #' + table_border_color + '"></div>' +
               '</td></tr>'
            }
            div_str +=
               '<tr><td style="background: #' + body_bg_color + ' !important; color:#' + table_text_color +'; font: bold 10px Verdana, Sans-Serif !important; text-align: right !important; padding-top: 5px !important; padding-bottom: 5px !important;">' + decodeURIComponent(tour_array.pre_word) + '</td></tr>' +
               '<tr><td style="background: #' + body_bg_color + ' !important; color:#' + table_text_color +'; font: bold 14px Verdana, Sans-Serif !important; text-align: center !important; padding-top: 5px !important; padding-bottom: 5px !important;">' + tour_array.name + '</td></tr>' + 
               '<tr><td style="background: #' + body_bg_color + ' !important; color:#' + table_text_color +'; text-align: center !important; padding-top: 5px !important; padding-bottom: 5px !important;">' + decodeURIComponent(tour_array.iso_str) + '</td></tr>';
               
            if(tour_array.tour_gb){ 
               div_str +=
                  '<tr rel="gb_tr"><td style="background: #' + body_bg_color + ' !important; color: #' + table_text_color +' !important; font: bold 10px Verdana !important;" align="center">';
               var pi = 0;
               var pp = 1;
               for (var gb in tour_array.tour_gb){ 
                  if(tour_array.tour_gb[gb]){
                      tour_gb = tour_array.tour_gb[gb];
                      if(pi == 0) div_str += '<div id="p' + pp + '" ' + (pp==1?' class="_current" ':' rel="p_hide" ') +'>';
                      div_str += 
                          '<table cellspacing="0" cellpadding="10" style="width:100%; margin:15px 0; color:#000; background: #' + body_bg_color + ' !important;" width="100%" rel="gb_table">' +
                             '<tr>' +
                                '<td style="padding:10px !important; text-align:left !important; background: #' + header_bg_color + ' !important; color: #' + table_text_color +' !important; border: 1px solid #' + table_border_color + ' !important; border-bottom:none !important; font: normal 11px Verdana, Sans-Serif !important;">' +
                                   '<b>Дата поездки:</b> ' + tour_gb.tourdate +
                                '</td>' +
                             '</tr>' +
                             '<tr><td style="padding:10px !important; text-align:left !important; background: #' + table_bg_color + ' !important;   color:#' + table_text_color +'; border: 1px solid #' + table_border_color + ' !important; font:normal 11px Verdana, Sans-Serif !important;">' +
                             '<div style="margin:auto; width:100%; overflow:hidden; background: #' + table_bg_color + ' !important; padding: 5px !important;">';
                             if(tour_gb.photo){
                             div_str += 
                               '<div style="float:right; margin-left:10px; cursor:pointer; background: #' + table_bg_color + ' !important;" onClick="TINY.box.show({iframe:\'' + AT_HTTP + '://www.accordtour.com/js/easy_xml/get-photo-gallery.php?w_w=' + $(window).width() + '&w_h=' + ($(window).height()-50) + '&gb_id=' + tour_gb.id +'\', boxid:\'frameless\', width:' + ($(window).width()>tour_gb.gb_width?tour_gb.gb_width:$(window).width()) + ', height:' + ($(window).height()-50) + ', fixed:false, maskid:\'bluemask\', maskopacity:40, closejs:function(){$(\'html,body\').unbind(\'DOMMouseScroll mousewheel\')}})" >' +
                                    '<div class="collage_container" style="background: #' + table_bg_color + ' !important;">' +
	                                    '<ul class="collage_gallery">' +
		                                    '<li class="pic-1"><img style="max-width:70px; max-height:70px;" src="' + (tour_gb.photo['collage_dir_name_3']!=''?AT_HTTP + '://www.accordtour.com/'+tour_gb.photo['collage_dir_name_3']:AT_HTTP + '://www.accordtour.com/UserFiles/guestbook-gallery/') + tour_gb.photo['collage_photo_3'] + '" /></li>' +
		                                    '<li class="pic-2"><img style="max-width:70px; max-height:70px;" src="' + (tour_gb.photo['collage_dir_name_2']!=''?AT_HTTP + '://www.accordtour.com/'+tour_gb.photo['collage_dir_name_2']:AT_HTTP + '://www.accordtour.com/UserFiles/guestbook-gallery/') + tour_gb.photo['collage_photo_2'] + '" /></li>' +
		                                    '<li class="pic-3"><img style="max-width:70px; max-height:70px;" src="' + (tour_gb.photo['collage_dir_name_1']!=''?AT_HTTP + '://www.accordtour.com/'+tour_gb.photo['collage_dir_name_1']:AT_HTTP + '://www.accordtour.com/UserFiles/guestbook-gallery/') + tour_gb.photo['collage_photo_1'] + '" /></li>' +
	                                    '</ul>' +
                                    '</div>' +                                       
                                    '<div style="display:none; width:60px; font:normal 11px Verdana !important; text-shadow: none !important; color:#C91F21; margin:auto">Фото (' + tour_gb.photo_cnt +')</div>' +
                               '</div>';
                             }
                             div_str += '<div style="background: #' + table_bg_color + ' !important; text-align:justify; margin-right:10px;" class="gb_msg_div">' + decodeURIComponent(tour_gb.message) + '</div>' +
                                '</div>' +
                                 '<div style="clear:both"></div>' +
                                 '<div style="margin-top:10px; float:left; color:#920102; font:bold 11px Verdana !important; text-shadow: none !important; cursor:pointer; display:block !important" class="at-toggle-link">... Далее</div>' +
                             '</td></tr>' +
                             '<tr><td style="padding:10px !important; text-align:left !important; background: #' + body_bg_color + ' !important; color: #' + table_text_color +' !important; font:normal 11px Verdana !important; text-shadow: none !important;">' +
                                  '<div style="float:left; color:#920102; text-decoration:underline; font: bold 11px Verdana, Sans-Serif !important;">' + tour_gb.nickname + '</div>' +
                                  '<div style="float:left; color:#000; font:normal 11px Verdana !important; text-shadow: none !important; margin-left: 5px">(' + tour_gb.city + ')</div>' +
                                  '<div style="float:left; color:#000; font:normal 11px Verdana !important; text-shadow: none !important; margin-left: 30px"><b>Дата отзыва:</b> ' + tour_gb.data + '</div>' +
                              '</td></tr>' +
                          '</table>';
                      pi++;
                      if(pi == 8){
                         div_str += '</div>';
                         pi = 0;
                         pp++;
                      }
                  }
               }
               div_str += (pi!=8?'</div>':'') + '<div id="demo5"></div></td></tr>';
               
            }

            div_str +=
               '<tr rel="tour_tr"><td style="background: #' + body_bg_color + ' !important; color:#' + table_text_color +';" align="center">' + decodeURIComponent(tour_array.tour_date) + '</td></tr>' +  
               '<tr rel="tour_tr"><td style="background: #' + body_bg_color + ' !important; color:#' + table_text_color +';" align="center">' + decodeURIComponent(tour_array.doc_warning) + '</td></tr>' +                  
               '<tr rel="tour_tr"><td style="background: #' + body_bg_color + ' !important; color:#' + table_text_color +'; font: normal 12px Verdana, Sans-Serif !important;" align="center" id="big_description_td">' + decodeURIComponent(tour_array.big_description) + '</td></tr>' +
               '<tr rel="tour_tr"><td style="background: #' + body_bg_color + ' !important; color:#' + table_text_color +'; font: normal 12px Verdana, Sans-Serif !important;" align="center">' + decodeURIComponent(tour_array.price_file) + '</td></tr>' +
            '</table>' +
             decodeURIComponent(tour_array.price_table) + '' 
            ;
         //}
         $("div#" + AT_divID).html(div_str);          
         
        var $dscr = $('div.gb_msg_div', "div#" + AT_divID),
            $switch = $('div.at-toggle-link', "div#" + AT_divID),
            $initHeight = 114; // Initial height
        
        $dscr.each(
           function(){
              if($(this).height() > $initHeight){
                 $.data(this, "realHeight", $(this).height()+10); 
                 $(this).css({height: $initHeight + 'px' });         
              }
              else{
                 $(this).parent().next().next().remove();
              }
           }
        )
        
        $switch.each(
           function(){
              $(this).toggle(
                  function() {
                     var msg_div = $(this).parent().find('div.gb_msg_div');
                     $(msg_div).animate({ height: $(msg_div).data("realHeight")}, 300); 
                     $(this).html("... Свернуть")
                  },
                  function() {
                     var msg_div = $(this).parent().find('div.gb_msg_div');
                     $(msg_div).animate({ height: $initHeight}, 300); 
                     $(this).html("... Далее")
                  } 
              )
           }
        );
        
        $("tr[rel=gb_tr]", "div#" + AT_divID).hide();        
        $("div[rel=p_hide]", "div#" + AT_divID).hide();        
        
        $("div#gb_tab").html("Отзывы (" + $("table[rel=gb_table]").size() + ")");


         if($("table#not_include", "div#" + AT_divID).prev().width() > contentDivWidth)
            $("table#not_include", "div#" + AT_divID).prev().css("width", contentDivWidth + "px");
         $("table#not_include", "div#" + AT_divID).prev().find("td").css("border-color", "#" + table_border_color).css("text-align", "left");
         $("table#not_include", "div#" + AT_divID).prev().find("tr:first td").css("background-color", "#" + header_bg_color).css("color", "#" + header_text_color);  
         $("table#not_include", "div#" + AT_divID).prev().find("tr:first td span").css("color", "#" + header_text_color);
         
         if($("table#not_include", "div#" + AT_divID).width() > contentDivWidth)
            $("table#not_include", "div#" + AT_divID).css("width", contentDivWidth + "px");      
         $("table#not_include td", "div#" + AT_divID).css("border-color", "#" + table_border_color).css("text-align", "left");
         $("table#not_include tr:first td", "div#" + AT_divID).css("background-color", "#" + header_bg_color).css("color", "#" + header_text_color);  
         $("table#not_include tr:first td span", "div#" + AT_divID).css("color", "#" + header_text_color);
         
         if($("div#price_comment", "div#" + AT_divID).width() > contentDivWidth) $("div#price_comment", "div#" + AT_divID).css("width", contentDivWidth + "px");                                                                                      
         if($("div#regular_price", "div#" + AT_divID).width() > contentDivWidth) $("div#regular_price", "div#" + AT_divID).css("width", contentDivWidth + "px");                                                                                      
         if($("div#regular_price table", "div#" + AT_divID).width() > contentDivWidth) $("div#regular_price table", "div#" + AT_divID).css("width", contentDivWidth + "px");                                                                                      
         $("div#regular_price table", "div#" + AT_divID).css("background-color", "#" + table_border_color).css("border-collapse", "separate").css("border-spacing", "1px");
         $("div#regular_price table td", "div#" + AT_divID).css("background-color", "#" + table_bg_color).css("color", "#" + table_text_color) 
         $("div#regular_price table tr:first td", "div#" + AT_divID).css("background-color", "#" + header_bg_color).css("color", "#" + header_text_color);  
         $("div#regular_price table tr:first td span", "div#" + AT_divID).css("color", "#" + header_text_color);
         $("div#price_comment", "div#" + AT_divID).find("table").css("background-color", "#" + header_bg_color); 
         
         if($("div#extra_price", "div#" + AT_divID).width() > contentDivWidth) $("div#extra_price", "div#" + AT_divID).css("width", contentDivWidth + "px");                                                                                      
         if($("div#extra_price table", "div#" + AT_divID).width() > contentDivWidth) $("div#extra_price table", "div#" + AT_divID).css("width", contentDivWidth + "px"); 
         $("div#extra_price table", "div#" + AT_divID).css("background-color", "#" + table_border_color).css("border-collapse", "separate").css("border-spacing", "1px");
         $("div#extra_price table td", "div#" + AT_divID).css("background-color", "#" + table_bg_color).css("color", "#" + table_text_color) 
         $("div#extra_price table tr:first td", "div#" + AT_divID).css("background-color", "#" + header_bg_color).css("color", "#" + header_text_color);  
         $("div#extra_price table tr:first td span", "div#" + AT_divID).css("color", "#" + header_text_color);     
         
         if($("div#prices", "div#" + AT_divID).size()>0) $("div#price_comment", "div#" + AT_divID).remove().insertAfter("div#" + AT_divID + " div#prices").css("margin-bottom", "10px");
         if($("div#prices", "div#" + AT_divID).size()>0) $("div#extra_price", "div#" + AT_divID).remove().insertAfter("div#" + AT_divID + " div#prices").css("margin-bottom", "10px");
         if($("div#prices", "div#" + AT_divID).size()>0) $("div#regular_price", "div#" + AT_divID).remove().insertAfter("div#" + AT_divID + " div#prices").css("margin-bottom", "10px"); 
         
         if($("div#price_button_div", "div#" + AT_divID).size()>0) $("div#price_button_div").remove().insertAfter("div#" + AT_divID + " div#prices").css("margin-bottom", "10px");
         
         $("table#tour_dates_table", "div#" + AT_divID).css("background-color", "#" + body_bg_color); 
         $("table#tour_dates_table div#tour_date_div table", "div#" + AT_divID).css("background-color", "#" + table_border_color).css("margin", "auto");
         $("table#tour_dates_table div#tour_date_div table table td", "div#" + AT_divID).css("background-color", "#" + table_bg_color).css("color", "#" + table_text_color);
         $("table#tour_dates_table div#tour_date_div table table tr:first-child td", "div#" + AT_divID).css("background-color", "#" + header_bg_color).css("color", "#" + header_text_color);                     
         
         $("div#tour_date_div").css("width", dateTourDivWidth + "px");       
         if($("div#tour_date_div table table", "div#" + AT_divID).size() < 5){
            $(".tour_date_left_arrow", "div#" + AT_divID).hide();
            $(".tour_date_right_arrow", "div#" + AT_divID).hide();
         }
         
         
         $("td#big_description_td img", "div#" + AT_divID).not("[src*=calc_turist],[src*=00_ekskursija_na_den_rogdenija]").each( 
            function(){
               $(this).closest("table").attr("rel", "empty_table");
               $(this).insertBefore($(this).closest("table")).wrap("<div style='float:left; margin:5px; position: relative' />").removeAttr("hspace");
            }
         );  
         $("table[rel=empty_table] td:not(:has(img))", "div#" + AT_divID).each(
            function(){
               $(this).children(":first").insertBefore($(this).closest("table")).wrap("<div style='float:left; margin:5px; position: relative' />");
            }
         )    
         $("table[rel=empty_table]", "div#" + AT_divID).before("<div style='clear:both'></div>").remove(); 
         
         $("table", "div#" + AT_divID).each(function(){
            if($(this).width() > contentDivWidth) $(this).css("width", contentDivWidth + "px"); 
         }); 
         
         $("td#big_description_td>div:hidden", "div#" + AT_divID).each(function(){
            $(this).show();
            if($(this).width() > contentDivWidth) $(this).css("width", contentDivWidth + "px"); 
            if($(this).find('table').width() > contentDivWidth) $(this).find('table').css("width", contentDivWidth + "px");
            //$(this).hide();
         });  
         
         $("td#big_description_td>div>div:hidden", "div#" + AT_divID).each(function(){
            $(this).show();
            if($(this).width() > contentDivWidth) $(this).css("width", contentDivWidth + "px"); 
            if($(this).find('table').width() > contentDivWidth) $(this).find('table').css("width", contentDivWidth + "px");
            //$(this).hide();
         });                   
         
         $("iframe", "div#" + AT_divID).each(function(){
            if($(this).width() > contentDivWidth) $(this).css("width", contentDivWidth + "px"); 
         });   

         $("img", "div#" + AT_divID).each(
         function(){
            $(this)
               .css("-webkit-box-shadow", "none")
	            .css("-moz-box-shadow", "none")
	            .css("box-shadow", "none")
         });
         
         if(header_bg_color != header_text_color)
            $("div#order_btn", "div#" + AT_divID).css("background-color", "#" + header_bg_color).find("div").css("color", "#" + header_text_color);
            
         if(tour_array.tour_gb){ 
		    setTimeout(function(){
                $("#demo5").paginate({
			        count 		: pp,
			        start 		: 1,
			        display     : 8,
			        border					: true,
			        border_color			: '#' + table_border_color,
			        text_color  			: '#' + header_text_color,
			        background_color    	: '#' + header_bg_color,	
			        border_hover_color		: '#ccc',
			        text_hover_color  		: '#000',
			        background_hover_color	: '#fff', 
			        images					: false,
			        mouse					: 'press',
			        onChange     			: function(page){
                                                        $("div#p1", "div#" + AT_divID).removeClass('_current').hide();   
                                                        $("div[rel=p_hide]", "div#" + AT_divID).removeClass('_current').hide();   
                                                        $('#p' + page, "div#" + AT_divID).addClass('_current').show();
                                                        $('html, body').animate({scrollTop: $("div#" + AT_divID + " div#p" + page).offset().top}, 500);
                                               }
		        }); 
            }, 2000);
         }
         
         if(tour_array.is_gb){
            setTimeout(function(){ changeTourTab('gb'); }, 1000);
         }
               
         
        $('tr[rel=gb_tr]',  "div#" + AT_divID).hide();            
      }
      else
         $("div#" + AT_divID).html("Тур не найден.");           

   }
   catch(an_exception){
      console.log(an_exception);
   }
}

function scrollTourDateDiv(direction, id){
  tourDateDiv =  $('div#tour_date_div_' + id, "div#" + AT_divID);
  tourDateDivContent = $('div#tour_date_div_' + id + ' div.tour_date_div_inner', "div#" + AT_divID);
  if(direction == 'left')
     $(tourDateDiv).animate({scrollLeft : '-=' + dateDivWidth}, 500, 
       function(){
          if($(tourDateDivContent).position().left >= $(tourDateDiv).position().left)
             $("#tour_date_left_arrow_" + id, "div#" + AT_divID).css("background-position", "0px -72px");
          else
             $("#tour_date_left_arrow_" + id, "div#" + AT_divID).css("background-position", "0px 1px");
          
          $("#tour_date_right_arrow_" + id, "div#" + AT_divID).css("background-position", "-24px 1px");
       });
  else
     $(tourDateDiv).animate({scrollLeft : '+=' + dateDivWidth}, 500,
       function(){
           if(($(tourDateDivContent).position().left + $(tourDateDivContent).width()) <= ($(tourDateDiv).position().left+$(tourDateDiv).width()))
             $("#tour_date_right_arrow_" + id, "div#" + AT_divID).css("background-position", "-24px -72px");
           else
              $("#tour_date_right_arrow_" + id, "div#" + AT_divID).css("background-position", "-24px 1px");
           
           $("#tour_date_left_arrow_" + id, "div#" + AT_divID).css("background-position", "0px 1px");              
       }); 
}


function scrollTourDateDivSingle(direction){
  tourDateDiv =  $("div#tour_date_div", "div#" + AT_divID);
  tourDateDivContent = $("div#tour_date_div>table", "div#" + AT_divID);
  if(direction == "left")
     $(tourDateDiv).animate({scrollLeft : "-=" + dateTourDivWidth}, 500, 
       function(){
          if($(tourDateDivContent).position().left >= $(tourDateDiv).position().left)
             $(".tour_date_left_arrow", "div#" + AT_divID).css("background-position", "0px -96px");
          else
             $(".tour_date_left_arrow", "div#" + AT_divID).css("background-position", "0px 1px");
          
          $(".tour_date_right_arrow", "div#" + AT_divID).css("background-position", "-32px 1px");
       });
  else
     $(tourDateDiv).animate({scrollLeft : "+=" + dateTourDivWidth}, 500,
       function(){
           if(($(tourDateDivContent).position().left + $(tourDateDivContent).width()) <= ($(tourDateDiv).position().left+$(tourDateDiv).width()))
             $(".tour_date_right_arrow", "div#" + AT_divID).css("background-position", "-32px -96px");
           else
              $(".tour_date_right_arrow", "div#" + AT_divID).css("background-position", "-32px 1px");
           
           $(".tour_date_left_arrow", "div#" + AT_divID).css("background-position", "0px 1px");              
       }); 
}

function createScriptTag(url){
    var hash = location.hash;
    if(hash.indexOf('tourID') != -1){
       tour_id = hash.replace( /^#tourID_/, '');
       url = '' + AT_HTTP + '://www.accordtour.com/js/easy_xml/get-tour-test.php?callback=parseTourRequest&product_id=' + tour_id + '&hide_photos=' + hide_photos + '&lang=' + content_lang + '&sprite_color=' + sprite_color;

      
      setInterval(function(){
          if (location.hash != hash && location.hash.indexOf('tourID')== -1) $("span#AT_back_span", "div#" + AT_divID).click();
      }, 500);
      
    }
    if(url != ''){
       $("div#" + AT_divID).html("<img src='" + AT_HTTP + "://www.accordtour.com/images/admin/loading.gif'>");
       var script = document.createElement('script');
       script.type = 'text/javascript';
       script.src = url;
       $("div#" + AT_divID).append(script);
    }
}


var tourCountryArray = new Array();
   
function buildCountrySelect(){
   $('#select_country', "div#" + AT_divID).find('option').remove();
   $('#select_country', "div#" + AT_divID).append($('<option></option>').val('').html('Все страны'));
   tourCountryArray = new Array();
   
   $("table#tour_tbl", "div#" + AT_divID).each(
      function(){
         $("tr td:first-child img", this).each(
            function(){
               var country_name = $(this).attr("title");
               if($(this).attr("title")!= '' && !in_array(country_name, tourCountryArray)){
                  tourCountryArray.push(country_name);
               }
            }
         );
      }
   );
   tourCountryArray.sort();
   for(var i=0; i<tourCountryArray.length; i++)
      $('#select_country', "div#" + AT_divID).append($('<option></option>').val(tourCountryArray[i]).html(tourCountryArray[i]));
}
   
   
function showTourTr(){
   var country_name = $('#select_country option:selected', "div#" + AT_divID).val();
   if(country_name == ""){
      $("table#tour_tbl tr[rel_tour=tour_tr]", "div#" + AT_divID).show();
   }
   else{
       $("table#tour_tbl tr[rel_tour=tour_tr]", "div#" + AT_divID).hide();
       $("table#tour_tbl", "div#" + AT_divID).each(
          function(){
             $("tr td:first-child img[title=" + country_name + "]", this).each(
                function(){
                   $(this).parent().parent().show();
                }
             );
          }
       );   
   }
}
   
   
function dayFilter(){
   showTourTr();
   var filter_val  = $("input#day_filter", "div#" + AT_divID).val();
   if(filter_val.indexOf("- - -") != -1)
      filter_val = '';
      
   var filter_array = filter_val.split(',');
   var final_array = new Array;
   for(var i=0; i<filter_array.length; i++){
      filter_array[i] = $.trim(filter_array[i]);
      if(filter_array[i].indexOf("-") != -1){
         var tmp_filter_array = filter_array[i].split('-');
         if(tmp_filter_array[0]!=undefined && tmp_filter_array[1]!=undefined){
             tmp_filter_array[0] = parseInt($.trim(tmp_filter_array[0]));
             tmp_filter_array[1] = parseInt($.trim(tmp_filter_array[1]));
             for(var j=tmp_filter_array[0]; j<=tmp_filter_array[1]; j++)    
                final_array.push(j); 
         }
      }
      else
         final_array.push(filter_array[i])    
       
   }
   
   var price_filter_val  = $.trim($("input#price_filter", "div#" + AT_divID).val());
   if(price_filter_val.indexOf("- - -") != -1)
      price_filter_val = '';

   var price_final_array = new Array;
   if(price_filter_val.indexOf("-") != -1){
      var tmp_filter_array = price_filter_val.split('-');
      if(tmp_filter_array[0]!=undefined && tmp_filter_array[1]!=undefined){
          tmp_filter_array[0] = parseInt($.trim(tmp_filter_array[0]));
          tmp_filter_array[1] = parseInt($.trim(tmp_filter_array[1]));
          for(var j=tmp_filter_array[0]; j<=tmp_filter_array[1]; j++)    
             price_final_array.push(j); 
      }
   }
   else
      price_final_array.push(price_filter_val);
      
   $("table#tour_tbl tr[rel_tour=tour_tr]:visible", "div#" + AT_divID).each(
      function(){
         var tour_price = parseFloat($(this).attr("rel_price"));
         if(filter_val=='' && price_filter_val=='')
            $(this).show();
         else{
              if((filter_val !='' &&!in_array($(this).attr("rel_day"), final_array)) || (price_filter_val && !in_array(tour_price, price_final_array)))
                 $(this).hide();
              else
                 $(this).show();
         }
      }
   );
   
   $('td.tour_day_cnt', "div#" + AT_divID).each(function(){});
}   
   
function in_array(what, where) {
   for(var i=0; i<where.length; i++){
      if(what == where[i]) return true;
   }
   return false;
}


var tb_tour_id;
function getTBForm(tour_id){
   tb_tour_id = tour_id;
   document.body.style.cursor='wait'; 
   url = AT_HTTP + '://www.accordtour.com/js/easy_xml/tb_ask_phone.php?callback=parseRequestTB&source=list&product_id=' + tb_tour_id + '&AT_divID=' + AT_divID + '&header_bg_color=' + header_bg_color + '&header_text_color=' + header_text_color;  
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;
   $('div#' + AT_divID).append(script);
}         
function parseRequestTB(response){ 
   tb_array = response[0];
   $("div#" + AT_divID + " div#order_tbl_div").remove();
   $("div#" + AT_divID + " table#tour_tbl tr[rel_id=" + tb_tour_id + "] td:first").prepend(tb_array.tb_str);
   $("div#" + AT_divID + " div#order_tbl_div").css("marginTop", "-50px");
   document.body.style.cursor='auto';    
} 

function getCategoryId(){
   var value = "&" + $("div#"  + AT_divID).attr("rel");
   var parts = value.split("&category_id=");
   if(parts.length == 2) 
      return parts.pop().split("&").shift();
}

function changeTourTab(tab_name){
   if(tab_name == 'tour'){
      $("tr[rel=tour_tr]", "div#" + AT_divID).show(); 
      $("tr[rel=gb_tr]").hide();
      $("div#tour_tab").css("background", "#" + table_bg_color).css("border-bottom", "2px solid #" + table_bg_color);
      $("div#gb_tab").css("background", "#" + header_bg_color).css("border-bottom", "2px solid #" + table_border_color);
   }
   else{
      $("tr[rel=tour_tr]", "div#" + AT_divID).hide(); 
      $("tr[rel=gb_tr]", "div#" + AT_divID).show();
      $("div#tour_tab").css("background", "#" + header_bg_color).css("border-bottom", "2px solid #" + table_border_color);
      $("div#gb_tab").css("background", "#" + table_bg_color).css("border-bottom", "2px solid #" + table_bg_color);
      $("span.jPag-current").click();
   }
}

function addATLink() {
	var body_element = document.getElementsByTagName('body')[0];
	var selection;
	selectionHTML = getATSelectionHtml();
    selection = window.getSelection();
	var pagelink = "<br /><a href='" + document.location.href + "'>" + document.location.href + "</a>";
	var copytext = selectionHTML + pagelink;
	var newdiv = document.createElement('div');
	newdiv.style.position='absolute';
	newdiv.style.left='-99999px';
	body_element.appendChild(newdiv);
	newdiv.innerHTML = copytext;
	selection.selectAllChildren(newdiv);
	window.setTimeout(function() {
		body_element.removeChild(newdiv);
	},0);
}

function getATSelectionHtml() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}    

function xmlDisableCallback(){
   $("div#" + AT_divID).html('Сервис временно недоступен! <a href="https://www.accordtour.com">www.accordtour.com</a>');
   stopScroll = true;
}
//document.oncopy = addATLink;