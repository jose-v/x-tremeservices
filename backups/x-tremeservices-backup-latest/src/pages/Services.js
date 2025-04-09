import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { 
  FaBolt, 
  FaSnowflake, 
  FaLeaf, 
  FaShieldVirus, 
  FaThermometerHalf,
  FaHome,
  FaCheckCircle,
  FaLightbulb,
  FaTools,
  FaAtom,
  FaWind
} from 'react-icons/fa';

// Remove unused import
// import servicesBg from '../images/services_hero_banner.jpg';
import electricalImg from '../images/electrical_services.jpg';
import hvacImg from '../images/hvac_services.jpg';
import iaqImg from '../images/iaq_services.jpg';
import airScrubberImg from '../images/air_scrubber.jpg';
import lsdImg from '../images/lsd_services.jpg';
import landscapeMain from '../images/landscape-main.jpg';
import landscapePath from '../images/landscape-path.jpg';
import landscapeSteps from '../images/landscape-steps.jpg';
import servicesHeroBanner from '../images/services_hero_banner.jpg';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServicesContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 0;
  overflow-x: hidden;
`;

const VideoBackground = styled.video`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  filter: brightness(0.7) contrast(1.1);
`;

const HeroSection = styled.section`
  position: relative;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
  padding-top: 80px;
  overflow: hidden;
  background: url(${servicesHeroBanner}) no-repeat center center;
  background-size: cover;

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
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 30px;
  font-weight: 700;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background: ${props => props.primary ? '#e63946' : 'transparent'};
  color: white;
  border: 2px solid ${props => props.primary ? '#e63946' : 'white'};
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.primary ? '#c1121f' : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-3px);
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 100%;
  padding: 0 80px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${props => props.bgColor || '#f8f9fa'};
  opacity: 0;
  animation: ${props => props.inView ? fadeIn : 'none'} 0.8s forwards;
  animation-delay: 0.2s;
  width: 100%;
`;

const IntroSection = styled(Section)`
  background: linear-gradient(135deg, #0057b8 0%, #ffffff 50%, #e63946 100%);
  color: #1d3557;
  text-align: center;
  padding: 80px 0;
  width: 100%;
`;

const IntroText = styled.p`
  font-size: 1.5rem;
  margin: 0 auto 60px;
  line-height: 1.6;
  padding: 0 20px;
  max-width: 1000px;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #e63946;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #1d3557;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  color: #1d3557;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const AirScrubberSection = styled(Section)`
  background: linear-gradient(rgba(29, 53, 87, 0.95), rgba(29, 53, 87, 0.95)),
              url(${airScrubberImg}) no-repeat center center;
  background-size: cover;
  color: white;
  padding: 100px 20px;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1400px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.li`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 25px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;

  svg {
    color: #e63946;
    font-size: 2.5rem;
    margin-bottom: 5px;
  }

  span {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

// Add a new component for highlighting key points
const Highlight = styled.div`
  background: rgba(230, 57, 70, 0.1);
  padding: 15px;
  border-left: 4px solid #e63946;
  margin: 20px 0;
  border-radius: 0 8px 8px 0;
`;

// Add a styled component for the list
const EffectivenessList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EffectivenessItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 15px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
  }
  
  svg {
    color: #4CAF50;
    font-size: 1.4rem;
    flex-shrink: 0;
  }
`;

// Add new styled component for the Landscape Design section
const LandscapeSection = styled.section`
  background-attachment: fixed;
  background-image: url(${lsdImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding: 60px 20px;
  margin: 0;
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LandscapeContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  background: rgba(29, 53, 87, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 30px 0;

  .main-image {
    grid-column: 1 / -1;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
  }

  .secondary-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
  }
`;

// Add new styled components for Air Scrubber Steps
const AirScrubberStepsSection = styled(Section)`
  background-color: #eaf4ff; // Light blue background
  padding: 80px 20px;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2x2 grid
  gap: 40px;
  max-width: 1000px; 
  margin: 50px auto 0; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Stack on smaller screens
  }
`;

const StepCard = styled.div`
  background: rgba(255, 255, 255, 0.7); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center; 
  transition: transform 0.3s ease;
  height: 100%; // Ensure cards have equal height if content differs slightly

  &:hover {
    transform: translateY(-8px);
  }
`;

const StepIconWrapper = styled.div`
  font-size: 3rem; 
  color: #1d3557; 
  margin-bottom: 25px;
  height: 60px; // Give icon wrapper fixed height
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepTitle = styled.h3`
  font-size: 1.4rem; 
  color: #1d3557;
  margin-bottom: 15px;
  font-weight: 600;
  min-height: 50px; // Give title area minimum height
`;

const StepDescription = styled.p`
  color: #4a4a4a; 
  line-height: 1.7;
  font-size: 1rem;
  flex-grow: 1; // Allow description to take remaining space
`;

function Services() {
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [airScrubberRef, airScrubberInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [airScrubberStepsRef, airScrubberStepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [landscapeRef, landscapeInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <ServicesContainer>
      <HeroSection>
        <HeroTitle>Professional HVAC & Electrical Solutions</HeroTitle>
      </HeroSection>

      <LandscapeSection ref={landscapeRef} inView={landscapeInView}>
        <LandscapeContent>
          <ServiceIcon style={{ color: '#37F722', fontSize: '3rem', marginBottom: '30px' }}>
            <FaLightbulb />
          </ServiceIcon>
          <h2 style={{ 
            color: 'white', 
            fontSize: '2.5rem', 
            marginBottom: '20px',
            fontWeight: '600' 
          }}>
            Landscape Lighting Design
          </h2>
          <p style={{ 
            color: 'white', 
            fontSize: '1.2rem', 
            marginBottom: '30px',
            lineHeight: '1.8'
          }}>
            Transform your outdoor spaces with our expert landscape lighting design services. 
            Our specialists create stunning lighting effects that enhance the beauty of your property 
            while ensuring safety and security.
          </p>
          <ImageGrid>
            <img 
              src={landscapeMain} 
              alt="House with landscape lighting" 
              className="main-image"
            />
            <img 
              src={landscapeSteps} 
              alt="Illuminated garden steps" 
              className="secondary-image"
            />
            <img 
              src={landscapePath} 
              alt="Lit garden pathway" 
              className="secondary-image"
            />
          </ImageGrid>
          <Highlight style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            borderColor: 'rgba(255, 255, 255, 0.3)',
            color: 'white',
            marginBottom: '40px'
          }}>
            Our experts have a distinctive eye when it comes to making your surroundings look 
            beautiful with lighting effects, creating the perfect ambiance for your outdoor living spaces.
          </Highlight>
          <Button 
            primary 
            href="/contact" 
            style={{ 
              fontSize: '1.1rem',
              padding: '15px 30px'
            }}
          >
            Design Your Outdoor Lighting
          </Button>
        </LandscapeContent>
      </LandscapeSection>

      <IntroSection ref={introRef} inView={introInView}>
        <IntroText>
          X-treme Services consists of X-treme Heating & Air, and X-treme Electric.
        </IntroText>
        <ServiceGrid>
          <ServiceCard>
            <ServiceIcon><FaBolt /></ServiceIcon>
            <ServiceTitle>Electrical Services</ServiceTitle>
            <ServiceImage src={electricalImg} alt="Electrical Services" />
            <ServiceDescription>
              The electric side of our company can take care of all of your electrical needs from changing an outlet, 
              or installing a ceiling fan, to doing a complete panel upgrade. No job is too big or too small!
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaSnowflake /></ServiceIcon>
            <ServiceTitle>Heating & Air Services</ServiceTitle>
            <ServiceImage src={hvacImg} alt="HVAC Services" />
            <ServiceDescription>
              The Heating & Air side of our business can take care of all of your environmental needs. 
              From your indoor air quality, to your indoor air comfort. We can make sure the air you and 
              your family breathe is clean, and warm in the winter, and cool in the summer.
            </ServiceDescription>
            <Highlight>
              We can repair your existing heating and air system if needed, or we can install a new one for you. 
              Any model, any brand. Ask us about the new high efficiency units that can earn you a tax credit.
            </Highlight>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaLeaf /></ServiceIcon>
            <ServiceTitle>Indoor Air Quality (IAQ)</ServiceTitle>
            <ServiceImage src={iaqImg} alt="Indoor Air Quality" />
            <ServiceDescription>
              We can install and maintain humidifiers, and whole house filters to maintain your IAQ (indoor air quality).
              Our comprehensive solutions ensure your family breathes clean, healthy air year-round.
            </ServiceDescription>
          </ServiceCard>
        </ServiceGrid>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '40px',
          width: '100%'
        }}>
          <Button 
            primary 
            href="/contact"
            style={{
              fontSize: '1.2rem',
              padding: '20px 40px'
            }}
          >
            Schedule Service
          </Button>
        </div>
      </IntroSection>

      <AirScrubberSection ref={airScrubberRef} inView={airScrubberInView}>
        <ServiceTitle style={{ color: 'white', textAlign: 'center', fontSize: '2rem' }}>
          INDUCT 2000 "AIR SCRUBBER" Technology
        </ServiceTitle>
        <ServiceDescription style={{ color: 'white', textAlign: 'center', maxWidth: '800px', margin: '20px auto' }}>
          Keep your indoor environment GERM FREE with our revolutionary air purification system!
        </ServiceDescription>

        <BenefitsList>
          <BenefitItem>
            <FaShieldVirus />
            <span>Destroys up to 99.9% of all surface bacteria, viruses & germs</span>
          </BenefitItem>
          <BenefitItem>
            <FaHome />
            <span>Reduces approximately 90% of airborne micro-organisms (University of Cincinnati study)</span>
          </BenefitItem>
          <BenefitItem>
            <FaLeaf />
            <span>24/7 ActivePure technology eliminates allergens, bacteria, and pollutants</span>
          </BenefitItem>
          <BenefitItem>
            <FaThermometerHalf />
            <span>Tackles odors from smoke, pets, and food</span>
          </BenefitItem>
        </BenefitsList>

        <Highlight style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          color: 'white', 
          maxWidth: '1200px',
          margin: '40px auto',
          padding: '30px'
        }}>
          <h3 style={{ 
            marginBottom: '20px', 
            fontSize: '1.8rem', 
            textAlign: 'center' 
          }}>
            Proven Effectiveness Against:
          </h3>
          <EffectivenessList>
            <EffectivenessItem>
              <FaCheckCircle />
              <span>MRSA</span>
            </EffectivenessItem>
            <EffectivenessItem>
              <FaCheckCircle />
              <span>AVIAN BIRD FLU</span>
            </EffectivenessItem>
            <EffectivenessItem>
              <FaCheckCircle />
              <span>E. COLI</span>
            </EffectivenessItem>
            <EffectivenessItem>
              <FaCheckCircle />
              <span>BACILLUS SPP</span>
            </EffectivenessItem>
            <EffectivenessItem>
              <FaCheckCircle />
              <span>STREPTOCOCCUS SPP (group A)</span>
            </EffectivenessItem>
          </EffectivenessList>
          <p style={{ 
            marginTop: '25px', 
            fontStyle: 'italic',
            textAlign: 'center',
            fontSize: '1.1rem'
          }}>
            And many more harmful microorganisms. A dead germ cannot make anyone sick!
          </p>
        </Highlight>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button primary href="/contact">
            Install Air Scrubber Today
          </Button>
        </div>
      </AirScrubberSection>

      <AirScrubberStepsSection ref={airScrubberStepsRef} inView={airScrubberStepsInView} id="air-scrubber-steps">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1d3557', marginBottom: '60px', position: 'relative' }}>
          How INDUCT 2000 "AIR SCRUBBER" Technology Works
          <span style={{
              content: '""',
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: '#e63946'
            }}></span>
        </h2>
        <StepsGrid>
          <StepCard>
            <StepIconWrapper><FaTools /></StepIconWrapper>
            <StepTitle>1. Installed in the HVAC system</StepTitle>
            <StepDescription>
              The Air Scrubber is mounted in the duct-work of an HVAC system.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepIconWrapper><FaLightbulb /></StepIconWrapper>
            <StepTitle>2. UV-C light shines on titanium-dioxide-coated surface</StepTitle>
            <StepDescription>
              A UV-C germicidal bulb illuminates a special catalytic target.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepIconWrapper><FaAtom /></StepIconWrapper>
            <StepTitle>3. 'ActivePure' molecules are created</StepTitle>
            <StepDescription>
              UV-C light and the catalytic surface produce powerful oxidizers.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepIconWrapper><FaWind /></StepIconWrapper>
            <StepTitle>4. Oxidizers purify the air</StepTitle>
            <StepDescription>
              The oxidizers are released into the air, reducing contaminants.
            </StepDescription>
          </StepCard>
        </StepsGrid>
      </AirScrubberStepsSection>
      
    </ServicesContainer>
  );
}

export default Services;