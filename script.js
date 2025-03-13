// script.js

document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', e => {
    if ([123, 16].includes(e.keyCode) || (e.ctrlKey && e.shiftKey && [73, 74].includes(e.keyCode))) {
        e.preventDefault();
    }
});
