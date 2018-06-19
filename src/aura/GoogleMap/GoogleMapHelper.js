({
    sendToVF : function(component, helper) {
        //Prepare message in the format required in VF page
        var message = {
			            "loadGoogleMap" : true,
            			"mapData": component.get('v.mapData'), 
            			"mapOptions": component.get('v.mapOptions'),  
                       	'mapOptionsCenter': component.get('v.mapOptionsCenter')
        		} ;

        
        //Send message to VF
        helper.sendMessage(component, helper, message);
    },
    sendMessage: function(component, helper, message){
        //Send message to VF
        message.origin = window.location.hostname;
        var vfWindow = component.find("vfFrame").getElement().contentWindow;
	//Making following change as per https://stackoverflow.com/questions/42376464/uncaught-domexception-failed-to-execute-postmessage-on-window-an-object-co
	//Only tested in Chrome (not Firefox)
	message = JSON.parse(JSON.stringify(message));
        vfWindow.postMessage(message, component.get("v.vfHost"));
    }
})
