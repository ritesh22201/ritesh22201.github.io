import React, { useState, useEffect } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 600);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button style={{position : 'fixed', bottom : '100px', right : '10px'}} className="back-to-top" onClick={scrollToTop}>
          {<BsArrowUpCircleFill color='#03bd69' fontSize={'40px'}/>}
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
