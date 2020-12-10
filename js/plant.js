
$(window).ready(function () {
        var typingBool = false;
        var typingIdx = 0;
        var typingTxt = $(".typing-txt").text();
        typingTxt = typingTxt.split("");
        if (typingBool == false) {
            typingBool = true;

            var tyInt = setInterval(typing, 100);
        }

        function typing() {
            if (typingIdx < typingTxt.length) {
                $(".typing").append(typingTxt[typingIdx]);
                typingIdx++;
            } else {
                clearInterval(tyInt);
            }
        }

    });

    var windowcon = document.querySelector('.mainimg'),
        container = document.querySelector('.box2'),
        container2 = document.querySelector('.box3'),
        slides = document.querySelectorAll('img'),
        slidecounter = slides.length;

    let currentIndex = 0;

    for (i = 0; i < slidecounter; i++) {
        slides[i].style.left = '${i*100}%';
    }

    function calcul() {
        for (i = 0; i < slidecounter; i++) {
            if (windowcon.offsetHeight < slides[i].offsetHeight) {
                windowcon.style.height = slides[i].offsetHeight + "px";
                windowcon.style.width = slides[i].offsetWidth + "px";
            }
        }
    }
    calcul();
    var lele = 0;
    var i = 0;

    function moveevent() {
        setInterval(function () {
            var container = document.querySelector('.box2');
            var container2 = document.querySelector('.box3');



            lele += 4000;

            container.style.transition = '6s'
            container.style.left = "-" + lele + "px";
            container2.style.transition = '10s'
            container2.style.right = "-" + lele + "px";

            i++;


            if (i === slidecounter - 1) {
                setTimeout(function () {
                    container2.style.transition = '0s'
                    lele = 0;
                    container2.style.right = "-" + lele + "px";
                }, 201);
                i = 0;
            }
        }, 100);

        function plantmove() {
            var maintext = document.querySelector('.mainbox');
            var subtxt = document.querySelector('.subtxt');
            maintext.classList.add('topright');
            subtxt.style.visibility = "hidden";
            subtxt.style.opacity = "0";
        }
        plantmove();
    }
    $(document).ready(function () {




        $('.sect2 ul li').click(function () {
            $('.sect2 ul li').removeClass();
            $(this).addClass('active');
            $('.mam1').show();
            $('.mam2,.mam3,.mam4').hide();


        });
        $('.sect2 ul li:nth-child(2)').click(function () {
            $('.mam2').show();
            $('.mam1,.mam3,.mam4').hide();


        });
        $('.sect2 ul li:nth-child(3)').click(function () {
            $('.mam3').show();
            $('.mam2,.mam1,.mam4').hide();


        });
        $('.sect2 ul li:nth-child(4)').click(function () {
            $('.mam4').show();
            $('.mam1,.mam2,.mam3').hide();

        });

    });
    $(window).resize(function () {
        var width_size = window.outerWidth;
        if (width_size < 836) {
            $('.flexbox').css('display: inline-block');
            $('.hnf-accordion__content').hide();
        }
        if (width_size > 838) {
            $('.hnf-accordion__content').show();

        }
    });

    $(document).ready(function () {
        $('.hnf-accordion__title.h4.noo, .hnf-footer .hnf-accordion__heading svg').on('click', function () {
            $(this).parent().parent().next().toggle();
        });
    });
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.top').fadeIn();
            } else {
                $('.top').fadeOut();
            }
        });

        $('.top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    });
