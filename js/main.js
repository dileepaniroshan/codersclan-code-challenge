window.addEventListener('scroll', function(event) {
  var depth, i, layer, layers, len, movement, topDistance, translate3d;
  topDistance = this.pageYOffset;
  layers = document.querySelectorAll("[data-type='parallax']");
  for (i = 0, len = layers.length; i < len; i++) {
    layer = layers[i];
    depth = layer.getAttribute('data-depth');
    movement = -(topDistance * depth);
    translate3d = 'translate3d(0, ' + movement + 'px, 0)';
    layer.style['-webkit-transform'] = translate3d;
    layer.style['-moz-transform'] = translate3d;
    layer.style['-ms-transform'] = translate3d;
    layer.style['-o-transform'] = translate3d;
    layer.style.transform = translate3d;
  }
});


fetch('/codersclan-code-challenge/frontend.json')
.then(res => res.json())
.then(function(data) {
var elements = document.getElementsByClassName("title");
for(var i = 0; i < elements.length; i++){
   elements[i].innerHTML = `${data.title} `;
   
}

var elements = document.getElementsByClassName("cta");
for(var i = 0; i < elements.length; i++){
   elements[i].innerHTML = `${data.cta} `;
   
}

var elements = document.querySelectorAll(".boxes .row");
for (i = 0; i < elements.length; ++i) {

  var cl = data.cards;

  for(var j = 0; j < cl.length; j++){
      
      elements[i].innerHTML = 
      `
      ${data.cards.map(function(box, index) {
          var count = index+1;
           return  `
           
           <div class="col-sm-4 item ${box.overlay_image_background === (true) ? 'back-image' : ''} ${box.align_left === (true) ? 'align-left' : ''} ${box.outline === (true) ? 'outline' : ''}  ${(count % 3 == 0 ) ? 'last' : ''} ${(count % 3 == 1 ) ? 'first' : ''}">
           <div class="arrow"></div>
           <div class="border-hidden">
           <img src="${box.image}">
           <h3>${box.title}</h3>
           <p>${box.text}</p>
           ${box.normal === (true) ? `
                
                <div class="overflow">
                <img src="${box.overlay_image}">
                <h3>${box.overlay_title}</h3>
                <p>${box.overlay_text}</p>
                </div>` : ''} 

                ${box.overlay_image_background === (true) ? `
                <div class="overflow" style="background-image: ${box.overlay_background_image});">

                <div class="overflow">
                <img src="${box.overlay_image}">
                <h3>${box.overlay_title}</h3>
                <p>${box.overlay_text}</p>
                </div> </div>` : ''} 
            
           </div>
           </div>
           `

           
           
      }).join('')}
      
      `;
  }    
}
})


