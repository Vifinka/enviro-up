// the calendar

  // the Date valuables
  var year = (new Date()).getFullYear();
  var days = new Date(year, (new Date).getMonth() + 1, 0).getDate();
  const monthNames = ["Januar", "Februar", "Marec", "April", "Maj", "Jun", "Jul", "August", "September", "Oktober", "November", "December"];
  var month_num = (new Date()).getMonth();
  console.log(days + ", " + year);
  
    // the Event valuables
    var a_day = "<div class=\"info-kalendar-7th-day\"><div class=\"info-kalendar-bottom-day\" id=\"day\"></div></div>";
    var a_event ="<div class=\"info-org-half\"><div class=\"info-org-inner-top\"><div class=\"info-org-inner-top-name\" id=\"event-date\">dd.mm.rrrr</div></div><div class=\"info-org-inner-bottom\"><div class=\"info-org-inner-bottom-event\" id=\"event-name\">Upratovanie Dunaja</div><div class=\"info-org-inner-bottom-org\"><a id=\"event-org\" href=\"\">TeamTree.org</a></div><div class=\"info-org-inner-bottom-info\" id=\"event-text\">reee eeee eeee eee eee eeee eeeee eeee eeeeee eee eeeee eeee eee eee eeee eeee eee eee eeee eeeee eeee eeeeee eee eeeee eeee eee eee eeee eeee eee eee eeee eeeee eeee eeeeee eee eeeee eeee eee</div></div></div>";
    var Org = "";
    var Events = "";
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            Events = response.events;
            console.log(Events);
            calendar();
            Org = response.org;
        };
    };
  
    xhttp.open("GET", "events.json", true);
    xhttp.send();
  
    // the month name
function calendar(){
  document.getElementById("calendar-name").innerHTML = monthNames[month_num];
  
  document.getElementById("calendar-background").innerHTML = "";
  
  var date = new Date(year, month_num, 1);
  var daysNames = ['Nedela', 'Pondelok', 'Utorok', 'Streda', 'Stvrtok', 'Piatok', 'Sobota'];
  start_day = daysNames[date.getDay()];
  
  if(start_day != 'Pondelok'){
    if(start_day != 'Nedela'){
      for(var i; i < start_day - 1; i++){
        document.getElementById("calendar-background").innerHTML += a_day;
        document.getElementById("day").classList.add("info-kalendar-bottom-day-dead");
        document.getElementById("day").id = "dead-day " + i;
      }
    }
    else{
      for(var i = 0; i < 6; i++){
        document.getElementById("calendar-background").innerHTML += a_day;
        document.getElementById("day").classList.add("info-kalendar-bottom-day-dead");
        document.getElementById("day").id = "dead-day " + i;
      }
    }
  }
  
  for(var i = 0; i<days; i++){
    document.getElementById("calendar-background").innerHTML += a_day;
    document.getElementById("day").innerHTML = i + 1;
  
    for(var l = 0; l < Events.length; l++){
        console.log(i + 1 + "_" + Events[l].day);
      if((i + 1) == Events[l].day){
      document.getElementById("day").className = "info-kalendar-bottom-day-choose";
      console.log("yes");
    //   create_event(Events[l].day, Events[l].month, Events[l].year, Events[l].org, Events[l].name, Events[l].link, Events[l].text, l);
      }
    }
  
    document.getElementById("day").id += i + 1;
  }
} 
  
  // the event function
//   function create_event(day, month, year, org, name, link, text, i){
//     document.getElementById("event-background").innerHTML += a_event;
//     document.getElementById("event-date").innerHTML = day + "." + month + "." + year;
//     document.getElementById("event-name").innerHTML = name;
//     document.getElementById("event-org").innerHTML = "organizacia: " + org;
//     document.getElementById("event-org").href = link;
//     document.getElementById("event-text").innerHTML = text;
  
//     document.getElementById("event-name").id += "-" + i;
//     document.getElementById("event-date").id += "-" + i;
//     document.getElementById("event-org").id += "-" + i;
//     document.getElementById("event-text").id += "-" + i;
//   }