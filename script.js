$(document).ready(function() {
    AOS.init();
    let anchorSelector = 'a[href^="#"]';
    let anchorList =  document.querySelectorAll(anchorSelector);
    anchorList.forEach(link => {
        link.onclick = function (e) {
            e.preventDefault();
            let destination = 
                document.querySelector(this.hash);
            destination.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
    $("#owl-main").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoHeight : false
    });
    $("#owl-second").owlCarousel({
        items: 3,
        lazyLoad: true,
        navigation: false,
    });
    $("#owl-colors").owlCarousel({
        items: 4,
        lazyLoad: true,
        navigation: false
    });
    $("#owl-review").owlCarousel({
        items: 3,
        lazyLoad: true,
        navigation: false
    });
    $("#owl-product").owlCarousel({
        items: 4,
        lazyLoad: true,
        navigation: false,
    });
    $(document).on("click","#mobile-menu-btn",function(){
        if($("#mobile-menu").hasClass("hidden")){
            $("#mobile-menu").removeClass("hidden");
            // $("#mobile-menu").attr("data-aos","fade-down");
        }else{
            $("#mobile-menu").addClass("hidden"); 
        }
    });
    window.addEventListener('scroll', () => {
        const verticalScrollPx = window.scrollY;
        if(verticalScrollPx != 0){
            $("#home").addClass("bg-black");
        }else{
            $("#home").removeClass("bg-black");
        }
    });
});