const imageData = {
  "001": "Invisible Connection",
  "002": "Bare Magazine",
  "003": "Cotogna",
  "004": "Jenna at The Mill",
  "005": "Ivy at The Mill",
  "006": "Arch Geo",
  "007": "Part of Life",
  "008": "Joshua Tree",
  "009": "Six Crisp Day",
  "010": "The Apartment by the Line",
  "011" : "Air BnB"
   
}

$(document).ready(function(){
  const totalNumOfImage = Object.keys(imageData).length
  const mediaElement = $('.medias')
  
  for (let i = totalNumOfImage; i >= 1; i--){
    const padCounter = i.toString().padStart(3,'0')
    
    mediaElement.append(
      `
        <div class="media">
          <div class="inner-content">
            <img class="fade-in" src="assets/img/main/${padCounter}.jpg" style="display: block;">
            <span>${imageData[padCounter] === undefined ? "" : imageData[padCounter]}</span>
            </img>
          </div>
        </div>
      `
    )
  }

  $('img.fade-in').hide();
  $('img.fade-in').each(function (i) {
    if (this.complete) {
      $(this).fadeIn();
    } else {
      $(this).load(function () {
        $(this).fadeIn();
      });
    }
  });

  
})
