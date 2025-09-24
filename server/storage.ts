import { type User, type InsertUser, type Monastery, type InsertMonastery, type Experience, type InsertExperience, type Event, type InsertEvent, type BlogPost, type InsertBlogPost, type Product, type InsertProduct, type Review, type InsertReview, type NewsletterSubscription, type InsertNewsletterSubscription } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Monastery methods
  getAllMonasteries(): Promise<Monastery[]>;
  getMonastery(id: string): Promise<Monastery | undefined>;
  createMonastery(monastery: InsertMonastery): Promise<Monastery>;
  
  // Experience methods
  getAllExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  // Event methods
  getAllEvents(): Promise<Event[]>;
  getUpcomingEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Blog methods
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Product methods
  getAllProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Review methods
  getAllReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  
  // Newsletter methods
  subscribeNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private monasteries: Map<string, Monastery>;
  private experiences: Map<string, Experience>;
  private events: Map<string, Event>;
  private blogPosts: Map<string, BlogPost>;
  private products: Map<string, Product>;
  private reviews: Map<string, Review>;
  private newsletters: Map<string, NewsletterSubscription>;

  constructor() {
    this.users = new Map();
    this.monasteries = new Map();
    this.experiences = new Map();
    this.events = new Map();
    this.blogPosts = new Map();
    this.products = new Map();
    this.reviews = new Map();
    this.newsletters = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed monasteries
    const monasteryData: InsertMonastery[] = [
      {
        name: "Rumtek Monastery",
        description: "The largest monastery in Sikkim, known for its stunning architecture and spiritual significance in Tibetan Buddhism.",
        location: "East Sikkim",
        district: "East Sikkim",
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        elevation: 1550,
        established: 1966,
        significance: "Seat of the 16th Karmapa",
        visitingHours: "6:00 AM - 6:00 PM"
      },
      {
        name: "Pemayangtse Monastery",
        description: "One of Sikkim's oldest monasteries, offering panoramic views of the Kanchenjunga range and housing ancient artifacts.",
        location: "West Sikkim",
        district: "West Sikkim",
        imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        elevation: 2085,
        established: 1705,
        significance: "Premier monastery of Sikkim",
        visitingHours: "7:00 AM - 5:00 PM"
      },
      {
        name: "Tashiding Monastery",
        description: "Sacred site where merely seeing the monastery is believed to cleanse sins, set atop a heart-shaped hill.",
        location: "West Sikkim",
        district: "West Sikkim",
        imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        elevation: 1465,
        established: 1717,
        significance: "Most sacred monastery in Sikkim",
        visitingHours: "6:00 AM - 6:00 PM"
      },
      {
        name: "Enchey Monastery",
        description: "Built on a site blessed by Lama Druptob Karpo, known for its peaceful atmosphere and annual Cham dance festival.",
        location: "East Sikkim",
        district: "East Sikkim",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        elevation: 1840,
        established: 1909,
        significance: "Important Nyingma monastery",
        visitingHours: "5:00 AM - 7:00 PM"
      },
      {
        name: "Dubdi Monastery",
        description: "Sikkim's first monastery established in 1701, accessible through a scenic forest trek with incredible valley views.",
        location: "West Sikkim",
        district: "West Sikkim",
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        elevation: 2100,
        established: 1701,
        significance: "First monastery of Sikkim",
        visitingHours: "7:00 AM - 5:00 PM"
      },
      {
        name: "Ralong Monastery",
        description: "A spiritual haven hosting important religious ceremonies, surrounded by rhododendron forests and mountain streams.",
        location: "South Sikkim",
        district: "South Sikkim",
        imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        elevation: 1600,
        established: 1768,
        significance: "Important Kagyu monastery",
        visitingHours: "6:00 AM - 6:00 PM"
      }
    ];

    monasteryData.forEach(data => this.createMonastery(data));

    // Seed experiences
    const experienceData: InsertExperience[] = [
      {
        title: "Meditation Retreats",
        description: "Join guided meditation sessions with Buddhist monks in serene monastery settings.",
        imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        price: "₹1,500 - ₹5,000",
        duration: "3-7 days",
        difficulty: "Beginner"
      },
      {
        title: "Monastery Treks",
        description: "Embark on scenic treks to remote monasteries through pristine Himalayan landscapes.",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        price: "₹2,000 - ₹8,000",
        duration: "1-5 days",
        difficulty: "Moderate"
      },
      {
        title: "Cultural Workshops",
        description: "Learn traditional Buddhist arts, crafts, and philosophy from local masters.",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        price: "₹800 - ₹3,000",
        duration: "2-4 hours",
        difficulty: "All levels"
      },
      {
        title: "Sunrise Tours",
        description: "Witness breathtaking sunrises over the Himalayas from monastery viewpoints.",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        price: "₹500 - ₹1,500",
        duration: "3-4 hours",
        difficulty: "Easy"
      }
    ];

    experienceData.forEach(data => this.createExperience(data));

    // Seed events
    const eventData: InsertEvent[] = [
      {
        title: "Losar Festival",
        description: "Celebrate Tibetan New Year with traditional dances, prayers, and festive ceremonies.",
        imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        startDate: new Date("2025-02-10"),
        endDate: new Date("2025-02-12"),
        location: "Rumtek Monastery"
      },
      {
        title: "Cham Dance Festival",
        description: "Witness the sacred masked dances performed by monks in elaborate costumes.",
        imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        startDate: new Date("2025-01-28"),
        endDate: new Date("2025-01-29"),
        location: "Enchey Monastery"
      },
      {
        title: "Buddha Purnima",
        description: "Commemorate Buddha's birth, enlightenment, and nirvana with special prayers.",
        imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        startDate: new Date("2025-05-12"),
        location: "All Monasteries"
      },
      {
        title: "Silent Retreat",
        description: "Seven-day silent meditation retreat with experienced Buddhist teachers.",
        imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        startDate: new Date("2025-03-15"),
        endDate: new Date("2025-03-21"),
        location: "Tashiding Monastery"
      }
    ];

    eventData.forEach(data => this.createEvent(data));

    // Seed blog posts
    const blogData: InsertBlogPost[] = [
      {
        title: "Daily Life at Rumtek Monastery",
        excerpt: "Experience the peaceful rhythm of monastic life, from dawn prayers to evening meditation sessions at Sikkim's largest monastery.",
        content: "The daily routine at Rumtek Monastery begins before sunrise...",
        imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        category: "Monastery Life",
        author: "Lama Tenzin"
      },
      {
        title: "Ancient Texts and Sacred Teachings",
        excerpt: "Discover the priceless Buddhist manuscripts preserved in Sikkim's monasteries, containing centuries of spiritual wisdom.",
        content: "Within the walls of Sikkim's ancient monasteries lie treasures beyond measure...",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        category: "History",
        author: "Dr. Pemba Sherpa"
      },
      {
        title: "Sacred Architecture of the Himalayas",
        excerpt: "Explore the intricate design elements and spiritual symbolism embedded in Sikkim's monastery architecture.",
        content: "The architecture of Himalayan monasteries is a testament to spiritual devotion...",
        imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        category: "Architecture",
        author: "Architect Norbu Lama"
      }
    ];

    blogData.forEach(data => this.createBlogPost(data));

    // Seed products
    const productData: InsertProduct[] = [
      {
        name: "Prayer Wheels & Flags",
        description: "Handcrafted prayer wheels and colorful prayer flags blessed by monks, perfect for meditation and spiritual practice.",
        imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        price: "₹500 - ₹2,500",
        category: "Spiritual Items"
      },
      {
        name: "Singing Bowls",
        description: "Authentic Tibetan singing bowls crafted with traditional techniques, producing healing sounds for meditation.",
        imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        price: "₹1,200 - ₹5,000",
        category: "Musical Instruments"
      },
      {
        name: "Thangka Paintings",
        description: "Sacred Buddhist scroll paintings created by skilled artists, depicting deities, mandalas, and spiritual teachings.",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        price: "₹3,000 - ₹25,000",
        category: "Art"
      }
    ];

    productData.forEach(data => this.createProduct(data));

    // Seed reviews
    const reviewData: InsertReview[] = [
      {
        name: "Sarah Chen",
        location: "Singapore",
        text: "The monastery trek to Tashiding was life-changing. The serenity and spiritual energy of the place, combined with the breathtaking mountain views, created an unforgettable experience. The monks were incredibly welcoming.",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b2e5c6a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
      },
      {
        name: "Michael Rodriguez",
        location: "Spain",
        text: "Attending the meditation retreat at Rumtek Monastery opened my mind to new perspectives on mindfulness. The peaceful environment and guidance from the monks made it a transformative spiritual journey.",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
      },
      {
        name: "Priya Sharma",
        location: "Mumbai, India",
        text: "The Cham dance festival at Enchey was absolutely mesmerizing. The vibrant costumes, sacred music, and spiritual atmosphere created memories that will last a lifetime. A must-see cultural experience!",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
      }
    ];

    reviewData.forEach(data => this.createReview(data));
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Monastery methods
  async getAllMonasteries(): Promise<Monastery[]> {
    return Array.from(this.monasteries.values());
  }

  async getMonastery(id: string): Promise<Monastery | undefined> {
    return this.monasteries.get(id);
  }

  async createMonastery(insertMonastery: InsertMonastery): Promise<Monastery> {
    const id = randomUUID();
    const monastery: Monastery = { 
      ...insertMonastery, 
      id,
      elevation: insertMonastery.elevation ?? null,
      established: insertMonastery.established ?? null,
      significance: insertMonastery.significance ?? null,
      visitingHours: insertMonastery.visitingHours ?? null
    };
    this.monasteries.set(id, monastery);
    return monastery;
  }

  // Experience methods
  async getAllExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values());
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const id = randomUUID();
    const experience: Experience = { 
      ...insertExperience, 
      id,
      duration: insertExperience.duration ?? null,
      difficulty: insertExperience.difficulty ?? null
    };
    this.experiences.set(id, experience);
    return experience;
  }

  // Event methods
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const now = new Date();
    return Array.from(this.events.values()).filter(event => 
      new Date(event.startDate) >= now
    ).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { 
      ...insertEvent, 
      id,
      endDate: insertEvent.endDate ?? null,
      monasteryId: insertEvent.monasteryId ?? null
    };
    this.events.set(id, event);
    return event;
  }

  // Blog methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const blogPost: BlogPost = { 
      ...insertBlogPost, 
      id, 
      publishedAt: new Date() 
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  // Product methods
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      inStock: insertProduct.inStock ?? true
    };
    this.products.set(id, product);
    return product;
  }

  // Review methods
  async getAllReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = { 
      ...insertReview, 
      id, 
      createdAt: new Date() 
    };
    this.reviews.set(id, review);
    return review;
  }

  // Newsletter methods
  async subscribeNewsletter(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = randomUUID();
    const subscription: NewsletterSubscription = { 
      ...insertSubscription, 
      id, 
      subscribedAt: new Date() 
    };
    this.newsletters.set(id, subscription);
    return subscription;
  }
}

export const storage = new MemStorage();
