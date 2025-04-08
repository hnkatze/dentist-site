// src/scripts/scrollReveal.ts

export function initScrollAnimations() {
    const animatedElements = document.querySelectorAll<HTMLElement>('.fade-in-up, .fade-in-down');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
  
            if (el.classList.contains('fade-in-up')) {
              el.classList.add('animate-fade-in-up');
            } else if (el.classList.contains('fade-in-down')) {
              el.classList.add('animate-fade-in-down');
            }
  
            observer.unobserve(el); 
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    animatedElements.forEach((el) => observer.observe(el));
  }
  