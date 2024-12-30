import { useEffect, useRef } from 'react';

interface NavigationState {
  scrollPosition: number;
  gameState?: any; // Type this based on your game state structure
}

const navigationState = new Map<string, NavigationState>();

export const useNavigationState = (section: string) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      const savedState = navigationState.get(section);
      if (savedState) {
        window.scrollTo(0, savedState.scrollPosition);
      }
    }

    return () => {
      navigationState.set(section, {
        scrollPosition: window.scrollY,
        gameState: section === 'game' ? getGameState() : undefined,
      });
    };
  }, [section]);
};

// Helper to get current game state - implement based on your game state structure
const getGameState = () => {
  // Return current game state
  return window.gameState; // Replace with your actual game state access
};