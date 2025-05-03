export interface Destination {
  id: number;
  name: string;
  nameTamil: string;
  image: string;
  description: string;
  descriptionTamil: string;
  location: string;
  locationTamil: string;
  fullDescription?: string;
  fullDescriptionTamil?: string;
  temples?: {
    name: string;
    nameTamil: string;
    description: string;
    descriptionTamil: string;
    image: string;
  }[];
  attractions?: {
    name: string;
    nameTamil: string;
    description: string;
    descriptionTamil: string;
    image: string;
  }[];
  bestTimeToVisit?: string;
  bestTimeToVisitTamil?: string;
  howToReach?: {
    mode: string;
    modeTamil: string;
    details: string;
    detailsTamil: string;
  }[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Thanjavur",
    nameTamil: "தஞ்சாவூர்",
    image: "https://images.pexels.com/photos/13692281/pexels-photo-13692281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Home to the UNESCO World Heritage Brihadeeswarar Temple, Thanjavur is famous for its rich cultural heritage, art, and architecture.",
    descriptionTamil: "யுனெஸ்கோ உலக பாரம்பரிய பிரகதீஸ்வரர் கோயிலுக்கு இருப்பிடமான தஞ்சாவூர், அதன் வளமான கலாச்சார பாரம்பரியம், கலை மற்றும் கட்டிடக்கலைக்கு புகழ் பெற்றது.",
    location: "Thanjavur District, Tamil Nadu",
    locationTamil: "தஞ்சாவூர் மாவட்டம், தமிழ்நாடு",
    fullDescription: "Thanjavur, the ancient capital of the Chola dynasty, is a cultural treasure trove. The city's crown jewel is the magnificent Brihadeeswarar Temple, built in 1010 CE by Raja Raja Chola I. The temple is a masterpiece of Dravidian architecture and features one of the largest Shiva lingams in India. Beyond its spiritual significance, Thanjavur is renowned for its classical dance, music, and the unique Thanjavur painting style.",
    fullDescriptionTamil: "சோழ வம்சத்தின் பழைய தலைநகரமான தஞ்சாவூர் ஒரு கலாச்சார கருவூலமாகும். நகரத்தின் முடிமணி ராஜராஜ சோழன் I ஆல் 1010 CE இல் கட்டப்பட்ட மகத்தான பிரகதீஸ்வரர் கோயில். கோயில் திராவிட கட்டிடக்கலையின் ஒரு தலைசிறந்த படைப்பாகும் மற்றும் இந்தியாவின் மிகப்பெரிய சிவலிங்கங்களில் ஒன்றைக் கொண்டுள்ளது. அதன் ஆன்மீக முக்கியத்துவத்திற்கு அப்பால், தஞ்சாவூர் அதன் பாரம்பரிய நடனம், இசை மற்றும் தனித்துவமான தஞ்சாவூர் ஓவிய பாணிக்கு பெயர் பெற்றது.",
    temples: [
      {
        name: "Brihadeeswarar Temple",
        nameTamil: "பிரகதீஸ்வரர் கோயில்",
        description: "A UNESCO World Heritage site and one of the largest temples in India, known for its 216-foot high vimana.",
        descriptionTamil: "யுனெஸ்கோ உலக பாரம்பரிய தளம் மற்றும் இந்தியாவின் மிகப்பெரிய கோயில்களில் ஒன்று, 216 அடி உயர விமானத்திற்கு பெயர் பெற்றது.",
        image: "https://images.pexels.com/photos/13692281/pexels-photo-13692281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    attractions: [
      {
        name: "Thanjavur Royal Palace",
        nameTamil: "தஞ்சாவூர் அரண்மனை",
        description: "Historical palace complex featuring Durbar Hall, Bell Tower, and Saraswati Mahal Library.",
        descriptionTamil: "தர்பார் ஹால், மணி கோபுரம் மற்றும் சரஸ்வதி மஹால் நூலகம் ஆகியவற்றைக் கொண்ட வரலாற்று அரண்மனை வளாகம்.",
        image: "https://images.pexels.com/photos/6393328/pexels-photo-6393328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    bestTimeToVisit: "October to March when the weather is pleasant with temperatures ranging from 15°C to 30°C",
    bestTimeToVisitTamil: "அக்டோபர் முதல் மார்ச் வரை வெப்பநிலை 15°C முதல் 30°C வரை இருக்கும் இனிமையான காலநிலை",
    howToReach: [
      {
        mode: "By Air",
        modeTamil: "விமானம் மூலம்",
        details: "Nearest airport is Tiruchirappalli International Airport (55 km)",
        detailsTamil: "அருகிலுள்ள விமான நிலையம் திருச்சிராப்பள்ளி சர்வதேச விமான நிலையம் (55 கிமீ)"
      },
      {
        mode: "By Train",
        modeTamil: "ரயில் மூலம்",
        details: "Thanjavur Junction is well-connected to major cities",
        detailsTamil: "தஞ்சாவூர் ஜங்ஷன் பெரிய நகரங்களுடன் நன்கு இணைக்கப்பட்டுள்ளது"
      }
    ]
  },
  // ... (similar detailed entries for other destinations)
];

export interface TempleCircuit {
  id: number;
  name: string;
  nameTamil: string;
  state: string;
  stateTamil: string;
  description: string;
  descriptionTamil: string;
  image: string;
  duration: string;
  durationTamil: string;
  temples: {
    name: string;
    nameTamil: string;
    location: string;
    locationTamil: string;
    description: string;
    descriptionTamil: string;
    image: string;
  }[];
}

export const templeCircuits: TempleCircuit[] = [
  {
    id: 1,
    name: "Tamil Nadu Temple Circuit",
    nameTamil: "தமிழ்நாடு கோயில் சுற்று",
    state: "Tamil Nadu",
    stateTamil: "தமிழ்நாடு",
    description: "Experience the divine architecture and spiritual essence of Tamil Nadu's most revered temples.",
    descriptionTamil: "தமிழ்நாட்டின் மிகவும் போற்றப்படும் கோயில்களின் தெய்வீக கட்டிடக்கலை மற்றும் ஆன்மீக சாராம்சத்தை அனுபவிக்கவும்.",
    image: "https://images.pexels.com/photos/4201659/pexels-photo-4201659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "7 Days",
    durationTamil: "7 நாட்கள்",
    temples: [
      {
        name: "Meenakshi Amman Temple",
        nameTamil: "மீனாட்சி அம்மன் கோயில்",
        location: "Madurai",
        locationTamil: "மதுரை",
        description: "Ancient temple dedicated to Goddess Meenakshi with stunning architecture and 14 gopurams.",
        descriptionTamil: "தேவி மீனாட்சிக்கு அர்ப்பணிக்கப்பட்ட அழகிய கட்டிடக்கலை மற்றும் 14 கோபுரங்களுடன் கூடிய பழமையான கோயில்.",
        image: "https://images.pexels.com/photos/4201659/pexels-photo-4201659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 2,
    name: "Kerala Temple Circuit",
    nameTamil: "கேரளா கோயில் சுற்று",
    state: "Kerala",
    stateTamil: "கேரளா",
    description: "Discover the unique architecture and rituals of Kerala's ancient temples.",
    descriptionTamil: "கேரளாவின் பழமையான கோயில்களின் தனித்துவமான கட்டிடக்கலை மற்றும் சடங்குகளை கண்டறியுங்கள்.",
    image: "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "5 Days",
    durationTamil: "5 நாட்கள்",
    temples: [
      {
        name: "Padmanabhaswamy Temple",
        nameTamil: "பத்மநாபசுவாமி கோயில்",
        location: "Thiruvananthapuram",
        locationTamil: "திருவனந்தபுரம்",
        description: "One of the wealthiest temples in the world, known for its Dravidian architecture.",
        descriptionTamil: "உலகின் மிகவும் செல்வந்த கோயில்களில் ஒன்று, திராவிட கட்டிடக்கலைக்கு பெயர் பெற்றது.",
        image: "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  }
];

export interface HoneymoonDestination {
  id: number;
  name: string;
  nameTamil: string;
  description: string;
  descriptionTamil: string;
  image: string;
  duration: string;
  durationTamil: string;
  highlights: string[];
  highlightsTamil: string[];
  bestTimeToVisit: string;
  bestTimeToVisitTamil: string;
  price: number;
}

export const honeymoonDestinations: HoneymoonDestination[] = [
  {
    id: 1,
    name: "Romantic Ooty & Kodaikanal",
    nameTamil: "காதல் ஊட்டி & கொடைக்கானல்",
    description: "Experience the perfect romantic getaway in the enchanting hill stations of Tamil Nadu.",
    descriptionTamil: "தமிழ்நாட்டின் மயக்கும் மலை நிலையங்களில் சரியான காதல் விடுமுறையை அனுபவிக்கவும்.",
    image: "https://images.pexels.com/photos/5759945/pexels-photo-5759945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "6 Days",
    durationTamil: "6 நாட்கள்",
    highlights: [
      "Scenic boat ride in Ooty Lake",
      "Private dinner at Kodaikanal Lake view",
      "Romantic walks in botanical gardens",
      "Cozy stays in luxury resorts"
    ],
    highlightsTamil: [
      "ஊட்டி ஏரியில் அழகிய படகு சவாரி",
      "கொடைக்கானல் ஏரி காட்சியில் தனியார் இரவு உணவு",
      "தாவரவியல் பூங்காக்களில் காதல் நடைபயிற்சி",
      "சொகுசு ரிசார்ட்டுகளில் அழகிய தங்குமிடம்"
    ],
    bestTimeToVisit: "September to May",
    bestTimeToVisitTamil: "செப்டம்பர் முதல் மே வரை",
    price: 45000
  }
];