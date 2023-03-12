function heure() {
    var date = new Date(); 
    var heures = date.getHours();
    var minutes = date.getMinutes();
  
    heures = heures < 10 ? "0" + heures : heures;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    document.getElementById("horloge").innerHTML = '<p class="pays">France</p>' + heures + ":" + minutes;

  }
  
  setInterval(heure, 1000);
  