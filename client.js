// this EasyTransac api client can be used on both NodeJS and web browsers

const CRYPTO = require(window.crypto);

function callEasyTransacApi(TD, PM, APIK) { // TD = Transaction Datas | PM = Payment Mode | APIK = Application Programming Interface Key

    var STD = {}; // create a new variable that is set as a list | STD = Sorted Transaction Datas
    
    if (TD.Amount > 0 && TD.CardNumber.length() === 16 && TD.CardYear === Date.getFullYear() && TD.CardMonth >= Date.getFullMonth() && (TD.CardCVV.length() === 3 || TD.CardCVV.length() === 4) && (TD.ClientIp != null && TD.ClientIp != "" && TD.ClientIp != "0.0.0.0")) { // if the card expiry year is this year
        
        var [keys, values] = Object.entries(TD);

        for (var i; i < TD.length(); i++) { // loop that permit to make it so that it will run through all the Transaction Datas
            
            for (var j; j < STD.length(); j++) { // loop that will sort the datas like required
                
                
                
            };
            
        };
        
        var ETAC = new XMLHttpRequest(); // create a new HTTPS client using XMLHttpRequest
        
        if (PM === "direct") {
            
            ETAC.open("POST", `https://easytransac.com/api/payment/direct`, true); // use the HTTP POST method | connect the client to easytransac specific api
            ETAC.withCredtials = true; // making sure than the HTTPS client will never send datas to a server that doesn't has a recognized SSL certificate
            ETAC.setRequestHeaders("Content-Type", "application/x-www-form-urlencoded"); // set the content type to x-www-form-urlencoded as required, according to the API Documentation
            ETAC.setRequestHeaders("Content-Length", Buffer.bytesLength(RTD)); // give the servers the size of the datas length in Bytes
            ETAC.setRequestHeaders("EASYTRANSAC-API-KEY", APIK); // set the API Key inside the request headers as required, according to the API Documentation

            ETAC.send(STD); // send the Sorted Datas to the Server
            
        };
        if (PM === "oneclick") {
            
            ETAC.open("POST", `https://easytransac.com/api/payment/oneclick`, true);
            ETAC.withCredtials = true;
            ETAC.setRequestHeaders("Content-Type", "application/x-www-form-urlencoded");
            ETAC.setRequestHeaders("Content-Length", Buffer.bytesLength(RTD));
            ETAC.setRequestHeaders("Accept-Content", "application/json");
            ETAC.setRequestHeaders("EASYTRANSAC-API-KEY", APIK);

            ETAC.send(STD);
            
        };
        if (PM === "sepa") {
            
            ETAC.open("POST", `https://easytransac.com/api/payment/sdd/init`, true); // use the HTTP POST method | connect the client to easytransac specific api
            ETAC.withCredtials = true; // making sure than the HTTPS client will never send datas to a server that doesn't has a recognized SSL certificate
            ETAC.setRequestHeaders("Content-Type", "application/x-www-form-urlencoded");
            ETAC.setRequestHeaders("Content-Length", Buffer.bytesLength(RTD));
            ETAC.setRequestHeaders("Accept-Content", "application/json");
            ETAC.setRequestHeaders("EASYTRANSAC-API-KEY", APIK);

            ETAC.send(STD);
            
        };
        if (PM === "bybank") {
            
            ETAC.open("POST", `https://easytransac.com/api/payment/bybank`, true); // use the HTTP POST method | connect the client to easytransac specific api
            ETAC.withCredtials = true; // making sure than the HTTPS client will never send datas to a server that doesn't has a recognized SSL certificate
            ETAC.setRequestHeaders("Content-Type", "application/x-www-form-urlencoded");
            ETAC.setRequestHeaders("Content-Length", Buffer.bytesLength(RTD));
            ETAC.setRequestHeaders("Accept-Content", "application/json");
            ETAC.setRequestHeaders("EASYTRANSAC-API-KEY", APIK);

            ETAC.send(STD);
            
        };
        if (PM === "page") { // open a new payment page that permit you to not have to comply with 
            
            ETAC.open("POST", `https://easytransac.com/api/payment/page`, true); // use the HTTP POST method | connect the client to easytransac specific api
            ETAC.withCredtials = true; // making sure than the HTTPS client will never send datas to a server that doesn't has a recognized SSL certificate
            ETAC.setRequestHeaders("Content-Type", "application/x-www-form-urlencoded");
            ETAC.setRequestHeaders("Content-Length", Buffer.bytesLength(RTD));
            ETAC.setRequestHeaders("Accept-Content", "application/json");
            ETAC.setRequestHeaders("EASYTRANSAC-API-KEY", APIK);

            ETAC.send(STD);
            
        };
        if (PM === "refund") {
            
            ETAC.open("POST", `https://easytransac.com/api/payment/refund`, true); // use the HTTP POST method | connect the client to easytransac specific api
            ETAC.withCredtials = true; // making sure than the HTTPS client will never send datas to a server that doesn't has a recognized SSL certificate
            ETAC.setRequestHeaders("Content-Type", "application/x-www-form-urlencoded");
            ETAC.setRequestHeaders("Content-Length", Buffer.bytesLength(RTD));
            ETAC.setRequestHeaders("Accept-Content", "application/json");
            ETAC.setRequestHeaders("EASYTRANSAC-API-KEY", APIK);
            
            ETAC.send(STD);
            
        };
        
        if (PM === "p2p") {
            
            ETAC.open("POST", `https://easytransac.com/api/payment/`, true); // use the HTTP POST method | connect the client to easytransac specific api
            ETAC.withCredtials = true; // making sure than the HTTPS client will never send datas to a server that doesn't has a recognized SSL certificate
            ETAC.setRequestHeaders("Content-Type", "application/x-www-form-urlencoded");
            ETAC.setRequestHeaders("Content-Length", Buffer.bytesLength(RTD));
            ETAC.setRequestHeaders("Accept-Content", "application/json");
            ETAC.setRequestHeaders("EASYTRANSAC-API-KEY", APIK);

            ETAC.send(STD);
            
        };

        if (PM === "status") {
            
            ETAC.open("POST", `https://easytransac.com/api/payment/`, true); // use the HTTP POST method | connect the client to easytransac specific api
            ETAC.withCredtials = true; // making sure than the HTTPS client will never send datas to a server that doesn't has a recognized SSL certificate
            ETAC.setRequestHeaders("Content-Type", "application/x-www-form-urlencoded");
            ETAC.setRequestHeaders("Content-Length", Buffer.bytesLength(RTD));
            ETAC.setRequestHeaders("Accept-Content", "application/json");
            ETAC.setRequestHeaders("EASYTRANSAC-API-KEY", APIK);

            ETAC.send(STD);
            
        };
        
    };
    if (TD.CardMonth > 0 && TD.CardMonth < 13 && TD.CardYear > Date.getFullYear() && TD.CardMonth > 0 && TD.CardMonth < 13 && (TD.CardCVV.length() === 3 || TD.CardCVV.length() === 4) && (TD.ClientIp != null && TD.ClientIp != "" && TD.ClientIp != "0.0.0.0")) { // if the card expiry year is above the current year
        
        var [keys, values] = Object.entries(TD);
        
        for (var i; i < TD.length(); i++) {
            
            if (keys[i] === ) {
                
                
                
            };
            
        };
        
    };
    
};
