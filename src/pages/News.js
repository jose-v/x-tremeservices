import React, { useState } from 'react';
import styled from 'styled-components';
import newsBg from '../images/news-bg.jpg';
import uvAirImage from '../images/news-uv-air.jpeg';
import cleanFilterImage from '../images/news-clean-filter.jpg';
import saveMoneyImage from '../images/news-save-money.webp';
import { FaPlug, FaLightbulb, FaThermometerHalf, FaDoorClosed, FaBacteria, FaFan, FaBolt, FaShieldAlt } from 'react-icons/fa';

const NewsHero = styled.section`
  position: relative;
  height: 550px;
  background: url(${newsBg}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(29, 53, 87, 0.4); /* Blue overlay */
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
  
  h1 {
    font-size: 4rem;
    margin-bottom: 30px;
    font-weight: 700;
    text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7);
    
    @media (max-width: 768px) {
      font-size: 2.8rem;
    }
  }
`;

const NewsContainer = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const NewsItem = styled.div`
  margin-bottom: 40px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const NewsItemTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  transition: color 0.3s ease;
  
  ${NewsItem}:hover & {
    color: #e63946;
  }
`;

const NewsItemDate = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const NewsItemAuthor = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 10px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: #f8f9fa;
  padding: 40px;
  border-radius: 20px;
  max-width: 51.2%;
  width: 51.2%;
  position: relative;
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.9)});
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  p {
    margin-bottom: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ArticleTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ArticleAuthorDate = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

const ArticleSection = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

const ArticleGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ArticleIcon = styled.div`
  font-size: 2rem;
  margin-right: 15px;
  align-self: flex-start;
`;

const News = () => {
  const [openArticle, setOpenArticle] = useState(null);

  const toggleArticle = (index) => {
    setOpenArticle(index);
  };

  return (
    <>
      <NewsHero>
        <h1>Tips and News</h1>
      </NewsHero>
      <NewsContainer>
        <NewsGrid>
          {articles.map((article, index) => (
            <NewsItem key={index} onClick={() => toggleArticle(index)}>
              <NewsImage src={article.image} alt={article.title} />
              <NewsItemTitle>{article.title}</NewsItemTitle>
              <NewsItemDate>{article.date}</NewsItemDate>
              <NewsItemAuthor>{article.author}</NewsItemAuthor>
            </NewsItem>
          ))}
        </NewsGrid>
      </NewsContainer>

      <PopupOverlay isOpen={openArticle !== null} onClick={() => setOpenArticle(null)}>
        <PopupContent isOpen={openArticle !== null} onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setOpenArticle(null)}>×</CloseButton>
          {openArticle !== null && (
            <>
              <ArticleTitle>{articles[openArticle].title}</ArticleTitle>
              <ArticleAuthorDate><strong>{articles[openArticle].author}</strong> - <em>{articles[openArticle].date}</em></ArticleAuthorDate>
              {openArticle === 0 && (
                <>
                  {articles[openArticle].content.split('\n\n').slice(0, 5).map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  <ArticleGrid>
                    {articles[openArticle].content.split('Benefits:\n\n')[1].split('\n').slice(0, 5).map((benefit, i) => (
                      <ArticleSection key={i}>
                        {i === 0 && <ArticleIcon><FaBacteria /></ArticleIcon>}
                        {i === 1 && <ArticleIcon><FaFan /></ArticleIcon>}
                        {i === 2 && <ArticleIcon><FaLightbulb /></ArticleIcon>}
                        {i === 3 && <ArticleIcon><FaBolt /></ArticleIcon>}
                        {i === 4 && <ArticleIcon><FaShieldAlt /></ArticleIcon>}
                        <div>{benefit}</div>
                      </ArticleSection>
                    ))}
                  </ArticleGrid>
                  <p>Improving air quality within the home should be a concern for anyone from the very young to the elderly as well as allergy sufferers. UV Air Treatment Systems used in conjunction with HEPA filters can greatly reduce the allergens present in your home.</p>
                </>
              )}
              {openArticle !== 0 && (
                <ArticleGrid>
                  {articles[openArticle].content.split('\n\n').map((paragraph, i) => (
                    <ArticleSection key={i}>
                      {i === 0 && <ArticleIcon><FaPlug /></ArticleIcon>}
                      {i === 1 && <ArticleIcon><FaLightbulb /></ArticleIcon>}
                      {i === 2 && <ArticleIcon><FaThermometerHalf /></ArticleIcon>}
                      {i === 3 && <ArticleIcon><FaDoorClosed /></ArticleIcon>}
                      <div>{paragraph}</div>
                    </ArticleSection>
                  ))}
                </ArticleGrid>
              )}
            </>
          )}
        </PopupContent>
      </PopupOverlay>
    </>
  );
};

const articles = [
  {
    image: uvAirImage,
    title: 'The Benefits of a UV Air Treatment System',
    date: 'July 11, 2010',
    author: 'By Veronica Monique',
    content: `How clean is the air blowing around the inside of your house? Often times the answer is not good. The Environmental Protection Agency reports that the air quality inside your home can be up to 10 times more polluted than the air outside. There are several reasons for this potentially toxic situation. In the quest to make houses more energy efficient they have been sealed against drafts in favor of more controlled air exchange, and many filter systems are inadequate to deal with what is recycling itself through your home.

Micro-organisms such as bacteria and mold are some of the invisible enemies of healthy breathing. Those who suffer from allergies may still find that even within their own homes they are not completely symptom free. One way to cut down on bacteria and mold that contribute to the problem is with the installation of an Ultraviolet Treatment System.

Ultraviolet (UV) Air Treatment Systems are comprised of a UV light similar in appearance to a florescent light bulb in a specially insulated casing to focus the light where bacteria and mold form within your heating and cooling system such as the cooling coils. This does not interfere with the performance of your cooling unit, but rather aids in the efficiency by reducing clogging and corrosion from the build up that develops if untreated.

These systems work because the UV light passes through the cellular membrane of micro-organisms causing cellular damage which destroys germs, viruses, bacteria, and fungi. This reduces the number of airborne allergens that plague many people. Studies of UV air purification have shown the reduction of respiratory symptoms and mucous problems in individuals examined during these studies.

Many commercial buildings such as office buildings and hospitals have begun installing these systems to work in conjunction with HEPA (high efficiency particulate arrestor) filters. By doing so, there have been reports of reduced work sickness and work-related breathing problems. Many companies offer UV treatment systems for home use, and with the benefits to you they are worth considering.

UV Air Treatment System Benefits:

They eliminate up to 99.9% of mold spores and kill up to 87% of certain airborne bacteria passing through the air system.
They help maintain system efficiency and airflow, which saves money by not having to have your system coils cleaned as often.
Some have SmartLamp™ technology, which optimizes efficiency of lamp run time. These lamps usually need replacing about once a year.
With SnapLamp™ replacement bulbs the replacement process is quick and easy.
The sealed unit design and multiple interlocks prevent accidental contact with UV rays making these systems safe.
Improving air quality within the home should be a concern for anyone from the very young to the elderly as well as allergy sufferers. UV Air Treatment Systems used in conjunction with HEPA filters can greatly reduce the allergens present in your home.`
  },
  {
    image: cleanFilterImage,
    title: "Why It's Important to Clean Your Filter Regularly",
    date: 'March 15, 2023',
    author: 'By Admin',
    content: `Your air conditioner works hard to keep your home cool, but a dirty filter can make it work even harder. When dust, pollen, and debris clog the filter, airflow is restricted, causing the system to strain—and your electric bill to spike.

Experts recommend checking your filter once a month during peak usage seasons. A clean filter not only improves energy efficiency but also protects your AC unit from damage and helps maintain healthy indoor air.

Ignoring filter maintenance can lead to frozen coils, overheating, and eventually system failure—costing you hundreds in repairs. Plus, poor air quality caused by dirty filters can aggravate allergies and asthma.

The bottom line? Cleaning or replacing your filter is one of the easiest ways to extend your unit's life, improve comfort, and save money.`
  },
  {
    image: saveMoneyImage,
    title: 'Tips to Save Money on Your Electric Bill',
    date: 'March 10, 2023',
    author: 'By Admin',
    content: `Feeling the heat of a rising electric bill? Small changes can make a big difference.

First, unplug devices when not in use—"phantom power" from idle electronics can account for up to 10% of your bill. Switch to LED bulbs, which use 75% less energy than traditional ones.

Use a programmable thermostat to reduce cooling or heating when you're asleep or away. Adjusting your thermostat by even 1–2 degrees can lead to noticeable savings.

Finally, seal windows and doors to prevent cool or warm air from escaping. These simple steps, along with regular maintenance of HVAC systems, can slash your bill without sacrificing comfort.`
  }
];

export default News;