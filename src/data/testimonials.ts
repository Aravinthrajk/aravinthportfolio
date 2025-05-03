export interface Testimonial {
  id: number;
  name: string;
  image: string;
  tourType: string;
  tourTypeTamil: string;
  comment: string;
  commentTamil: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tourType: "Spiritual Tamil Nadu Tour",
    tourTypeTamil: "ஆன்மீக தமிழ்நாடு சுற்றுலா",
    comment: "Our family trip to the temples of Tamil Nadu was absolutely incredible. The guides were knowledgeable and the entire experience was seamless. Highly recommend!",
    commentTamil: "தமிழ்நாட்டு கோயில்களுக்கு எங்கள் குடும்ப பயணம் முற்றிலும் அற்புதமாக இருந்தது. வழிகாட்டிகள் அறிவு மிக்கவர்கள் மற்றும் முழு அனுபவமும் தடையற்றதாக இருந்தது. மிகவும் பரிந்துரைக்கிறேன்!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Venkatesh",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tourType: "Hill Station Retreat",
    tourTypeTamil: "மலை நிலைய ஓய்வகம்",
    comment: "The Ooty and Kodaikanal tour was perfect for our honeymoon. The accommodations were excellent and the scenic views were breathtaking.",
    commentTamil: "ஊட்டி மற்றும் கொடைக்கானல் சுற்றுலா எங்கள் தேனிலவு பயணத்திற்கு சரியானதாக இருந்தது. தங்குமிடங்கள் சிறப்பாக இருந்தன மற்றும் இயற்கை காட்சிகள் மூச்சை அடக்கிய வகையில் இருந்தன.",
    rating: 5
  },
  {
    id: 3,
    name: "Anand Sharma",
    image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tourType: "Cultural Tamil Nadu",
    tourTypeTamil: "கலாச்சார தமிழ்நாடு",
    comment: "As a history enthusiast, I was impressed by the depth of knowledge our guide had. The cultural experiences arranged were authentic and memorable.",
    commentTamil: "ஒரு வரலாற்று ஆர்வலராக, எங்கள் வழிகாட்டிக்கு இருந்த அறிவின் ஆழத்தால் நான் மிகவும் ஈர்க்கப்பட்டேன். ஏற்பாடு செய்யப்பட்ட கலாச்சார அனுபவங்கள் உண்மையானவை மற்றும் நினைவில் நிற்கக்கூடியவை.",
    rating: 4
  },
  {
    id: 4,
    name: "Lakshmi Narayan",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tourType: "Coastal Tamil Nadu",
    tourTypeTamil: "கடலோர தமிழ்நாடு",
    comment: "The coastal tour was a refreshing experience. Watching the sunrise at Kanyakumari was a spiritual moment I'll never forget.",
    commentTamil: "கடலோர சுற்றுலா ஒரு புத்துணர்ச்சி அனுபவமாக இருந்தது. கன்னியாகுமரியில் சூரியோதயத்தைப் பார்ப்பது நான் ஒருபோதும் மறக்க முடியாத ஒரு ஆன்மீக தருணமாக இருந்தது.",
    rating: 5
  }
];