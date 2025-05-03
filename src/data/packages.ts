export interface TourPackage {
  id: number;
  name: string;
  nameTamil: string;
  image: string;
  description: string;
  descriptionTamil: string;
  duration: number;
  price: number;
  includes: string[];
  includesTamil: string[];
  destinations: string[];
  destinationsTamil: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    name: "Spiritual Tamil Nadu",
    nameTamil: "ஆன்மீக தமிழ்நாடு",
    image: "https://images.pexels.com/photos/6413770/pexels-photo-6413770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Experience the spiritual essence of Tamil Nadu with visits to ancient temples in Madurai, Rameshwaram, and Thanjavur.",
    descriptionTamil: "மதுரை, ராமேஸ்வரம் மற்றும் தஞ்சாவூரில் உள்ள பழங்கால கோயில்களுக்கு வருகை தருவதன் மூலம் தமிழ்நாட்டின் ஆன்மீக சாராம்சத்தை அனுபவிக்கவும்.",
    duration: 7,
    price: 35000,
    includes: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "Air-conditioned transportation",
      "Professional guide",
      "All temple entry fees",
      "Airport transfers"
    ],
    includesTamil: [
      "3 நட்சத்திர ஹோட்டல்களில் தங்குமிடம்",
      "தினசரி காலை உணவு மற்றும் இரவு உணவு",
      "குளிர்சாதன போக்குவரத்து",
      "தொழில்முறை வழிகாட்டி",
      "அனைத்து கோயில் நுழைவு கட்டணங்கள்",
      "விமான நிலைய பரிமாற்றங்கள்"
    ],
    destinations: ["Madurai", "Rameshwaram", "Thanjavur", "Tiruchirapalli"],
    destinationsTamil: ["மதுரை", "ராமேஸ்வரம்", "தஞ்சாவூர்", "திருச்சிராப்பள்ளி"]
  },
  {
    id: 2,
    name: "Hill Station Retreat",
    nameTamil: "மலை நிலைய ஓய்வகம்",
    image: "https://images.pexels.com/photos/5759945/pexels-photo-5759945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Escape to the cool climates of Ooty and Kodaikanal with this relaxing hill station tour package.",
    descriptionTamil: "இந்த ஓய்வான மலை நிலைய சுற்றுலா தொகுப்புடன் ஊட்டி மற்றும் கொடைக்கானலின் குளிர்ந்த காலநிலைகளுக்கு தப்பியுங்கள்.",
    duration: 5,
    price: 25000,
    includes: [
      "Accommodation in scenic resorts",
      "Daily breakfast and dinner",
      "Air-conditioned transportation",
      "Boating activities",
      "Sightseeing tours",
      "Bonfire experience"
    ],
    includesTamil: [
      "அழகிய ரிசார்ட்டுகளில் தங்குமிடம்",
      "தினசரி காலை உணவு மற்றும் இரவு உணவு",
      "குளிர்சாதன போக்குவரத்து",
      "படகு செயல்பாடுகள்",
      "சுற்றுலா தலங்கள்",
      "கம்பம் அனுபவம்"
    ],
    destinations: ["Ooty", "Kodaikanal", "Coonoor"],
    destinationsTamil: ["ஊட்டி", "கொடைக்கானல்", "கூனூர்"]
  },
  {
    id: 3,
    name: "Cultural Tamil Nadu",
    nameTamil: "கலாச்சார தமிழ்நாடு",
    image: "https://images.pexels.com/photos/13692281/pexels-photo-13692281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Immerse yourself in the rich culture of Tamil Nadu with visits to historical sites, cultural performances, and traditional villages.",
    descriptionTamil: "வரலாற்று தளங்கள், கலாச்சார நிகழ்ச்சிகள் மற்றும் பாரம்பரிய கிராமங்களுக்கு வருகை புரிவதன் மூலம் தமிழ்நாட்டின் வளமான கலாச்சாரத்தில் உங்களை ஈடுபடுத்திக் கொள்ளுங்கள்.",
    duration: 8,
    price: 40000,
    includes: [
      "Accommodation in boutique heritage hotels",
      "All meals with authentic Tamil cuisine",
      "Air-conditioned transportation",
      "Cultural performance tickets",
      "Craft village visits",
      "Professional guide"
    ],
    includesTamil: [
      "பாரம்பரிய ஹோட்டல்களில் தங்குமிடம்",
      "உண்மையான தமிழ் உணவுடன் அனைத்து உணவுகளும்",
      "குளிர்சாதன போக்குவரத்து",
      "கலாச்சார நிகழ்ச்சி டிக்கெட்டுகள்",
      "கைவினை கிராம வருகைகள்",
      "தொழில்முறை வழிகாட்டி"
    ],
    destinations: ["Chennai", "Mahabalipuram", "Kumbakonam", "Thanjavur", "Madurai"],
    destinationsTamil: ["சென்னை", "மகாபலிபுரம்", "கும்பகோணம்", "தஞ்சாவூர்", "மதுரை"]
  },
  {
    id: 4,
    name: "Coastal Tamil Nadu",
    nameTamil: "கடலோர தமிழ்நாடு",
    image: "https://images.pexels.com/photos/12325089/pexels-photo-12325089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Explore the beautiful coastline of Tamil Nadu from Chennai to Kanyakumari, with stops at scenic beaches and coastal temples.",
    descriptionTamil: "அழகிய கடற்கரைகள் மற்றும் கடலோர கோயில்களில் நிறுத்தங்களுடன் சென்னையில் இருந்து கன்னியாகுமரி வரை தமிழ்நாட்டின் அழகிய கடற்கரையை ஆராயுங்கள்.",
    duration: 6,
    price: 30000,
    includes: [
      "Beachside resort accommodation",
      "Daily breakfast and dinner",
      "Air-conditioned transportation",
      "Boat rides",
      "Sunrise/sunset viewing at special spots",
      "Professional guide"
    ],
    includesTamil: [
      "கடற்கரை ரிசார்ட் தங்குமிடம்",
      "தினசரி காலை உணவு மற்றும் இரவு உணவு",
      "குளிர்சாதன போக்குவரத்து",
      "படகு சவாரி",
      "சிறப்பு இடங்களில் சூரியோதயம்/அஸ்தமனம் காண்பது",
      "தொழில்முறை வழிகாட்டி"
    ],
    destinations: ["Chennai", "Pondicherry", "Rameswaram", "Kanyakumari"],
    destinationsTamil: ["சென்னை", "பாண்டிச்சேரி", "ராமேஸ்வரம்", "கன்னியாகுமரி"]
  }
];