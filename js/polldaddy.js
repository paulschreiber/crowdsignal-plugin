jQuery(function(a){if(typeof window.$=="undefined"){window.$=jQuery}Plugin=function(b){function e(a,b){return false}function l(){a(".image").unbind("click").click(function(){var b=a(this).attr("id").replace("add_poll_image","");tb_show("Add an Image","media-upload.php?type=image&&polls_media=1TB_iframe=1");g.send_to_editor=function(c){var d=a("<div/>").html(c);img=d.find("img");attach_id=0;url=img.attr("src").replace("http://","https://");match=img.attr("class").match(/wp-image-(\d+)/);if(a.isArray(match)&&match[1]!==undefined)attach_id=match[1];tb_remove();m(url,b,attach_id)};return false});a(".video").unbind("click").click(function(){var b=a(this).attr("id").replace("add_poll_video","");tb_show("Add Video","media-upload.php?type=video&tab=type_url&polls_media=1&TB_iframe=1");g.send_to_editor=function(a){tb_remove();n(b,a,'<img height="16" width="16" src="images/icon-report-ip-analysis.png" alt="Video Embed">')};return false});a(".audio").unbind("click").click(function(){var b=a(this).attr("id").replace("add_poll_audio","");tb_show("Add Audio","media-upload.php?type=audio&polls_media=1&TB_iframe=1");g.send_to_editor=function(c){var d=a("<div/>").html(c);img=d.find("img");attach_id=0;url=img.attr("src").replace("http://","https://");match=img.attr("class").match(/wp-image-(\d+)/);if(a.isArray(match)&&match[1]!==undefined)attach_id=match[1];tb_remove();m(url,b,attach_id)};return false})}function m(b,c,d){if(k==true)return false;k=true;a('input[name="media['+c+']"]').parents("td").find(".media-preview").addClass("st_image_loader");a("form[name=send-media] input[name=media-id]").val(c);a("form[name=send-media] input[name=attach-id]").val(d);a("form[name=send-media] input[name=url]").val(b);a("form[name=send-media] input[name=action]").val("polls_upload_image");a("form[name=send-media]").ajaxSubmit(function(a){k=false;a=a.replace(/<div.*/,"");if(a.substr(0,4)=="true"){var b=a.split("||");n(b[4],b[1],b[2])}});return false}function n(b,c,d){if(parseInt(c)>0)a('input[name="mediaType['+b+']"]').val(1);else a('input[name="mediaType['+b+']"]').val(2);d.replace("http://","https://");a('input[name="media['+b+']"]').val(c);a('input[name="media['+b+']"]').parents("td.answer-media-icons").find("li.media-preview").removeClass("st_image_loader");a('input[name="media['+b+']"]').parents("td.answer-media-icons").find("li.media-preview").html(d)}function o(){var b=parseInt(a(".answer").size());a("input.answer-text").each(function(){var d=this;if(a(d).val()==c.new_answer||a(d).hasClass("idle"))b--});return b}var c=a.extend({delete_rating:'Are you sure you want to delete the rating for "%s"?',delete_poll:'Are you sure you want to delete "%s"?',delete_answer:"Are you sure you want to delete this answer?",new_answer:"Enter an answer here",delete_answer_title:"delete this answer",reorder_answer_title:"click and drag to reorder",add_image_title:"Add an Image",add_audio_title:"Add Audio",add_video_title:"Add Video",standard_styles:"Standard Styles",custom_styles:"Custom Styles"},b);a(".hide-if-js").hide();a(".empty-if-js").empty();a(".hide-if-no-js").removeClass("hide-if-no-js");a(".polldaddy-shortcode-row pre").click(function(){var b=a(this)[0];if(a.browser.msie){var c=document.body.createTextRange();c.moveToElementText(b);c.select()}else if(a.browser.mozilla||a.browser.opera){var d=window.getSelection();var c=document.createRange();c.selectNodeContents(b);d.removeAllRanges();d.addRange(c)}else if(a.browser.safari){var d=window.getSelection();d.setBaseAndExtent(b,0,b,1)}});a("input#shortcode-field").click(function(){a(this).select()});a("a.delete-rating").click(function(){return confirm(c.delete_rating.replace("%s",a(this).parents("td").find("strong").text()))});a("a.delete-poll").click(function(){return confirm(c.delete_poll.replace("%s",a(this).parents("td").find("strong").text()))});a("span.view a.thickbox").attr("href",function(){return a(this).attr("href")+"&iframe&TB_iframe=true"});var d=function(b){a("a.delete-answer",b||null).click(function(){if(confirm(c.delete_answer)){a(this).parents("li").remove();a("#choices option:last-child").remove()}return false})};d();a("#answers").sortable({axis:"y",containment:"parent",handle:".handle",tolerance:"pointer"});var f=false;a("#add-answer-holder").show().find("button").click(function(){if(!f){f=true;var b=(1+o()).toString();var c=a(this).closest("p").attr("class");a("form[name=add-answer] input[name=aa]").val(b);a("form[name=add-answer] input[name=src]").val(c);a("form[name=add-answer] input[name=action]").val("polls_add_answer");a("form[name=add-answer]").ajaxSubmit(function(c){d(a("#answers").append(c).find("li:last"));a("#choices").append('<option value="'+(b-1)+'">'+(b-1)+"</option>");f=false;l()})}return false});var g=window.dialogArguments||opener||parent||top;a(".polldaddy-send-to-editor").click(function(){var b=a(this).parents("div.row-actions").find(".polldaddy-poll-id").val();if(!b)b=a(".polldaddy-poll-id:first").val();if(b){b=parseInt(b);if(b>0){g.send_to_editor("[polldaddy poll="+b.toString()+"]")}}});a(".polldaddy-show-shortcode").toggle(function(b){b.preventDefault();a(this).parents("tr:first").next("tr").fadeIn();a(this).parents("tr:first").next("tr").show();a(this).closest("tr").css("display","none");return false},function(){a(this).parents("tr:first").next("tr").fadeOut();a(this).parents("tr:first").next("tr").hide();return false});a(".pd-embed-done").click(function(b){b.preventDefault();a(this).closest("tr").hide();a(this).closest("tr").prev("tr").show()});a(".pd-tabs a").click(function(){if(!jQuery(this).closest("li").hasClass("selected")){jQuery(".pd-tabs li").removeClass("selected");jQuery(this).closest("li").addClass("selected");jQuery(".pd-tab-panel").removeClass("show");jQuery(".pd-tab-panel#"+a(this).closest("li").attr("id")+"-panel").addClass("show")}});var h=a(":input[name=styleID]");var i=a(":input[name=customSelect]");var j=parseInt(i.val());if(j>0){h.val(j.toString());a("#pd-custom-styles a").click()}a("#multipleChoice").click(function(){if(a("#multipleChoice").is(":checked")){a("#numberChoices").show("fast")}else{a("#numberChoices").hide("fast")}});a(".block-repeat").click(function(){var b=jQuery(this).val();if(b=="off"){a("#cookieip_expiration_label").hide();a("#cookieip_expiration").hide()}else{a("#cookieip_expiration_label").show();a("#cookieip_expiration").show()}});var k=false;l();var p={add_media:n};return p}});