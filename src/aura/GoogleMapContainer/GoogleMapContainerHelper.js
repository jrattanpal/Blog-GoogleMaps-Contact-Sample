({
    getAccountList: function(component, helper){
        var action = component.get('c.getAccounts');

        action.setCallback(this, function(response){
            var state = response.getState();

            console.log('state:', state);
            if (state == "SUCCESS") {
                var ret = response.getReturnValue();
                if(ret.length > 0){
                    var mapOptionsCenter = {"lat":parseFloat(ret[0].BillingLatitude), "lng":parseFloat(ret[0].BillingLongitude)};
                    var mapData = Array();
                    //cmp.set("v.opportunities", response.getReturnValue());
                    for(var i=0; i<ret.length; i++){
                        mapData.push({"lat":parseFloat(ret[i].BillingLatitude), "lng":parseFloat(ret[i].BillinggLongitude), "markerText":ret[i].Name})
                    }

                    component.set('v.mapOptionsCenter', mapOptionsCenter);
                    component.set('v.mapData', mapData);
                    component.set('v.acc', ret);
                }
            }

        });
        $A.enqueueAction(action);
    },
    getContactList: function (component, helper) {
        var action = component.get('c.getContacts');

        action.setParams({AccountID: component.get('v.recordId')});

        action.setCallback(this, function(response){
            var state = response.getState();

            console.log('state:', state);
            if (state == "SUCCESS") {
                var ret = response.getReturnValue();
                if(ret.length > 0){
                    var mapOptionsCenter = {"lat":parseFloat(ret[0].MailingLatitude), "lng":parseFloat(ret[0].MailingLongitude)};
                    var mapData = Array();
                    //cmp.set("v.opportunities", response.getReturnValue());
                    for(var i=0; i<ret.length; i++){
                        mapData.push({"lat":parseFloat(ret[i].MailingLatitude), "lng":parseFloat(ret[i].MailingLongitude), "markerText":ret[i].Name})
                    }

                    component.set('v.mapOptionsCenter', mapOptionsCenter);
                    component.set('v.mapData', mapData);
                    component.set('v.con', ret);
                }
            }

        });
        $A.enqueueAction(action);
        /**/
    }
})