$(document).ready(function(){
  const totalNumOfImage = 13
  const mediaElement = $('.medias')
  
  for (let i = 1; i <= 13; i++){
    const padCounter = i.toString().padStart(3,'0')
    
    mediaElement.append(
      `
        <div class="media">
          <div class="inner-content">
            <img src="https://s3-us-west-1.amazonaws.com/james-web-content/test/images/flowers/${padCounter}.jpg" style="display: block;">
          </div>
        </div>
      `
    )
  }
})

