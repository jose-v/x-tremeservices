import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaSnowflake, FaBolt, FaShieldAlt, FaTools, FaQuoteLeft, FaQuoteRight, FaStar, FaPaperPlane, FaPhone } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { scrollToSection } from '../components/Layout';

// Import the images
import heroBg from '../images/hero-bg.jpg';
import hvacService from '../images/hvac-service.jpg';
import electricalService from '../images/electrical-service.jpg';
import ctaBg from '../images/cta-bg.jpg';
import womanAvatar from '../images/woman-avatar.png';
import manAvatar from '../images/man-avatar.png';

// Define the fadeIn animation
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

// Styled components for the Home page
const HomeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scrolling */
`;

const HeroSection = styled.section`
  background: url(${heroBg}) no-repeat center center;
  background-size: cover;
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  width: 100%;
  padding: 0;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  max-width: 800px;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
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

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${props => props.bgColor || '#f8f9fa'};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #1d3557;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: #e63946;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #1d3557;
  margin-bottom: 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HighlightTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #1d3557;
`;

const HighlightDescription = styled.p`
  color: #6c757d;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.bgColor || '#f8f9fa'};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ServiceImage = styled.div`
  height: 250px;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
`;

const ServiceContent = styled.div`
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${props => props.color || '#1d3557'};
`;

const ServiceDescription = styled.p`
  color: ${props => props.color || '#6c757d'};
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const CTASection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(rgba(29, 53, 87, 0.9), rgba(29, 53, 87, 0.9)), 
              url(${ctaBg}) no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: #e63946;
  }
`;

const CTAContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
  padding: 0;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 0 20px;
  }
`;

const CTAContentColumn = styled.div`
  text-align: left;
  padding: 40px;
  
  @media (max-width: 992px) {
    text-align: center;
    order: -1;
    padding: 0;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);

  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 992px) {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAFormColumn = styled.div`
  width: 100%;
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: white;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: #e63946;
    box-shadow: 0 0 0 2px rgba(230, 57, 70, 0.3);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: #e63946;
    box-shadow: 0 0 0 2px rgba(230, 57, 70, 0.3);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #e63946;
    box-shadow: 0 0 0 2px rgba(230, 57, 70, 0.3);
  }
  
  & option {
    background: #1d3557;
    color: white;
  }
`;

const SubmitButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    background: #c1121f;
    transform: translateY(-3px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: rgba(39, 174, 96, 0.2);
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(39, 174, 96, 0.5);
`;

// Add styled components for the Reviews section
const ReviewsSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #0057b8 0%, #ffffff 50%, #e63946 100%);
  position: relative;
`;

const ReviewsSectionTitle = styled(SectionTitle)`
  color: #1d3557;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:after {
    background: #e63946;
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background: rgba(255, 255, 255, 0.25); /* Reduce opacity for glassmorphic effect */
  backdrop-filter: blur(15px); /* Strong blur effect */
  -webkit-backdrop-filter: blur(15px); /* For Safari support */
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); /* Softer shadow */
  border: 1px solid rgba(255, 255, 255, 0.18); /* Subtle border */
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ReviewQuote = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1d3557; /* Darker text for better readability */
  margin-bottom: 20px;
  position: relative;
  flex-grow: 1;
  text-align: left;
  padding: 0 15px;
  font-weight: 500; /* Slightly bolder for better contrast */
`;

const QuoteIconLeft = styled(FaQuoteLeft)`
  color: #e63946;
  opacity: 0.4; /* More visible */
  font-size: 1.5rem;
  position: absolute;
  top: -10px;
  left: -10px;
`;

const QuoteIconRight = styled(FaQuoteRight)`
  color: #e63946;
  opacity: 0.4; /* More visible */
  font-size: 1.5rem;
  position: absolute;
  bottom: -10px;
  right: -10px;
`;

const ReviewAuthor = styled.div`
  font-weight: 700;
  color: #1d3557;
  margin-bottom: 5px;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3); /* Add slight text shadow */
`;

const ReviewLocation = styled.div`
  color: #1d3557;
  font-size: 0.9rem;
  margin-bottom: 5px;
  opacity: 0.8;
`;

const StarRating = styled.div`
  color: #ffc107;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 15px;
`;

// Reviews data from Yelp
const reviewsData = [
  {
    id: 1,
    text: "These folks are awesome! The residential world of construction is typically not the most on schedule group of folks, but X Treme Electric has been working with us on and off for a while now and is always on schedule and very professional. He has always been very professional and gives us a good thorough cost estimate before he starts.",
    author: "Greg P.",
    location: "Cary, NC",
    rating: 5
  },
  {
    id: 2,
    text: "We got an estimate ahead of time. The estimator was clear on the costs and the work to be done. The electricians were on time, went directly to work. They were professional in every way. They straightened up after themselves, which meant that when they departed, our house was litter free. This is the only electrical contractor I will hire in the future.",
    author: "Charles L.",
    location: "San Francisco, CA",
    rating: 5
  },
  {
    id: 3,
    text: "When I hire someone, I want someone who can do a better job than me. Very satisfied and they stand by their work. Very highly recommended for home or commercial work. They were fast, very fairly priced, and did high-quality work.",
    author: "Michael R.",
    location: "Greensboro, NC",
    rating: 5
  }
];

// Add animated versions of the section containers
const AnimatedSection = styled(Section)`
  opacity: 0;
  animation: ${props => props.inView ? fadeIn : 'none'} 0.8s forwards;
  animation-delay: 0.2s;
`;

const AnimatedReviewsSection = styled(ReviewsSection)`
  opacity: 0;
  animation: ${props => props.inView ? fadeIn : 'none'} 0.8s forwards;
  animation-delay: 0.2s;
`;

// Add these styled components for the Staff section
const StaffSection = styled.section`
  padding: 80px 20px;
  background-color: #f8f9fa;
`;

const StaffContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StaffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  /* Add this to center the last row when it has fewer items */
  &::after {
    content: '';
    grid-column: span 4;
  }
  
  /* Target the last row when it has 3 items (our case with electrical staff) */
  & > *:nth-last-child(-n+3):first-child ~ * {
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    
    &::after {
      grid-column: span 2;
    }
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    
    &::after {
      grid-column: span 1;
    }
  }
`;

const StaffCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StaffImageContainer = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #999;
  border: 3px solid white;
`;

const StaffImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StaffName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #1d3557;
`;

const StaffPhone = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    color: #e63946;
  }
`;

// Add a new StaffRole component
const StaffRole = styled.div`
  font-size: 0.9rem;
  color: #e63946;
  margin-bottom: 5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;
  position: relative;
  z-index: 2;
`;

function Home() {
  const navigate = useNavigate();
  // Set up form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'https://x-tremeservices.netlify.app/.netlify/functions/api';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    scrollToSection('contact-form');
  };

  const navigateToServicesIntro = () => {
    navigate('/services');
    setTimeout(() => {
      const introSection = document.querySelector('.intro-section');
      if (introSection) {
        const topOffset = introSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: topOffset - 150,
          behavior: 'smooth'
        });
      }
    }, 400);
  };

  // Set up the intersection observers for each section
  const [whyChooseUsRef, whyChooseUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [reviewsRef, reviewsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to X-Treme Services</HeroTitle>
          <HeroSubtitle>Your trusted partner in professional cleaning and maintenance services</HeroSubtitle>
          <Button onClick={scrollToContact}>Get Started</Button>
        </HeroContent>
      </HeroSection>

      <AnimatedSection 
        id="why-choose-us" 
        ref={whyChooseUsRef} 
        inView={whyChooseUsInView}
      >
        <SectionTitle>Why Choose Us</SectionTitle>
        <HighlightsGrid>
          <HighlightCard>
            <IconWrapper>
              <FaSnowflake />
            </IconWrapper>
            <HighlightTitle>HVAC Expertise</HighlightTitle>
            <HighlightDescription>
              Comprehensive heating, ventilation, and air conditioning solutions for year-round comfort.
            </HighlightDescription>
          </HighlightCard>
          
          <HighlightCard>
            <IconWrapper>
              <FaBolt />
            </IconWrapper>
            <HighlightTitle>Electrical Services</HighlightTitle>
            <HighlightDescription>
              Professional electrical installations, repairs, and maintenance for all your power needs.
            </HighlightDescription>
          </HighlightCard>
          
          <HighlightCard>
            <IconWrapper>
              <FaShieldAlt />
            </IconWrapper>
            <HighlightTitle>Quality Guaranteed</HighlightTitle>
            <HighlightDescription>
              Our work is backed by industry-leading warranties and our satisfaction guarantee.
            </HighlightDescription>
          </HighlightCard>
          
          <HighlightCard>
            <IconWrapper>
              <FaTools />
            </IconWrapper>
            <HighlightTitle>Experienced Team</HighlightTitle>
            <HighlightDescription>
              Our technicians are licensed, certified, and trained in the latest industry techniques.
            </HighlightDescription>
          </HighlightCard>
        </HighlightsGrid>
      </AnimatedSection>

      <AnimatedReviewsSection 
        ref={reviewsRef} 
        inView={reviewsInView}
      >
        <ReviewsSectionTitle>What Our Clients Say</ReviewsSectionTitle>
        <ReviewsGrid>
          {reviewsData.map(review => (
            <ReviewCard key={review.id}>
              <StarRating>
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </StarRating>
              
              <ReviewQuote>
                <QuoteIconLeft />
                {review.text}
                <QuoteIconRight />
              </ReviewQuote>
              
              <ReviewAuthor>{review.author}</ReviewAuthor>
              <ReviewLocation>{review.location}</ReviewLocation>
            </ReviewCard>
          ))}
        </ReviewsGrid>
      </AnimatedReviewsSection>

      <AnimatedSection 
        id="our-services" 
        bgColor="#ffffff" 
        ref={servicesRef} 
        inView={servicesInView}
      >
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard bgColor="#f8f9fa">
            <ServiceImage src={hvacService} />
            <ServiceContent>
              <ServiceTitle>HVAC Services</ServiceTitle>
              <ServiceDescription>
                From installation and maintenance to emergency repairs, our HVAC team handles all 
                your heating and cooling needs, including furnaces, air conditioners, heat pumps, 
                and indoor air quality solutions.
              </ServiceDescription>
              <Button primary onClick={navigateToServicesIntro}>Learn More</Button>
            </ServiceContent>
          </ServiceCard>
          
          <ServiceCard bgColor="#1d3557">
            <ServiceImage src={electricalService} />
            <ServiceContent>
              <ServiceTitle color="white">Electrical Services</ServiceTitle>
              <ServiceDescription color="#f1faee">
                Our licensed electricians provide complete electrical services for residential 
                and commercial clients, including panel upgrades, lighting installation, 
                electrical repairs, and safety inspections.
              </ServiceDescription>
              <Button onClick={navigateToServicesIntro} style={{color: 'white', borderColor: 'white'}}>Learn More</Button>
            </ServiceContent>
          </ServiceCard>
        </ServicesGrid>
      </AnimatedSection>

      <CTASection id="contact-form">
        <CTATitle>Ready to Get Started?</CTATitle>
        <CTAContainer>
          <CTAFormColumn>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="you@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="service">Service Needed</FormLabel>
                <FormSelect 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="hvac-installation">HVAC Installation</option>
                  <option value="hvac-repair">HVAC Repair</option>
                  <option value="hvac-maintenance">HVAC Maintenance</option>
                  <option value="electrical-installation">Electrical Installation</option>
                  <option value="electrical-repair">Electrical Repair</option>
                  <option value="electrical-inspection">Electrical Inspection</option>
                  <option value="other">Other</option>
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your project or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Request'}
                <FaPaperPlane />
              </SubmitButton>
              
              {submitted && (
                <SuccessMessage>
                  Your request has been sent! We'll contact you shortly.
                </SuccessMessage>
              )}
            </ContactForm>
          </CTAFormColumn>
          
          <CTAContentColumn>
            <CTADescription>
              Whether you need a routine maintenance check, emergency repair, or a complete 
              system installation, our team is ready to provide you with exceptional service.
            </CTADescription>
            <CTADescription>
              Fill out the form with your information and service needs, and our experts will 
              contact you within 24 hours to discuss your project and provide a free estimate.
            </CTADescription>
          </CTAContentColumn>
        </CTAContainer>
      </CTASection>

      {/* Add the new Staff section */}
      <StaffSection>
        <SectionTitle>Our Staff</SectionTitle>
        <StaffContainer>
          {/* First row - Heating & Air staff */}
          <StaffGrid>
            <StaffCard>
              <StaffImageContainer>
                <StaffImage src={manAvatar} alt="Mark Pickard" />
              </StaffImageContainer>
              <StaffRole>Heating & Air</StaffRole>
              <StaffName>Mark Pickard</StaffName>
              <StaffPhone href="tel:3363629187">
                <FaPhone /> (336) 362-9187
              </StaffPhone>
            </StaffCard>
            
            <StaffCard>
              <StaffImageContainer>
                <StaffImage src={womanAvatar} alt="Linda Pickard" />
              </StaffImageContainer>
              <StaffRole>Heating & Air</StaffRole>
              <StaffName>Linda Pickard</StaffName>
              <StaffPhone href="tel:3363629187">
                <FaPhone /> (336) 362-9187
              </StaffPhone>
            </StaffCard>
            
            <StaffCard>
              <StaffImageContainer>
                <StaffImage src={womanAvatar} alt="Casey Pickard" />
              </StaffImageContainer>
              <StaffRole>Heating & Air</StaffRole>
              <StaffName>Casey Pickard</StaffName>
              <StaffPhone href="tel:3363824598">
                <FaPhone /> (336) 382-4598
              </StaffPhone>
            </StaffCard>
            
            <StaffCard>
              <StaffImageContainer>
                <StaffImage src={manAvatar} alt="Rick Watson" />
              </StaffImageContainer>
              <StaffRole>Heating & Air</StaffRole>
              <StaffName>Rick Watson</StaffName>
              <StaffPhone href="tel:3362790501">
                <FaPhone /> (336) 279-0501
              </StaffPhone>
            </StaffCard>
          </StaffGrid>
          
          {/* Second row - Electrical staff with spacing to match */}
          <StaffGrid>
            {/* Add an empty space for positioning */}
            <div style={{ gridColumn: "1 / 2" }}></div>
            
            <StaffCard>
              <StaffImageContainer>
                <StaffImage src={manAvatar} alt="Jason Pickard" />
              </StaffImageContainer>
              <StaffRole>Electrical</StaffRole>
              <StaffName>Jason Pickard</StaffName>
              <StaffPhone href="tel:3362159360">
                <FaPhone /> (336) 215-9360
              </StaffPhone>
            </StaffCard>
            
            <StaffCard>
              <StaffImageContainer>
                <StaffImage src={womanAvatar} alt="Heather Pickard" />
              </StaffImageContainer>
              <StaffRole>Electrical</StaffRole>
              <StaffName>Heather Pickard</StaffName>
              <StaffPhone href="tel:3368510050">
                <FaPhone /> (336) 851-0050
              </StaffPhone>
            </StaffCard>
            
            <StaffCard>
              <StaffImageContainer>
                <StaffImage src={manAvatar} alt="Jeremy Pickard" />
              </StaffImageContainer>
              <StaffRole>Electrical</StaffRole>
              <StaffName>Jeremy Pickard</StaffName>
              <StaffPhone href="tel:3362158271">
                <FaPhone /> (336) 215-8271
              </StaffPhone>
            </StaffCard>
          </StaffGrid>
        </StaffContainer>
      </StaffSection>
    </HomeContainer>
  );
}

export default Home;