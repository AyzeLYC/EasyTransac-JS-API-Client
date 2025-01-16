const https = require("https"); // requires the NPM https package in order to work

const CRYPTO = require(window.crypto);

function createNewTransaction(TD, PM, APIK) { // TD = Transaction Datas | PM = Payment Mode | APIK = Application Programming Interface Key
    
    var APICD = {};
    
    var ETAPICC = { // etapicc = Easy Transac Application Programming Interface Client
        
        hostname: "easytransac.com",
        port: 443,
        method: "POST",
        headers: {
            
            "Content-Type": "application/x-www-form-urlencoded", // please Easy Transac devs, change this to application/json or text/json rather than this thing because it's not url encoded
            "Content-Length": Buffer.byteLength(apicd),
            "Accept-Content": "application/json",
            "EASYTRANSAC-API-KEY": "REPLACE THIS TEXT WITH YOUR API KEY"
            
        }
        
    };

    if (PM === "direct") { // PCI DSS compliance required

        ETAPICC.path = "/api/payment/direct";
        
    };
    if (PM === "oneclick") {

        ETAPICC.path = "/api/payment/oneclick";
        
    };
    if (PM === "sepa") { // 

        ETAPICC.path = "/api/payment/sdd/init";
        
    };
    if (PM === "bybank") {

        ETAPICC.path = "/api/payment/bybank";
        
    };
    
    if (PM === "page") { // permit you to not have to be PCI DSS compliant and open a new payment page on Easy Transac website rather of having to handle the payment datas yourself
        
        ETAPICC.path = "/api/payment/page";
        
    };
    if (PM === "cancelpage") {
        
        ETAPICC.path = "/api/payment/cancelpage";
        
    };
    if (PM === "resendpage") {

        ETAPICC.path = "/api/payment/resendpage";
        
    };

    if (PM === "transfer") {
        
        ETAPICC.path = "/api/payment/transfer";
        
    };

    if (PM === "updatesubscription") {

        ETAPICC.path = "/api/payment/rebill/update";
        
    };

    if (PM === "status") {

        ETAPICC.path = "/api/payment/status";
        
    };

    if (PM === "refund") {

        ETAPICC.path = "/api/payment/refund",
        
    };

    if (PM === "capture") {

        ETAPICC.path = "/api/payment/capture";
        
    };

    if (PM === "cancel") {

        ETAPICC.path = "/api/payment/cancel";
        
    };
    
    
    const ETAPIC = new https.request(ETAPICC);
    ETAPIC.write(APICD);
    
    ETAPIC.on("data", function(DATA) {
        
        var ETAPICR = JSON.parse(DATA);
        
        if (ETAPICR["Result"["Status"]] === "authorized") {
            
            
            
        };
        if (ETAPICR["Result"["Status"]] === "captured") {
            
            
            
        };
        if (ETAPICR["Result"["Status"]] === "failed") {
            
            
            
        };
        if (ETAPICR["Result"["Status"]] === "pending") {
            
            
            
        };
        if (ETAPICR["Result"["Status"]] === "refunded") {
            
            

        };
        
    };
    
    ETAPIC.on("end", function() {

        console.log("The connection with the server has been closed !");
        
    });
    
    ETAPIC.on("error", function(err) {
        
        console.log(`An error has occured !\n${err}`);
        
    });
    
});
