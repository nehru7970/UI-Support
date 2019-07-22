//(function(){dust.register("offersAndNBA",body_0);function body_0(chk,ctx){return chk.write("<style>.pointer {cursor: pointer;}</style><div class=\"uirefresh-contentArea\"><div class=\"component-background-type2 available-offers-box\">  \t<table role=\"presentation\" class=\"StandardForm marginTop\" width=\"100%\"><tr><td><div class=\"noWrap bold component-heading available-offers\">Available Offers</div><div style=\"display: block;float:right;\"> <a href=\"#\" role=\"button\" title=\"Help Menu\"><img id=\"offerAndNBAOffer_HelpMenu").reference(ctx.get("tabId"),ctx,"h").write("\" data-argus-monitor=\"").reference(ctx.get("argusId"),ctx,"h").write("HelpMenu\"  src=\"\" alt=\"Help Menu\" class=\"helpIcon\"></a> </div></td>\t\t\t     \t  \t</tr></table><div id=\"offerAndNBAID_").reference(ctx.get("tabId"),ctx,"h").write("\"><div id=\"offersListDataContainer").reference(ctx.get("tabId"),ctx,"h").write("\" style=\"min-height: 215px;max-height: 215px;\"></div>    \t    </div><div id=\"offerCompForJAWS_").reference(ctx.get("tabId"),ctx,"h").write("\"><table id =\"jawsTable_").reference(ctx.get("tabId"),ctx,"h").write("\" ></table>s</div><div class=\"offer-list-container\"><table width=\"100%\">\t<tr align=\"right\"><td>\t  \t\t\t<div class=\"offer-actions\"><img class=\"pointer\" width=\"55px\" height=\"16px\" id=\"offerAndNBA_continueBtn_img_").reference(ctx.get("tabId"),ctx,"h").write("\" data-argus-monitor=\"").reference(ctx.get("argusId"),ctx,"h").write("offerAndNBA\" alt=\"Expand\" /></div>\t\t   \t\t\t\t\t</div></td></tr>\t\t\t<tr align=\"center\"><td><div class=\"offer-list-selectors\" id=\"offersSelectorList").reference(ctx.get("tabId"),ctx,"h").write("\">\t  \t     </div></td></tr></table>\t\t   \t  \t</div>                </div> </div>  ");}return body_0;})();

(function(){dust.register("offersAndNBA",body_0);function body_0(chk,ctx){return chk.write("<style>.pointer {cursor: pointer;}.no-offer-bg {\tbackground-color: #F6F6F6 !important;}.no-offers-av {color: #000000;font-family: \"Neue Haas Grotesk Display Std\";font-size: 50px;line-height: 48px;}.available-offers-box-noOffer {\t\t\tmargin:2px auto;\tbackground-size: cover;background-color: #F6F6F6;}</style><div class=\"uirefresh-contentArea\" id=\"uiRefreshArea_").reference(ctx.get("tabId"),ctx,"h").write("\"><div class=\"component-background-type2 available-offers-box\" id=\"uiRefreshbgArea_").reference(ctx.get("tabId"),ctx,"h").write("\">  \t<table role=\"presentation\" class=\"StandardForm marginTop\" width=\"100%\"><tr><td><div class=\"noWrap bold component-heading available-offers\" id=\"availableOffer_").reference(ctx.get("tabId"),ctx,"h").write("\">Available Offers</div><div style=\"display: block;float:right;\"> <a href=\"#\" role=\"button\" title=\"Help Menu\"><img id=\"offerAndNBAOffer_HelpMenu").reference(ctx.get("tabId"),ctx,"h").write("\" data-argus-monitor=\"").reference(ctx.get("argusId"),ctx,"h").write("HelpMenu\"  src=\"\" alt=\"Help Menu\" class=\"helpIcon\"></a> </div></td>\t\t\t     \t  \t</tr></table><div id=\"offerAndNBAID_").reference(ctx.get("tabId"),ctx,"h").write("\"><div id=\"offersListDataContainer").reference(ctx.get("tabId"),ctx,"h").write("\" style=\"min-height: 215px;max-height: 215px;\"></div>    \t    </div><div id=\"offerCompForJAWS_").reference(ctx.get("tabId"),ctx,"h").write("\"><table id =\"jawsTable_").reference(ctx.get("tabId"),ctx,"h").write("\" ></table>s</div><div id=\"noOffers_").reference(ctx.get("tabId"),ctx,"h").write("\" style=\"min-height: 215px;max-height: 215px;\"><div class=\"no-offer-bg\" style=\"margin:10px\"><label id=\"lblno_ofers_").reference(ctx.get("tabId"),ctx,"h").write("\" class=\"no-offers-av\" name=\"lblno_ofers_").reference(ctx.get("tabId"),ctx,"h").write("\">No loyalty offers available at this time.</label></div>\t\t</div>\t<div class=\"offer-list-container\"><table width=\"100%\">\t<tr align=\"right\"><td>\t  \t\t\t<div class=\"offer-actions\"><img class=\"pointer\" width=\"55px\" height=\"16px\" id=\"offerAndNBA_continueBtn_img_").reference(ctx.get("tabId"),ctx,"h").write("\" data-argus-monitor=\"").reference(ctx.get("argusId"),ctx,"h").write("offerAndNBA\" alt=\"Expand\" /></div>\t\t   \t\t\t\t\t</div></td></tr>\t\t\t<tr align=\"center\"><td><div class=\"offer-list-selectors\" id=\"offersSelectorList").reference(ctx.get("tabId"),ctx,"h").write("\">\t  \t     </div></td></tr></table>\t\t   \t  \t</div>                </div> </div>  ");}return body_0;})();



var offersAndNBA = {				
		process: function(jsonData) {
		
			
			MessageBroker.subscribe(this,ACSSFM.topic.CUSTOMER_MANUAL_REFRESH);
			if(!MessageBroker.isSubscribed(me,ACSSFM.topic.MY_OFFERS))
			{
				MessageBroker.subscribe(this,ACSSFM.topic.MY_OFFERS);	
			}
			
			 var me = this;
			 
			 me.jsonData = jsonData;
			 me.currentOfferIndex = 1;
	         me._tabId = jsonData.tabId;
	         me.uniqueId = jsonData.uniqueId;	         
	         me.argusId = jsonData.argusId;
	         me.offerCollection =[];
	         me.totalOffers = 0;
	         me.offersAvailable = false;
	         me.maxAllowedOffers = 5;// Change this value if you need to increase to 5/6
	         dust.render("offersAndNBA", {tabId: me.uniqueId,argusId:me.argusId}, function(err, out) {
	 			$jq("#"+me.uniqueId).html(out);	
	 			
	 			$jq("#"+me.uniqueId).removeClass('component2_1_1');
	 			$jq("#"+me.uniqueId).addClass('component-background-type2');
		 		$jq("#"+me.uniqueId).parent().addClass('component-background-type2');
	 			$jq("#offerAndNBA_continueBtn_img_" + me.uniqueId).attr("src", URL.BaseWebUrl + "/fw/images/more_arrow_white.png");
	 			
	 			$jq("#offerAndNBA_continueBtn_img_" + me.uniqueId).hide();
	 			$jq("#noOffers_" + me.uniqueId).hide();
	 			
	 			addHelpMenuandLinkHtml("#offerAndNBAOffer_HelpMenu"+me.uniqueId,"acssweb_myoffers_help.htm","","Icon_OfferNBSHelp.png");	 	 			
	 			
	 			
	 			//If JAWS user , show table , else show the rest
	 			if(isACCESSIBILITY_USER)
	 				{
	 					$jq("#offerAndNBAID_"+me.uniqueId).hide();
	 					$jq("#offersSelectorList"+me.uniqueId).hide(); //slide selector
	 					$jq("#offerCompForJAWS_"+me.uniqueId).show();	 					
	 				}
	 			else
	 				{
	 				  	$jq("#offerCompForJAWS_"+me.uniqueId).hide();
	 				  	$jq("#offerAndNBAID_"+me.uniqueId).show();	 
	 				  	$jq("#offersSelectorList"+me.uniqueId).show();
	 				}
	 				 			
		     });		
	         me.initializeAndRetrieveMyOffersOrNextBestActions(jsonData);
	         
		},
		beforeClose:function()
		{
			MessageBroker.unsubscribe(this,ACSSFM.topic.MY_OFFERS);
			MessageBroker.unsubscribe(this,ACSSFM.topic.CUSTOMER_MANUAL_REFRESH);
		},
		receive:function(name,msgObj)
		{
			var me = this;
			if(!ACSSFM.IsEmptyOrNull(msgObj) && msgObj.refreshType === 'MANUAL_REFRESH')
			{
				me.process(me.jsonData);
			}
			else if (!ACSSFM.IsEmptyOrNull(name) && name === 'MY_OFFERS'  &&  !ACSSFM.IsNullOrUndefinedObj(msgObj) && msgObj.refreshType === 'PEGA_CALL')
			{
				me.getOffersAndNBA();
			}
		},
		initializeAndRetrieveMyOffersOrNextBestActions: function(jsonData){
			var me = this;
 			//me.getOffersAndNBA(jsonData); // already existing code 
			$jq("#offerAndNBA_continueBtn_img_"+me.uniqueId).live("click",function() 
				{			
				 ACSSFM.siteCatalystTracker('offers','launch');
				 insertMetricsUtil("1D_OVERVIEW_OFFERS", "LAUNCH", me._accountInfo);				
				 ACSSFM.getSRDepartmentPermissions(['ACSS_MAYBE_OFFERS_ENABLE'], function(deptData){
 					var mayBeOffersFlag = deptData.ACSS_MAYBE_OFFERS_ENABLE;
 					if(mayBeOffersFlag === "Y" || mayBeOffersFlag === "MY OFFERS ONLY" ){
						var contactName = GetContactOrNonAuthName();	        						
						if(ACSSFM.IsEmptyOrNull(contactName) || contactName === undefined){
							Ext.Msg.show({title:"ACSS",msg:"Please select or enter a customer contact before launching My Offers",buttons: Ext.Msg.OK,icon: Ext.MessageBox.ERROR});
							return;
						}
					}				    	
 					$jq('div[name="saveSequenceDiv"]').parent().dialog("close"); 
 					ACSSFM.createPopup('saveSequenceView',{}, null,{callFrom: 'DisconnectLink', launchPoint:'SaveSequence', IsProactiveOffer: true});	 					
 					//ACSSFM.createPopup('offersAndNBADetailView',{}, null,{});
 				 });
 				 
			});	
			
			
	    },
	  
		getOffersAndNBA : function(/*jsonData*/){						
			var me = this; 
			me._accountInfo = ACSSFM.getAcssDataAcctInfo(me._tabId);	
			/*
			 *  If there is no mtn, return as no offers available
			 *  Pega Service required MTN for the API call
			 *  CAR - Mtn not involved in the offer check 
			 */
//AA_Avoid_Multi_Pega_Call_for_UI_Refresh_Begin			 			
			if(ACSSFM.IsNullOrEmpty(me._accountInfo.mtn) || (!ACSSFM.IsNullOrEmpty(me._accountInfo.mtn) && me._accountInfo.mtn.indexOf('CAR') >= 0))
				{
					me.displayNoOffers();
					ACSSFM.siteCatalystTracker('offers','no_mtn');
					insertMetricsUtil("1D_OVERVIEW_OFFERS", "NO_MTN_IN_ACCOUNT", me._accountInfo);
					return;
				}
				
/*			
		    var serviceName; 
			serviceName = "PegaOfferService"; 
			var jsonObj = {
					action : 'PegaOfferService'				  	
				  	,ACTION_REQ: 'GETOFFERS'
  			    	,CallReason: 'Offers'
  			    	,callFrom:'OfferAndNBA'
  		   			,billAcctStatusCode: me._accountInfo.billAccountInfo.accountStatus
  		   			,splitBillFromInd: me._accountInfo.splitBillFromInd
  		   			,splitBillNumMtns: me._accountInfo.splitBillNumMtns
  		   			,splitBillMtnInd: me._accountInfo.splitBillMtnInd
  		   			,splitBillToInd: me._accountInfo.splitBillToInd
  		   			,mdn: me._accountInfo.mtn
  		   			,mdnStatus: me._accountInfo.mtnStatus
  		   			,min: me._accountInfo.min
  		   			,mdnEffectiveDate: me._accountInfo.mtnEffectiveDate
  		   			,BillingSystem: getBillSysCodeAsString(me._accountInfo.acctBillingSystem, "MetricsCode")
  		   			,BillingSystemLong: me._accountInfo.acctBillingSystem
  					,customerId: me._accountInfo.customerId
  		    		,billAccountNumber: me._accountInfo.accountNumber
  		    		,billTypeCode: me._accountInfo.billTypeCode
  		    		,customerType: me._accountInfo.customerTypeCode
  		    		,customerStatus: me._accountInfo.accountStatus
  		    		,ecpdId: me._accountInfo.ecpdId
					};
*/
			 var opts = {};
			    opts.AccountInfoObject = me._accountInfo;
     		isSSLoyaltyEnabled(false, true, opts, function(isSSEnabled){
     			var sessionKeys = ['ACSS_RMSAVE_OFFER_DEPT','RM_SH_POP_IND','RM_POP_IND','ACCOUNT_ANALYSIS_ENABLE'];		
        		ACSSFM.getSRDepartmentPermissions(sessionKeys, function(sessionParamData){
         			var CustomerMtnList = [];
         			CustomerMtnList.push(me._accountInfo.mtn);
        			topViewCall(isSSEnabled, false, sessionParamData, CustomerMtnList, me._accountInfo, '' ,function(esbOfferResponse){    			  		
        		  		
        				if(!ACSSFM.IsNullOrUndefinedObj(esbOfferResponse) && 
        						   !ACSSFM.IsNullOrUndefinedObj(esbOfferResponse.serResp) &&
        						   !ACSSFM.IsNullOrUndefinedObj(esbOfferResponse.serResp.PEGA_OFFER_RESPONSE))
        				{
        					/* API Success
        					 Check if MTN has Offers available
        					 offersAvailable = true
        					 IF (offersAvailable == true)
        					 THEN
        					   Show the offers in slides 
        					 ESLE
        					   Check for NBA - Future [ Per business, Offers will Always be available
        					 ENDIF 
        					 */
        					// Content Management Data							
        					var AEMContentData;
        					if(!ACSSFM.IsNullOrUndefinedObj(esbOfferResponse.serResp.ACMOfferContents))
        					{								
        						AEMContentData = JSON.parse(esbOfferResponse.serResp.ACMOfferContents);								
        					}
        					else
        					{
        						ACSSFM.siteCatalystTracker('offers','no_content');
        						insertMetricsUtil("1D_OVERVIEW_OFFERS", "CONTENT_NOT_IN_GRID", me._accountInfo);
        					}
        					//
        					if(!ACSSFM.IsNullOrUndefinedObj(esbOfferResponse.serResp.PEGA_OFFER_RESPONSE.salesChannelCampaigns) &&
        					   !ACSSFM.IsNullOrUndefinedObj(esbOfferResponse.serResp.PEGA_OFFER_RESPONSE.salesChannelCampaigns.loyaltyInstance) &&
        					   esbOfferResponse.serResp.PEGA_OFFER_RESPONSE.salesChannelCampaigns.loyaltyInstance.length > 0)
        					{	
        						//Rare scenario
        						// making sure the formating for the offer stays, so removing the no -offer format
        						$jq("#"+me.uniqueId).removeClass('no-offer-bg');
        	 		 			$jq("#"+me.uniqueId).parent().removeClass('no-offer-bg');
        	 		 			
        	 		 			esbOfferResponse.serResp.PEGA_OFFER_RESPONSE.salesChannelCampaigns.loyaltyInstance.forEach(function(campaignItem) 
        						{									
        							if(!ACSSFM.IsNullOrUndefinedObj(campaignItem) && !ACSSFM.IsNullOrUndefinedObj(campaignItem.campaignDetails) && 
        							   campaignItem.campaignDetails.length > 0)
        							   {	
        								if(campaignItem.campaignDetails.length < me.maxAllowedOffers)
        								  {
        										me.maxAllowedOffers = campaignItem.campaignDetails.length;
        										//INSERT METRICS - as less offers
        										ACSSFM.siteCatalystTracker('offers','less','count-'+ me.maxAllowedOffers);
        										insertMetricsUtil("1D_OVERVIEW_OFFERS", "LESS_OFFERS", me._accountInfo , 'NO_OF_OFFERS=' + me.maxAllowedOffers);
        								  }
        								$jq("#offerAndNBA_continueBtn_img_" + me.uniqueId).show();
        								me.offerCollection =[];
        									campaignItem.campaignDetails.forEach(function(OfferItem)
        										{
        										   var offerItem ={}; 
        										   offerItem.priority = OfferItem.priority;
        										   offerItem.campaignId = OfferItem.campaignId;
        										   offerItem.campaignName = OfferItem.campaignName;
        										// -Adding Account/mtn Level and MTN to fecilitate Reps do diferentiate between the offers
        										   if(!ACSSFM.IsNullOrEmpty(OfferItem.accountLevel) && OfferItem.accountLevel.toUpperCase() === 'Y')
        											 {
        											   offerItem.campaignIsAccountLevel = "Account : ";
        											 }
        										   else 
        											 {
        											   offerItem.campaignIsAccountLevel = "MDN : ";
        											 }												   
        										   												   
        										   offerItem.campaignMTN = !ACSSFM.IsNullOrEmpty(OfferItem.mtn)? formatMTN(OfferItem.mtn) : '';
        										   // - End
        										   //Replacing the special characters - start
        										   offerItem.campaignName = offerItem.campaignName.replace(/'/g, "&apos;");
        										 //Replacing the special characters - end
        										   offerItem.campaignNameTooltip = '';
        										   if(!ACSSFM.IsNullOrEmpty(offerItem.campaignName) && offerItem.campaignName.length > 35)
        											{
        											   offerItem.campaignNameTooltip = offerItem.campaignName;
        											   offerItem.campaignName = offerItem.campaignName.substring(0,35) + "...";   
        										    }
        										   
        										   offerItem.campaignMessage = OfferItem.campaignMessage;
        										   //Taking off Some details
        										   offerItem.campaignMessage = $jq("<p>").html(offerItem.campaignMessage).text();
        										   //Replacing the special characters - start
        										   offerItem.campaignMessage = offerItem.campaignMessage.replace(/'/g, "&apos;");
        										   //Replacing the special characters - end			   
        										   offerItem.campaignMessageTooltip = '';
        										   
        										   if(!ACSSFM.IsNullOrEmpty(offerItem.campaignMessage) && offerItem.campaignMessage.length > 205)
        										   {
        											   offerItem.campaignMessageTooltip = offerItem.campaignMessage;    
        											   offerItem.campaignMessage = offerItem.campaignMessage.substring(0,205) + "...";
        										   } 
        										   var offerType ="";
        										   if(!ACSSFM.IsNullOrUndefinedObj(OfferItem.complianceList) &&
        												   !ACSSFM.IsNullOrUndefinedObj(OfferItem.complianceList.item) && 
        												   OfferItem.complianceList.item.length > 0 && 
        												   !ACSSFM.IsNullOrEmpty(OfferItem.complianceList.item[0].reqCompliance))
        											   {
        											   		offerType = OfferItem.complianceList.item[0].reqCompliance;	 
        											   }
        												   
        										   if(!ACSSFM.IsNullOrEmpty(offerType))
        										   {
        											   switch(offerType)
        										        {
        										        case "SPL":
        										        case "PPL":
        										        		offerItem.image = URL.BaseWebUrl + "/fw/images/offers-genericPlans.png";
        										        		offerItem.campaignType = "Plan Offer";
        										        	break;
        										        	
        										        case "SFO":
        										        case "SPO":
        										        	offerItem.image  = URL.BaseWebUrl + "/fw/images/offers-genericFeatures.png";
        										        	offerItem.campaignType = "Feature Offer";
        										        	break;
        										        	
        										        case "EQP":
        										        case "ACC":
        										        	offerItem.image = URL.BaseWebUrl + "/fw/images/offers-genericEquipmentAccs.png";
        										        	offerItem.campaignType = "Equipment Offer";
        										        	break;
        										        	
        										        default:
        										        	offerItem.image  = URL.BaseWebUrl + "/fw/images/NBA-offers_blank.png";
        										        	offerItem.campaignType = "";
        										        	break;												        
        										        }
        										   }
        										   else
        										   {
        											   // Blank Image
        											   offerItem.image  = URL.BaseWebUrl + "/fw/images/NBA-offers_blank.png";    
        										   }
        										   me.offerCollection.push(offerItem);   
        										   
        										});																																
        							  }
        						});		
        						
        						if(!ACSSFM.IsNullOrUndefinedObj(me.offerCollection) && me.offerCollection.length > 0){
        							   me.updateAEMContent(AEMContentData,me.offerCollection, me._accountInfo);		
        							me.offersAvailable = true;
        							//Sort the data by prority
        							me.currentOfferIndex = 1;
        							me.totalOffers = me.offerCollection.length;
        							//store the global Index
        							me.buildOffers(me.currentOfferIndex);
        							if(isACCESSIBILITY_USER)
        							{
        								me.populateTable();
        							}
        						}
        					}
        					else
        					{
        						me.displayNoOffers();
        						ACSSFM.siteCatalystTracker('offers','no_offer');
        						insertMetricsUtil("1D_OVERVIEW_OFFERS", "NO_OFFERS", me._accountInfo);
//        						$jq("#offerAndNBA_continueBtn_img_" + me.uniqueId).hide();
//        	 					$jq("#offerAndNBAID_"+me.uniqueId).hide();
//        	 					$jq("#offersSelectorList"+me.uniqueId).hide(); //slide selector
//        	 					$jq("#offerCompForJAWS_"+me.uniqueId).hide();				
//        	 								 					
//        	 					//removeClass			 					
        //
//        	 		 			
//        	 		 			$jq("#"+me.uniqueId).removeClass('component-background-type2');
//        	 		 			$jq("#"+me.uniqueId).parent().removeClass('component-background-type2');
//        	 		 			$jq("#"+me.uniqueId).addClass('component2_1_1 no-offer-bg');
//        	 		 			$jq("#"+me.uniqueId).parent().addClass('no-offer-bg');
//        	 		 			$jq("#availableOffer_"+me.uniqueId).removeClass('available-offers');			 								 		 						 		 			
//        	 		 			$jq("#uiRefreshArea_"+me.uniqueId).removeClass('uirefresh-contentArea');
//        	 		 			//$jq("#"+me.uniqueId).addClass('component-background-type3');
//        	 		 			$jq("#uiRefreshbgArea_"+me.uniqueId).removeClass('component-background-type2 available-offers-box');
//        	 		 			
//        						$jq("#noOffers_" + me.uniqueId).show();
//        						addHelpMenuandLinkHtml("#offerAndNBAOffer_HelpMenu"+me.uniqueId,"acssweb_myoffers_help.htm","");
//        						
//        						insertMetricsUtil("1D_OVERVIEW_OFFERS", "NO_OFFERS", me._accountInfo);
        					}
        				}
        				else
        				{
        					ACSSFM.siteCatalystTracker('offers','api_failed');
        					insertMetricsUtil("1D_OVERVIEW_OFFERS", "API_FAILED", me._accountInfo);
        				}
        				
        							

        			});         			
        		});    			
     		});     						  	
//AA_Avoid_Multi_Pega_Call_for_UI_Refresh_End			
		},	
		updateAEMContent : function(contentData,collectionData,acctInfo)
		{
			if(!ACSSFM.IsNullOrUndefinedObj(contentData) && !ACSSFM.IsNullOrUndefinedObj(collectionData))
			{
				$jq.each (collectionData , function (index,item){
					
					//offetItem.campaignId
					$jq.each (contentData , function (index,contentItem)
					{
						if(item.campaignId === contentItem.tileKey)
							{   
							/*	
							 * Do not want header and content details from AEM, would have diff Rep experiance
							 * as the desc being displayed might differ.
							   if(!ACSSFM.IsNullOrEmpty(contentItem.tileHeader))
								{
									item.campaignName = contentItem.tileHeader;
								}								
								if(!ACSSFM.IsNullOrEmpty(contentItem.tileText))
								{
									item.campaignMessage = contentItem.tileText + ". ";// + contentItem.tooltipText;	
								}
								*/
								if(!ACSSFM.IsNullOrEmpty(contentItem.imgURL))
								{									
									item.image = contentItem.imgURL;									
								}
								else
								{
									ACSSFM.siteCatalystTracker('offers','no_image','id-' + item.campaignId.toLowerCase());
									insertMetricsUtil("1D_OVERVIEW_OFFERS", "IMAGE_NOT_FOUND",acctInfo,'OFFER_ID=' + item.campaignId.toUpperCase());
								}
								
							    return false;
							}						
						//if(contentItem.
					});										
				});
			}
		},
		displayNoOffers : function()
		{
			var me = this;
				$jq("#offerAndNBA_continueBtn_img_" + me.uniqueId).hide();
				$jq("#offerAndNBAID_"+me.uniqueId).hide();
				$jq("#offersSelectorList"+me.uniqueId).hide(); //slide selector
				$jq("#offerCompForJAWS_"+me.uniqueId).hide();				
							 					
				//removeClass			 					

	 			
	 			$jq("#"+me.uniqueId).removeClass('component-background-type2');
	 			$jq("#"+me.uniqueId).parent().removeClass('component-background-type2');
	 			$jq("#"+me.uniqueId).addClass('component2_1_1 no-offer-bg');
	 			$jq("#"+me.uniqueId).parent().addClass('no-offer-bg');
	 			$jq("#availableOffer_"+me.uniqueId).removeClass('available-offers');			 								 		 						 		 			
	 			$jq("#uiRefreshArea_"+me.uniqueId).removeClass('uirefresh-contentArea');
	 			//$jq("#"+me.uniqueId).addClass('component-background-type3');
	 			$jq("#uiRefreshbgArea_"+me.uniqueId).removeClass('component-background-type2 available-offers-box');
	 			
			$jq("#noOffers_" + me.uniqueId).show();
			addHelpMenuandLinkHtml("#offerAndNBAOffer_HelpMenu"+me.uniqueId,"acssweb_myoffers_help.htm","");									
		},
		populateTable : function()
		{
			var me = this;
			//* Populating Table									
			//for (var i=0;i<=me.offerCollection.length;i++) 
			//{
			var ContainerWidth = $jq(me._tabId).width();
			var col1Percent = (ContainerWidth * 1.01) * 0.10 * 0.09;			
			var gridModel={};
			gridModel.colNames=['Ranking', 'Type', 'Campaign', 'Description' ];
			gridModel.colModel=[
									{'name': 'priority',
									 'index': 'priority',
									 'key': false,
					                 'editable': false,
					                 sortable: false,
					                 'align' : 'right',
					                 width:col1Percent,
					                 'aria-label':'Ranking'
					                },
					                {'name': 'campaignType',
					                 'index': 'campaignType',
					                 'key': false,
					                 'editable': false,
					                 sortable: false,
					                 'align' : 'left',
					                 width:col1Percent,
					                 'aria-label':'Offer Type'
					                },					                
					                {'name': 'campaignName',
					                 'index': 'campaignId',
					                 'key': false,
					                 'editable': false,
					                 sortable: false,
					                 'align' : 'left',
					                 width:col1Percent,
					                 'aria-label':'Offer'
					                },
					                {'name': 'campaignMessage',
					                 'index': 'campaignMessage',
					                 'key': false,
					                 'editable': false,
					                 sortable: false,
					                 'align' : 'left',
					                 width:col1Percent,
					                 'aria-label':'Offer Description'
					                }					                
			                    ];
			
			
			var grid ={ 
					
					sortname: 'prority',
					gridModel:gridModel,					
					role: 'presentation',
					height :	180,
					viewrecords: true,
					width : '100%',
					autowidth:true,
					forceFit: true,
					subGrid:false,
					gridID: $jq("#jawsTable_"+me.uniqueId).attr("id"),
					//jsonData:me.offerCollection
					//root:'embeddedFeature'
			};
			ACSSFM.renderGrid (grid,null);
							
				$jq.each(me.offerCollection, function(index, rowItem) 
				{
					if(index > me.maxAllowedOffers-1)
						{
							return false;
						}
					$jq("#jawsTable_"+me.uniqueId).jqGrid('addRowData',i,{priority:rowItem.priority,
																		  campaignType:rowItem.campaignType,
																		  campaignName : (ACSSFM.IsNullOrEmpty(rowItem.campaignNameTooltip)) ? rowItem.campaignName : rowItem.campaignNameTooltip,
																		  campaignMessage: (ACSSFM.IsNullOrEmpty(rowItem.campaignMessageTooltip)) ? rowItem.campaignMessage : rowItem.campaignMessageTooltip});
					
				});												
		},
		buildOffers: function()	{
			var me = this;
			if(me.offerCollection && me.offerCollection.length > 0){
				var offersContainer="";
				var offersSelectors="";
				var offersMaxCount = me.offerCollection.length > me.maxAllowedOffers ? me.maxAllowedOffers :  me.offerCollection.length;
				for(var count=0; count < offersMaxCount; count++){
					
					var imgAndDescDiv = "<table width='100%' style='min-height: 217px; max-height: 217px;'><tr>";	
					/*
					imgAndDescDiv = imgAndDescDiv + "<td width='80%'><div class='offer-content'>"
	                       +"<div class='offer-heading' title='"+me.offerCollection[count].campaignNameTooltip+"'>"+me.offerCollection[count].campaignName+"</div>"
                        +"<div class='offer-description' title='"+me.offerCollection[count].campaignMessageTooltip+"'>"+me.offerCollection[count].campaignMessage+"</div>" +"</div></td>"; */					 
					imgAndDescDiv = imgAndDescDiv + "<td width='80%'><div class='offer-content'>"
					+"<div class='offer-heading' title='"+me.offerCollection[count].campaignMTN+"'>"+ me.offerCollection[count].campaignIsAccountLevel + me.offerCollection[count].campaignMTN+"</div>"
                    +"<div class='offer-heading' title='"+me.offerCollection[count].campaignNameTooltip+"'>"+me.offerCollection[count].campaignName+"</div>"
                 +"<div class='offer-description' title='"+me.offerCollection[count].campaignMessageTooltip+"'>"+me.offerCollection[count].campaignMessage+"</div>" +"</div></td>";
					
					imgAndDescDiv = imgAndDescDiv + "<td width='20%'><div align='center'><img class='offer-image' style='max-height: 75px;' src='"+me.offerCollection[count].image+"' name='offerAndNBAImage_"+count+"'></div>";					
					imgAndDescDiv = imgAndDescDiv  + "</tr></table>"; 
					
					
					var offerContainerDiv = "<div class='offerDataContainer"+me.uniqueId+"'>"+imgAndDescDiv+"</div>";
					
					
					var offerSelectorDiv = "<div class='offer-selector offerSelector"+me.uniqueId+"' id='offerSelectorDivId_"+me.uniqueId+"_"+count+"'></div>";
					
					offersContainer = offersContainer+offerContainerDiv;
					offersSelectors = offersSelectors+offerSelectorDiv;
			  }
				//justify center - like para -  style='text-align: justify;' 
			  $jq('#offersListDataContainer'+me.uniqueId).html(offersContainer);
			  $jq('#offersSelectorList'+me.uniqueId).html(offersSelectors);
			  me.buildSelectorActions(offersMaxCount);
			  me.currentOffer(1);	
		   }
	},	
	
	buildSelectorActions:function(offersCount){		
		var me = this;
		for(var count=0; count < offersCount; count++){		  	
		  $jq("#offerSelectorDivId_"+me.uniqueId+"_"+count).die("click").live("click",function() {
			  var index = $jq(this).attr('id').replace('offerSelectorDivId_'+me.uniqueId+'_', '')
			  me.currentOffer(parseInt(index)+1);
		  });
		}
	},	
	currentOffer:function(indexNum){
      var me = this;
	  me.setActiveOffer(me.currentOfferIndex = indexNum);
	},
   	setActiveOffer:function(activeIndex){
		  var me = this;
		  var offerContainers = document.getElementsByClassName("offerDataContainer"+me.uniqueId);
		  var selectBars = document.getElementsByClassName("offerSelector"+me.uniqueId);
		  if (activeIndex > offerContainers.length) {me.currentOfferIndex = 1}
		  if (activeIndex < 1) {me.currentOfferIndex = offerContainers.length}
		  for (var i = 0; i < offerContainers.length; i++) {
			  offerContainers[i].style.display = "none";
		  }
		  for (var cnt = 0; cnt < selectBars.length; cnt++) {
			  selectBars[cnt].className = selectBars[cnt].className.replace(" offer-selector-active", "");
		  }
		  offerContainers[me.currentOfferIndex-1].style.display = "block";
		  selectBars[me.currentOfferIndex-1].className += " offer-selector-active";
	}
		
};
