(function(){dust.register("offersAndNBADetail",body_0);function body_0(chk,ctx){return chk.write("<div class=\"uirefresh-contentArea\"><table role=\"presentation\" width=\"100%\" class=\"HeaderTable padding-bottom-19\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" id=\"offerAndNBAHeader").reference(ctx.get("tabId"),ctx,"h").write("\"><tr><!-- <td width=\"45%\"><hr class=\"headerline\"></hr></td> --><th width=\"45%\"><h1 class=\"marginRight\"><div class=\"noWrap bold component-heading\">My Offers</div></h1></th><!--<td width=\"41%\"><hr class=\"headerline\"></hr></td>--><td width=\"4%\" class=\"center\"><!--Help --><div id=\"\" style=\"\"> <a href=\"#\" role=\"button\" title=\"Help Menu\"><img class=\"helpIcon\" data-argus-monitor=\"").reference(ctx.get("argusId"),ctx,"h").write("HelpMenu\" id=\"offerAndNBADetail_HelpMenu").reference(ctx.get("tabId"),ctx,"h").write("\" alt=\"Help Menu\" style=\"border: none; cursor: pointer;\"></a></div><!--End Help --></td></tr> </table><div id=\"headerInfo").reference(ctx.get("tabId"),ctx,"h").write("\" style=\"\"> </div><div id=\"offerContent").reference(ctx.get("tabId"),ctx,"h").write("\"></div><div id=\"footerInfo").reference(ctx.get("tabId"),ctx,"h").write("\"></div>\t</div>");}return body_0;})();
var offersAndNBADetail = {				
		process: function(jsonData) {
		
			//Messages - to Subscribe
			//Jaws
			//Subscribe
			var me = this;
			 me.jsonData = jsonData;			
	         me._tabId = jsonData.tabId;
	         me.uniqueId = jsonData.uniqueId;	         
	         me.argusId = jsonData.argusId;

	         dust.render("offersAndNBADetail", {tabId: me.uniqueId,argusId:me.argusId}, function(err, out) {
	 			$jq("#"+me.uniqueId).html(out);	
	 				 			
	 			//addHelpMenuandLinkHtml("#offerAndNBAOffer_HelpMenu"+me.uniqueId,"acssweb_myoffers_help.htm","","Icon_OfferNBSHelp.png");	 	 			
	 				 			
	 				 			
		     });		
	         me.initializeAndLoadOffers(jsonData);
	         
		},
		beforeClose:function()
		{

		},
		receive:function(name,msgObj)
		{

		},
		initializeAndLoadOffers: function(jsonData){
			var me = this;
			
	    },		
};
