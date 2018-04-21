//tilt part 
var granimInstance = new Granim({
  element: '#canvas-basic',
  name: 'basic-gradient',
  direction: 'top-bottom', // 'diagonal', 'top-bottom', 'radial'
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              ['#E8E5E5', '#A1C4FD'],
              ['#E8E5E5', '#FDCBF1'],
              ['#E8E5E5', '#CD9CF2'],
              ['#E8E5E5', '#FEADA6'],
              ['#E8E5E5', '#ACCBEE']
          ]
      }
  }
}); 

function getRandomColor() {
    var letters = '69'.split('');
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
				"opacity_min": 0.1,
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
			"opacity": 0.5,
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