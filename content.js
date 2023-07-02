setInterval(function () {

    var boutonSousTweet = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/section/div/div/div/div/div[2]/div/div/div[2]';
    var Recherche = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div[2]';
    var F5 = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div[2]';
    var AutrePtnDeFDPELONMUSK = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[5]/div/div/div[2]';
    var Profil = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div[2]/div[2]';
    var Encore = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[5]/div/div/div[2]';

    var bite1 = document.evaluate(boutonSousTweet, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var bite2 = document.evaluate(Recherche, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var bite3 = document.evaluate(F5, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var bite4 = document.evaluate(AutrePtnDeFDPELONMUSK, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var bite5 = document.evaluate(Profil, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var bite6 = document.evaluate(Encore, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (bite1) {
        bite1.click();
    }
    if (bite2) {
        bite2.click();
    }
    if (bite3) {
        bite3.click();
    }
    if (bite4) {
        bite4.click();
    }
    if (bite5) {
        bite5.click();
    }
    if (bite6) {
        bite6.click();
    }
}, 1);


setInterval(function () {

    console.clear()

}, 1000);
