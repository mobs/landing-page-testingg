toastr.options = {
    "closeButton": true,
    "debug": false,
    "positionClass": "toast-top-right",
    "onclick": null,
    "showDuration": "1000",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "swing",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
jQuery(function () {
    
    // Disclaimer popup opens on page load
    //$('.ppOverlay').show();
    //$('#disclaimer').fadeIn();
    // disclaimer scrollbar js
    //$('.temp10-discl').jScrollPane({
    //    resizeSensor: !0,
    //    resizeSensorDelay: 100,
    //    autoReinitialise: !0
    //}); 

    Fancybox.bind("[data-fancybox]", {
        Thumbs: false,
    });

    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 0,
        throttleDelay: 0,
        offset: 50,
        delay: 0,
        duration: 700,
        easing: 'linear',
        once: false,
        mirror: true,
        anchorPlacement: 'top-bottom',
    });


    // Initialize Intersection Observer
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && entry.target.dataset.aosId === 'custom-event-trigger') {

                const counters = document.querySelectorAll('.counter');
                const animationDuration = 2000; 

                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const initialValue = 0;
                    const difference = target - initialValue;
                    const increment = difference / (animationDuration / 10);

                    let currentValue = initialValue;

                    const updateCounter = () => {
                        if (currentValue < target) {
                            currentValue += increment;
                            if (target === 2500) {
                                counter.innerText = Math.ceil(currentValue);
                            } else {
                                counter.innerText = Math.ceil(currentValue) + '+'; 
                            }
                            setTimeout(updateCounter, 10); 
                        } else {
                            if (target === 2500) {
                                counter.innerText = formatNumber(target);
                            } else {
                                counter.innerText = formatNumber(target) + '+'; 
                            }
                        }
                    };

                    updateCounter();
                });

                function formatNumber(number) {
                    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }


            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    // Observe all elements with the specified data-aos-id attribute
    document.querySelectorAll('[data-aos-id]').forEach(function (element) {
        observer.observe(element);
    });


    /* SmoothScroll js */
    function getOffset() {
        return window.innerWidth < 650 ? 80 : 100;
    }

    var scroll = new SmoothScroll('a[data-scroll]', {
        offset: getOffset(),
        speed: 600,
        speedAsDuration: true,
        easing: 'linear',
    });

    window.addEventListener('resize', function () {
        scroll.offset = getOffset();
    });

    /* Marquee js init */
    $('.marquee1').marquee({
        //duration in milliseconds of the marquee
        duration: 10000,
        //gap in pixels between the tickers
        gap: 20,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'right',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true,
        pauseOnHover: true
    });

    $('.marquee2').marquee({
        //duration in milliseconds of the marquee
        duration: 10000,
        //gap in pixels between the tickers
        gap: 20,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true,
        pauseOnHover: true
    });

    /* EnuiryForm popup js */
    $('.enquiryForm').on('click', function () {
        $('.ppOverlay').show();
        $('#enquiry1').fadeIn();
    });

    $('.enquiryForm1PPClose').on('click', function (e) {
        $('.ppOverlay').fadeOut();
        $('#enquiry1').fadeOut();
        $('.userInfoThanku').hide();
        setTimeout(() => {
            $('.userInfoForm').fadeIn();
            $('form').trigger('reset');
        }, 500);
    });

    /* EnuiryForm2 popup js */
    $('.enquiryForm1').on('click', function () {
        $('.ppOverlay').show();
        $('#enquiry2').fadeIn();
    });

    $('.enquiryForm2PPClose').on('click', function (e) {
        $('.ppOverlay').fadeOut();
        $('#enquiry2').fadeOut();
        $('.userInfoThanku').hide();
        setTimeout(() => {
            $('.userInfoForm').fadeIn();
            $('form').trigger('reset');
        }, 500);
    });


    /* EnuiryForm3 popup js */
    $('.enquiryForm2').on('click', function () {
        $('.ppOverlay').show();
        $('#enquiry3').fadeIn();
    });

    $('.enquiryForm3PPClose').on('click', function (e) {
        $('.ppOverlay').fadeOut();
        $('#enquiry3').fadeOut();
        $('.userInfoThanku').hide();
        setTimeout(() => {
            $('.userInfoForm').fadeIn();
            $('form').trigger('reset');
        }, 500);
    });


    /* EnuiryForm3 popup js */
    $('.viewPlanBtn').on('click', function () {
        $('.ppOverlay').show();
        $('#viewPlanPP').fadeIn();
    });

    $('.viewPlanPPClose').on('click', function (e) {
        $('.ppOverlay').fadeOut();
        $('#viewPlanPP').fadeOut();
        $('.userInfoThanku').hide();
        setTimeout(() => {
            $('.userInfoForm').fadeIn();
            $('form').trigger('reset');
        }, 500);
    });


    /* disclaimer popup js */
    $('.disclaimer').on('click', function () {
        $('.ppOverlay').show();
        $('#disclaimer').fadeIn();

        // disclaimer scrollbar js
        $('.temp10-discl').jScrollPane({
            resizeSensor: !0,
            resizeSensorDelay: 100,
            autoReinitialise: !0
        });
    });

    $('.disclaimerPPClose').on('click', function (e) {
        $('.ppOverlay').fadeOut();
        $('#disclaimer').fadeOut();
    });


    /* EnuiryForm5 popup js */
    $('.enquiryForm5').on('click', function () {
        $('.ppOverlay').show();
        $('#enquiry5').fadeIn();
    });

    $('.enquiryForm5PPClose').on('click', function (e) {
        $('.ppOverlay').fadeOut();
        $('#enquiry5').fadeOut();
        $('.userInfoThanku').hide();
        setTimeout(() => {
            $('.userInfoForm').fadeIn();
            $('form').trigger('reset');
        }, 500);
    });
    

    /* Banner slider js */
    var swiper1 = new Swiper(".temp1Slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        watchSlidesProgress: true,
        pagination: {
            el: ".temp1Slider-page",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    });

    if ($(window).width() >= 650) {

        $(".temp1-video").on("play", function () {
            swiper1.autoplay.stop();
        });

        $(".temp1-video").on("ended pause", function () {
            swiper1.autoplay.start();
        });

        swiper1.on("slideChange", function () {
            const slide = swiper1.slides[swiper1.activeIndex];
            var currentVideo = $(slide).find('.temp1-video');
            if (currentVideo.length) {
                var isPaused = currentVideo[0].paused && currentVideo[0].ended;
                if (isPaused) {
                    currentVideo.trigger('play');
                }
            }
        });
    }

    /* temp6 - Video js */
    $('.temp6-vidPoster').on('click', function () {
        $(this).closest('.temp6-vidPoster').css({
            'visibility': 'hidden',
            'opacity': '0'
        });
        $(this).closest('.temp6-vidPoster').siblings('.temp6-vid').fadeIn();
        $(this).closest('.temp6-vidPoster').siblings('.temp6-vid').find('.temp6-vidVideo').get(0).play();
    });

    $('.temp6-videoClose').on('click', function () {
        $(this).closest('.temp6-vid').siblings('.temp6-vidPoster').css({
            'visibility': 'visible',
            'opacity': '1'
        });
        $(this).closest('.temp6-vid').fadeOut();
        $(this).siblings('.temp6-vidVideo').get(0).pause();
    });

    /* temp5 slider */
    var swiper5 = new Swiper(".temp5tSlider", {
        slidesPerView: 'auto',
        spaceBetween: 25,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1400: {
                slidesPerView: 'auto',
                spaceBetween: 25,
                loop: true,
            },
            1024: {
                spaceBetween: 20,
            },
            320: {
                spaceBetween: 20,
                loop: true,
            },
        },
    });

    /* temp8 slider */
    var swiper8 = new Swiper(".temp8-mobSlider", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    /* temp2 slider */
    var swiper2t = new Swiper(".temp2tSlider", {
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".temp2-pagination",
            clickable: true,
        },
    });

    /* temp2 bottom slider */
    $('.viewAllBtn').click(function () {
        $('.temp2BSlider').addClass('moreItem');
        $('.temp2b-btn').fadeOut();
        return false;
    });


    /* temp3 slider */
    var swiper3 = new Swiper(".temp3tSlider", {
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".temp3-pagination",
            clickable: true,
        },
    });


    var swiper9 = new Swiper(".temp9btmSlider", {
        slidesPerView: '4',
        spaceBetween: 70,
        speed: 1000,
        breakpoints: {
            1400: {
                slidesPerView: '4',
                spaceBetween: 70,
            },
            1100: {
                spaceBetween: 50,
            },
            320: {
                slidesPerView: 'auto',
                spaceBetween: 40,
            },
        },
    });


    /* Youtube video play/pause js on scroll */
    var videoWrapper = document.getElementById('videoWrapper');
    var videoIframe = videoWrapper.querySelector('iframe');
    var isVideoPlaying = false;

    // Function to play the video
    function playVideo() {
        videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        isVideoPlaying = true;
    }

    // Function to pause the video
    function pauseVideo() {
        videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        isVideoPlaying = false;
    }

    // Create an Intersection Observer
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !isVideoPlaying) {
                playVideo();
            } else if (!entry.isIntersecting && isVideoPlaying) {
                pauseVideo();
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the video is visible

    // Observe the video wrapper
    observer.observe(videoWrapper);


});

/* F12 keyCode and Prevent Ctrl+Shift+I js  */
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    }
});

/* Prevent Right Click js */
$(document).on("contextmenu", function (e) {
    e.preventDefault();
});

