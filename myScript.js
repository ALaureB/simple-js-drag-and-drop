(function() {
  // We us an IIFE for more simplicity

  let storage = {}; // Variable containing the div beeing moved

  function init() {
    // Function that is doing the job
    let elements = document.querySelectorAll(".draggableBox"), // We select all the draggrable boxes
      elementsLength = elements.length;

    for (let i = 0; i < elementsLength; i++) {
      elements[i].addEventListener("mousedown", e => {
        // We create and event on mousedown to init drag & drop
        let s = storage;
        s.target = e.target;
        s.offsetX = e.clientX - s.target.offsetLeft;
        s.offsetY = e.clientY - s.target.offsetTop;
      });

      elements[i].addEventListener("mouseup", e => {
        // We create and event on mouseup to close drag & drop
        storage = {};
      });
    }

    document.addEventListener("mousemove", e => {
      // We create an event on document on mousemove to allow the drag on drop
      let target = storage.target;

      if (target) {
        target.style.top = e.clientY - storage.offsetY + "px";
        target.style.left = e.clientX - storage.offsetX + "px";
      }
    });
  }

  init();
})();
