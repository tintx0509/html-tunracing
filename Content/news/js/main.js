(function ($) {
  "use strict";

  let x = document.getElementsByClassName("woodmart-swatch");
  if (x.length > 0) {
    x[0].click();
  }

  let DIRECTION = null;

  function direction() {
    if (DIRECTION === null) {
      DIRECTION = getComputedStyle(document.body).direction;
    }

    return DIRECTION;
  }

  function isRTL() {
    return direction() === 'rtl';
  }

  $(function () {
    $('.product').each(function () {
      const gallery = $(this).find('.product-gallery');

      if (gallery.length > 0) {
        initProductGallery(gallery[0], gallery.data('layout'));
      }
    });
  });

  /*
  // .product-tabs
  */
  $(function () {
    $('.product-tabs').each(function (i, element) {
      $('.product-tabs__list', element).on('click', '.product-tabs__item a', function (event) {
        event.preventDefault();

        const tab = $(this).closest('.product-tabs__item');
        const content = $('.product-tabs__pane' + $(this).attr('href'), element);

        if (content.length) {
          $('.product-tabs__item').removeClass('product-tabs__item--active');
          tab.addClass('product-tabs__item--active');

          $('.product-tabs__pane').removeClass('product-tabs__pane--active');
          content.addClass('product-tabs__pane--active');
        }
      });

      const currentTab = $('.product-tabs__item--active', element);
      const firstTab = $('.product-tabs__item:first', element);

      if (currentTab.length) {
        currentTab.trigger('click');
      } else {
        firstTab.trigger('click');
      }
    });
  });

  /*
  // .block-products-carousel
  */
  $(function () {
    const carouselOptions = {
      'grid-4': {
        items: 4,
        responsive: {
          1400: {items: 4},
          1200: {items: 3},
          992: {items: 3, margin: 16},
          768: {items: 3, margin: 16},
          576: {items: 2, margin: 16},
          460: {items: 2, margin: 16},
          0: {items: 1},
        }
      },
      'grid-4-sidebar': {
        items: 4,
        responsive: {
          1400: {items: 4},
          1200: {items: 3},
          992: {items: 3, margin: 16},
          768: {items: 3, margin: 16},
          576: {items: 2, margin: 16},
          460: {items: 2, margin: 16},
          0: {items: 1},
        }
      },
      'grid-5': {
        items: 5,
        responsive: {
          1400: {items: 5},
          1200: {items: 4},
          992: {items: 4, margin: 16},
          768: {items: 3, margin: 16},
          576: {items: 2, margin: 16},
          460: {items: 2, margin: 16},
          0: {items: 1},
        }
      },
      'grid-6': {
        items: 6,
        margin: 16,
        responsive: {
          1400: {items: 6},
          1200: {items: 4},
          992: {items: 4, margin: 16},
          768: {items: 3, margin: 16},
          576: {items: 2, margin: 16},
          460: {items: 2, margin: 16},
          0: {items: 1},
        }
      },
      'horizontal': {
        items: 4,
        responsive: {
          1400: {items: 4, margin: 14},
          992: {items: 3, margin: 14},
          768: {items: 2, margin: 14},
          0: {items: 1, margin: 14},
        }
      },
      'horizontal-sidebar': {
        items: 3,
        responsive: {
          1400: {items: 3, margin: 14},
          768: {items: 2, margin: 14},
          0: {items: 1, margin: 14},
        }
      },
      'grid-4-brand': {
        items: 5,
        margin: 32,
        responsive: {
          1400: {items: 5},
          1200: {items: 5},
          992: {items: 4, margin: 16},
          768: {items: 4, margin: 16},
          576: {items: 2, margin: 16},
          460: {items: 2, margin: 16},
          0: {items: 2},
        }
      },
    };

    $('.block-products-carousel').each(function () {
      const block = $(this);
      const layout = $(this).data('layout');
      const owlCarousel = $(this).find('.owl-carousel');

      owlCarousel.owlCarousel(Object.assign({}, {
        dots: false,
        margin: 20,
        loop: true,
        rtl: isRTL()
      }, carouselOptions[layout]));

      $(this).find('.section-header__arrow--prev').on('click', function () {
        owlCarousel.trigger('prev.owl.carousel', [500]);
      });
      $(this).find('.section-header__arrow--next').on('click', function () {
        owlCarousel.trigger('next.owl.carousel', [500]);
      });

      let cancelPreviousGroupChange = function () {
      };

      $(this).find('.section-header__groups-button').on('click', function () {
        const carousel = block.find('.block-products-carousel__carousel');

        if ($(this).is('.section-header__groups-button--active')) {
          return;
        }

        cancelPreviousGroupChange();

        $(this).closest('.section-header__groups').find('.section-header__groups-button').removeClass('section-header__groups-button--active');
        $(this).addClass('section-header__groups-button--active');

        carousel.addClass('block-products-carousel__carousel--loading');

        // timeout ONLY_FOR_DEMO! you can replace it with an ajax request
        let timer;
        timer = setTimeout(function () {
          let items = block.find('.owl-carousel .owl-item:not(".cloned") .block-products-carousel__column');

          /*** this is ONLY_FOR_DEMO! / start */
          /**/
          const itemsArray = items.get();
          /**/
          const newItemsArray = [];
          /**/
          /**/
          while (itemsArray.length > 0) {
            /**/
            const randomIndex = Math.floor(Math.random() * itemsArray.length);
            /**/
            const randomItem = itemsArray.splice(randomIndex, 1)[0];
            /**/
            /**/
            newItemsArray.push(randomItem);
            /**/
          }
          /**/
          items = $(newItemsArray);
          /*** this is ONLY_FOR_DEMO! / end */

          block.find('.owl-carousel')
            .trigger('replace.owl.carousel', [items])
            .trigger('refresh.owl.carousel')
            .trigger('to.owl.carousel', [0, 0]);

          $('.product-card__action--quickview', block).on('click', function () {
            quickview.clickHandler.apply(this, arguments);
          });

          carousel.removeClass('block-products-carousel__carousel--loading');
        }, 1000);
        cancelPreviousGroupChange = function () {
          // timeout ONLY_FOR_DEMO!
          clearTimeout(timer);
          cancelPreviousGroupChange = function () {
          };
        };
      });
    });
  });

  /*
  // .block-posts-carousel
  */
  $(function () {
    const defaultOptions = {
      dots: false,
      margin: 20,
      loop: true,
      rtl: isRTL()
    };
    const options = {
      grid: {
        items: 4,
        responsive: {
          1400: {items: 3, margin: 20},
          1200: {items: 3, margin: 20},
          992: {items: 2, margin: 16},
          768: {items: 2, margin: 16},
          0: {items: 1, margin: 16},
        },
      },
      list: {
        items: 2,
        responsive: {
          1400: {items: 2, margin: 20},
          992: {items: 2, margin: 16},
          0: {items: 1, margin: 16},
        },
      },
    };

    $('.block-posts-carousel').each(function () {
      const owlCarousel = $(this).find('.owl-carousel');
      const layout = $(this).data('layout');

      owlCarousel.owlCarousel(Object.assign({}, defaultOptions, options[layout]));

      $(this).find('.section-header__arrow--prev').on('click', function () {
        owlCarousel.trigger('prev.owl.carousel', [500]);
      });
      $(this).find('.section-header__arrow--next').on('click', function () {
        owlCarousel.trigger('next.owl.carousel', [500]);
      });
    });
  });


  /*
  // .block-zone
  */
  $(function () {
    $('.block-zone').each(function () {
      const owlCarousel = $(this).find('.owl-carousel');

      owlCarousel.owlCarousel({
        dots: false,
        margin: 20,
        loop: true,
        items: 3,
        rtl: isRTL(),
        responsive: {
          1400: {items: 3, margin: 20},
          992: {items: 3, margin: 16},
          460: {items: 2, margin: 16},
          0: {items: 1},
        }
      });

      $(this).find('.block-zone__arrow--prev').on('click', function () {
        owlCarousel.trigger('prev.owl.carousel', [500]);
      });
      $(this).find('.block-zone__arrow--next').on('click', function () {
        owlCarousel.trigger('next.owl.carousel', [500]);
      });

      let cancelPreviousTabChange = function () {
      };

      $(this).find('.block-zone__tabs-button').on('click', function () {
        const block = $(this).closest('.block-zone');
        const carousel = block.find('.block-zone__carousel');

        if ($(this).is('.block-zone__tabs-button--active')) {
          return;
        }

        cancelPreviousTabChange();

        $(this).closest('.block-zone__tabs').find('.block-zone__tabs-button').removeClass('block-zone__tabs-button--active');
        $(this).addClass('block-zone__tabs-button--active');

        carousel.addClass('block-zone__carousel--loading');

        // timeout ONLY_FOR_DEMO! you can replace it with an ajax request
        let timer;
        timer = setTimeout(function () {
          let items = block.find('.owl-carousel .owl-item:not(".cloned") .block-zone__carousel-item');

          /*** this is ONLY_FOR_DEMO! / start */
          /**/
          const itemsArray = items.get();
          /**/
          const newItemsArray = [];
          /**/
          /**/
          while (itemsArray.length > 0) {
            /**/
            const randomIndex = Math.floor(Math.random() * itemsArray.length);
            /**/
            const randomItem = itemsArray.splice(randomIndex, 1)[0];
            /**/
            /**/
            newItemsArray.push(randomItem);
            /**/
          }
          /**/
          items = $(newItemsArray);
          /*** this is ONLY_FOR_DEMO! / end */

          block.find('.owl-carousel')
            .trigger('replace.owl.carousel', [items])
            .trigger('refresh.owl.carousel')
            .trigger('to.owl.carousel', [0, 0]);

          $('.product-card__action--quickview', block).on('click', function () {
            quickview.clickHandler.apply(this, arguments);
          });

          carousel.removeClass('block-zone__carousel--loading');
        }, 1000);
        cancelPreviousTabChange = function () {
          // timeout ONLY_FOR_DEMO!
          clearTimeout(timer);
          cancelPreviousTabChange = function () {
          };
        };
      });
    });
  });
  /*
  // .vehicle-form
  */
  $(function () {
    $('.vehicle-form__item--select select').on('change', function () {
      const item = $(this).closest('.vehicle-form__item--select');

      if ($(this).val() !== 'none') {
        item.find('~ .vehicle-form__item--select:eq(0) s``elect').prop('disabled', false).val('none');
        item.find('~ .vehicle-form__item--select:gt(0) select').prop('disabled', true).val('none');
      } else {
        item.find('~ .vehicle-form__item--select select').prop('disabled', true).val('none');
      }

      item.find('~ .vehicle-form__item--select select').trigger('change.select2');
    });
  });


  $(function () {
    $('#vehicle-form select[name=brand]').on('change', function () {
      let brand = $(this).val();
      let modelSelect = $('#vehicle-form select[name=model]');

      $.ajax({
        type : "get",
        dataType : "json",
        url : ajaxurl,
        data : {
          action: "get_model",
          brand: brand,
        },
        beforeSend: function(){
          modelSelect.parent().find('.select2-selection--single').addClass('loading');
        },
        success: function(response) {

          if (response.status) {
            modelSelect.prop('disabled', false).trigger('change.select2');

            modelSelect.select2('destroy');
            modelSelect.empty();
            let data = response.data;

            modelSelect.append('<option value="none">Dòng xe</option>');
            data.forEach(function(item) {
              modelSelect.append('<option value="'+item.slug+'">'+item.name+'</option>');
            });

            modelSelect.select2();


          } else {
            modelSelect.empty().trigger('change');
            modelSelect.append('<option value="none">Dòng xe</option>');
            modelSelect.select2();
          }

        },
        error: function( jqXHR, textStatus, errorThrown ){

          console.log( 'The following error occured: ' + textStatus, errorThrown );
        }
      });
    });



    $('#vehicle-form select[name=model]').on('change', function () {
      let model = $(this).val();
      let modelSelect = $('#vehicle-form select[name=year]');

      if (model != 'none') {
        $.ajax({
          type : "get",
          dataType : "json",
          url : ajaxurl,
          data : {
            action: "get_year",
            model: model,
          },
          beforeSend: function(){
            modelSelect.parent().find('.select2-selection--single').addClass('loading');
          },
          success: function(response) {
            modelSelect.val('').trigger('change');

            if (response.status) {
              modelSelect.prop('disabled', false).trigger('change.select2');

              modelSelect.select2('destroy');
              modelSelect.empty();
              let data = response.data;

              modelSelect.append('<option value="none">Đời xe</option>');
              data.forEach(function(item) {
                modelSelect.append('<option value="'+item.slug+'">'+item.name+'</option>');
              });

              modelSelect.select2();

            }  else {
              modelSelect.empty().trigger('change');
              modelSelect.append('<option value="none">Đời xe</option>');
              modelSelect.select2();
            }

          },
          error: function( jqXHR, textStatus, errorThrown ){

            console.log( 'The following error occured: ' + textStatus, errorThrown );
          }
        });
      }
    });

    $("#vehicle-form").submit(function(e){
      e.preventDefault();

      let brand = $('#vehicle-form select[name=brand]').val();
      let model = $('#vehicle-form select[name=model]').val();
      let year = $('#vehicle-form select[name=year]').val();

      if (!brand || brand == 'none') {
        return;
      }

      let search = "";
      if (model != 'none') {
        search += '&filter_dong-xe=' + model;
      }

      if (year != 'none') {
        search += '&filter_doi-xe='+year;
      }

      window.location.href = '/products?filter_thuong-hieu='+brand + search;
      // window.location.href = '/products?filter_thuong-hieu='+brand+'&filter_dong-xe=' +model+ '&filter_doi-xe='+year;
    });

    $('#vehicle-form select[name=year] .select2-search-field input').addClass("select2-active");

    // $('.block-finder__form-control--select select').on('change', function () {
    //   const item = $(this).closest('.block-finder__form-control--select');
    //
    //   if ($(this).val() !== 'none') {
    //     item.find('~ .block-finder__form-control--select:eq(0) select').prop('disabled', false).val('none');
    //     item.find('~ .block-finder__form-control--select:gt(0) select').prop('disabled', true).val('none');
    //   } else {
    //     item.find('~ .block-finder__form-control--select select').prop('disabled', true).val('none');
    //   }
    //
    //   item.find('~ .block-finder__form-control--select select').trigger('change.select2');
    // });
  });

  $('.block-finder__slide').owlCarousel({
    dots: false,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout:5000,
    smartSpeed: 650,
    autoplayHoverPause: true,
    nav:true,
  });
})(jQuery);
