const modal = document.querySelector('.modal');
const modalLink = document.querySelector('.modal-link');
const modalClose = document.querySelector('.modal-close');

modalLink.onclick = function() {
    console.log(modal.classList);
    if ( modal.classList.contains('closed') ) {
        modal.classList.remove('closed');
        modal.classList.add('open');
    } else {
        console.log("does not contain");
    }
}

modalClose.onclick = function() {
    console.log(modal.classList);
    if ( modal.classList.contains('open') ) {
        modal.classList.remove('open');
        modal.classList.add('closed');
    } else {
        console.log("does not contain");
    }
}
