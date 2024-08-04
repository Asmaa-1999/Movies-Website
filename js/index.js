/**********from-Validation***********/
let userPasswordvalue = document.querySelector("#userPassword").value;
$(".btnItem").click(function () {

    $(".btnItem").css("background-color", "#000");
})

function validationName() {
    let userNamevalue = document.querySelector("#userName").value;
    const regexName = /^[a-z]{1,50}$/gi;
    let validationName = regexName.test(userNamevalue);

    if (!validationName || userNamevalue == "") {
        $("#worngName").html(`<div class="requiredItem">
        <p class="  p-1 ">Your Name is not valid</p>
    </div>`);
    }
    else {
        $("#worngName").html(``)

    }

}
function validationEmail() {
    let userEmailvalue = document.querySelector("#userEmail").value;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validationEmail = regexEmail.test(userEmailvalue);

    if (!validationEmail || userEmailvalue == "") {
        $("#worngemail").html(` <div class="requiredItem">
        <p class="worng  p-1 ">entre valid email</p>
    </div>`);
    }
    else {
        $("#worngemail").html(``)
    }

}
function validationphone() {
    let userPhonevalue = document.querySelector("#userPhone").value;
    const regexphone = /^[0-9]{12}$/;
    let validationPhone = regexphone.test(userPhonevalue);

    if (!validationPhone || userPhonevalue == "") {
        $("#worngPhone").html(`<div class="requiredItem">
        <p class="worng  p-1 ">entre valid phone</p>
    </div>`);
    }
    else {
        $("#worngPhone").html(``)
    }

}
function validationAge() {
    let userAgevalue = document.querySelector("#userAge").value;
    const regexAge = /^[0-9]{2}$/;
    let validationAge = regexAge.test(userAgevalue);

    if (!validationAge || userAgevalue == "") {
        $("#worngAge").html(` <div class="requiredItem">
        <p class="worng p-1"> entre valid Age</p>
    </div>`);
    }
    else {
        $("#worngAge").html(``)
    }

}
function validationPassword() {
    const regexPassword = /^(?=.*[a-z])(?=.*[0-9])(?=.{8}$)/;
    let validationPassword = regexPassword.test(userPasswordvalue);

    if (!validationPassword || userPasswordvalue == "") {
        $("#worngPassword").html(` <div class="requiredItem">
        <p class="worng p-1">entre valid password *Minimum eight characters, at least one letter and one
            number:*</p>
    </div>`);
    }
    else {
        $("#worngPassword").html(``)
    }
}
function validationRepassword() {
    let userRepassworddvalue = document.querySelector("#userRepassword").value;
    if (userRepassworddvalue != userPasswordvalue) {
        $("#worngRepassword").html(`<div class="requiredItem">
        <p class="worng p-1">entre valid Repassword</p>
    </div>`);
    }
    else {
        $("#worngRepassword").html(``)
    }
}


/********api*********/


async function getMovies(category) {
    let response = await fetch(` https://api.themoviedb.org/3/movie/${category}?api_key=942ff127cf531cf1efa75cb7d74bcfd9`);
    let finalResult = await response.json();
    let disMovie = finalResult.results;
    var cartona = "";
    for (let i = 0; i < disMovie.length; i++) {
        cartona += `
         <div class="col-lg-4">
        <div class="moviseImg position-relative">
                    <img src="https://image.tmdb.org/t/p/w500${disMovie[i].poster_path}" class=" w-100 bg-info ">
                    <div class="moviseInf text-center p-5">
                        <h3>"${disMovie[i].title}"</h3>
                        <p>"${disMovie[i].overview}"</p>
                        <h6>"rate${disMovie[i].vote_average}"</h6>
                        <h6>"${disMovie[i].release_date}"</h6>
                    </div> 
                    </div>
                    </div> `
    }
    document.getElementById("rowdate").innerHTML = cartona;
}
getMovies("now_playing");

$(`ul li a `).click(function (e) {


    let itemLink = $(e.target).attr("href");
    let itemLinkId = $(e.target).attr("id");
    let regex = /[href^="#"]/;
    let regextrending = /trending/;


    if (!(regex.test(itemLink)) && !(regextrending.test(itemLink))) {
        $(e.preventDefault());
        getMovies(itemLinkId);
    }
    else {

        return true;
    }
})

async function getMoviesTrending() {
    let response = await fetch(` https://api.themoviedb.org/3/trending/all/week?api_key=942ff127cf531cf1efa75cb7d74bcfd9`);
    let finalResult = await response.json();
    let disMovie = finalResult.results;

    let cartona = "";
    for (let i = 0; i < disMovie.length; i++) {
        cartona += `
         <div class="col-lg-4">
        <div class="moviseImg position-relative">
                    <img src="https://image.tmdb.org/t/p/w500${disMovie[i].poster_path}" class=" w-100 bg-info ">
                    <div class="moviseInf text-center p-5">
                        <h3>"${disMovie[i].title}"</h3>
                        <p>"${disMovie[i].overview}"</p>
                        <h6>"rate${disMovie[i].vote_average}"</h6>
                        <h6>"${disMovie[i].release_date}"</h6>
                    </div> 
                    </div>
                    </div> `
    }
    document.getElementById("rowdate").innerHTML = cartona;
}

$("ul #trending a").click( async function (e) {
    $(e.preventDefault());
    getMoviesTrending();
})
/*************sidebarbtn*************/
/*

$(".btnList").click(function () {
    console.log(23456)
    $(".slideBar").toggle(1000);
    let chickside=$(".slideBar").css( "left")
    console.log(chickside)
    if( chickside=="0" )
    {
        $(".btnslide").removeClass("fa-solid fa-xmark ");
        $(".btnslide").addClass("navbar-toggler-icon");
    
    }
})

*/
/*



$(".sliderBar").animate({ left: `-${divWides}` }, 1000);

$(".btnList").click(function () {
   
    if ($(".sliderBar").css("left" == "0"))//موجوددة
    {
        $(".sliderBar").animate({ left: `-${divWides}` }, 1000);
        
    }
    else //غير موجودة
    {
        $(".sliderBar").animate({ left: "0px" }, 1000);
    }
})



/*let divWides = $(".sliderBar").innerWidth();

$(".btnslide").click(function(){
    let divWidth = $(".slideBar").width();
    console.log(divWidth);
    $(".slideBar").animate({ diplay: `none` }, 1000);
  });






})*/

$(".btnList").click(function () {
    $(".slideBar").toggle(1000);
    $(".fa-bars ").toggolClass("fa-times")
        
   

})
