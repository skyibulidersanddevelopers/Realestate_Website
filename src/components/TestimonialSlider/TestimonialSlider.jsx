import React, { useState, useEffect, useRef, useCallback } from 'react';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    quote: "We're from Singapore and only visited during the final stage. SKYi handled everything so smoothly, we never felt the distance.",
    author: "Mr.Prakash & Mrs.Gayathri",
    theme: "gold-theme"
  },
  {
    id: 2,
    quote: "From planning to handover, they maintained full transparency. It kept us completely comfortable.",
    author: "Mr.Arun Sundaramoorthy & Mrs.Kiruthika",
    theme: "light-theme"
  },
  {
    id: 3,
    quote: "The team treated us like family. Even the smallest details were given great care — it made a big difference.",
    author: "Mr.Thirupathi & Mrs.Haritha",
    theme: "gold-theme"
  },
  {
    id: 4,
    quote: "What they promised, they delivered! No delays, no stress. Rare to find in construction.",
    author: "Mrs.Bhagya",
    theme: "light-theme"
  },
  {
    id: 5,
    quote: "Clear updates, quality work, and a professional approach — overall, an excellent experience.",
    author: "Mr.Ramesh",
    theme: "gold-theme"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = testimonials.length;
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); 
    
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="testimonial-slider-container">
      <button className="slider-arrow left-arrow" onClick={prevSlide} aria-label="Previous Testimonial">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div 
        className="slider-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={sliderRef}
      >
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="slider-slide"
              style={{ flex: `0 0 ${100 / itemsToShow}%` }}
            >
              <div className="testimonial-card-slide">
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p>"{testimonial.quote}"</p>
                <h4 className="testimonial-author">- {testimonial.author}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="slider-arrow right-arrow" onClick={nextSlide} aria-label="Next Testimonial">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className="slider-pagination">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button 
            key={idx}
            className={`pagination-dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
