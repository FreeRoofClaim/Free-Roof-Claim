import { AlertTriangle, Shield, Clock, Award, Search, FileText, Wrench, TrendingUp, Users, CheckCircle, Star, DollarSign } from "lucide-react";

// Trust Signals
export const reviews = [
    {
      name: "David Thompson",
      location: "Dallas, TX",
      review: "Got my roof replaced completely free! The team was professional and handled everything with my insurance.",
      photo: "/testimonial/Pic-1.webp"
    },
    {
      name: "Michael Chen",
      location: "Houston, TX",
      review: "Amazing service! They made the entire process so easy. Highly recommend to anyone needing roof work.",
      photo: "/testimonial/Pic-2.webp"
    },
    {
      name: "Mike Chen",
      location: "Austin, TX",
      review: "Free inspection led to a full roof replacement.",
      photo: "/testimonial/Pic-3.webp"
    },
    {
      name: "Sarah Johnson",
      location: "San Antonio, TX",
      review: "Professional team from start to finish. The insurance claim process was seamless.",
      photo: "/testimonial/Pic-4.webp"
    },
    {
      name: "Emily Rodriguez",
      location: "Fort Worth, TX",
      review: "Best decision I made! They handled everything and I only paid my deductible.",
      photo: "/testimonial/Pic-5.webp"
    },
    {
      name: "Robert Williams",
      location: "El Paso, TX",
      review: "Outstanding service! The inspection was thorough and the roof replacement was top quality.",
      photo: "/testimonial/Pic-6.webp"
    }
  ];

//   Did You Know
export const didYouKnowCards = [
    {
      id: 1,
      icon: AlertTriangle,
      title: "Hidden Damage",
      description: "Hail damage isn't always visible but can cause leaks and structural issues over time. Most customers don't even realize they have damage.",
      stat: "85%",
      statLabel: "Damage Goes Unnoticed"
    },
    {
      id: 2,
      icon: Shield,
      title: "Insurance Coverage",
      description: "Covers your roof! You just cover your deductible.",
      stat: "100%",
      statLabel: "Coverage Available"
    },
    {
      id: 3,
      icon: Clock,
      title: "Time Limits",
      description: "You only have 1 year from the storm date to file your insurance claim.",
      stat: "1 Year",
      statLabel: "Filing Deadline"
    },
    {
      id: 4,
      icon: Award,
      title: "Expert Help",
      description: "Professional claim assistance increases approval rates by 300%. Let our experts handle it.",
      stat: "300%",
      statLabel: "Higher Success Rate"
    }
  ];

//   How It Works
export const howItWorksSteps = [
    {
      id: 1,
      number: "01",
      title: "Free Professional Inspection",
      subtitle: "Expert Damage Detection",
      description: "Our licensed roofing experts conduct a comprehensive roof inspection at no cost to you. Professional assessment and drone analysis detect all types of damage.",
      icon: Search,
      color: "blue",
      gradient: "from-blue-600 to-blue-500",
      bgGradient: "from-blue-600/10 to-blue-500/10",
      borderColor: "border-blue-400/30",
      features: ["Professional Analysis", "Drone Technology", "Expert Assessment", "Zero Cost to You"],
      image: "/process-1.png"
    },
    {
      id: 2,
      number: "02",
      title: "Insurance Claim Filing",
      subtitle: "Expert Claim Management",
      description: "We handle all paperwork and work directly with your insurance company using our proprietary claim optimization system. Our 99.7% approval rate speaks for itself.",
      icon: FileText,
      color: "purple",
      gradient: "from-blue-700 to-blue-600",
      bgGradient: "from-blue-700/10 to-blue-600/10",
      borderColor: "border-blue-500/30",
      features: ["99.7% Approval Rate", "Zero Paperwork", "Direct Insurance Contact", "Claim Optimization"],
      image: "/process-2.png"
    },
    {
      id: 3,
      number: "03",
      title: "Professional Installation",
      subtitle: "Premium Roof Replacement",
      description: "Top-rated local contractors install your premium new roof using the finest materials. You pay only your insurance deductible - we handle the rest completely.",
      icon: Wrench,
      color: "emerald",
      gradient: "from-green-600 to-green-500",
      bgGradient: "from-green-600/10 to-green-500/10",
      borderColor: "border-green-400/30",
      features: ["Premium Materials", "Licensed Contractors", "Lifetime Warranty", "Deductible Only"],
      image: "/process-3.png"
    }
  ];

//   Trusted By Thousands
export const trustFeatures = [
    {
      id: 1,
      icon: Shield,
      text: "Licensed and insured in all 50 states",
      color: "emerald"
    },
    {
      id: 2,
      icon: Clock,
      text: "Over 15 years of roofing experience",
      color: "blue"
    },
    {
      id: 3,
      icon: Award,
      text: "A+ Better Business Bureau rating",
      color: "amber"
    },
    {
      id: 4,
      icon: TrendingUp,
      text: "Million-dollar liability insurance",
      color: "purple"
    }
  ];
  
  export const stats = [
    {
      id: 1,
      number: "10,000+",
      label: "Happy Customers",
      icon: Users
    },
    {
      id: 2,
      number: "99.7%",
      label: "Approval Rate",
      icon: CheckCircle
    },
    {
      id: 3,
      number: "4.9/5",
      label: "Customer Rating",
      icon: Star
    },
    {
      id: 4,
      number: "$180M+",
      label: "Claims Processed",
      icon: TrendingUp
    }
  ];

//   Testimonials
export const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Dallas, TX",
      rating: 5,
      text: "I had no idea my insurance would cover my entire roof! Got a brand new roof for just my $1,000 deductible.",
      saved: "$18,500",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Denver, CO",
      rating: 5,
      text: "The process was so easy. They handled everything with my insurance company. Highly recommend!",
      saved: "$22,000",
      avatar: "MR"
    },
    {
      id: 3,
      name: "Lisa Chen",
      location: "Kansas City, KS",
      rating: 5,
      text: "After the hail storm last year, I thought I'd have to pay thousands. Insurance covered it all!",
      saved: "$15,800",
      avatar: "LC"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Austin, TX",
      rating: 5,
      text: "Amazing service! They found damage I didn't even know existed. Got a complete roof replacement covered.",
      saved: "$24,300",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      location: "Phoenix, AZ",
      rating: 5,
      text: "Professional team, seamless process. My insurance claim was approved in just 3 days!",
      saved: "$19,700",
      avatar: "JM"
    },
    {
      id: 6,
      name: "Robert Kim",
      location: "Atlanta, GA",
      rating: 5,
      text: "Best decision ever! They handled all the paperwork and I got a premium roof upgrade at no cost.",
      saved: "$21,200",
      avatar: "RK"
    }
  ];

  export const customrStats = [
    {
      id: 1,
      icon: Star,
      title: "4.9/5",
      description: "Customer Rating",
    },
    {
      id: 2,
      icon: Users,
      title: "10,000+",
      description: "Happy Customers",
    },
    {
      id: 3,
      icon: DollarSign,
      title: "$180M+",
      description: "Claims Processed",
    },
  ];

//   Money On Table
export const moneyOnTableCards = [
    {
      id: 1,
      icon: DollarSign,
      title: "$0 Upfront Cost",
      description: "No money out of pocket until your insurance claim is approved and processed",
      features: ["Zero upfront payment", "Pay only deductible"],
    },
    {
      id: 2,
      icon: Clock,
      title: "24-Hour Response",
      description: "We'll inspect your roof within 24 hours and start your claim process immediately.",
      features: ["Fast inspection", "Quick claim filing"],
    },
    {
      id: 3,
      icon: Award,
      title: "Lifetime Warranty",
      description: "All of our roofs come with comprehensive warranties.",
      features: ["Full coverage", "Peace of mind"],
    },
  ];

//   FAQs
export const faqs = [
  {
    question: "How fast can you repair storm-damaged roofs?",
    answer:
      "Our expert team can usually repair most storm-damaged roofs within 1–3 days, depending on the size and severity of the damage. We prioritize safety and quality, ensuring your home is protected quickly.",
  },
  {
    question: "Do you handle insurance claims for roof damage?",
    answer:
      "Yes! Free Roof Pros assists homeowners with filing insurance claims for roof damage. We guide you through the process, document damages, and communicate with your insurance company to make sure you get the coverage you deserve.",
  },
  {
    question: "What types of roofs do you repair or replace?",
    answer:
      "We work on asphalt shingles, metal roofs, tile roofs, and flat roofs. Whether it’s a minor repair or a full replacement, our licensed and insured contractors have the experience to handle it all.",
  },
  {
    question: "Are your roofing services available in my city?",
    answer:
      "We proudly serve homeowners in Dallas, Plano, Fort Worth, Arlington, and surrounding areas. If you’re unsure whether we cover your area, just contact us and we’ll confirm.",
  },
  {
    question: "How much does a roof replacement cost?",
    answer:
      "The cost depends on your roof size, materials, and extent of damage. We provide free, no-obligation quotes so you know exactly what to expect before any work begins.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Absolutely! All our roofing repairs and replacements come with a comprehensive warranty for materials and labor, giving you peace of mind for years to come.",
  },
  {
    question: "Can you repair hail damage on my roof?",
    answer:
      "Yes, we specialize in storm and hail damage repair. Our team will assess the damage, provide a detailed report, and restore your roof efficiently and professionally.",
  },
  {
    question: "Is your team licensed and insured?",
    answer:
      "Yes. All our contractors are fully licensed and insured to protect your property and ensure professional-quality work every time.",
  },
  {
    question: "Do you offer emergency roof repair services?",
    answer:
      "We do! Storm damage can’t wait. Our emergency roofing team is available 24/7 to address urgent repairs and prevent further damage to your home.",
  },
  {
    question: "How do I get a free roof replacement quote?",
    answer:
      "Getting a free quote is simple! Just fill out our online form or call our office, and one of our roofing specialists will provide an accurate estimate within 24 hours.",
  },
];

//   Footer
export const footerServices = [
    {name:'Storm Damage Repair',url: '/services/storm-damage-repair'},
    {name:'Insurance Claim',url: '/services/insurance-claims'},
    {name:'Roof Replacement',url: '/services/roof-replacement'},
  ]