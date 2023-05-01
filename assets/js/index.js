$("#btn-nav").click(function () {
    // $("#mySidenav").toggle(1000)
    let Sidenav = $("#mySidenav").outerWidth()
    if ($(".s-nav").css("left") == "0px") {
        $(".s-nav").animate({
            left: `-${Sidenav}`
        }, 1000)
        $(".caption-home").css("margin-left", "0px");
    } else {
        $(".s-nav").animate({
            left: `0px`
        }, 1000)
        $(".caption-home").css("margin-left", "220px");
    }
})

$(".closebtn").click(function () {
    let Sidenav = $("#mySidenav").outerWidth()
    if ($(".s-nav").css("left") == "0px") {
        $(".s-nav").animate({
            left: `-${Sidenav}`
        }, 1000)
        $(".caption-home").css("margin-left", "0px");
    }
})

$("a[href^='#']").click(function (e) {
    let linkHref = $(e.target).attr('href');
    let sectionHref = $(linkHref).offset().top;
    $("html,body").animate({
        scrollTop: sectionHref
    }, 500);
})

$(document).ready(function () {
    $("#singers div:first").css("display", "block");
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers div").not($(this).next()).slideUp(500);
    });
});

function countdown() {
    let now = new Date();
    let eventDate = new Date(2023, 12, 30);

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = `<h3>${d} D</h3>`;
    document.getElementById("hours").innerHTML = `<h3>${h} H</h3>`;
    document.getElementById("minutes").innerHTML = `<h3>${m} M</h3>`;
    document.getElementById("seconds").innerHTML = `<h3>${s} S</h3>`;

    setTimeout(countdown, 1000);
}

countdown();

$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
});
