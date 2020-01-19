// ------------------------- start of the calendar js -----------------------------

  // the Date valuables
  var year = (new Date()).getFullYear();
  var days = new Date(year, (new Date).getMonth() + 1, 0).getDate();
  const monthNames = ["Januar", "Februar", "Marec", "April", "Maj", "Jun", "Jul", "August", "September", "Oktober", "November", "December"];
  const daysNames = ['Nedela', 'Pondelok', 'Utorok', 'Streda', 'Stvrtok', 'Piatok', 'Sobota'];
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
  
    // this code creates the calendar
function calendar(){
  document.getElementById("calendar-background").innerHTML = "";
    // the month
  document.getElementById("calendar-name").innerHTML = monthNames[month_num];
    
    // the black days (the last month)
  var date = new Date(year, month_num, 1);
  start_day = daysNames[date.getDay()];
  start_day_number = date.getDay();
  
  if(start_day != 'Pondelok'){
    if(start_day != 'Nedela'){
      for(var i = 0; i < start_day_number - 1; i++){
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
  
    // the days in the month
  for(var i = 0; i<days; i++){
    document.getElementById("calendar-background").innerHTML += a_day;
    document.getElementById("day").innerHTML = i + 1;
  
    // checking if there is a event during this day
    for(var l = 0; l < Events.length; l++){
      if((i + 1) == Events[l].day && (month_num + 1) == Events[l].month && year == Events[l].year){
        document.getElementById("day").className = "info-kalendar-bottom-day info-kalendar-bottom-day-choose";
        create_event(Events[l].day, Events[l].month, Events[l].year, Events[l].org, Events[l].name, Events[l].link, Events[l].text, l);
      }
    }
  
    document.getElementById("day").id += i + 1;
  }
} 
  
  // the event function
  function create_event(day, month, year, org, name, link, text, i){
    document.getElementById("event-background").innerHTML += a_event;
    document.getElementById("event-date").innerHTML = day + "." + month + "." + year;
    document.getElementById("event-name").innerHTML = name;
    document.getElementById("event-org").innerHTML = "organizacia: " + org;
    document.getElementById("event-org").href = link;
    document.getElementById("event-text").innerHTML = text;
  
    document.getElementById("event-name").id += "-" + i;
    document.getElementById("event-date").id += "-" + i;
    document.getElementById("event-org").id += "-" + i;
    document.getElementById("event-text").id += "-" + i;
  }


//   ------------------------- end of the calendar js -----------------------------

//   ------------------------- start of the org search js -----------------------------

// the var org is in "// the Event valuables", because there is the json request and i didnt want to split it up

var an_org = "<div class=\"org-choose-background\" id=\"org\"><div class=\"org-choose-top\" id=\"org-top\"><div class=\"org-choose-top-name\" id=\"org-top-name\">Harabin Smiesky</div><div class=\"org-choose-top-image\" id=\"org-top-image\"><img class=\"org-choose-top-image-src\" id=\"org-top-image-src\" src=\"\"></div></div><div class=\"org-choose-bottom\"><div id=\"org-text-background\"><div class=\"org-bottom-text-name\">Info:</div><div class=\"org-bottom-text\" id=\"org-text\">Sak video klipy  od neho hovoria sami za seba. JA SOM VY-HRAL!!</div></div><div id=\"org-bottom-background\"><div class=\"org-choose-bottom-image\"><a href=\"\" id=\"org-bottom-link\"><div class=\"org-choose-bottom-button\">Navstivit</div></a></div></div></div></div>";
var an_org_image = "<div class=\"org-choose-bottom-image\"><img id=\"org-image\" src=\"\" class=\"org-choose-bottom-image-src\" id=\"image\"></div>"
var color_pos = ["orange", "azure", "purple", "yellow", "pink", "blue", "green", "grey"];
var color_pos_light = ["lightorange", "lightazure", "lightpurple", "lightyellow", "lightpink", "lightblue", "lightgreen", "lightgrey"];
var type_order = ["Jedlo", "Odpad", "Elektrina", "Ovzdusie", "Biodiverzita", "Info", "Voda", "Poda"];
var type_num = 0;


function load_org(){
    console.log(Org);

    var e = document.getElementById("select-type");
    var f = document.getElementById("select-kraj");
    var select_type = e.options[e.selectedIndex].text;
    var select_kraj = f.options[f.selectedIndex].text;

    document.getElementById("THE_DIV").innerHTML = "";

    if(select_kraj == "---"){
      if(select_type == "---"){
        for(var x = 0; x < Org.length; x++){
          create_org(Org[x].name, Org[x].text, Org[x].link, Org[x].image_src, x, color_finder(Org[x].type), Org[x].type + ".png");
        }
      }
      else if(select_type != "---"){
        for(var x = 0; x < Org.length; x++){
          if(Org[x].type == select_type){
            create_org(Org[x].name, Org[x].text, Org[x].link, Org[x].image_src, x, color_finder(Org[x].type), Org[x].type + ".jpg");
          }
        }
      }
    }

    if(select_kraj != "---"){
      if(select_type == "---"){
        for(var x = 0; x < Org.length; x++){
          if(Org[x].location == select_kraj){
            create_org(Org[x].name, Org[x].text, Org[x].link, Org[x].image_src, x, color_finder(Org[x].type), Org[x].type + ".jpg");
          }
        }
      }
      else if(select_type != "---"){
        for(var x = 0; x < Org.length; x++){
          if(Org[x].location == select_kraj && Org[x].type == select_type){
            create_org(Org[x].name, Org[x].text, Org[x].link, Org[x].image_src, x, color_finder(Org[x].type), Org[x].type + ".jpg");
          }
        }
      }
    }
}

function create_org(name, text, link, logo, id, color, type_src){

  document.getElementById("THE_DIV").innerHTML += an_org;

  document.getElementById("org-text").innerHTML = text;
  document.getElementById("org-top-top").style.backgroundColor = color_pos_light[color];
  document.getElementById("org-top-name").innerHTML = name;
  document.getElementById("org-top-image").style.backgroundColor = color_pos[color];
  document.getElementById("org-top-image-src").src = "/zeleny_kalendar/icons/" + type_src;



  document.getElementById("org").id += id;
  document.getElementById("org-text").id += id;
  document.getElementById("org-top-name").id += id;
  document.getElementById("org-top-image").id += id;
  document.getElementById("org-top-image-src").id += id;
}

function color_finder(type){
  for(var f = 0; f < type_order.length; f++){
    if(type == type_order[f]){
        return f;
    }
  }
}
