// Sticky Navbar

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("sticky");
    } 
    else {
        nav.classList.remove("sticky");
    }

});



// Product Category Filter

function openCategory(category){


    // Hide category buttons

    let box = document.getElementById("categoryBox");

    if(box){
        box.style.display="none";
    }



    // Show selected products

    let products = document.querySelectorAll(".product-card");


    products.forEach(function(product){


        if(product.classList.contains(category)){

    product.style.display="block";

}

        else{

            product.style.display="none";

        }


    });
function orderProduct(productName){

    let phone = "919315287145";

    let message = "Hello NS Shri Radhey, I want to order " + productName;

    let whatsappURL = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}


    // Scroll to products

    let productArea = document.querySelector(".products-grid");

if(productArea){
    productArea.scrollIntoView({
        behavior:"smooth"
    });
}

}
function showSection(sectionName){

    // hide about and contact first

    document.getElementById("about").style.display="none";

    document.getElementById("contact").style.display="none";


    // show selected section

    document.getElementById(sectionName).style.display="block";


    // scroll to it

    document.getElementById(sectionName).scrollIntoView({
        behavior:"smooth"
    });

}
function orderProduct(productName){

    let phone = "919315287145";

    let message = "Hello NS Shri Radhey, I want to order " + productName;

    let whatsappLink = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(whatsappLink, "_blank");

}
function orderProduct(productName){

    let phone = "919315287145";

    let message = "Hello NS Shri Radhey, I want to order " + productName;

    let whatsappLink = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.location.href = whatsappLink;

}