		buildOffers: function()	{
			var me = this;
			if(me.offerCollection && me.offerCollection.length > 0){
				var offersContainer="";
				var offersSelectors="";
				var offersMaxCount = me.offerCollection.length > me.maxAllowedOffers ? me.maxAllowedOffers :  me.offerCollection.length;
				for(var count=0; count < offersMaxCount; count++){
					var divEnd="</div>";
					// offer Image div Starts
					var offerImageDiv="<div class='offer-image-container'>";
					offerImageDiv=offerImageDiv + "<img class='offer-image' style='max-height: 40%;max-width: 95%' src='"+me.offerCollection[count].image+"' name='offerAndNBAImage_"+count+"'>";
					offerImageDiv=offerImageDiv + divEnd;

					// offer Image div ends

					// offer Description div Starts
					var offerDescDiv="<div class='offer-desc-container'>";

					offerDescDiv=offerDescDiv+"<p class='offer-heading' title='"+me.offerCollection[count].campaignMTN+"'>"+ me.offerCollection[count].campaignIsAccountLevel + me.offerCollection[count].campaignMTN+"</p>";
					offerDescDiv=offerDescDiv+"<p class='offer-heading' title='"+me.offerCollection[count].campaignNameTooltip+"'>"+me.offerCollection[count].campaignName+"</p>";
					offerDescDiv=offerDescDiv+"<p class='offer-description' title='"+me.offerCollection[count].campaignMessageTooltip+"'>"+me.offerCollection[count].campaignMessage+"</p>";
					offerDescDiv=offerDescDiv + divEnd;
					// offer Description div Ends

        // offer Acceptance div Starts
					var offerAcceptanceDiv= "<div class='offer-acceptance-container'>";



					offerAcceptanceDiv= offerAcceptanceDiv + divEnd;

			// offer Acceptance div ends
					
					offersContainer = offersContainer+offerContainerDiv;
					offersSelectors = offersSelectors+offerSelectorDiv;
			  }
				//justify center - like para -  style='text-align: justify;' 
			  $jq('#offersListDataContainer'+me.uniqueId).html(offersContainer);
			  $jq('#offersSelectorList'+me.uniqueId).html(offersSelectors);
			  me.buildSelectorActions(offersMaxCount);
			  me.currentOffer(1);	
		   }
	}
