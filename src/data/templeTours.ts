export interface TempleTour {
  id: number;
  name: string;
  nameTamil: string;
  description: string;
  descriptionTamil: string;
  image: string;
  duration: string;
  price: number;
  temples: {
    name: string;
    nameTamil: string;
    description: string;
    descriptionTamil: string;
    image: string;
    location: {
      lat: number;
      lng: number;
    };
  }[];
}

export const arupadaiVeeduTour: TempleTour = {
  id: 1,
  name: "Arupadai Veedu Tour",
  nameTamil: "ஆறுபடை வீடு சுற்றுலா",
  description: "Visit the six sacred abodes of Lord Murugan in Tamil Nadu.",
  descriptionTamil: "தமிழ்நாட்டில் உள்ள முருகப்பெருமானின் ஆறு புனித இல்லங்களைப் பார்வையிடவும்.",
  image: "https://images.pexels.com/photos/6393328/pexels-photo-6393328.jpeg",
  duration: "6 Days",
  price: 35000,
  temples: [
    {
      name: "Palani Murugan Temple",
      nameTamil: "பழனி முருகன் கோயில்",
      description: "The third Padai Veedu, where Lord Murugan stands as a renunciant.",
      descriptionTamil: "மூன்றாவது படை வீடு, அங்கு முருகப்பெருமான் துறவியாக நிற்கிறார்.",
      image: "https://images.pexels.com/photos/6393328/pexels-photo-6393328.jpeg",
      location: {
        lat: 10.4393,
        lng: 77.5252
      }
    },
    {
      name: "Thiruchendur Murugan Temple",
      nameTamil: "திருச்செந்தூர் முருகன் கோயில்",
      description: "The second Padai Veedu, located on the shores of the Bay of Bengal.",
      descriptionTamil: "வங்காள விரிகுடாக் கரையில் அமைந்துள்ள இரண்டாவது படை வீடு.",
      image: "https://images.pexels.com/photos/4201659/pexels-photo-4201659.jpeg",
      location: {
        lat: 8.4944,
        lng: 78.1198
      }
    }
    // Add other temples similarly
  ]
};

export const templeTours: TempleTour[] = [
  arupadaiVeeduTour,
  // Add more temple tours
];