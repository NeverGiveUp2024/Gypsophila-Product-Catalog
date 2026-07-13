/* =====================================================
   Gypsophila Product Catalog
   Main Javascript
===================================================== */


/* =========================
   Global
========================= */


let currentLanguage =
localStorage.getItem("language") || "es";


let languageData = {};

let products = [];





/* =========================
   DOM
========================= */


const productsGrid =
document.getElementById("productsGrid");


const productCount =
document.getElementById("productCount");


const languageSelect =
document.getElementById("language");


const toast =
document.getElementById("toast");


const themeToggle =
document.getElementById("themeToggle");


const backTop =
document.getElementById("backTop");


const imageModal =
document.getElementById("imageModal");


const modalImage =
document.getElementById("modalImage");


const modalClose =
document.getElementById("modalClose");






/* =========================
   Language
========================= */


async function loadLanguage(){


try{


const res =
await fetch(
`languages/${currentLanguage}.json`
);


languageData =
await res.json();



updatePageText();



}
catch(err){

console.error(
"Language error:",
err
);

}


}





function updatePageText(){



document
.querySelectorAll("[data-lang]")
.forEach(el=>{


let key =
el.dataset.lang;



if(languageData[key]){

el.innerHTML =
languageData[key];

}


});



}





function setDirection(){


if(currentLanguage==="ar"){


document.body.dir="rtl";


}else{


document.body.dir="ltr";


}


}





if(languageSelect){


languageSelect.value =
currentLanguage;



languageSelect.addEventListener(
"change",
async()=>{


currentLanguage =
languageSelect.value;


localStorage.setItem(
"language",
currentLanguage
);



await loadLanguage();


setDirection();



renderProducts();



});


}









/* =========================
   Load Products
========================= */


async function loadProducts(){


try{


const res =
await fetch(
"data/products.json"
);



products =
await res.json();



renderProducts();



}
catch(err){


console.error(
"Product error:",
err
);


}


}








/* =========================
   Render Products
========================= */


function renderProducts(){

    if(!productsGrid) return;

    productsGrid.innerHTML = "";

    productCount.textContent = products.length;

    products.forEach(product=>{

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

<div class="product-image-box">

${
product.tag
?
`
<span class="product-tag">
${product.tag[currentLanguage]}
</span>
`
:
""
}

<img
src="${product.image}"
alt="${product.name[currentLanguage]}"
class="product-img"
loading="lazy">

</div>


<div class="product-content">

<h3 class="product-title">

${product.name[currentLanguage]}

</h3>


<p class="product-description">

${product.description[currentLanguage]}

</p>


<div class="product-features">

${
product.features[currentLanguage]
.map(item=>`

<span>${item}</span>

`)
.join("")
}

</div>


<div class="product-price">

${product.price}

</div>


<div class="product-actions">

<a
href="${product.amazon}"
target="_blank"
class="amazon-btn">

${languageData.viewAmazon || "View on Amazon"}

→

</a>


<button
class="copy-btn"
data-link="${product.amazon}">

${languageData.copy || "Copy"}

</button>

</div>

</div>

`;

        productsGrid.appendChild(card);

    });

    observeCards();

}










/* =========================
   Copy
========================= */


document.addEventListener(
"click",
e=>{


if(
e.target.classList.contains(
"copy-btn"
)
){


navigator.clipboard
.writeText(
e.target.dataset.link
)
.then(()=>{

showToast();

});


}



});






function showToast(){

    const text = toast.querySelector("p");

    if(text){

        text.textContent =
        languageData.copied || "Copied!";

    }

    toast.classList.add("active");

    setTimeout(()=>{

        toast.classList.remove("active");

    },2000);

}








/* =========================
   Dark Mode
========================= */


if(themeToggle){



themeToggle.onclick=()=>{


document.body.classList.toggle(
"dark"
);



localStorage.setItem(
"theme",
document.body.classList.contains(
"dark"
)
?
"dark"
:
"light"
);


};


}





if(
localStorage.getItem("theme")
==="dark"
){


document.body.classList.add(
"dark"
);


}










/* =========================
   Image Preview
========================= */


document.addEventListener(
"click",
e=>{


if(
e.target.classList.contains(
"product-img"
)
){


modalImage.src =
e.target.src;



imageModal.classList.add(
"active"
);



document.body.style.overflow=
"hidden";


}


});






function closeModal(){


imageModal.classList.remove(
"active"
);



document.body.style.overflow="";


}




if(modalClose)
modalClose.onclick =
closeModal;



let overlay =
document.querySelector(
".modal-overlay"
);


if(overlay)
overlay.onclick =
closeModal;









/* =========================
   Animation
========================= */


const observer =
new IntersectionObserver(
entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}



});


},
{
threshold:.15
}
);




function observeCards(){


document
.querySelectorAll(
".product-card"
)
.forEach(card=>{


observer.observe(card);


});


}









/* =========================
   Back Top
========================= */


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>500){


backTop.classList.add(
"show"
);


}else{


backTop.classList.remove(
"show"
);


}


});





if(backTop){


backTop.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};


}








/* =========================
   Hero
========================= */


function scrollToProducts(){


document
.getElementById("products")
.scrollIntoView({

behavior:"smooth"

});


}



window.scrollToProducts =
scrollToProducts;









/* =========================
   Init
========================= */


document.addEventListener(
"DOMContentLoaded",
async()=>{


await loadLanguage();


await loadProducts();



setDirection();



});
