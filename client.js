// this EasyTransac api client can be used on both NodeJS and web browsers

const CRYPTO = require(window.crypto);

function callEasyTransacApi(TD, PM, APIK) { // TD = Transaction Datas | PM = Payment Mode | APIK = Application Programming Interface Key

    var STD = {}; // create a new variable that is set as a list | STD = Sorted Transaction Datas
    
    if (TD.Amount > 0 && TD.CardNumber.length() === 16 && TD.CardYear === Date.getFullYear() && TD.CardMonth >= Date.getFullMonth() && (TD.CardCVV.length() === 3 || TD.CardCVV.length() === 4) && (TD.ClientIp != null && TD.ClientIp != "" && TD.ClientIp != "0.0.0.0")) { // if the card expiry year is this year
        
        var [keys, values] = Object.entries(TD);

      for (var i; i < TD.length(); i++) {
          
          
          
      };
        
    };
    if (TD.CardMonth > 0 && TD.CardMonth < 13 && TD.CardYear > Date.getFullYear() && TD.CardMonth > 0 && TD.CardMonth < 13 && (TD.CardCVV.length() === 3 || TD.CardCVV.length() === 4) && (TD.ClientIp != null && TD.ClientIp != "" && TD.ClientIp != "0.0.0.0")) { // if the card expiry year is above the current year
        
        var [keys, values] = Object.entries(TD);
        
        for (var i; i < TD.length(); i++) {
            
            if (keys[i] === ) {
                
                
                
            };
            
        };
        
    };
    
    if (PM === "direct") {

        
        
        var ETAC = new XMLHttpRequest(); // create a new XMLHttp client
        
        ETAC.open("POST", `https://easytransac.com/api/`, true); // use the HTTP POST method | connect the client to easytransac specific api
        ETAC.withCredtials = true; // making sure than the HTTPS client will never send datas to a server that doesn't has a recognized certificate
        ETAC.setRequestHeaders("Content-Type", "application/x-www-form-urlencoded");
        ETAC.setRequestHeaders("Content-Length", Buffer.bytesLength(RTD));
        ETAC.setRequestHeaders("Accept-Content", "application/json");
        
    };
    
};
