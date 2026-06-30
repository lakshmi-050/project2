const sampleListings = [
  {
    title: "Luxury Mountain Retreat",
    description: "Beautiful villa surrounded by hills",
    image:  { 
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 2500,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Cozy Lake House",
    description: "Peaceful stay beside the lake",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 1800,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Modern City Apartment",
    description: "Located in the heart of the city",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 1400,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "Beachfront Paradise",
    description: "Wake up to stunning sea views",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 3200,
    location: "Goa",
    country: "India"
  },
  {
    title: "Royal Heritage Haveli",
    description: "Experience traditional luxury",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 2800,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Green Valley Cottage",
    description: "Perfect getaway in nature",
    image:  { 
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 1600,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "Urban Sky Penthouse",
    description: "Premium penthouse with skyline view",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1623298317883-6b70254edf31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 4500,
    location: "Bengaluru, Karnataka",
    country: "India"
  },
  {
    title: "Desert View Resort",
    description: "Enjoy sunsets in the desert",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 2200,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Snow Peak Chalet",
    description: "Comfortable chalet near snow-covered peaks",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1623298317883-6b70254edf31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 3500,
    location: "Gulmarg, Jammu & Kashmir",
    country: "India"
  },
  {
    title: "Riverside Bungalow",
    description: "Relax by the flowing river",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 1700,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Tea Garden Estate",
    description: "Stay amidst lush tea plantations",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 2100,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Island Escape Villa",
    description: "Private villa with tropical vibes",
    image:  { 
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0& ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 5000,
    location: "Port Blair, Andaman & Nicobar Islands",
    country: "India"
  },
  {
    title: "Sunset Beach Villa",
    description: "Luxury villa with breathtaking sunset views",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 4200,
    location: "Puducherry",
    country: "India"
  },
  {
    title: "Forest Retreat Cabin",
    description: "A peaceful cabin surrounded by dense forests",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 1800,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Royal Palace Stay",
    description: "Live like royalty in a heritage property",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 3800,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "City Lights Apartment",
    description: "Modern apartment in the city center",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 1600,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Hilltop Cottage",
    description: "Enjoy panoramic views from the hills",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww",
    },
    price: 2300,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Ocean Breeze Resort",
    description: "Relax with the sound of ocean waves",
    image:  { 
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww",
    },
    price: 3500,
    location: "Kovalam, Kerala",
    country: "India"
  },
  {
    title: "Heritage Courtyard Home",
    description: "Traditional architecture with modern comfort",
    image:  { 
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
    },
    price: 2700,
    location: "Lucknow, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Luxury Sky Villa",
    description: "Exclusive penthouse with skyline views",
    image: { 
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fHww",
    },
    price: 4800,
    location: "Hyderabad, Telangana",
    country: "India"
  },
  {
    title: "Coffee Estate Bungalow",
    description: "Stay among coffee plantations",
    image:  { 
       filename:"listingimage",
       url:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    },
    price: 2200,
    location: "Chikmagalur, Karnataka",
    country: "India"
  },
  {
    title: "Riverside Escape",
    description: "Comfortable stay beside a flowing river",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 1900,
    location: "Haridwar, Uttarakhand",
    country: "India"
  },
  {
    title: "Golden Desert Camp",
    description: "Authentic desert living experience",
    image:  { 
      filename:"listingimage",
      url:"https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 2400,
    location: "Bikaner, Rajasthan",
    country: "India"
  },
  {
    title: "Tea Valley Cottage",
    description: "Charming cottage in lush tea gardens",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1692736933760-8a8a9b8c1b6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 2000,
    location: "Ooty, Tamil Nadu",
    country: "India"
  },
  {
    title: "Island Dream House",
    description: "Private home with tropical surroundings",
    image:  { 
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 5200,
    location: "Havelock Island",
    country: "India"
  },
  {
    title: "Lake View Residency",
    description: "Scenic accommodation overlooking a lake",
    image:  { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 2100,
    location: "Bhopal, Madhya Pradesh",
    country: "India"
  },
  {
    title: "Garden Paradise Villa",
    description: "Beautiful villa surrounded by gardens",
    image: { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 2900,
    location: "Mysuru, Karnataka",
    country: "India"
  },
  {
    title: "Modern Loft Studio",
    description: "Stylish loft perfect for travelers",
    image: { 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHZpbGxhfGVufDB8fDB8fHww",
    },
    price: 1500,
    location: "Pune, Maharashtra",
    country: "India"
  },
  {
    title: "Historic Townhouse",
    description: "Stay in a beautifully restored townhouse",
    image: { 
  filename:"listingimage",
  url: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=i9KGcEkXnyJbWOHE6o0sHok_lNbpb9UMfb7uX2P9NDw=",
    },
    price: 2300,
    location: "Kolkata, West Bengal",
    country: "India"
  },
  {
    title: "Mangrove Creek Cottage",
    description: "Unique stay near serene mangroves",
    image: { 
  filename:"listingimage",
  url: "https://media.istockphoto.com/id/909423306/photo/modern-multilevel-house-exterior-with-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=sP_kd0PhGsGvGjgAhu9aTu9U4-PgZ64EEFZVZMjuoYQ=",
    },
    price: 2800,
    location: "Sundarbans, West Bengal",
    country: "India"
  },
  {
    title: "Temple Town Residence",
    description: "Comfortable stay near famous temples",
    image: { 
  filename:"listingimage",
  url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 1400,
    location: "Madurai, Tamil Nadu",
    country: "India"
  },
  {
    title: "Luxury Marina Apartment",
    description: "Elegant apartment with waterfront views",
    image:  { 
  filename:"listingimage",
  url: "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 4100,
    location: "Kochi, Kerala",
    country: "India"
  },
  {
    title: "Adventure Base Camp",
    description: "Perfect for trekking enthusiasts",
    image: { 
  filename:"listingimage",
  url:"https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 1700,
    location: "Leh, Ladakh",
    country: "India"
  },
  {
    title: "Countryside Farmhouse",
    description: "Experience rural life in comfort",
    image: {
    filename:"listingimage",
    url:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
    },
    price: 1900,
    location: "Nashik, Maharashtra",
    country: "India"
  },
  {
    title: "Harbor View Suites",
    description: "Premium suites overlooking the harbor",
    image:{
    filename:"listingimage",
     url:"https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 3600,
    location: "Visakhapatnam, Andhra Pradesh",
    country: "India"
  },
  {
  title: "Cliffside Luxury Villa",
  description: "Stunning villa perched on a scenic cliff",
  image: { 
     filename:"listingimage",
     url:"https://plus.unsplash.com/premium_photo-1686090449625-16579c8ac225?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlueSUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
  },
  price: 5500,
  location: "Varkala, Kerala",
  country: "India"
},
{
  title: "Seaside Cottage",
  description: "Charming cottage just steps from the beach",
  image: {
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1668015642451-a3bb11afb441?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlueSUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
  },
  price: 2100,
  location: "Alibaug, Maharashtra",
  country: "India"
},
{
  title: "Mountain View Chalet",
  description: "Relax with breathtaking mountain views",
  image: {
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1601312044126-06d550c15beb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGlueSUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
  },
  price: 2900,
  location: "Kasauli, Himachal Pradesh",
  country: "India"
},
{
  title: "Urban Business Suite",
  description: "Ideal stay for business travelers",
  image: {
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1697462248408-25479e5acfb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRpbnklMjBob21lfGVufDB8fDB8fHww",
  },
  price: 2400,
  location: "Gurugram, Haryana",
  country: "India"
},
{
  title: "Backwater Haven",
  description: "Peaceful retreat along Kerala backwaters",
  image:{
    filename:"listingimage",
    url:"https://images.unsplash.com/photo-1686666778261-1139c6842153?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRpbnklMjBob21lfGVufDB8fDB8fHww"
  },
  price: 3300,
  location: "Alappuzha, Kerala",
  country: "India"
},
{
  title: "Jungle Safari Lodge",
  description: "Stay close to wildlife and nature",
  image: {
    filename:"listingimage",
    url:"https://media.istockphoto.com/id/2217601483/photo/cute-tiny-yellow-house-on-green-lawn-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=e3OQnxzhIIkGOkOg_0G8EuWaJ54sGLeCVRR9Wt21rK0="
  },
  price: 2600,
  location: "Jim Corbett, Uttarakhand",
  country: "India"
},
{
  title: "Rooftop Skyline Penthouse",
  description: "Exclusive penthouse with city skyline views",
  image:{
    filename:"listingimage",
    url:"https://media.istockphoto.com/id/2224677065/photo/modern-tiny-house-with-wooden-and-black-metal-facade-surrounded-by-greenery-lit-by-soft.webp?a=1&b=1&s=612x612&w=0&k=20&c=nJCL5A6hEPQBZ8Li_uxWWy1h0EeyE3qlTyap79S2feI="
  },
  price: 6200,
  location: "Chennai, Tamil Nadu",
  country: "India"
},
{
  title: "Valley Breeze Homestay",
  description: "Comfortable homestay surrounded by greenery",
  image: {
  filename:"listingimage",
  url:"https://media.istockphoto.com/id/1454099860/photo/exterior-of-wooden-tiny-house-with-forest-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=AYLcuMQB6C2ZE4mcLcUUa0ptBBqnJop1ZEI6ak6T_Ao="
  },
  price: 1700,
  location: "Gangtok, Sikkim",
  country: "India"
}
];

module.exports = { data:sampleListings };