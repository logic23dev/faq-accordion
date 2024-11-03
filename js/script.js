const buttons = document.querySelectorAll('.js-accordion-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);

    const answer = button.nextElementSibling;
    const buttonIcon = button.firstElementChild;

    if (!isExpanded) {
      answer.removeAttribute('hidden');
      buttonIcon.src = 'images/icon-minus.svg';
    } else {
      answer.setAttribute('hidden', '');
      buttonIcon.src = 'images/icon-plus.svg';
    }
  });
});
