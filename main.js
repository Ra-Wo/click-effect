const body = document.body;

body.onclick = function(event){
    var x = event.clientX,
        y = event.clientY,
        newElem =  document.createElement('div'),
        container = document.createElement('div');
        
    container.style.cssText = `top: ${y-20}px; left: ${x-20}px;`;
    container.classList.add('container');
    container.appendChild(newElem);
    
    let color = new Array('green', 'yellow', 'red', 'purple', 'black', 'cyan', 'brown', 'orange');
    newElem.style.cssText = `border: 3px solid ${color[Math.ceil(Math.random() * color.length)]};`;
    newElem.classList.add('circle');
    body.appendChild(container);
    setTimeout(function() {
         
         container.remove()
         
    }, 400);
};


window.onload = function(){
    let boxMessage = document.createElement('div');
        
    boxMessage.classList.add('boxMessage');
    setTimeout(function(){
        boxMessage.textContent = `Welcome please click anywhere in the screen`;
        body.appendChild(boxMessage);
    }, 500);
    setTimeout(function(){
        boxMessage.classList.add('boxMessageAnimationRemove');
    },(5000-800))
    setTimeout(function(){
        boxMessage.remove()
    }, 5000);
    
}