window.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    const progressBar = skill.querySelector('.progress-bar-inner');
    const progressValue = skill.getAttribute('data-progress');
    setTimeout(() => {
      progressBar.style.width = progressValue + '%';
    }, 300);
  });


  document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const feedback = document.getElementById('form-message');

  if (!name || !email || !message) {
    feedback.textContent = 'Please fill in all fields.';
    feedback.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Thank you! Your message has been sent.';
  feedback.style.color = 'lightgreen';

  this.reset();
});

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
});
