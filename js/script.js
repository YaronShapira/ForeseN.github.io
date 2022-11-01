const myTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "C",
    "React",
    "Python",
    "git",
    "Node.js",
    "MongoDB",
    "Bootstrap",
    "Sass",
];

var tagCloud = TagCloud(".content", myTags);

var tagCloud = TagCloud(".sphere-content", myTags, {
    // radius in px
    radius: window.screen.width > 500 ? 300 : 150,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
});

// var colors = ["#34A853", "#FBBC05", "#4285F4", "#7FBC00", "FFBA01", "01A6F0"];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.querySelector(".sphere-content").style.color = random_color;

$(document).ready(function () {
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $(".hideme").each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object - 160) {
                $(this).animate(
                    {
                        opacity: "1",
                    },
                    500
                );
            }
        });
    });
});

// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + "px";
    cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
    cursor.classList.add("click");
    cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
    cursor.classList.remove("click");
    cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
    item.addEventListener("mouseover", () => {
        cursor.classList.add("hover");
    });
    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});
