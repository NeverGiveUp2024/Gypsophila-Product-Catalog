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
      
          price: "$16.99",
      
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
      
          price: "$17.98",
      
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
        name: "Shampoo and Conditioner Set",
        tag: "NEW",
        price: "$29.69",

        description: "Nourish, strengthen, and smooth hair with our Batana Oil Shampoo & Conditioner, formulated for all hair types.",

        features: [
            "Anti-Frizz",
            "Breakage Control",
            "Strengthening"
        ],

        image: "images/product3.jpg",

        amazon: "https://www.amazon.com/Gypsophila-Batana-Shampoo-Conditioner-Sulfate-Free/dp/B0FNMHGW1W"
    },


   {
       name: "Gypsophila 100% Pure Batana Oil + Rosemary Oil",
   
       tag: "NEW",
   
       price: "$12.99",
   
       description:
       "Batana Oil enriched with Rosemary Oil to nourish hair, support healthy growth and improve scalp care.",
   
       features: [
           "Batana Oil",
           "Rosemary Oil Infused",
           "Nourishing Hair Care Formula"
       ],
   
       image:
       "images/product4.jpg",
   
       amazon:
       "https://www.amazon.com/Batana-Growth-Natural-Nourishes-Eliminates/dp/B0DYXRZLKB/ref=sr_1_3?th=1"
   },


    {
        name: "Batana Oil Hair Growth Bundle",
        tag: "NEW",
        price: "$26.99",

        description: "The perfect Batana Oil Hair Growth Duo to nourish the scalp, strengthen hair, and promote fuller, healthier-looking hair for all hair types.",

        features: [
            "Helps Nourish Scalp & Hair",
            "Helps Strengthen & Restore Shine",
            "Suitable for All Hair Types"
        ],

        image: "images/product5.jpg",

        amazon: "https://www.amazon.com/Bundle-100-Rosemary-Shampoo-Natural-Treatment-Healthier/dp/B0DY7DCC24"
    },


    {
        name: "Purifying Exfoliating Gel",
        tag: "NEW",
        price: "$7.99",

        description: "A gentle exfoliating gel that helps remove dead skin and excess oil while leaving skin smoother, refreshed, and hydrated.",

        features: [
            "Gentle Dead Skin Exfoliation",
            "Pore Cleansing & Hydrating Care",
            "Suitable for Face & Body"
        ],

        image: "images/product6.jpg",

        amazon: "https://www.amazon.com/Gypsophila-Purifying-Exfoliating-Cleansing-Removes/dp/B0F4KHDT25"
    },


    {
        name: "Fragrance Body Wash",
        tag: "NEW",
        price: "$15.99",

        description: "A luxurious fragrance body wash with rich foam and hydrating ingredients to gently cleanse, soften, and leave skin delicately scented.",

        features: [
            "Long-Lasting Elegant Fragrance",
            "Hydrating Skin Care",
            "Gentle Rich Foam Cleanse"
        ],

        image: "images/product7.jpg",

        amazon: "https://www.amazon.com/Gypsophila-Fragrance-Moisturizing-Lasting-Phthalate/dp/B0FS5TS717"
    },


    {
        name: "Batana Oil Shampoo & Batana Hair Mask",
        tag: "NEW",
        price: "$28.99",

        description: "Complete Batana hair care duo with shampoo and mask to help repair, moisturize, and restore soft, shiny-looking hair.",

        features: [
            "Batana Oil & Rosemary Nourishment",
            "Hydrating Hair Repair Care",
            "Sulfate-Free for All Hair Types"
        ],

        image: "images/product8.jpg",

        amazon: "https://www.amazon.com/Gypsophila-Batana-Shampoo-Hair-Mask/dp/B0F9PDMPL1"
    },


    {
        name: "Batana Shampoo & Batana Oil & Hair Mask-Combo Set",
        tag: "NEW",
        price: " $38.99",

        description: "Gentle Batana Oil hair care set with natural ingredients to help nourish, hydrate, and repair dry, damaged hair for smoother, healthier-looking hair.",

        features: [
            "Natural Plant-Based Formula",
            "Deep Nourishing Hair Repair",
            "Batana Oil & Rosemary Care"
        ],

        image: "images/product9.jpg",

        amazon: "https://www.amazon.com/Batana-Shampoo-Oil-Hair-Mask-Combo/dp/B0F9PJ5N34"
    },


    {
        name: "Umex Nail Repair Serum",
        tag: "NEW",
        price: "$12.99",

        description: "Ginger and tea tree nail care serum that helps nourish, strengthen, and improve the appearance of dry, brittle nails and cuticles.",

        features: [
            "Nourishing Nail Care",
            "Helps Strengthen Brittle Nails",
            "Ginger & Tea Tree Oil Formula"
        ],

        image: "images/product10.jpg",

        amazon: "https://www.amazon.com/Jonider-Treatment-Cuticle-Ginger-Brittle/dp/B0GX539DLC"
    },


    {
        name: "Umex Soothing Massage Gel",
        tag: "NEW",
        price: "$16.99",

        description: "Plant-based joint and muscle care gel with a lightweight, fast-absorbing formula designed for daily comfort and easy application.",

        features: [
            "Plant-Based Soothing Formula",
            "Fast-Absorbing & Non-Greasy",
            "Daily Joint & Muscle Care"
        ],

        image: "images/product11.jpg",

        amazon: "https://www.amazon.com/Jonider-Soothing-Relief-Massage-Soothes/dp/B0F6TLDG13"
    },


    {
        name: "2-Pack Tea Tree Foot Spray",
        tag: "NEW",
        price: "$19.99",

        description: "Tea tree foot spray with a quick-drying formula that helps refresh, moisturize, and maintain comfortable feet for daily and active lifestyles.",

        features: [
            "Tea Tree Oil Fresh Care",
            "Quick-Drying & Long-Lasting Freshness",
            "Portable Foot & Shoe Spray"
        ],

        image: "images/product12.jpg",

        amazon: "https://www.amazon.com/2PCS-Spray-Freshness-Quick-Drying-Travel/dp/B0H3K4BNG8"
    },


    {
        name: "Nail Repair Serum",
        tag: "NEW",
        price: "$9.99",

        description: "Ginger nail care serum designed to help nourish, strengthen, and improve the appearance of dry, brittle nails and cuticles with easy daily application.",

        features: [
            "Nourishing Nail Care Formula",
            "Helps Strengthen Brittle Nails",
            "Easy Daily Application"
        ],

        image: "images/product13.jpg",

        amazon: "https://www.amazon.com/Treatment-Cuticle-Ginger-Repair-Brittle/dp/B0F29JT4RB"
    },


    {
        name: "Umex Soothing Joint Patches",
        tag: "NEW",
        price: "$19.99",

        description: "Natural botanical patches for convenient daily comfort and care.",

        features: [
            "Natural Herbal Formula",
            "Breathable & Flexible",
            "Easy Peel & Apply"
        ],

        image: "images/product14.jpg",

        amazon: "https://www.amazon.com/Jonider-Natural-Soothing-Strips-Patches/dp/B0H6SP5M7L"
    },


    {
        name: "Umex Natural Soothing Joint Patches (16PCS)",
        tag: "NEW",
        price: "$35.99",

        description: "Natural botanical patches for convenient daily comfort and care.",

        features: [
            "Natural Herbal Formula",
            "Breathable & Flexible",
            "Easy Peel & Apply"
        ],

        image: "images/product15.jpg",

        amazon: "https://www.amazon.com/Jonider-Natural-Soothing-Strips-Patches/dp/B0H6SFMRPZ"
    },


    {
        name: "Cyperus Rotundus Hair Removal Cream",
        tag: "NEW",
        price: "$19.99",

        description: "Gentle hair removal cream that helps remove unwanted hair while leaving skin soft, smooth, and moisturized.",

        features: [
            "Gentle & Painless Hair Removal",
            "Moisturizing Skin Care",
            "Multi-Area Use"
        ],

        image: "images/product16.jpg",

        amazon: "https://www.amazon.com/AgeVance-Rotundus-Moisturizer-Effective-Underarms/dp/B0GV264BKS"
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
