import styled from 'styled-components';
import { Subheading } from '../../globalStyle';
export const PriceGridCard = styled.article`
  background: #FFFFFF;
  box-shadow: 0px 15px 30px rgba(0, 81, 171, 0.148847);
  border-radius: 8px;
  max-width: 635px;
  @media only screen and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
  }
  @media only screen and (max-width: 768px) {
    max-width: 311px;
    margin-top: 72px;
    margin-bottom: 62px;
  }
`;
export const CardTopArea = styled.section`
  padding: 40px;
  grid-column: 1 / 3;
  @media only screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 28px;
    padding-bottom: 32px;
  }
`;
export const TopHeading = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.3px;
  color: #2AB3B1;
  margin-bottom: 24px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.25px;
  }
`;
export const TopSubheading = styled(Subheading)`
  color: #C0DF33;
  margin-bottom: 11px;
  @media only screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 23px;
      letter-spacing: -0.25px;
      margin-bottom: 16px;
  }
`;
export const TopParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.2px;
  color: #9AA7BE;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.175px;
  }
`;
export const CardPriceArea = styled.section`
  background: #2AB3B1;
  padding-right: 39px;
  padding-bottom: 39px;
  padding-left: 40px;
  padding-top: 40px;
  grid-column: 1 / 2;
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`;
export const PriceSubheading = styled(Subheading)`
  color: #FFFFFF;
  margin-bottom: 18px;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.225px;
  }
`;
export const PriceHolder = styled.div`
  display: flex;
  align-items: center;
  column-gap: 11px;
  margin-bottom: 11px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 9px;
  }
`;
export const Price = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: -0.4px;
  color: #FFFFFF;
`;
export const PricePeriod = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.2px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
export const PriceDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.2px;
  color: #FFFFFF;
  margin-bottom: 26px;
`;
export const SignUpButton = styled.a`
  background: #C0DF33;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.0973011);
  border-radius: 5px;
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.2px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 14px;
  width: 100%;
  text-decoration: none;
  color: #FFFFFF;
`;
export const WhyUsArea = styled.section`
  padding: 40px;
  background-color: #4abebd;
  grid-column: 2 / 3;
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`;
export const WhyUsList = styled.ul`
  list-style: none;
`;
export const WhyUsListItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.175px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.75;
`;
