/*pokazivanje i sakrivanje liste izabranih itema*/


var x=0;
var total = 0;

$('.addtocart').click(function(){
    var cena = $(this).parent().children('.itemprice').text().substring(2);
    var pozicijaDO = cena.length;
    cena.substr(2,pozicijaDO);
    var parseujCenu = parseInt(cena);
    total += parseujCenu;
    $("#ukupnaCena").html(total+"&euro;");
    console.log(total);    
    x++;
    $("#brojitema").html(x);
    $("#brojitema").css({'background-color':'rgb(123, 159, 187)'});
    var item = "<article class='listaItema'>" + name + "&nbsp; &euro;<label class='price'>" + cena + "</label></article>";
    $("#elementi").html(item);
})


$("#cart").click(function(){
    $("#elementi").slideToggle("fast");
    $("#cena").slideToggle("fast");
});
/*pokazivanje i sakrivanje liste izabranih itema*/

function findItems()
{
    var xmlhttp = null;
    if(window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(xmlhttp != null)
    {
        xmlhttp.open("GET", "items.xml", false);
        xmlhttp.send();

        xmlDoc = xmlhttp.responseXML;
        
        var nizitema = xmlDoc.getElementsByTagName('itemi');

        return nizitema;
    }
    
    return null;
}


function showItem(nizitema) {
    var name = nizitema.getElementsByTagName('name')[0].childNodes[0].nodeValue;
    var price = nizitema.getElementsByTagName('price')[0].childNodes[0].nodeValue;
    var category = nizitema.getElementsByTagName('category')[0].childNodes[0].nodeValue;
    var type = nizitema.getElementsByTagName('type')[0].childNodes[0].nodeValue;

    var ispis = "";
    ispis += '<article id="items">';
    ispis += '<img class="itemimg" src="img/' + name + '.jpg"/>';
    ispis += '<h3 class="itemnaslov">' + name + '</h3>';
    ispis += '<h3 class="itemprice">&euro; ' + price + '</h3>';
    ispis += '<input type="button" id="buy" class="addtocart" value="Add To Cart" name="' + name + '" price="' + price + '" onclick="buy();"/>';
    ispis += '</article>';
    $("#items").html($("#items").html() + ispis);
}

function search() {
    var item = findItems();
    $("#item").html("");
    for(var i = 0; i < item.length; i++)
    {   
        var name = item[i].getElementsByTagName('name')[0].childNodes[0].nodeValue;    
        var search = $("#search").val();
        if ((name.toLowerCase().indexOf(search.toLowerCase()) != -1)) {
            showItem(item[i]);
        }
    }
}
