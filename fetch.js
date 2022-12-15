
var xmlhttp = new XMLHttpRequest();

var url = "https://reaktiiv.com/projects.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if(this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
    $(document).ready(function(){
      $("#myTable").DataTable({
        "data": data.data,
        "columns": [
          { "data" : "img"},
          { "data" : "title"},
          { "data" : "year"}
        ]
      });
    })
  }
}




