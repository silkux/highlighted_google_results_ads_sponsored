function highlightPatrocinadoContent() {
  const spans = document.querySelectorAll('span');
  spans.forEach(span => {
    if (span.textContent.trim() === 'Patrocinado') {
      span.classList.add('patrocinado-highlight');
    }
  });
}

highlightPatrocinadoContent();

// Observe for dynamically added content
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes) {
      highlightPatrocinadoContent();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

