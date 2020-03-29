
    var color = ["rgb(211, 255, 229)", "rgb(173, 253, 206)", "rgb(126, 252, 178)", "rgb(87, 255, 157)", "rgb(34, 240, 120)"];
    var text = ["Vodne znecistenie Slovenska. <br><br> eee eee eeeee ee eee e eeeee eeeee eeeeeeeeee eee ee eeeeeee eeeee eeee eeeeee ee",
                "Cistenie vody<br><br>Kazda z registrovanych nebezpecnych latok ma svoj postup odstranenia. No celkovo sa voda cisti v cistiarniach. Tych mame na Slovensku par, no o nich sa budeme rozpravat neskor.",
                "Hlavne dovody znecistenia<br><br> eee eee eeeee ee eee e eeeee eeeee eeeeeeeeee eee ee eeeeeee eeeee eeee eeeeee ee",
                "<b>Upratujte po sebe</b> <br><br> eeeeee eeeee ee e eee eeeee eeee eeee eeee e e eeeee eeee ee eeeee eeee e eee sss ee eeeeeeee eeeeee eee eeeee e",
                "Zhrnutie: <br><br> eee eee eeeee ee eee e eeeee eeeee eeeeeeeeee eee ee eeeeeee eeeee eeee eeeeee ee"];
  
    function vypis(){
      for(var i =0; i < 5; i++){
        document.getElementsByClassName("option14-col")[i].style.height = "460px";
        document.getElementsByClassName("option14-col")[i].style.paddingTop = "40px";

        document.getElementById("col" + [i + 1]).innerHTML = text[i];
        document.getElementById("col" + [i + 1]).style.fontSize = "16px";
        document.getElementById("o" + [i + 1]).style.backgroundColor = color[i];
      }
      document.getElementsByClassName("option14-button")[0].style.backgroundColor = "rgb(12, 231, 30)";
      document.getElementsByClassName("option14-button")[0].style.color = "black";
      document.getElementsByClassName("option14-button")[0].textContent = "No, to ma zaujalo!";


    }