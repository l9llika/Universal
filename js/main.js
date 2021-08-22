$(document).ready(function() {
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  effect: "fade",
})

  var tabsItem = $(".tabs-item__block")
  var contentItem = $(".tabs-content__block")

  tabsItem.on("click", function(event){
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('tabs-item__block--active')
    contentItem.removeClass('tabs-content__block--active')
    $(activeContent).addClass('tabs-content__block--active');
    $(this).addClass('tabs-item__block--active');

  });

  var tabsMobileItem = $(".tabs-mobileItem__block")
  var contentItemMobile = $(".tabs-mobileContent__block")

  tabsMobileItem.on("click", function(event){
    var activeContent = $(this).attr("data-target");
    tabsMobileItem.removeClass('tabs-mobileItem__block--active')
    contentItemMobile.removeClass('tabs-mobileContent__block--active')
    $(activeContent).addClass('tabs-mobileContent__block--active');
    $(this).addClass('tabs-mobileItem__block--active');
  });

  var menuButton = document.querySelector(".navbar-button")
  menuButton.addEventListener('click', function () {
    document
    .querySelector(".navbar-menu")
    .classList.toggle('navbar-menu--visible');
  });


    var bookmarkButton = document.querySelector(".bottomPages-articles__block-data_bookmark")
    bookmarkButton.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data_bookmark")
    .classList.toggle('bottomPages-articles__block-data_bookmark--red');
  });

  var bookmarkButton2 = document.querySelector(".bottomPages-articles__block-data_bookmark2")
    bookmarkButton2.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data_bookmark2")
    .classList.toggle('bottomPages-articles__block-data_bookmark2--red');
  });

  var bookmarkButton3 = document.querySelector(".bottomPages-articles__block-data_bookmark3")
    bookmarkButton3.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data_bookmark3")
    .classList.toggle('bottomPages-articles__block-data_bookmark3--red');
  });

  var bookmarkButton4 = document.querySelector(".bottomPages-articles__block-data_bookmark4")
    bookmarkButton4.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data_bookmark4")
    .classList.toggle('bottomPages-articles__block-data_bookmark4--red');
  });

  var bookmarkButton5 = document.querySelector(".bottomPages-articles__block-data_bookmark5")
    bookmarkButton5.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data_bookmark5")
    .classList.toggle('bottomPages-articles__block-data_bookmark5--red');
  });

  var bookmarkButton6 = document.querySelector(".bottomPages-articles__block-data_bookmark6")
    bookmarkButton6.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data_bookmark6")
    .classList.toggle('bottomPages-articles__block-data_bookmark6--red');
  });
});

  var commentButton = document.querySelector(".commentaries-load")
  commentButton.addEventListener('click', function () {
    document
    .querySelector(".commentaries-sheet_block--hidden")
    .classList.toggle('commentaries-sheet_block--visible');    
  });

  var loadButton = document.querySelector(".commentaries-load")
  loadButton.addEventListener('click', function () {
    document
    .querySelector(".commentaries-load")
    .classList.toggle('commentaries-load--hidden');    
  });

  var menuButtonLight = document.querySelector(".navbar-button--light")
  menuButtonLight.addEventListener('click', function () {
    document
    .querySelector(".navbar-menu")
    .classList.toggle('navbar-menu--visible');
  });
