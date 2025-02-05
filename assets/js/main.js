document.addEventListener("DOMContentLoaded", function () {
    new SweetScroll({});
    particlesJS("particles-js", {
        "particles": {
        "number": {
            "value": 152,
                "density": {
                "enable": true,
                    "value_area": 425.8919341219544
            }
        },
        "color": {
            "value": "#707070"
        },
        "shape": {
            "type": "circle",
                "stroke": {
                "width": 0,
                    "color": "#707070"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                    "width": 100,
                    "height": 100
            }
        },
        "opacity": {
            "value": 1,
                "random": true,
                "anim": {
                "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
            }
        },
        "size": {
            "value": 4,
                "random": true,
                "anim": {
                "enable": false,
                    "speed": 40,
                    "size_min": 0.5,
                    "sync": false
            }
        },
        "line_linked": {
            "enable": true,
                "distance": 150,
                "color": "#000000",
                "opacity": 0.7049305944649181,
                "width": 1.0782952832645454
        },
        "move": {
            "enable": true,
                "speed": 2.5782952832645452,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
            }
        }
    },
        "interactivity": {
        "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": true,
                    "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                    "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                    "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                    "size": 5,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
            },
            "repulse": {
                "distance": 87.91208791208791,
                    "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
        "retina_detect": true
    })
}, !1);
