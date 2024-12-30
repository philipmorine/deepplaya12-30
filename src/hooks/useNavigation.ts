import { useCallback } from 'react';

export const useNavigation = (onClose?: () => void) => {
  const handleNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    
    if (!href) return;

    // Handle home link
    if (href === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onClose?.();
      return;
    }

    // Update URL with hash
    window.location.hash = href.replace('#', '');
    
    // Smooth scroll to target if not game section
    if (href !== '#game') {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Close menu if callback provided
    onClose?.();
  }, [onClose]);

  return { handleNavigation };
};