import React, { createContext, useState, useContext, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem('siteProgress');
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    localStorage.setItem('siteProgress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (page) => {
    setProgress(prev => ({ ...prev, [page]: true }));
  };

  const calculateOverallProgress = () => {
    const totalPages = Object.keys(progress).length;
    const visitedPages = Object.values(progress).filter(Boolean).length;
    return totalPages > 0 ? (visitedPages / totalPages) * 100 : 0;
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, calculateOverallProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};