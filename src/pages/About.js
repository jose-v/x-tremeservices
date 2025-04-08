import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { 
  FaUsers, 
  FaHandshake, 
  FaClock, 
  FaTools,
  FaHome,
  FaIndustry
} from 'react-icons/fa';

// Import your background images
// import aboutBg from '../images/about-hero.jpg';

const AboutContainer = styled.div`
  width: 100%;
  margin-top: -80px;
`;

const HeroSection = styled.section`
  position: relative;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
  padding-top: 80px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(29, 53, 87, 0.9), rgba(29, 53, 87, 0.9));
    z-index: -1;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 30px;
  font-weight: 700;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const IntroSection = styled.section`
  padding: 80px 20px;
  background: white;
  text-align: center;
`;

const IntroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    font-size: 2.5rem;
    color: #e63946;
    margin-bottom: 20px;
  }
`;

const TeamSection = styled.section`
  background: linear-gradient(135deg, #1d3557 0%, #457b9d 100%);
  color: white;
  padding: 80px 20px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 30px;
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TeamImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #e63946;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    font-size: 3rem;
    color: white;
  }
`;

function About() {
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <AboutContainer>
      <HeroSection>
        <HeroTitle>Our Story</HeroTitle>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px' }}>
          Family-Owned Excellence in HVAC and Electrical Services
        </p>
      </HeroSection>

      <IntroSection ref={introRef}>
        <IntroContent>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1d3557' }}>
            Family Owned & Operated
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '30px' }}>
            X-treme Services is a family owned and operated business with two branches of specialties. 
            We take pride in delivering exceptional service through our dedicated divisions: X-treme Heating 
            and Air (HVAC) and X-treme Electric.
          </p>
        </IntroContent>

        <ValueGrid>
          <ValueCard>
            <FaUsers />
            <h3>Family Values</h3>
            <p>Built on trust, integrity, and commitment to customer satisfaction</p>
          </ValueCard>
          <ValueCard>
            <FaHandshake />
            <h3>Quality Service</h3>
            <p>Dedicated to providing quality service by courteous, friendly staff</p>
          </ValueCard>
          <ValueCard>
            <FaClock />
            <h3>36+ Years Experience</h3>
            <p>Decades of expertise in both residential and commercial services</p>
          </ValueCard>
        </ValueGrid>
      </IntroSection>

      <TeamSection ref={teamRef}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
          Meet Our Leadership
        </h2>
        <TeamGrid>
          <TeamCard>
            <TeamImage>
              <FaHome />
            </TeamImage>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Mark & Linda</h3>
              <p style={{ color: '#e63946', marginBottom: '15px' }}>HVAC Division</p>
              <p>
                With 36 years of experience, Mark leads our HVAC operations alongside Linda, 
                managing both residential and commercial projects with expertise and dedication.
              </p>
            </div>
          </TeamCard>

          <TeamCard>
            <TeamImage>
              <FaIndustry />
            </TeamImage>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Jason & Heather</h3>
              <p style={{ color: '#e63946', marginBottom: '15px' }}>Electrical Division</p>
              <p>
                Jason and Heather manage X-treme Electric, handling all electrical needs for 
                both residential and commercial clients with precision and professionalism.
              </p>
            </div>
          </TeamCard>
        </TeamGrid>
      </TeamSection>

      <IntroSection style={{ background: '#f8f9fa' }}>
        <ValueGrid>
          <ValueCard>
            <FaHome />
            <h3>Residential Services</h3>
            <p>Comprehensive solutions for homes of all sizes</p>
          </ValueCard>
          <ValueCard>
            <FaIndustry />
            <h3>Commercial Services</h3>
            <p>Expert solutions for businesses and industrial facilities</p>
          </ValueCard>
          <ValueCard>
            <FaTools />
            <h3>Professional Team</h3>
            <p>Skilled technicians dedicated to excellence</p>
          </ValueCard>
        </ValueGrid>
      </IntroSection>
    </AboutContainer>
  );
}

export default About;