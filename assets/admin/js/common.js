!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=235)}({2:function(e,t){e.exports=jQuery},235:function(e,t,a){"use strict";a.r(t);var n,r=a(2),i=a.n(r),o=a(51),c=a(36);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n=i.a,String.prototype.format||(String.prototype.format=function(){var e=arguments;return this.replace(/{(\d+)}/g,(function(t,a){return void 0!==e[a]?e[a]:t}))}),String.prototype.trimRight=function(e){return void 0===e&&(e="s"),this.replace(RegExp("["+e+"]+$"),"")},n((function(){window.classicSEOAdmin={init:function(){this.misc(),this.tabs(),this.searchConsole(),this.dependencyManager()},misc:function(){void 0!==i.a.fn.select2&&n("[data-s2]").select2(),n(".cmb-group-text-only,.cmb-group-fix-me").each((function(){var e=n(this),t=e.find(".cmb-repeatable-group"),a=t.find("> .cmb-row:eq(0) > .cmb-th");e.prepend('<div class="cmb-th"><label>'+a.find("h2").text()+"</label></div>"),t.find(".cmb-add-row").append('<span class="cmb2-metabox-description">'+a.find("p").text()+"</span>"),a.parent().remove()})),n(".cpseo-collapsible-trigger").on("click",(function(e){e.preventDefault();var t=n(this),a=n("#"+t.data("target"));t.toggleClass("open"),a.toggleClass("open")}));var e=n("#cpseo_rich_snippet"),t=e.find("option[value=review]"),a=e.val();t&&(t.prop("disabled",!0),"review"===a&&n(".cmb2-id-cpseo-review-schema-notice").removeClass("hidden"),e.on("change",(function(){null!==e.val()&&"review"!==e.val()&&n(".cmb2-id-cpseo-review-schema-notice").addClass("hidden")})))},searchConsole:function(){var e=n("#console_authorization_code"),t=n("#gsc-dp-info"),a=n("#console_profile"),r=e.parent(),i=a.parent(),l=i.find(".button-primary"),d=n("body").hasClass("cpseo-wizard-body--searchconsole")?n("> p:first-of-type",".cmb-form"):n("h1",".cpseo-wrap-settings");e.after(r.find(".button")),a.after(i.find(".button")),a.on("change",(function(){null===a.val()||a.val().indexOf("sc-domain:")?t.addClass("hidden"):t.removeClass("hidden")})).change(),e.data("authorized")&&e.hide(),r.on("click",".button-secondary",(function(e){e.preventDefault(),window.open(this.href,"","width=800, height=600")})),r.on("click",".button-primary",(function(t){t.preventDefault();var i=n(this);i.prop("disabled",!0),e.data("authorized")?Object(o.a)("search_console_deauthentication").always((function(){i.prop("disabled",!1)})).done((function(){e.val(""),n("#submit-cmb").trigger("click"),"object"===("undefined"==typeof classicSEOSetupWizard?"undefined":s(classicSEOSetupWizard))&&(e.show(),e.data("authorized",!1),r.find(".button-secondary").show(),i.html("Authorize"),a.prop("disabled",!0),l.prop("disabled",!0))})):(e.addClass("input-loading"),Object(o.a)("search_console_authentication",{code:e.val()}).always((function(){i.prop("disabled",!1),e.removeClass("input-loading")})).done((function(t){t&&!t.success&&Object(c.a)(t.error,"error",d),t&&t.success&&(e.hide(),e.data("authorized",!0),r.find(".button-secondary").hide(),i.html("De-authorize Account"),l.trigger("click"),a.removeAttr("disabled"))})))})),l.on("click",(function(e){e.preventDefault(),l.prop("disabled",!0),a.addClass("input-loading"),Object(o.a)("search_console_get_profiles").always((function(){l.prop("disabled",!1),n(".console-cache-update-manually").prop("disabled",!1),a.removeClass("input-loading")})).done((function(e){if(e&&!e.success&&Object(c.a)(e.error,"error",d),e&&e.success){var t=e.selected||a.val();a.html(""),n.each(e.profiles,(function(e,t){a.append('<option value="'+e+'">'+t+"</option>")})),a.val(t||Object.keys(e.profiles)[0]),l.removeClass("hidden")}}))}))},dependencyManager:function(){var e=this,t=n(".cmb-form, .cpseo-metabox-wrap");n(".cmb-repeat-group-wrap",t).each((function(){var e=n(this),t=e.next(".cpseo-cmb-dependency.hidden");t.length&&e.find("> .cmb-td").append(t)})),n(".cpseo-cmb-dependency",t).each((function(){e.loopDependencies(n(this))})),n("input, select",t).on("change",(function(){var t=n(this).attr("name");n('span[data-field="'+t+'"]').each((function(){e.loopDependencies(n(this).closest(".cpseo-cmb-dependency"))}))}))},checkDependency:function(e,t,a){return"string"==typeof t&&t.includes(",")&&"="===a?t.includes(e):"string"==typeof t&&t.includes(",")&&"!="===a?!t.includes(e):"="===a&&e===t||"=="===a&&e===t||">="===a&&t<=e||"<="===a&&e<=t||">"===a&&t<e||"<"===a&&e<t||"!="===a&&e!==t},loopDependencies:function(e){var t=this,a=e.data("relation"),r=null;e.find("span").each((function(){var e=n(this),i=n("[name='"+e.data("field")+"']"),o=i.val();i.is(":radio")&&(o=i.filter(":checked").val()),i.is(":checkbox")&&(o=i.is(":checked"));var c=t.checkDependency(o,e.data("value"),e.data("comparison"));if("or"===a&&c)return!(r=!0);"and"===a&&(r=null===r?c:r&&c)}));var i=e.closest(".cpseo-cmb-group");i.length||(i=e.closest(".cmb-row")),r?i.slideDown(300):i.hide()},tabs:function(){var e=n(".cpseo-tabs-navigation");e.length&&e.each((function(){var t=n(this),a=t.closest(".cpseo-tabs"),r=n(">a",t),i=n(">.cpseo-tabs-content>.cpseo-tab",a),o=t.data("active-class")||"active";r.on("click",(function(){var e=n(this),t=e.attr("href");return r.removeClass(o),i.hide(),e.addClass(o),n(t).show(),!1}));var c=window.location.hash||window.localStorage.getItem(a.attr("id"));null===c?r.eq(0).trigger("click"):(c=n('a[href="'+c+'"]',t)).length?c.trigger("click"):r.eq(0).trigger("click"),e.next().css("min-height",t.outerHeight())}))},variableInserter:function(e){var t=n("input[type=text], textarea",".cpseo-supports-variables");if(e=void 0===e||e,t.length){var a=this,r=n("body"),i=void 0;t.attr("autocomplete","off"),t.wrap('<div class="cpseo-variables-wrap"/>'),n(".cpseo-variables-wrap").append('<a href="#" class="cpseo-variables-button button button-secondary"><span class="dashicons dashicons-arrow-down-alt2"></span></a>'),e&&(n(".cpseo-variables-wrap").after('<div class="cpseo-variables-preview" data-title="Example"/>'),t.on("cpseo_variable_change input",(function(e){var t=n(e.currentTarget),r=a.replaceVariables(t.val());60<r.length&&~t.attr("name").indexOf("title")&&(r=r.substring(0,60)+"..."),t.parent().next(".cpseo-variables-preview").html(r)})),t.trigger("cpseo_variable_change"));var o=n("<ul/>"),c=n('<div class="cpseo-variables-dropdown"><input type="text" placeholder="Search &hellip;"></div>');n.each(classicSEO.variables,(function(){o.append('<li data-var="%'+this.variable+'%"'+this.example+"><strong>"+this.name+"</strong><span>"+this.description+"</span></li>")})),c.append(o),n(".cpseo-variables-wrap:eq(0)").append(c);var s=n(".cpseo-variables-button, .cpseo-variables-button *, .cpseo-variables-dropdown, .cpseo-variables-dropdown *");r.on("click",(function(e){n(e.target).is(s)||p()}));var l=c.find("input"),d=c.find("li");r.on("click",".cpseo-variables-button",(function(e){e.preventDefault();var t=n(this);t.after(c),d.show(),void 0!==(i=t.prev().data("exclude-variables"))&&(i=i.split(","),u()),c.show(),l.val("").focus()})),c.on("click","li",(function(e){e.preventDefault();var t=n(this),a=t.closest(".cpseo-variables-wrap").find(">:first-child");a.val(n.trim(a.val())+" "+t.data("var")),a.trigger("cpseo_variable_change").trigger("input"),p()})),c.on("keyup","input",(function(e){e.preventDefault();var t=n(this).val().toLowerCase();if(t.length<2)return d.show(),void u();d.hide().each((function(){var e=n(this);~e.text().toLowerCase().indexOf(t)&&e.show()})),u()}))}function u(){i.forEach((function(e){c.find('[data-var="%'+e+'%"]').hide()}))}function p(){i=void 0,c.hide()}},replaceVariables:function(e){return n.each(classicSEO.variables,(function(t){if(!this.example)return!0;t=t.replace(/\([a-z]+\)/g,"\\(.*?\\)"),e=e.replace(RegExp("%+"+t+"%+","g"),this.example)})),e}},window.classicSEOAdmin.init()}))},36:function(e,t,a){"use strict";var n=a(2),r=a.n(n);t.a=function(e,t,a,n){t=t||"error",n=n||!1;var i=r()('<div class="notice notice-'+t+' is-dismissible"><p>'+e+"</p></div>").hide();a.next(".notice").remove(),a.after(i),i.slideDown(),r()(document).trigger("wp-updates-notice-added"),n&&setTimeout((function(){i.fadeOut((function(){i.remove()}))}),n)}},51:function(e,t,a){"use strict";var n=a(2),r=a.n(n);t.a=function(e,t,a){return r.a.ajax({url:classicSEO.ajaxurl,type:a||"POST",dataType:"json",data:r.a.extend(!0,{action:"cpseo_"+e,security:classicSEO.security},t)})}}});