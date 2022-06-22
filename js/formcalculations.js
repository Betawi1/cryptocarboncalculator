/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/


 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["BTC"]=785.27;
 filling_prices["ETH"]=75.49;
 filling_prices["MATIC"]=0.21;
 filling_prices["BCH"]=164.36;
 filling_prices["LTC"]=176.60;
 filling_prices["XMR"]=225.34;
 filling_prices["DASH"]=40.06;
 filling_prices["ETC"]=46.38;
 filling_prices["ZEC"]=52.53;
 filling_prices["DOGE"]=168.78;
 filling_prices["DCR"]=23.59;
 filling_prices["BSV"]=128.68;
 
	 

function getFillingPrice()
{
    var cakeFillingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["filling"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}



        
function calculateTotal()
{
    var dist = document.getElementById('dist');
    var y = dist.value;
   
    var cakePrice = getFillingPrice() * y;
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Carbon Emission :"+cakePrice+" kgCO2e";

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
