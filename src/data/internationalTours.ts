export interface InternationalTour {
  id: number;
  name: string;
  nameTamil: string;
  description: string;
  descriptionTamil: string;
  image: string;
  duration: string;
  price: number;
  destinations: string[];
  includes: string[];
  location: {
    lat: number;
    lng: number;
  };
}

export const internationalTours: InternationalTour[] = [
  {
    id: 1,
    name: "European Dream",
    nameTamil: "ஐரோப்பிய கனவு",
    description: "Experience the best of Europe with visits to France, Switzerland, Italy, and Germany.",
    descriptionTamil: "பிரான்ஸ், சுவிட்சர்லாந்து, இத்தாலி மற்றும் ஜெர்மனி ஆகிய நாடுகளுக்கு விஜயம் செய்து ஐரோப்பாவின் சிறந்தவற்றை அனுபவிக்கவும்.",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    duration: "12 Days",
    price: 250000,
    destinations: ["Paris", "Zurich", "Rome", "Berlin"],
    includes: [
      "International Flights",
      "4-Star Hotels",
      "Daily Breakfast",
      "Sightseeing Tours",
      "Visa Assistance"
    ],
    location: {
      lat: 48.8566,
      lng: 2.3522
    }
  },
  {
    id: 2,
    name: "Dubai & Abu Dhabi Explorer",
    nameTamil: "துபாய் & அபுதாபி எக்ஸ்ப்ளோரர்",
    description: "Discover the modern marvels and traditional charm of the UAE.",
    descriptionTamil: "யுஏஇயின் நவீன அற்புதங்கள் மற்றும் பாரம்பரிய கவர்ச்சியைக் கண்டறியுங்கள்.",
    image: "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg",
    duration: "6 Days",
    price: 120000,
    destinations: ["Dubai", "Abu Dhabi"],
    includes: [
      "Return Flights",
      "5-Star Hotels",
      "Desert Safari",
      "City Tours",
      "Burj Khalifa Visit"
    ],
    location: {
      lat: 25.2048,
      lng: 55.2708
    }
  }
];