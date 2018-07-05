const imageData = {
  "001" : "one",
  "002" : "two",
  "003" : "three",
  "004" : "four",
  "005" : "five",
  "006" : "six",
}

$(document).ready(function(){
  const totalNumOfImage = 13
  const mediaElement = $('.medias')
  
  for (let i = 1; i <= 13; i++){
    const padCounter = i.toString().padStart(3,'0')
    
    mediaElement.append(
      `
        <div class="media">
          <div class="inner-content">
            <img class="fade-in" src="https://s3-us-west-1.amazonaws.com/james-web-content/test/images/flowers/${padCounter}.jpg" style="display: block;">
            <span>${imageData[padCounter] === undefined ? "" : imageData[padCounter]}</span>
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

console.log(imageData)