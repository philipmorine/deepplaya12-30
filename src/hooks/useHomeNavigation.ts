import { useCallback } from 'react';

export const useHomeNavigation = () => {
  const navigateHome = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Clear the hash to remove game state
    window.history.pushState("", document.title, window.location.pathname);
    
    // Scroll to top with smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Force a re-render of the main content
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }, []);

  return { navigateHome };
};