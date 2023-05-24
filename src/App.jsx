import GlobalStyle from './globalStyle';
import { PriceGrid } from './components';
const App = () => {
  const benefits = [
    'Tutorials by industry experts',
    'Peer & expert code review',
    'Coding exercises',
    'Access to our GitHub repos',
    'Community forum',
    'Flashcard decks',
    'New videos every week',
  ];
  return (
    <>
      <GlobalStyle />
      <PriceGrid
        topHeading="Join our community"
        topSubheading="30-day, hassle-free money back guarantee"
        topParagraph="Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills."
        priceSubheading="Monthly Subscription"
        price="$29"
        pricePeriod="month"
        priceDescription="Full access for less than $1 a day"
        benefits={benefits}
      />
    </>
  );
};
export default App;
