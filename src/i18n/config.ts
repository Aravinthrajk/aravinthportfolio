import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          // Common
          language: 'Language',
          readMore: 'Read More',
          bookNow: 'Book Now',
          viewDetails: 'View Details',
          callUs: 'Call Us',
          
          // Navigation
          home: 'Home',
          destinations: 'Destinations',
          internationalTours: 'International Tours',
          domesticTours: 'Domestic Tours',
          templeTours: 'Temple Tours',
          about: 'About Us',
          contact: 'Contact',
          
          // Hero Section
          heroTitle: 'Discover the World with Sri Agni Amman',
          heroSubtitle: 'Your trusted travel partner since 2013',
          exploreButton: 'Explore Tours',
          
          // Temple Tours
          arupadaiVeedu: 'Arupadai Veedu Tour',
          templeTourTitle: 'Sacred Temple Tours',
          templeTourDesc: 'Experience divine journeys to ancient temples',
          
          // International Tours
          internationalTitle: 'International Destinations',
          internationalDesc: 'Explore the world\'s most beautiful places',
          
          // Contact
          getInTouch: 'Get in Touch',
          address: 'Address',
          phone: 'Phone',
          email: 'Email',
          sendMessage: 'Send Message',
          
          // About
          aboutTitle: 'About Sri Agni Amman Tours',
          establishedIn: 'Established in 2013',
          aboutDesc: 'Pioneers in holiday planning, tourism and travel industry providing matchless service to all customers.',
        }
      },
      ta: {
        translation: {
          // Tamil translations
          language: 'மொழி',
          readMore: 'மேலும் படிக்க',
          bookNow: 'இப்போது முன்பதிவு செய்யவும்',
          viewDetails: 'விவரங்களைக் காண',
          callUs: 'எங்களை அழைக்கவும்',
          
          // Navigation
          home: 'முகப்பு',
          destinations: 'சுற்றுலா தலங்கள்',
          internationalTours: 'சர்வதேச சுற்றுலாக்கள்',
          domesticTours: 'உள்நாட்டு சுற்றுலாக்கள்',
          templeTours: 'கோயில் சுற்றுலாக்கள்',
          about: 'எங்களைப் பற்றி',
          contact: 'தொடர்பு',
          
          // Hero Section
          heroTitle: 'ஸ்ரீ அக்னி அம்மனுடன் உலகைக் கண்டறியுங்கள்',
          heroSubtitle: '2013 முதல் உங்கள் நம்பகமான பயண பங்குதாரர்',
          exploreButton: 'சுற்றுலாக்களை ஆராயுங்கள்',
          
          // Temple Tours
          arupadaiVeedu: 'ஆறுபடை வீடு சுற்றுலா',
          templeTourTitle: 'புனித கோயில் சுற்றுலாக்கள்',
          templeTourDesc: 'பழமையான கோயில்களுக்கு தெய்வீக பயணங்களை அனுபவிக்கவும்',
          
          // International Tours
          internationalTitle: 'சர்வதேச இடங்கள்',
          internationalDesc: 'உலகின் மிக அழகான இடங்களை ஆராயுங்கள்',
          
          // Contact
          getInTouch: 'தொடர்பில் இருங்கள்',
          address: 'முகவரி',
          phone: 'தொலைபேசி',
          email: 'மின்னஞ்சல்',
          sendMessage: 'செய்தி அனுப்பு',
          
          // About
          aboutTitle: 'ஸ்ரீ அக்னி அம்மன் சுற்றுலா பற்றி',
          establishedIn: '2013 ஆம் ஆண்டு நிறுவப்பட்டது',
          aboutDesc: 'விடுமுறை திட்டமிடல், சுற்றுலா மற்றும் பயண துறையில் முன்னோடிகள், அனைத்து வாடிக்கையாளர்களுக்கும் ஈடு இணையற்ற சேவையை வழங்குகிறோம்.',
        }
      },
      // Add more languages as needed
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;