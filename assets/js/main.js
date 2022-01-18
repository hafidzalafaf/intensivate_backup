
// text and box animation
function slideing() {
    let elementTop = document.getElementById('highlight').getBoundingClientRect().top;
    let section1 = document.getElementById('highlight-one');
    let section2 = document.getElementById('highlight-two');
    let section3 = document.getElementById('highlight-three');
    let elementVisible1 = 800;
    let elementVisible2 = 1050;
    let elementVisible3 = 1300;
    let elementHidden1 = 1050;
    let elementHidden2 = 1300;
    let elementHidden3 = 1450;
    let windowHeight = window.innerHeight;
    let box = document.querySelectorAll('.item');

    // text
            if(elementTop < windowHeight - elementVisible1 && elementTop > windowHeight - elementHidden1){
                section1.classList.add("active");
                section2.classList.remove("active");
                console.log('1')
            } else if (elementTop < windowHeight - elementVisible2 && elementTop > windowHeight - elementHidden2 ) {
                section1.classList.remove("active");
                section2.classList.add("active");
                section3.classList.remove("active");
            } else if(elementTop < windowHeight - elementVisible3 && elementTop > windowHeight - elementHidden3) {
                section2.classList.remove("active");
                section3.classList.add("active");
            }  else if (elementTop < windowHeight - elementHidden3){
                section1.classList.remove("active");
            } 


    // box
    for(let i = 0; i < box.length; i++){
        if(elementTop > windowHeight - elementHidden1){
            box[0].classList.add('show');
            box[3].classList.add('show');
            box[1].classList.remove('show');
            box[4].classList.remove('show');
        } else if (elementTop < windowHeight - elementVisible2 && elementTop > windowHeight - elementHidden2 ) {
            box[1].classList.add('show');
            box[4].classList.add('show');
            box[0].classList.remove('show');
            box[3].classList.remove('show');
            box[2].classList.remove('show');
            box[5].classList.remove('show');
        } else if(elementTop < windowHeight - elementVisible3 && elementTop > windowHeight - elementHidden3) {
            box[2].classList.add('show');
            box[5].classList.add('show');
            box[1].classList.remove('show');
            box[4].classList.remove('show');
        }  else if (elementTop < windowHeight - elementHidden3){
            box[0].classList.remove('show');
            box[3].classList.remove('show');
        }
    }
}

// Showing server
function showServer() {
    let section = document.getElementById('server');
    let elementTop = section.getBoundingClientRect().top;
    let servers = document.querySelectorAll('.server');
    let windowHeight = window.innerHeight;
    let elementVisible = 750;
    let delay = 0;
    for (i = 0; i < servers.length; i++) {
        if (elementTop < windowHeight - elementVisible) {
            delay += 0.05;
            servers[i].classList.add('server-show');
            let serverShow = document.querySelectorAll('.server-show');
            serverShow[i].style.transitionDelay = delay + "s";
        } else {
            servers[i].classList.remove('server-show');
        }
    }
}

window.addEventListener("scroll", slideing);
window.addEventListener("scroll", showServer);

// Counting animation
$(window).scroll(function () {

    var oTop = $('#server').offset().top - window.innerHeight + 750;
    if ($(window).scrollTop() > oTop ) {
        $('.server-counting1').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 200,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });
        $('.server-counting2').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 1500,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });
        
    }else {
        $('.server-counting1').each(function () {
            var $this = $(this),
                countTo = 0;
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 200,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });
        $('.server-counting2').each(function () {
            var $this = $(this),
                countTo = 0;
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 1500,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });
    }

});




// Parallax Gsap
let smallDevice = window.matchMedia("(max-width: 500px)");
let mobile = window.matchMedia("(max-width: 600px)");
let tablet = window.matchMedia("(max-width: 768px)");
let laptop = window.matchMedia("(max-width: 992px)");
let largeLaptop = window.matchMedia("(max-width: 1200px)");
let Mac = window.matchMedia("(max-width: 1450px)");

if(smallDevice.matches){
    gsap.to("#text-1", {
            scrollTrigger: {
                trigger: '#banner',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5
            },
            y: 320,
            x: 0
        });
        
        gsap.to("#text-2", {
            scrollTrigger: {
                trigger: '#banner',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5
            },
            y: 320,
            x: 0
        });
} else if(mobile.matches){
    gsap.to("#text-1", {
            scrollTrigger: {
                trigger: '#banner',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5
            },
            y: 420,
            x: 0
        });
        
        gsap.to("#text-2", {
            scrollTrigger: {
                trigger: '#banner',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5
            },
            y: 420,
            x: 0
        });
}else if(tablet.matches){
    gsap.to("#text-1", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 300,
        x: 0
    });
    
    gsap.to("#text-2", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 300,
        x: 0
    });
}else if(laptop.matches){
    gsap.to("#text-1", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 300,
        x: 0
    });
    
    gsap.to("#text-2", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 300,
        x: 0
    });
}else if(largeLaptop.matches){
    gsap.to("#text-1", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 400,
        x: 0
    });
    
    gsap.to("#text-2", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 400,
        x: 0
    });
}else if(Mac.matches){
    gsap.to("#text-1", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 600,
        x: 0
    });
    
    gsap.to("#text-2", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 600,
        x: 0
    });
}else{
    gsap.to("#text-1", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 600,
        x: 0
    });
    
    gsap.to("#text-2", {
        scrollTrigger: {
            trigger: '#banner',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5
        },
        y: 600,
        x: 0
    });
}

// Hide and show software text
function showSoftware() {
    let bannerText = document.getElementById('banner-text');
    let fromTop = bannerText.getBoundingClientRect().top;
    let item = document.getElementById('heading-highlight');
    let windowHeight = window.innerHeight;

    if(fromTop < windowHeight - 100){
        item.classList.add('show');
    } else{
        item.classList.remove('show');
    }
}

window.addEventListener("scroll", showSoftware);