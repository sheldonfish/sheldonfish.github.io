//tilt part 
var granimInstance = new Granim({
  element: '#canvas-basic',
  name: 'basic-gradient',
  direction: 'diagonal', // 'diagonal', 'top-bottom', 'radial'
  opacity: [1, 1],
  // isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              ['#64B5F6', '#BA68C8'], // BLUE
              ['#81C784', '#4DD0E1'], // PURPLR
              ['#B2EBF2', '#F48FB1'], // #E198DE GREEN
              ['#FF8A65', '#E1BEE7'], // Orange
              ['#BBDEFB', '#C8E6C9'] // FDCBF1 GREEN-BLUE
          ]
      }
  }
}); 

function getRandomColor() {
    var letters = '08'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
var particlecolor = getRandomColor()

//particle
particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 80,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": particlecolor
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": particlecolor
			},
			"polygon": {
				"nb_sides": 5
			},
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.2,
				"sync": false
			}
		},
		"size": {
			"value": 2.2,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 1,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 80,
			"color": particlecolor,
			"opacity": 0.6,
			"width": 1
		},
        "move": {
            "enable": true,
            "speed": 5,
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
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 100,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 200,
              "size": 50,
              "duration": 2,
              "opacity": 8,
              "speed": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.5
            },
            "push": {
              "particles_nb": 5
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });