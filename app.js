fetch("https://fakestoreapi.com/products").then((data)=>{
    console.log(data)
    return data.json();
}).then((objData)=>{
    console.log("data",objData,typeof objData)
    let data1="";
    objData.map((value)=>{
        console.log("harsh",value.category)
        data1+= ` <div class="card">
        <h2 class="title">${value.category}</h2>
        <p class="desc">${value.description}</p>
        <div class="image-fit"><img src="${value.image}" alt="image-one"></div>
        <p class="price">${value.price}</p>
        <p class="reviews"><span>Rating</span>${value.rating.rate}/5</p>
    </div> `;
    
    });
    document.getElementById("container-d").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})

var previousScrolled = window.scrollY;

console.log("kitna scroll hua hai ",previousScrolled)
window.onscroll= function(e){
    
    var currentScrolled = window.scrollY;
    console.log("prev",currentScrolled,typeof(previousScrolled),)
    if(previousScrolled > currentScrolled){
        document.querySelector('#heading').style.top = "0";
    }
    else{
        document.querySelector('#heading').style.top = "-100px";
    
    }
    previousScrolled = currentScrolled;
}