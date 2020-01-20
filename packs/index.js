// all the variables

var option = "<div class=\"level-background\" id=\"background\"><div class=\"level-top\"><div class=\"level-top-25\" id=\"top-left\"><img src=\"\" class=\"level-top-logo\" id=\"top-differ\"></div><div class=\"level-top-60\" id=\"top-center\"></div><div class=\"level-top-15\" id=\"top-right\"><img src=\"\" class=\"level-top-logo\" id=\"top-icon\"></div></div><div id=\"level-bottom\" class=\"level-bottom\">"
var info_div = "<div class=\"level-bottom-inner\"><div class=\"level-bottom-inner-name\"><span class=\"delicious\">Info:</span></div><div class=\"level-bottom-inner-text\" id=\"info\"></div></div>"
var pomocky_div = "<div class=\"level-bottom-inner-list-name\"><span class=\"delicious\">Pomocky:</span></div><div class=\"level-bottom-inner-list-text\"><ul class=\"list-outside\" id=\"pomocky\"></ul></div>";
var postup_div = "<div class=\"level-bottom-inner-postup-text\"><ol class=\"postup-outside\" id=\"postup\"></ol></div><div class=\"level-bottom-inner-postup-name\"><span class=\"delicious\">Postup:</span></div></div>";
var image_div = "<div class=\"level-bottom-image-background\"><img src=\"\" id=\"level-image\" class=\"level-bottom-image\"></div>";
var Packs = "";
var video_div = "<div class=\"level-video-outside\"><iframe width=\"600\" height=\"360\" src=\"r\" id=\"level-vid\" class=\"level-video\"></iframe></div>";
var color_pos = ["#ffc251", "rgb(81, 255, 151)", "rgb(124, 41, 167)", "yellow", "#ff9294", "#599cff", "57ff57", "#acacac"];
var color_pos_light = ["#ffd485", "rgb(149, 255, 206)", "rgb(147, 25, 210)", "#ffff73", "#faadae", "#85b6ff", "lightgreen", "#faadae"];
var type_order = ["Jedlo", "Odpad", "Elektrina", "Ovzdusie", "Biodiverzita", "Info", "Voda", "Poda"];
var type_num = 0;

var mentioned = 0;



function create_div(){
    document.getElementById("THE_DIV").innerHTML = "";
    var e = document.getElementById("pack-select");
    var choosen = e.options[e.selectedIndex].text;
    document.getElementById("pack_name").innerHTML = choosen;

    for(var i = 0; i < Packs.length; i++){
        if(choosen == Packs[i].pack_name){
            mentioned ++;

            // top settings
            document.getElementById("THE_DIV").innerHTML += option;
    
            document.getElementById("background").id += "-" + i;

            for(var f = 0; f < type_order.length; f++){
                if(Packs[i].type == type_order[f]){
                    type_num = f;
                }
            }
        
            document.getElementById("top-left").style.backgroundColor = color_pos[type_num];
            document.getElementById("top-left").id += "-" + i;
            document.getElementById("top-differ").src = "/packs/difficulty/" + Packs[i].difficulty + ".png";
            document.getElementById("top-differ").id += "-" + i;
        
            document.getElementById('top-center').style.backgroundColor = color_pos_light[type_num]
            document.getElementById("top-center").innerHTML = Packs[i].name;
            document.getElementById("top-center").id += "-" + i;
        
            document.getElementById("top-right").style.backgroundColor = color_pos[type_num];
            document.getElementById("top-right").id += "-" + i;
    
            document.getElementById("top-icon").src = "/packs/icons/" + Packs[i].type + ".png";
            document.getElementById("top-icon").id += "-" + i;

            // the checking settings
            

            document.getElementById("level-bottom").id += "-" + i;

            if(Packs[i].info != "-"){
                document.getElementById("level-bottom" + "-" + i).innerHTML += info_div;
                document.getElementById("info").innerHTML = Packs[i].info;
                document.getElementById("info").id += "-" + i;
            }


            if(Packs[i].pomocky != "-" || Packs[i].postup != "-"){

                document.getElementById("level-bottom" + "-" + i).innerHTML += "<div class=\"level-bottom-inner\" id=\"level-bottom-inner-"+ i + "\" ></div>";

                if(Packs[i].pomocky != "-"){
                    document.getElementById("level-bottom-inner" + "-" + i).innerHTML += pomocky_div;
                    document.getElementById("pomocky").innerHTML = Packs[i].pomocky;
                    document.getElementById("pomocky").id += "-" + i;
                    
                }
    
                if(Packs[i].postup != "-"){
                    document.getElementById("level-bottom-inner" + "-" + i).innerHTML += postup_div;
                    document.getElementById("postup").innerHTML = Packs[i].postup;
                    document.getElementById("postup").id += "-" + i;
                }
                        
            }

            document.getElementById("level-bottom" + "-" + i).innerHTML += "</div>";    



            if(Packs[i].video != "-"){
                document.getElementById("level-bottom" + "-" + i).innerHTML += video_div;
                document.getElementById("level-vid").src = Packs[i].video;
                document.getElementById("level-vid").id += "-" + i;
            }

            if(Packs[i].photo_1 != "-"){
                document.getElementById("level-bottom-" + i).innerHTML += image_div;
                document.getElementById("level-image").src = Packs[i].photo_1;
                document.getElementById("level-image").id += "-" + i + "_1";

                if(Packs[i].photo_2 != "-"){
                    document.getElementById("level-bottom-" + i).innerHTML += image_div;
                    document.getElementById("level-image").src = Packs[i].photo_2;
                    document.getElementById("level-image").id += "-" + i + "_2";                   
                }
                
            }
        }
       
    }
    document.getElementById("pack_number").innerHTML = mentioned;
    mentioned = 0;
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        Packs = response.packs;
        console.log(Packs);
        create_div();
    };
};

xhttp.open("GET", "index.json", true);
xhttp.send();

