/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/


 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["BTC"]=808.84;
 filling_prices["ETH"]=71.13;
 filling_prices["MATIC"]=0.20;
 filling_prices["BCH"]=158.06;
 filling_prices["LTC"]=169.83;
 filling_prices["XMR"]=216.70;
 filling_prices["DASH"]=38.53;
 filling_prices["ETC"]=44.60;
 filling_prices["ZEC"]=50.52;
 filling_prices["DOGE"]=162.31;
 filling_prices["DCR"]=22.69;
 filling_prices["BSV"]=123.75;
 
	 

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
