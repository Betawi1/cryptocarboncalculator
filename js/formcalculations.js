/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/


 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["BTC"]=775.10;
 filling_prices["ETH"]=0.01;
 filling_prices["MATIC"]=0.01;
 filling_prices["BCH"]=179.47;
 filling_prices["LTC"]=192.84;
 filling_prices["XMR"]=246.06;
 filling_prices["DASH"]=43.75;
 filling_prices["ETC"]=50.64;
 filling_prices["ZEC"]=57.36;
 filling_prices["DOGE"]=184.3;
 filling_prices["DCR"]=25.76;
 filling_prices["BSV"]=140.51;
 
	 

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
