import React, { useEffect } from 'react';
import { useNavigation } from './context/NavigationContext';
import { SiteHeader } from './components/layout/SiteHeader';
import { MobileNavigation } from './components/layout/MobileNavigation';
import { SiteFooter } from './components/layout/SiteFooter';

// Pages
import { HomePage } from './pages/HomePage';
import { StaysPage } from './pages/StaysPage';
import { StayDetailPage } from './pages/StayDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { ExperienceDetailPage } from './pages/ExperienceDetailPage';
import { JournalPage } from './pages/JournalPage';
import { EditorialDetailPage } from './pages/EditorialDetailPage';
import { SearchPage } from './pages/SearchPage';
import { BookingPage } from './pages/BookingPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const { currentPath } = useNavigation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  // Route Dispatcher matching DSF declarative routing
  const renderPage = () => {
    if (currentPath === '/' || currentPath === '') return <HomePage />;
    if (currentPath === '/stays') return <StaysPage />;
    if (currentPath.startsWith('/stays/')) return <StayDetailPage />;
    if (currentPath === '/destinations') return <DestinationsPage />;
    if (currentPath.startsWith('/destinations/')) return <DestinationDetailPage />;
    if (currentPath === '/experiences') return <ExperiencesPage />;
    if (currentPath.startsWith('/experiences/')) return <ExperienceDetailPage />;
    if (currentPath === '/journal') return <JournalPage />;
    if (currentPath.startsWith('/journal/')) return <EditorialDetailPage />;
    if (currentPath === '/search') return <SearchPage />;
    if (currentPath === '/booking') return <BookingPage />;

    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-primary text-text-primary transition-colors duration-300 editorial-grain">
      <SiteHeader />
      <MobileNavigation />
      <main className="flex-1">
        {renderPage()}
      </main>
      <SiteFooter />
    </div>
  );
};
