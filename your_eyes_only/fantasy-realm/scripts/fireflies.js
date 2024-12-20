/* Credit for this script:
https://codepen.io/slyka85/pen/BJEbVL */

var fireflies = 75;
var container = document.querySelector(".fireflies");
var containerWidth = container.offsetWidth;
var containerHeight = container.offsetHeight;
var master = new TimelineMax();

for (var i = 0; i < fireflies; i++) {
  var firefly = document.createElement("div");
  firefly.classList.add("firefly");
  TweenLite.set(firefly, {
    x: Math.random() * containerWidth,
    y: Math.random() * containerHeight
  });
  container.appendChild(firefly);
  flyTheFirefly(firefly);
}

function flyTheFirefly(elm) {
  var flyTl = new TimelineMax();
  var fadeTl = new TimelineMax({
    delay: Math.floor(Math.random() * 2) + 1,
    repeatDelay: Math.floor(Math.random() * 6) + 1,
    repeat: -1
  });

  fadeTl.to(
    elm,
    0.25,
    { opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2, yoyo: true },
    Math.floor(Math.random() * 6) + 1
  );

  flyTl
    .set(elm, { scale: Math.random() * 0.75 + 0.5 })
    .to(elm, Math.random() * 100 + 100, {
      bezier: {
        values: [
          {
            x: Math.random() * containerWidth,
            y: Math.random() * containerHeight
          },
          {
            x: Math.random() * containerWidth,
            y: Math.random() * containerHeight
          }
        ]
      },
      onComplete: flyTheFirefly,
      onCompleteParams: [elm]
    });
}
