import * as S from './PriceGrid.style';
const PriceGrid = ({
  topHeading,
  topSubheading,
  topParagraph,
  priceSubheading,
  price,
  pricePeriod,
  priceDescription,
  benefits,
}) => {
  return (
    <>
      <S.PriceGridCard>
        <S.CardTopArea>
          <S.TopHeading>{topHeading}</S.TopHeading>
          <S.TopSubheading>{topSubheading}</S.TopSubheading>
          <S.TopParagraph>{topParagraph}</S.TopParagraph>
        </S.CardTopArea>
        <S.CardPriceArea>
          <S.PriceSubheading>{priceSubheading}</S.PriceSubheading>
          <S.PriceHolder>
            <S.Price>{price}</S.Price>
            <S.PricePeriod>per {pricePeriod}</S.PricePeriod>
          </S.PriceHolder>
          <S.PriceDescription>{priceDescription}</S.PriceDescription>
          <S.SignUpButton>Sign Up</S.SignUpButton>
        </S.CardPriceArea>
        <S.WhyUsArea>
          <S.PriceSubheading>Why Us</S.PriceSubheading>
          <S.WhyUsList>
            {benefits.map((benefit) => {
              return <S.WhyUsListItem key={benefit}>{benefit}</S.WhyUsListItem>;
            })}
          </S.WhyUsList>
        </S.WhyUsArea>
      </S.PriceGridCard>
    </>
  );
};
export default PriceGrid;
