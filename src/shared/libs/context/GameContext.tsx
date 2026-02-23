import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface GameContextType {
  isGameOpen: boolean;
  setIsGameOpen: (isOpen: boolean) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <GameContext.Provider value={{ isGameOpen, setIsGameOpen }}>{children}</GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
