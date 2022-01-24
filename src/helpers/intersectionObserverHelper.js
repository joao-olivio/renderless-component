const defaultOptions = {
  rootMargin: '100px',
  threshold: [0.006],
  element: null
}

export const IntersectionViewportObserver = (options, callback) => {
  options = {...defaultOptions, ...options};
  return new Promise((resolve, reject) =>  {
    if (!options.element) reject();

    const iObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          iObserver.unobserve(options.element);
          callback();
          resolve();
        }
      })
    }, options);

    iObserver.observe(options.element);
  });
}