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
      "We respond to storm damage calls within 24 hours and can begin emergency repairs the same day. For full roof replacements covered by insurance, the typical timeline from inspection to installation is 2 to 4 weeks. This includes a free professional inspection within 24 hours of your call, filing the insurance claim on your behalf within 48 hours, coordinating the adjuster visit (usually 5-10 business days), and scheduling the full replacement once the claim is approved. Emergency tarping and leak repairs are available 24/7 to prevent further damage while your claim is processed. We serve all 50 states and prioritize areas that have been recently hit by hail storms, high winds, or severe weather events.",
  },
  {
    question: "Do you handle insurance claims for roof damage?",
    answer:
      "Yes, we handle the entire insurance claims process for you from start to finish at no additional cost. Our licensed claims specialists have a 99.7% approval rate across more than 10,000 homeowner claims. Here is what we manage: documenting all storm damage with photos and detailed reports, filing the claim directly with your insurance company, meeting with the insurance adjuster on-site to ensure nothing is missed, negotiating for full replacement cost coverage rather than partial repairs, and managing all paperwork through final payment. You only pay your insurance deductible. Our team has processed over $180 million in approved roof claims. If your claim is denied, we will help you file a supplement or appeal at no extra charge.",
  },
  {
    question: "What types of roofs do you repair or replace?",
    answer:
      "We repair and replace all major residential and commercial roofing types. This includes asphalt shingles (3-tab and architectural), metal roofing (standing seam, corrugated, and metal shingles), tile roofing (clay, concrete, and slate), flat roofing systems (TPO, EPDM, and modified bitumen), cedar shake and wood shingles, and synthetic/composite roofing materials. Asphalt shingles are the most common roof type we replace, accounting for approximately 80% of our insurance claim projects. We carry manufacturer certifications from GAF, Owens Corning, and CertainTeed, which allows us to offer extended warranties of 25 to 50 years on qualifying installations. Our roofing crews are experienced with both new construction and tear-off replacements.",
  },
  {
    question: "Are your roofing services available in my city?",
    answer:
      "We are licensed and insured to operate in all 50 states across the United States. Our primary service areas include the Dallas-Fort Worth metroplex (Dallas, Plano, Fort Worth, Arlington, Frisco, McKinney, and Denton), greater Houston, San Antonio, Austin, and El Paso in Texas. We also serve high-demand storm damage areas including Phoenix and Tucson in Arizona, Denver and Colorado Springs in Colorado, Atlanta and surrounding metro in Georgia, and the Oklahoma City and Tulsa markets in Oklahoma. We strategically deploy crews to areas recently hit by severe hail storms and wind events. If your area recently experienced storm damage, call us at 541-337-5734 and we will have a local team to you within 24 hours.",
  },
  {
    question: "How much does a roof replacement cost?",
    answer:
      "The average roof replacement costs between $8,000 and $25,000 depending on roof size, material, and location, but most homeowners with storm damage pay only their insurance deductible, typically $1,000 to $2,500. Here is a cost breakdown by material: asphalt shingles run $4.00 to $7.00 per square foot installed, metal roofing ranges from $7.00 to $14.00 per square foot, and tile roofing costs $10.00 to $18.00 per square foot. For a standard 2,000 square foot roof with architectural shingles, the full replacement cost averages $12,000 to $16,000. If your roof damage was caused by a covered event like hail, wind, or a fallen tree, your homeowners insurance will typically cover the full replacement cost minus your deductible. FreeRoofPros handles the entire claims process so you pay zero out of pocket beyond the deductible.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, every FreeRoofPros installation comes with a comprehensive lifetime workmanship warranty plus manufacturer material warranties of 25 to 50 years. Our warranty coverage includes a lifetime warranty on installation labor and workmanship performed by our certified crews. We also provide material warranties directly from manufacturers including GAF Golden Pledge (50-year), Owens Corning Platinum (50-year), and CertainTeed SureStart Plus (25-year). Our warranty covers defects in roofing materials, improper installation, and premature failure. If any issue arises with your new roof, we will send a crew to inspect and repair it at no cost to you. All warranty claims are processed directly through FreeRoofPros, and there is no cost for warranty service calls. Your warranty is fully transferable to a new homeowner if you sell your property.",
  },
  {
    question: "Can you repair hail damage on my roof?",
    answer:
      "Yes, hail damage repair and full roof replacement after hail storms is our core specialty. Approximately 85% of the roofs we inspect have hail damage that the homeowner never noticed. Hail damage is often invisible from the ground but can cause serious problems including cracked or missing shingle granules that reduce UV protection, dented or fractured shingles that lead to leaks within 1 to 3 years, damaged flashing around vents and chimneys, and compromised underlayment that accelerates deck rot. Our inspectors are trained to identify all forms of hail damage, and we document everything with high-resolution photos and measurements that meet insurance adjuster standards. In most cases, hail damage qualifies for full roof replacement under your homeowners insurance policy. The key is acting quickly because most states require you to file a claim within 1 to 2 years of the storm event.",
  },
  {
    question: "Is your team licensed and insured?",
    answer:
      "Yes, FreeRoofPros is fully licensed, bonded, and insured in all 50 states with over $1 million in liability coverage. Every FreeRoofPros crew carries general liability insurance, workers compensation coverage for all crew members, state-specific roofing contractor licenses, and manufacturer certifications from GAF, Owens Corning, and CertainTeed. We maintain an A+ rating with the Better Business Bureau and are members of the National Roofing Contractors Association (NRCA). Our insurance documentation and license numbers are available upon request before any work begins. Hiring a licensed and insured roofer is essential because it protects you from liability if a worker is injured on your property, ensures the work meets local building code requirements, and is typically required by your homeowners insurance company for claim-covered work.",
  },
  {
    question: "Do you offer emergency roof repair services?",
    answer:
      "Yes, we provide 24/7 emergency roof repair services with same-day response in most service areas. When storm damage creates an active leak or structural hazard, waiting even a few days can lead to thousands of dollars in additional water damage to your ceilings, walls, insulation, and electrical systems. Our emergency services include temporary tarping and leak containment to stop active water intrusion, board-up services for missing sections of roof or exposed decking, emergency debris removal from fallen trees or large branches, and immediate damage documentation to support your insurance claim. Emergency services are provided at no cost when they are part of an insurance claim we manage. Call our 24-hour emergency line at 541-337-5734 and a crew will typically be on-site within 2 to 6 hours depending on your location and current storm activity in the area.",
  },
  {
    question: "How do I get a free roof replacement quote?",
    answer:
      "Getting a free roof replacement quote takes about 60 seconds online or you can call us directly at 541-337-5734. Here is our simple 3-step process: Step 1, enter your property address on our website at FreeRoofPros.com and provide basic contact information. Step 2, a licensed roofing inspector will visit your property within 24 hours to perform a thorough inspection of your roof at no cost and with no obligation. Step 3, if we find storm damage, we will file your insurance claim, coordinate with your adjuster, and handle the entire replacement process. You pay only your deductible. The inspection is completely free even if no damage is found or you decide not to proceed. We have helped over 10,000 homeowners get their roofs replaced through insurance with a 99.7% claim approval rate.",
  },
  {
    question: "Does homeowners insurance cover roof replacement?",
    answer:
      "Yes, homeowners insurance typically covers roof replacement when the damage is caused by a sudden, covered event such as hail, windstorms, fallen trees, or fire. Insurance generally does not cover roof damage caused by normal wear and tear, aging, lack of maintenance, or gradual deterioration. There are two types of coverage that determine your payout: Replacement Cost Value (RCV) pays the full cost to replace your roof with equivalent materials at current prices, while Actual Cash Value (ACV) pays the replacement cost minus depreciation based on your roof's age. RCV policies are significantly better for homeowners. Most policies also have a deductible between $1,000 and $2,500 that you pay out of pocket. At FreeRoofPros, we help homeowners navigate the claims process and have a 99.7% approval rate for legitimate storm damage claims. If you think your roof may have storm damage, contact us for a free inspection.",
  },
  {
    question: "How do I know if my roof has storm damage?",
    answer:
      "The most common signs of storm damage include missing, cracked, or curling shingles, dents or dark spots on shingles from hail impact, granule loss visible in your gutters or downspouts, and damaged or dented metal flashing, vents, or gutters. Many types of storm damage are not visible from the ground. Hail damage in particular can crack the protective granule layer on shingles without being obvious to the untrained eye, but this damage will lead to leaks within 1 to 3 years if not addressed. Wind damage may lift shingle edges or break the seal strip, allowing water to penetrate underneath. After any major storm, check for water stains on your ceilings or attic, granules accumulating in gutters, visible dents on metal surfaces like mailboxes or AC units (which indicate hail likely hit your roof too), and daylight visible through your attic roof boards. A professional roof inspection is the only reliable way to identify all storm damage. FreeRoofPros offers free, no-obligation inspections that include detailed photo documentation.",
  },
  {
    question: "How long do I have to file a roof insurance claim after a storm?",
    answer:
      "In most states, you have 1 to 2 years from the date of the storm to file a roof insurance claim, but some states allow as little as 6 months. Filing deadlines vary by state and by your specific insurance policy. Here are the key timeframes to know: Texas allows 1 to 2 years depending on the policy, Colorado requires claims to be filed within 1 year, Arizona allows up to 2 years, Georgia has a 1-year deadline, and Oklahoma allows 1 year from the date of the storm. Beyond the state deadline, your individual insurance policy may have its own notice requirements, often requiring you to report damage within 60 to 90 days. The important thing is to act quickly because evidence of storm damage deteriorates over time, making it harder to get your claim approved. We recommend getting a professional inspection within 30 days of any major storm. FreeRoofPros provides free inspections and helps you file your claim before any deadlines pass.",
  },
  {
    question: "What is the difference between actual cash value and replacement cost value for roofs?",
    answer:
      "Replacement Cost Value (RCV) pays the full cost to replace your damaged roof with similar materials at today's prices, while Actual Cash Value (ACV) pays the replacement cost minus depreciation based on your roof's age and condition. Here is a practical example: if your 15-year-old asphalt shingle roof costs $15,000 to replace and has depreciated by 50%, an RCV policy would pay $15,000 minus your deductible, while an ACV policy would only pay $7,500 minus your deductible. For a $1,500 deductible, that means you would receive $13,500 with RCV versus only $6,000 with ACV. You can check which type of policy you have by looking at the dwelling coverage section of your homeowners insurance declarations page or by calling your insurance agent. If you have an ACV policy, you may want to consider upgrading to RCV coverage at your next renewal. FreeRoofPros works with both RCV and ACV policies and can help you understand exactly what your policy will cover before we begin any work.",
  },
  {
    question: "What happens if my roof insurance claim is denied?",
    answer:
      "If your roof insurance claim is denied, you have several options including filing a supplement with additional documentation, requesting a re-inspection, hiring a public adjuster, or filing a formal appeal with your insurance company. The most common reasons roof claims are denied include the insurance company attributing damage to wear and tear rather than storm events, insufficient documentation of the damage, filing after the claim deadline, or the adjuster missing damage during their inspection. Here is what FreeRoofPros does when a claim is denied: First, we review the denial letter to understand the specific reason. Then we prepare a supplement with additional photographic evidence, detailed measurements, and expert documentation supporting the storm damage claim. We can also request a re-inspection with a different adjuster present. In our experience, approximately 60% of initially denied claims are overturned through the supplement and appeal process. If your claim has been denied, contact us for a free second opinion.",
  },
  {
    question: "Can I choose my own roofing contractor for an insurance claim?",
    answer:
      "Yes, in virtually every state you have the legal right to choose your own roofing contractor regardless of what your insurance company suggests. Insurance companies may offer a list of preferred contractors or recommend specific companies, but they cannot require you to use a particular contractor. Choosing your own contractor is important because independent contractors work for you, not the insurance company. A contractor recommended by your insurer may be motivated to keep repair costs low rather than ensuring a complete replacement. When choosing a contractor for an insurance claim job, look for a company that is licensed and insured in your state, has experience specifically with insurance claim projects, will meet directly with the insurance adjuster on your behalf, does not require large upfront payments before the claim is approved, and offers a workmanship warranty in addition to manufacturer material warranties. FreeRoofPros specializes in insurance claim roofing and handles the entire process from inspection to installation.",
  },
  {
    question: "How much does a free roof inspection cost and what does it include?",
    answer:
      "A FreeRoofPros roof inspection costs absolutely nothing and comes with no obligation to proceed with any repairs or file a claim. During the inspection, one of our licensed roofing professionals will perform a comprehensive evaluation that includes a full exterior roof inspection checking every shingle, flashing point, vent, and edge for storm damage. We also inspect gutters and downspouts for granule accumulation and denting, examine attic spaces (when accessible) for signs of water intrusion or daylight penetration, take high-resolution photographs documenting any damage found, and prepare a written inspection report with our findings and recommendations. The entire inspection typically takes 45 minutes to 1 hour. If we find storm damage that qualifies for an insurance claim, we will explain your options and can file the claim on your behalf. If no damage is found, you receive the inspection report for your records at no cost. There is truly zero risk and zero cost to having your roof inspected after a storm.",
  },
  {
    question: "What is the best roofing material for storm-prone areas?",
    answer:
      "Impact-resistant Class 4 asphalt shingles are generally the best choice for storm-prone areas, offering the strongest hail protection at a reasonable price point. Here is how the most common roofing materials compare in storm resistance: Class 4 impact-resistant shingles (such as GAF Armor Shield II or Owens Corning Duration STORM) can withstand hail up to 2 inches in diameter and many insurance companies offer 10% to 28% premium discounts for installing them. Standing seam metal roofing offers excellent wind resistance up to 140 mph and handles hail well, though large hail can cause cosmetic denting. Concrete and clay tile are very durable against wind and hail but are heavy and expensive, ranging from $10 to $18 per square foot installed. Standard 3-tab asphalt shingles are the least storm-resistant option and are rated for winds up to only 60 mph. For homeowners in Texas, Oklahoma, Colorado, and other hail-prone states, we typically recommend Class 4 impact-resistant shingles because they provide the best combination of storm protection, cost efficiency at $5 to $8 per square foot, insurance premium savings, and manufacturer warranties of 30 to 50 years.",
  },
];

//   Footer
export const footerServices = [
    {name:'Storm Damage Repair',url: '/services/storm-damage-repair'},
    {name:'Insurance Claim',url: '/services/insurance-claims'},
    {name:'Roof Replacement',url: '/services/roof-replacement'},
  ]