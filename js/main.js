var header;
//var contact;

function scrollFunc() {
    header = document.querySelector("header");
    
    // contact = document.getElementsByClassName("contact-form");
    // console.log(contact);
    var currentScrollValue = document.documentElement.scrollTop;
    console.log("currentScrollValue : " + currentScrollValue);

    if(pageYOffset >= 90){
        header.classList.add('on');
        $("a").css("color","black");

    }else {
        header.classList.remove('on');
        $("a").css("color","white");
    }
};


var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("myslides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
};

// $(document).ready(function(){

//     //  $(window).scroll(function() {
//     //     var currentScrollValue = document.documentElement.scrollTop;
//     //     if(currentScrollValue >= 90){
//     //         header.classList.add('on');
//     //         $("a").css("color","black");
    
//     //     }else {
//     //         header.classList.remove('on');
//     //         $("a").css("color","white");
//     //     }
//     //  });


//     $("a[title='about']").click(function() {
//         $('html,body').animate({
//             scrollTop:1100
//         },800);
//     });

//     $("a[title='learning']").click(function() {
//         $('html,body').animate({
//             scrollTop:3562
//         },800);
//     });

// });
