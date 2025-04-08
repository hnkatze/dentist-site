const scrollReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  };
  
  document.addEventListener('DOMContentLoaded', scrollReveal);