import { useRef, useCallback } from 'react';
import { GameState } from '../types/game';

export const useGameStatePreservation = () => {
  const gameStateRef = useRef<GameState | null>(null);

  const saveGameState = useCallback((state: GameState) => {
    gameStateRef.current = { ...state };
  }, []);

  const loadGameState = useCallback((): GameState | null => {
    return gameStateRef.current ? { ...gameStateRef.current } : null;
  }, []);

  return { saveGameState, loadGameState };
};