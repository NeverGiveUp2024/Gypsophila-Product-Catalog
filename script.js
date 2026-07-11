/* =====================================================
   Gypsophila Product Catalog
   Main JavaScript
===================================================== */



/* =========================
   Product Data
   后续新增商品只修改这里
========================= */


const products = [

      {
          name: "Gypsophila Batana Face Mask",
      
          tag: "NEW",
      
          price: "€14.87",
      
          description:
          "Premium beauty mask enriched with natural ingredients for smooth and healthy skin.",
      
          features: [
              "Natural Batana Oil",
              "Deep Nourishing Care",
              "Premium Beauty Formula"
          ],
      
          image:
          "images/product1.png",
      
          amazon:
          "https://www.amazon.com/dp/B0DXPMR2T6/ref=sr_1_18_sspa?th=1"
      },
      
      
      {
          name: "Gypsophila Batana Oil Shampoo",
      
          tag: "NEW",
      
          price: "€14.87",
      
          description:
          "Premium beauty shampoo enriched with natural ingredients for smooth and healthy hair.",
      
          features: [
              "Natural Batana Oil",
              "Deep Nourishing Care",
              "Premium Hair Care Formula"
          ],
      
          image:
          "images/product2.png",
      
          amazon:
          "https://www.amazon.com/dp/B0DN6TKYF5?th=1"
      },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product3.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product4.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product5.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product6.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product7.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product8.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product9.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product10.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product11.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product12.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product13.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product14.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product15.jpg",

        amazon: ""
    },


    {
        name: "",
        tag: "",
        price: "",

        description: "",

        features: [
            "",
            "",
            ""
        ],

        image: "images/product16.jpg",

        amazon: ""
    }

];







/* =========================
   DOM Elements
========================= */


const productsGrid =
document.getElementById(
    "productsGrid"
);



const productCount =
document.getElementById(
    "productCount"
);



const toast =
document.getElementById(
    "toast"
);



const themeToggle =
document.getElementById(
    "themeToggle"
);



const backTop =
document.getElementById(
    "backTop"
);



const imageModal =
document.getElementById(
    "imageModal"
);



const modalImage =
document.getElementById(
    "modalImage"
);



const modalClose =
document.getElementById(
    "modalClose"
);







/* =========================
   Render Products
========================= */


function renderProducts(){



    productsGrid.innerHTML = "";



    productCount.textContent =
    products.length;



    products.forEach(
        (product,index)=>{


        const card =
        document.createElement(
            "article"
        );



        card.className =
        "product-card";



        card.innerHTML = `


        <div class="product-image-box">


            <span class="product-tag">

                ${product.tag}

            </span>



            <img 
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            class="product-img">


        </div>



        <div class="product-content">



            <h3 class="product-title">

                ${product.name}

            </h3>




            <p class="product-description">

                ${product.description}

            </p>




            <div class="product-features">


                ${
                    product.features
                    .map(
                        item =>
                        `
                        <span>
                        ${item}
                        </span>
                        `
                    )
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

                    View on Amazon
                    →

                </a>



                <button
                class="copy-btn"
                data-link="${product.amazon}">

                    ⧉

                </button>



            </div>


        </div>



        `;



        productsGrid.appendChild(card);



        setTimeout(()=>{

            card.classList.add(
                "show"
            );

        },100 * index);




    });



}







/* =========================
   Copy Amazon Link
========================= */


function showToast(){


    toast.classList.add(
        "active"
    );


    setTimeout(()=>{


        toast.classList.remove(
            "active"
        );


    },2000);


}





document.addEventListener(
"click",
function(e){


    if(
        e.target.classList.contains(
            "copy-btn"
        )
    ){


        const link =
        e.target.dataset.link;



        navigator.clipboard
        .writeText(link)
        .then(()=>{


            showToast();


        });


    }


});








/* =========================
   Dark Mode
========================= */


themeToggle.addEventListener(
"click",
()=>{


    document.body
    .classList
    .toggle(
        "dark"
    );



    localStorage.setItem(

        "theme",

        document.body
        .classList
        .contains("dark")
        ?
        "dark"
        :
        "light"

    );


});







/* Load Saved Theme */


if(
localStorage.getItem(
    "theme"
)
===
"dark"
){


    document.body
    .classList
    .add(
        "dark"
    );


}








/* =========================
   Image Preview
========================= */


document.addEventListener(
"click",
function(e){



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



        document.body.style
        .overflow =
        "hidden";



    }



});








function closeModal(){


    imageModal.classList.remove(
        "active"
    );



    document.body.style
    .overflow =
    "";



}




modalClose.addEventListener(
"click",
closeModal
);



document.querySelector(
".modal-overlay"
)
.addEventListener(
"click",
closeModal
);





document.addEventListener(
"keydown",
function(e){


    if(
        e.key ===
        "Escape"
    ){

        closeModal();

    }


});








/* =========================
   Scroll Animation
========================= */


const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(

entry=>{


if(
entry.isIntersecting
){


entry.target.classList
.add(
"show"
);



}


}

);


},


{

threshold:
0.15

}


);






function observeCards(){


document
.querySelectorAll(
".product-card"
)
.forEach(card=>{


observer.observe(
card
);


});


}







/* =========================
   Back To Top
========================= */


window.addEventListener(
"scroll",
()=>{


if(
window.scrollY > 500
){


backTop.classList.add(
"show"
);


}
else{


backTop.classList.remove(
"show"
);


}



});






backTop.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});








/* =========================
   Hero Scroll
========================= */


function scrollToProducts(){


document
.getElementById(
"products"
)
.scrollIntoView({

behavior:
"smooth"

});


}



window.scrollToProducts =
scrollToProducts;







/* =========================
   Initialize
========================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


renderProducts();


setTimeout(()=>{


observeCards();


},300);



});
