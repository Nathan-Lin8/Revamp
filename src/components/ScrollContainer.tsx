import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: white;
  position: relative;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const container = containerRef.current;
      if (!container || isScrolling.current) return;

      const delta = e.deltaY;
      const currentScroll = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const currentSection = Math.round(currentScroll / sectionHeight);
      const nextSection = delta > 0 ? currentSection + 1 : currentSection - 1;

      if (nextSection >= 0 && nextSection < React.Children.count(children)) {
        isScrolling.current = true;
        container.scrollTo({
          top: nextSection * sectionHeight,
          behavior: 'smooth'
        });

        // Reset scrolling flag after animation completes
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); // Adjust timing based on your scroll animation duration
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [children]);

  return (
    <Container ref={containerRef}>
      {children}
    </Container>
  );
};

export default ScrollContainer; 