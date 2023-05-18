(function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    Cookies
    -------------------------------------------------------------------------------*/
    function setCookie(cname, cvalue, days) {
  
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = cname + "=" + cvalue + expires + "; path=/";
    }
  
    //Return a particular cookie
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  
    //Checks if a cookie exists
    function checkCookie(cookieToCheck) {
      var cookie = getCookie(cookieToCheck);
      if (cookie != "") {
        return true;
      }
      return false;
    }
  
    //Delet an existing cookie
    function deleteCookie(name) {
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  
    /*-------------------------------------------------------------------------------
    Newsletter popup close and set cookie
    -------------------------------------------------------------------------------*/
    $(".newsletter-popup-trigger").on('click', function(){
      setCookie('newsletter_popup_viewed', 'true');
      $(".sigma_popup").removeClass('show');
    });
  
    $('#sigma_popup-newsletter').on('hidden.bs.modal', function () {
      setCookie('newsletter_popup_viewed', 'true');
    });
  
    /*-------------------------------------------------------------------------------
       Mobile Nav and Toggles
    -------------------------------------------------------------------------------*/
    $(".aside-trigger").on('click', function() {
      $("body").toggleClass('aside-open');
    });
  
    $(".aside-trigger-right").on('click', function() {
      $("body").toggleClass('aside-right-open');
    });
  
    $(".sigma_aside .menu-item-has-children > a").on('click', function(e) {
      var submenu = $(this).next(".sub-menu");
      e.preventDefault();
  
      submenu.slideToggle(200);
    });
  
    /*-------------------------------------------------------------------------------
    Search Trigger
    -------------------------------------------------------------------------------*/
    $(".search-trigger").on('click', function(e) {
      $(".search-form-wrapper").toggleClass('open');
    });
  
    /*-------------------------------------------------------------------------------
    Tooltips
    -------------------------------------------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();
  
    /*-------------------------------------------------------------------------------
    Sticky Header
    -------------------------------------------------------------------------------*/
    var header = $(".can-sticky");
    var headerHeight = header.innerHeight();
  
    function doSticky() {
  
      if (window.pageYOffset > headerHeight) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
  
    }
    doSticky();
  
    /*-------------------------------------------------------------------------------
    Team Socials Trigger
    -------------------------------------------------------------------------------*/
    $("a.trigger-team-socials").on('click', function(e) {
      e.preventDefault();
      $(this).closest('.sigma_social-icons').toggleClass('visible');
    });
  
    /*-------------------------------------------------------------------------------
    Back to top
    -------------------------------------------------------------------------------*/
    function stickBackToTop() {
      if (window.pageYOffset > 400) {
        $('.sigma_top').addClass('active');
      } else {
        $('.sigma_top').removeClass('active');
      }
    }
    stickBackToTop();
  
    $('body').on('click', '.sigma_top', function() {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  
    /*-------------------------------------------------------------------------------
    Progress bar on view
    -------------------------------------------------------------------------------*/
    $(".sigma_progress").each(function() {
      var progressBar = $(this).find(".progress-bar");
      var progressCount = $(this).find(".sigma_progress-count");
      $(progressBar).one('inview', function(event, isInView) {
        if (isInView) {
          $(progressBar).animate({
            width: $(progressBar).attr("aria-valuenow") + "%"
          }, function() {
            $(progressCount).animate({
              left: $(progressBar).attr("aria-valuenow") + "%",
              opacity: 1
            });
          });
        }
      });
    });
  
    $(".sigma_progress-round").each(function() {
      var animateTo = $(this).data('to'),
        $this = $(this);
      $this.one('inview', function(event, isInView) {
        if (isInView) {
          $this.css({'stroke-dashoffset': animateTo});
        }
      });
    });
  
    /*-------------------------------------------------------------------------------
    Magnific Popup
    -------------------------------------------------------------------------------*/
    $('.popup-video').magnificPopup({type: 'iframe'});
    $('.gallery-thumb').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  
    /*-------------------------------------------------------------------------------
    ion Range Sliders (Price filter)
    -------------------------------------------------------------------------------*/
    $(".js-range-slider").ionRangeSlider();
  
    /*-------------------------------------------------------------------------------
    Masonry
    -------------------------------------------------------------------------------*/
    $('.masonry').imagesLoaded(function() {
      var isotopeContainer = $('.masonry');
      isotopeContainer.isotope({itemSelector: '.masonry-item'});
    });
  
    /*------------------------------------------------------------------------------
    Isotope
    ------------------------------------------------------------------------------*/
    var $isotopeGrid;
    $('.sigma_isotope-filter').imagesLoaded(function() {
      $isotopeGrid = $('.sigma_isotope-filter').isotope({
        itemSelector: '.col-lg-4',
        percentPosition: true,
        masonry: {
          columnWidth: '.col-lg-4'
        }
      });
    });
  
    $('.sigma_isotope-filter-items').on('click', '.sigma_isotope-trigger', function() {
      var filterValue = $(this).attr('data-filter');
      $isotopeGrid.isotope({filter: filterValue});
    });
  
    $('.sigma_isotope-trigger').on('click', function(e) {
      $(this).closest('.sigma_isotope-filter-items').find('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  
    /*-------------------------------------------------------------------------------
    Counter Js
  -------------------------------------------------------------------------------*/
  
    $(".counter").each(function() {
      var $this = $(this);
      $this.one('inview', function(event, isInView) {
        if (isInView) {
          $this.countTo({speed: 2000});
        }
      });
    });
  
    /*-------------------------------------------------------------------------------
    Password Toggle Js
    -------------------------------------------------------------------------------*/
    $(".password-toggle").on('click', function() {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $(this).next(),
        inputType = input.attr("type") == "password"
          ? 'text'
          : 'password';
  
      input.attr("type", inputType);
    });
  
    /*-------------------------------------------------------------------------------
    Instagram Feed
    -------------------------------------------------------------------------------*/
    $(window).on('load',function(){
    $('.sigma_instagram').each(function() {
      var $this = $(this);
      $.instagramFeed({
        'username': $this.data('username'),
        'container': '#' + $this.attr('id'),
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'display_captions': false,
        'styling': false,
        'items': parseInt($this.data('items')),
        'items_per_row': parseInt($this.data('items_per_row')),
        'lazy_load': true
      });
    });
    });
  
    /*-------------------------------------------------------------------------------
    smooth scroll
    -------------------------------------------------------------------------------*/
  
    $('.detail-menu-list .nav-item .nav-link').on( 'click', function(event) {
        var target = $(this.hash);
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 20
          }, 1500);
          return false;
        }
    });
  
    /*-------------------------------------------------------------------------------
     Banner Slider
    -------------------------------------------------------------------------------*/
    $(".sigma_banner-slider").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
  
    $(".sigma_banner-slider-2").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: false
          }
        }
      ]
    });
  
    $(".sigma_banner-slider-3").slick({
  
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      centerMode: false,
      centerPadding: 0,
      vertical: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false
          }
        }
      ]
    });
  
    $(".sigma_banner-slider-4").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      asNavFor: '.banner-image-slider'
    });
  
    $(".banner-image-slider").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      asNavFor: '.sigma_banner-slider-4'
    });
  
    $(".sigma_banner-slider-5").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      asNavFor: '.sigma_banner-thumbnails'
    });
  
    $(".sigma_banner-thumbnails").slick({
  
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      centerMode: false,
      centerPadding: 0,
      focusOnSelect: true,
      asNavFor: '.sigma_banner-slider-5',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  
    /*-------------------------------------------------------------------------------
    Gallery Format Slider
    -------------------------------------------------------------------------------*/
    $(".post-format-gallery .sigma_post-thumb").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false
          }
        }
      ]
    });
  
    /*-------------------------------------------------------------------------------
    Causes Slider
    -------------------------------------------------------------------------------*/
    $(".sigma_portfolio-slider").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      vertical: true,
      verticalScrolling: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false
          }
        }
      ]
    });
  
    $(".sigma_portfolio-slider-2").slick({
  
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $(".sigma_portfolio-slider-3").slick({
  
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: $('.sigma_custom-arrows .slick-prev'),
      nextArrow: $('.sigma_custom-arrows .slick-next'),
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $(".sigma_portfolio-slider-4").slick({
  
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: $('.sigma_custom-arrows .slick-prev'),
      nextArrow: $('.sigma_custom-arrows .slick-next'),
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $(".sigma_portfolio-slider-5").slick({
  
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: $('.sigma_custom-arrows .slick-prev'),
      nextArrow: $('.sigma_custom-arrows .slick-next'),
      autoplay: true,
      centerMode: false,
      centerPadding: 0,
      infinite: false,
      responsive: [
         {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $(".sigma_portfolio-slider-6").slick({
  
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      centerMode: false,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $(".sigma_portfolio-slider-7").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: $('.sigma_custom-arrows .slick-prev'),
      nextArrow: $('.sigma_custom-arrows .slick-next'),
      autoplay: true,
      centerMode: false,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
          }
        }
      ]
    });
  
    $(".sigma_portfolio-slider-8").slick({
  
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: $('.sigma_custom-arrows .slick-prev'),
      nextArrow: $('.sigma_custom-arrows .slick-next'),
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
  
    /*-------------------------------------------------------------------------------
    Testimonial Sliders
    -------------------------------------------------------------------------------*/
  
    $(".sigma_testimonial-slider").slick({
  
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    });
  
    $(".sigma_testimonial-slider-2").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      asNavFor: '.slider-nav-thumbnails'
    });
  
    $(".slider-nav-thumbnails").slick({
  
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true,
      asNavFor: '.sigma_testimonial-slider-2'
    });
  
    $(".sigma_testimonial-slider-3").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
  
    $(".sigma_testimonial-slider-4").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    /*-------------------------------------------------------------------------------
    Info Box Sliders
    -------------------------------------------------------------------------------*/
    $(".sigma_info-slider").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      asNavFor: '.sigma_info-image-slider'
    });
  
    $(".sigma_info-image-slider").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true,
      asNavFor: '.sigma_info-slider'
    });
  
    $(".sigma_info-image-slider-2").slick({
  
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true
    });
  
    /*-------------------------------------------------------------------------------
    Team Slider
    -------------------------------------------------------------------------------*/
  
    $(".sigma_team-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: $('.sigma_custom-arrows .slick-prev'),
      nextArrow: $('.sigma_custom-arrows .slick-next'),
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $(".sigma_team-slider-2").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      centerMode: true,
      centerPadding: 0,
      responsive: [
      {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4
          }
        },
      {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    /*-------------------------------------------------------------------------------
     Instagram Slider
    -------------------------------------------------------------------------------*/
  
    $(".sigma_instagram-slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: false,
      centerMode: true,
      centerPadding: 0,
      responsive: [
      {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  
    /*-------------------------------------------------------------------------------
    on scroll functions
    -------------------------------------------------------------------------------*/
    $(window).on('scroll', function() {
  
      // Sticky header
      doSticky();
  
      // Back to top
      stickBackToTop();
  
    });
  
    /*-------------------------------------------------------------------------------
    on load functions
    -------------------------------------------------------------------------------*/
    $(window).on('load', function() {
  
      // Preloader
      $('.sigma_preloader').addClass('hidden');
  
      // Newsletter popup
      if(!checkCookie('newsletter_popup_viewed')){
        setTimeout(function(){
          $("#sigma_popup-newsletter").modal('show');
          $(".sigma_popup").addClass('show');
        }, 3000);
      }
  
    });
  
  })(jQuery);
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  (function($) {
    'use strict';
  
    /*-------------------------------------------------------------------------------
    One page template functionality
    -------------------------------------------------------------------------------*/
    $(".navbar-nav a").on('click', function() {
      var $this = $(this);
      $('html, body').animate({
        scrollTop: $($this.attr('href')).offset().top
      }, 2000);
    });
  
  })(jQuery);
  
  