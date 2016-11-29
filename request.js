
var FIRST_OBJECT = 0;

function loadOrders(flag) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);
      document.getElementById('row').style.backgroundImage = 'none';
      for( i = flag ; i < res.length ; i++){
          printObject(res[i],i);
      }
      FIRST_OBJECT = res.length;
    }
  };
  xhttp.open("GET", "http://cors.io/?http://demo.clickmedia.gr/tests", true);
  xhttp.send();
}

function printObject(value,i){
    var row = document.createElement("DIV");
    row.setAttribute("id", "row"+i);

    var container = document.getElementById("row");
    container.insertBefore(row, container.childNodes[0]);
    // document.getElementById("row").appendChild(row);

    var p_id = document.createElement("P");
    var id = document.createTextNode(value.id);
    p_id.appendChild(id);
    document.getElementById("row"+i).appendChild(p_id);

    var p_order_date = document.createElement("P");
    var order_date = document.createTextNode(value.order_date);
    p_order_date.appendChild(order_date);
    document.getElementById("row"+i).appendChild(p_order_date);

    var p_customer_code = document.createElement("P");
    var customer_code = document.createTextNode(value.customer_code);
    p_customer_code.appendChild(customer_code);
    document.getElementById("row"+i).appendChild(p_customer_code);

    var p_customer_name = document.createElement("P");
    var customer_name = document.createTextNode(value.customer_name);
    p_customer_name.appendChild(customer_name);
    document.getElementById("row"+i).appendChild(p_customer_name);

    var p_items = document.createElement("P");
    var items = document.createTextNode(value.items);
    p_items.appendChild(items);
    document.getElementById("row"+i).appendChild(p_items);

    var p_total = document.createElement("P");
    var total = document.createTextNode(value.total);
    p_total.appendChild(total);
    document.getElementById("row"+i).appendChild(p_total);

    var p_payment = document.createElement("P");
    var payment = document.createTextNode(value.payment);
    p_payment.appendChild(payment);
    document.getElementById("row"+i).appendChild(p_payment);

    var p_status = document.createElement("P");
    var status = document.createTextNode(value.status);
    p_status.appendChild(status);
    document.getElementById("row"+i).appendChild(p_status);

}


loadOrders(FIRST_OBJECT);

setInterval(function(){
    loadOrders(FIRST_OBJECT);
}, 60000);
