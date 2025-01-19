document.addEventListener('DOMContentLoaded', function() {
    function typeEffect(element, speed) {
        var text = element.innerHTML;
        element.innerHTML = "";
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = text;
        var nodes = [];

        function collectNodes(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                nodes.push(...node.textContent.split('').map(char => ({ type: 'text', char })));
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                var newNode = {
                    type: 'element',
                    tagName: node.tagName,
                    attributes: node.attributes,
                    children: []
                };
                nodes.push(newNode);
                Array.from(node.childNodes).forEach(child => collectNodes(child));
                nodes.push({ type: 'element-close', tagName: node.tagName });
            }
        }

        collectNodes(tempDiv);

        var i = 0;
        function typeNextCharacter() {
            if (i < nodes.length) {
                var node = nodes[i];
                if (node.type === 'text') {
                    element.append(node.char);
                } else if (node.type === 'element') {
                    var newElement = document.createElement(node.tagName);
                    Array.from(node.attributes).forEach(attr => newElement.setAttribute(attr.name, attr.value));
                    element.appendChild(newElement);
                    element = newElement;
                } else if (node.type === 'element-close') {
                    element = element.parentElement;
                }
                i++;
                setTimeout(typeNextCharacter, speed);
            }
        }

        typeNextCharacter();
    }

    // application
    var speed = 50;
    var p = document.querySelector('.typing');
    var delay = 0;

    // type effect to body
    setTimeout(function() {
        p.style.display = "inline-block";
        typeEffect(p, speed);
    }, delay);

    // Hide and show .arrow element
    var arrow = document.querySelector('.pixel-triangle');
    if (arrow) {
        arrow.style.display = 'none';
        setTimeout(function() {
            arrow.style.display = 'block';
        }, 8500);  // 5 seconds delay
    }

    // Change typing text 
    window.updateContent = function(targetId) {
        var targetContent = document.querySelector(`#${targetId}`);
        var typingElement = document.querySelector('.typing');
        
        if (targetContent && typingElement) {
            typingElement.innerHTML = targetContent.innerHTML;
            typeEffect(typingElement, 50); // Re-run typing effect
        }
    };
});

// Welcome sounds
const welcomeAudio = new Audio('/assets/sounds/octopath_click.wav');
const navigationLinks = document.querySelectorAll('.navigation a');

navigationLinks.forEach(function(menuLink) {
    menuLink.addEventListener('mouseover', function(event) {
        welcomeAudio.play();
    });
});
