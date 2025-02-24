// var player1;
// function onYouTubeIframeAPIReady() {
// 	player1 = new YT.Player('youtube1', {
// 		width: '1160',
// 		height: '660',
// 		videoId: 'M7lc1UVf-VE',
// 		playerVars: {
// 			rel: 0
// 		}
// 	});
// }

$(function () {
  $(".loading .img").addClass("scroll_on");

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href"),
      target = $(href == "#" || href == "" ? "html" : href),
      position = target.offset().top,
      ww = $(window).width(),
      hh = 0;
    if (href === "#products") {
      hh = 100;
    }
    if (href === "#development_story") {
      hh = 100;
    }
    $("html,body")
      .animate({ scrollTop: position - hh }, "slow", "swing")
      .promise();
    $("#header").removeClass("on");
    return false;
  });

  $("#nav_open").on("click", function () {
    $("#header").toggleClass("on");
    return false;
  });

  $("#ac_wrap h4").on("click", function () {
    $(this).parents("li").toggleClass("on");
    $(this).next().slideToggle();
  });

  $("#modal_on").on("click", function () {
    var video = document.getElementById("modal_movie");
    $("#modal").addClass("on");
    video.play();
  });

  $("#modal .close").on("click", function () {
    var video = document.getElementById("modal_movie");
    $("#modal").removeClass("on");
    video.pause();
  });
});
$(window).on("load scroll resize", function () {
  var ws = $(window).scrollTop(),
    wh = $(window).height(),
    sch = wh / 1.5;
  if (ws > 250) {
    $(".sec_insta").addClass("on");
  } else {
    $(".sec_insta").removeClass("on");
  }
  $(".scroll_func").each(function (i) {
    var ts = $(this).offset().top;
    if (ws + sch > ts) {
      $(this).addClass("scroll_on");
    }
    mv_header = $(".sec1").offset().top;
    if (mv_header < ws) {
      $("#header").addClass("logo_on");
    } else {
      $("#header").removeClass("logo_on");
    }
  });
});
$(window).on("load", function () {
  var ww = $(window).outerWidth(),
    wh = $(window).outerHeight(),
    ws = $(window).scrollTop() - 20;
  if (ws > 105) {
    if (ww < 1081) {
      var hh = $("#header").outerHeight();
      $(window).scrollTop(ws - hh);
    } else {
      $(window).scrollTop(ws - 80);
    }
  }
  setTimeout(() => {
    $("#wrapper").addClass("loaded");
    $(".mv,.sec_insta").addClass("scroll_on");
  }, "1500");
});

$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  let bgPosition = scrollTop / 25;
  if (bgPosition) {
    $(".scroll_img .bg").attr(
      "style",
      "transform:translateY(calc(50% - " + bgPosition + "px))"
    );
  }
});

// 監聽瀏覽器的滾動事件
document.addEventListener("scroll", function () {
  // 獲取 header 元素
  const header = document.getElementById("header");

  // 檢查是否為手機版（螢幕寬度小於 768px）
  if (window.innerWidth < 768) {
    // 檢查滾動距離是否超過 50 像素
    if (window.scrollY > 50) {
      // 如果滾動超過 50 像素，為 header 添加 'scrolled' 類別
      header.classList.add("scrolled");
    } else {
      // 如果滾動回到頂部，移除 'scrolled' 類別
      header.classList.remove("scrolled");
    }
  } else {
    // 桌面版（寬度 >= 768px），確保移除 'scrolled' 類別
    header.classList.remove("scrolled");
  }
});

// 漢堡選單點擊時，強制為 header 添加白色背景（僅限手機版）
const navButton = document.getElementById("nav_open");

navButton.addEventListener("click", function () {
  // 獲取 header 元素
  const header = document.getElementById("header");

  // 檢查是否為手機版（螢幕寬度小於 768px）
  if (window.innerWidth < 768) {
    // 確保打開漢堡選單時，header 背景為白色
    header.classList.add("scrolled");
  }
});
