$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollOverflow: true
    });


    // count_down by http://codepen.io/SitePoint/pen/MwNPVq
    // http://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
        var schedule = [
            ['Jul 25 2015', 'Sept 20 2015'],
            ['Sept 21 2015', 'Jul 25 2016'],
            ['Jul 25 2016', 'Jul 25 2030']
        ];

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(2016, 7, 11); //2016/8/10--24:00
    initializeClock('clockdiv', deadline);


    // awards
    // http://ashleydw.github.io/lightbox/
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
        // $(this).ekkoLightbox.onShow($.fn.fullpage.setAllowScrolling(false));
        // $(this).ekkoLightbox.onHidden($.fn.fullpage.setAllowScrolling(true));

        if ($(".ekko-lightbox")) {
            // $.fn.fullpage.setMouseWheelScrolling(false);
            $.fn.fullpage.setAllowScrolling(false);

        }

    });
    // $(document).delegate($(".ekko-lightbox"), 'click', function() {
    //     $.fn.fullpage.setAllowScrolling(true);
    // });

});
