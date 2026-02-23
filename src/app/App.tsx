import { Footer } from '@/widgets/footer';
import { GameSection } from '@/widgets/gameSection';
import { useGameContext } from '@/shared/libs';

export const App = () => {
  const { isGameOpen } = useGameContext();

  return (
    <>
      <GameSection />
      {!isGameOpen && <Footer />}
    </>
  );
};
