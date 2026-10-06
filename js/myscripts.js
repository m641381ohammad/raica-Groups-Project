$(document).ready(function () {

    $(".example-tab-btns button").on("click", function (e) {
        let data = $(e.currentTarget).attr("data");
        $(".tab ").removeClass("show")
        $(".tab[data-target='" + data + "']").addClass("show");
        $(".example-tab-btns button").removeClass("active-tab");
        $(".example-tab-btns button[data='" + data + "']").addClass("active-tab");
    });

    $(".service-item .gitarMenuBtn").on("click", function (e) {
        let data = $(e.currentTarget).attr("data");
        $(".service-content .tab-serviece ").removeClass("show-service")
        $(".service-content .tab-serviece[data-target='" + data + "']").addClass("show-service");
        $(".service-item .gitarMenuBtn").removeClass("active-service");
        $(".service-item .gitarMenuBtn[data='" + data + "']").addClass("active-service");
    });


    $('.example-slieder').slick({
        dots: false,
        infinite: false,
        speed: 300,
        // slidesToShow: 2,
        // slidesToScroll: 4,
        rtl: true,
        autoplay: true,
        // centerMode: true,          
        // centerPadding: '60px',
        responsive: [
            //   {
            //     breakpoint: 1024,
            //     settings: {
            //       slidesToShow: 3,
            //       slidesToScroll: 3,
            //       infinite: true,
            //       dots: true
            //     }
            //   },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToScroll: 2,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // ****************Start Music Page********************

    const player = new Plyr('#player', {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume']
    });

    // ****************End Music Page********************

    // ****************Start video Player Page********************

    const playerr = new Plyr('video', { captions: { active: true } });
    window.playerr = playerr;


    // ****************End video Player Page********************


});
