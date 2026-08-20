import React, { createContext, useContext, useState, useEffect } from 'react';

export type RoutePath =
  | '/'
  | '/stays'
  | `/stays/${string}`
  | '/destinations'
  | `/destinations/${string}`
  | '/experiences'
  | `/experiences/${string}`
  | '/journal'
  | `/journal/${string}`
  | '/search'
  | '/booking'
  | string;

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  params: Record<string, string>;
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.hash ? window.location.hash.replace('#', '') : window.location.pathname || '/';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentPath(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Parse route parameters
  const params: Record<string, string> = {};
  if (currentPath.startsWith('/stays/')) {
    params.stayId = currentPath.replace('/stays/', '');
  } else if (currentPath.startsWith('/destinations/')) {
    params.destinationId = currentPath.replace('/destinations/', '');
  } else if (currentPath.startsWith('/experiences/')) {
    params.experienceId = currentPath.replace('/experiences/', '');
  } else if (currentPath.startsWith('/journal/')) {
    params.articleId = currentPath.replace('/journal/', '');
  }

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        params,
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
