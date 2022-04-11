
// script for delivery modal window opening
var deliveryModal = document.querySelector(".modal-container");
function modalOpen() {
    deliveryModal.classList.add("modal-open");
}
function modalClose() {
    deliveryModal.classList.remove("modal-open");
}

// script for catalog list opening
var catalogListOpenClose = document.querySelector(".main-nav-item:first-child");
function catalogOpClose() {
    catalogListOpenClose.classList.toggle("catalog-opened");
}

// script for services section
var serviceBtnFirst = document.querySelector(".services-nav-item:nth-of-type(1)");
var serviceBtnSecond = document.querySelector(".services-nav-item:nth-of-type(2)");
var serviceBtnThird = document.querySelector(".services-nav-item:nth-of-type(3)");

var serviceItemFirst = document.querySelector(".service-delivery");
var serviceItemSecond = document.querySelector(".service-quarantee");
var serviceItemThird = document.querySelector(".service-credit");

function clickFirst() {
    serviceBtnFirst.classList.add("service-nav-current");
    serviceItemFirst.classList.add("service-item-active");

    serviceBtnSecond.classList.remove("service-nav-current");
    serviceItemSecond.classList.remove("service-item-active");

    serviceBtnThird.classList.remove("service-nav-current");
    serviceItemThird.classList.remove("service-item-active");
}

function clickSecond() {
    serviceBtnFirst.classList.remove("service-nav-current");
    serviceItemFirst.classList.remove("service-item-active");

    serviceBtnSecond.classList.add("service-nav-current");
    serviceItemSecond.classList.add("service-item-active");

    serviceBtnThird.classList.remove("service-nav-current");
    serviceItemThird.classList.remove("service-item-active");
}

function clickThird() {
    serviceBtnFirst.classList.remove("service-nav-current");
    serviceItemFirst.classList.remove("service-item-active");

    serviceBtnSecond.classList.remove("service-nav-current");
    serviceItemSecond.classList.remove("service-item-active");

    serviceBtnThird.classList.add("service-nav-current");
    serviceItemThird.classList.add("service-item-active");
}

// bullets script
var sliderFirst = document.querySelector(".first-slide");
var sliderSecond = document.querySelector(".second-slide");
var sliderThird = document.querySelector(".third-slide");

var bulletBtnFirst = document.querySelector(".bullets-button:nth-of-type(1)");
var bulletBtnSecond = document.querySelector(".bullets-button:nth-of-type(2)");
var bulletBtnThird = document.querySelector(".bullets-button:nth-of-type(3)");

function bulletFirst() {
    sliderFirst.classList.add("slider-item-active");
    bulletBtnFirst.classList.add("bullets-button-current");

    sliderSecond.classList.remove("slider-item-active");
    bulletBtnSecond.classList.remove("bullets-button-current");

    sliderThird.classList.remove("slider-item-active");
    bulletBtnThird.classList.remove("bullets-button-current");
}

function bulletSecond() {
    sliderFirst.classList.remove("slider-item-active");
    bulletBtnFirst.classList.remove("bullets-button-current");

    sliderSecond.classList.add("slider-item-active");
    bulletBtnSecond.classList.add("bullets-button-current");

    sliderThird.classList.remove("slider-item-active");
    bulletBtnThird.classList.remove("bullets-button-current");
}

function bulletThird() {
    sliderFirst.classList.remove("slider-item-active");
    bulletBtnFirst.classList.remove("bullets-button-current");

    sliderSecond.classList.remove("slider-item-active");
    bulletBtnSecond.classList.remove("bullets-button-current");

    sliderThird.classList.add("slider-item-active");
    bulletBtnThird.classList.add("bullets-button-current");
}

// slider script
function nextSlide() {
    if (sliderFirst.classList.contains("slider-item-active")) {
        sliderSecond.classList.add("slider-item-active");
        bulletBtnSecond.classList.add("bullets-button-current");

        sliderFirst.classList.remove("slider-item-active");
        bulletBtnFirst.classList.remove("bullets-button-current");
    }

    else if (sliderSecond.classList.contains("slider-item-active")) {
        sliderThird.classList.add("slider-item-active");
        bulletBtnThird.classList.add("bullets-button-current");

        sliderSecond.classList.remove("slider-item-active");
        bulletBtnSecond.classList.remove("bullets-button-current");
    }

    else if (sliderThird.classList.contains("slider-item-active")) {
        sliderFirst.classList.add("slider-item-active");
        bulletBtnFirst.classList.add("bullets-button-current");

        sliderThird.classList.remove("slider-item-active");
        bulletBtnThird.classList.remove("bullets-button-current");
    }
}

function prevSlide() {
    if (sliderFirst.classList.contains("slider-item-active")) {
        sliderThird.classList.add("slider-item-active");
        bulletBtnThird.classList.add("bullets-button-current");

        sliderFirst.classList.remove("slider-item-active");
        bulletBtnFirst.classList.remove("bullets-button-current");
    }

    else if (sliderSecond.classList.contains("slider-item-active")) {
        sliderFirst.classList.add("slider-item-active");
        bulletBtnFirst.classList.add("bullets-button-current");

        sliderSecond.classList.remove("slider-item-active");
        bulletBtnSecond.classList.remove("bullets-button-current");
    }

    else if (sliderThird.classList.contains("slider-item-active")) {
        sliderSecond.classList.add("slider-item-active");
        bulletBtnSecond.classList.add("bullets-button-current");

        sliderThird.classList.remove("slider-item-active");
        bulletBtnThird.classList.remove("bullets-button-current");
    }
}