import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Compass, ArrowRight, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-28">
      <Container size="reading" className="text-center space-y-6">
        <div className="w-16 h-16 rounded-full border border-border-default flex items-center justify-center mx-auto text-accent-primary">
          <Compass size={28} />
        </div>

        <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
          A Pause Along the Way
        </span>

        <h1 className="font-display text-display-m sm:text-display-l text-text-primary leading-tight font-normal">
          The path you seek has dissolved into silence.
        </h1>

        <p className="text-body-m text-text-secondary font-light max-w-md mx-auto leading-relaxed">
          The coordinates you entered do not correspond to an active sanctuary. Allow us to guide you back to our curated global destinations.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/')}
            leftIcon={<Home size={16} />}
          >
            Return Home
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={() => navigate('/stays')}
            rightIcon={<ArrowRight size={16} />}
          >
            Explore Sanctuaries
          </Button>
        </div>
      </Container>
    </div>
  );
};
