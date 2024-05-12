function forcard(totorial,No,views,month,name,capsule) {
    let viewsTime;
    if(views<1000){
        viewsTime = views;
    }
    else if(views>=1000&&views<99999){
         viewsTime = views/1000 +"K";
    }
    else if(views>=100000&&views<999999){
        viewsTime = views/10000 +"M";
    }
    else{
        viewsTime =views/100000 +"B";
    }
   let html = ` <div class="card">
   <div class="img"><img src="harry.webp" alt="image-for-viewer"><div class="capsule">${capsule}</div></div>
    <div class="info">${totorial} ${No} <div class="text">${name}.${viewsTime} views.${month} months ago</div></div>
</div>`
 
document.querySelector(".container").innerHTML =document.querySelector(".container").innerHTML+ html

}
forcard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial","#78","8000000","6","zakiwithharry","40:31")