// Comprehensive data for Palitha Aluminium website

// Services Data
const SERVICES_DATA = [
  {
    id: 'windows-doors',
    slug: 'windows-doors',
    title: 'Windows & Doors',
    shortDescription: 'Custom aluminum windows and doors for residential and commercial applications.',
    longDescription: 'Our aluminum windows and doors combine energy efficiency with modern aesthetics. We offer a wide range of styles including casement, sliding, fixed, and custom configurations. All products are engineered for durability and weather resistance.',
    icon: '🪟',
    features: [
      'Energy-efficient glazing options',
      'Custom sizes and configurations',
      'Weather-resistant sealing',
      'Multiple finish options',
      'Security hardware available',
      'Thermal break technology'
    ],
    benefits: [
      'Reduced energy costs',
      'Enhanced security',
      'Low maintenance',
      'Long-lasting durability',
      'Improved property value'
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Design',
        description: 'Initial consultation to understand your needs and create custom designs that match your architectural requirements.'
      },
      {
        step: 2,
        title: 'Material Selection & Engineering',
        description: 'Selection of appropriate aluminum profiles and engineering calculations to ensure structural integrity and performance.'
      },
      {
        step: 3,
        title: 'Fabrication & Quality Control',
        description: 'Precision fabrication in our facility with rigorous quality control measures throughout the manufacturing process.'
      },
      {
        step: 4,
        title: 'Professional Installation',
        description: 'Expert installation by certified technicians with final inspection and customer walkthrough.'
      }
    ],
    startingPrice: 500,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Custom Aluminum Windows & Doors - Professional Installation',
      description: 'Expert aluminum windows and doors with energy-efficient glazing, custom sizes, and professional installation. Enhance your property with durable, low-maintenance solutions.',
      keywords: ['aluminum windows', 'aluminum doors', 'energy efficient windows', 'custom windows', 'residential windows', 'commercial doors']
    }
  },
  {
    id: 'facades-curtain-walls',
    slug: 'facades-curtain-walls',
    title: 'Facades & Curtain Walls',
    shortDescription: 'Architectural aluminum facades and curtain wall systems for commercial buildings.',
    longDescription: 'We design and install sophisticated curtain wall systems that provide structural integrity while maximizing natural light. Our facades are engineered to meet the highest performance standards for commercial and institutional buildings.',
    icon: '🏢',
    features: [
      'Structural glazing systems',
      'Pressure equalized design',
      'Thermal performance optimization',
      'Seismic resistance engineering',
      'Custom panel configurations',
      'Integrated shading systems'
    ],
    benefits: [
      'Maximum natural light',
      'Superior weather protection',
      'Energy efficiency',
      'Architectural flexibility',
      'Long-term durability'
    ],
    process: [
      {
        step: 1,
        title: 'Architectural Analysis',
        description: 'Detailed analysis of building requirements, wind loads, and structural considerations for optimal curtain wall performance.'
      },
      {
        step: 2,
        title: 'System Design & Engineering',
        description: 'Custom engineering of curtain wall systems with thermal modeling and structural calculations for your specific building.'
      },
      {
        step: 3,
        title: 'Fabrication & Testing',
        description: 'Precision manufacturing with rigorous testing including water, air, and structural performance validation.'
      },
      {
        step: 4,
        title: 'Installation & Commissioning',
        description: 'Professional installation by certified teams with comprehensive testing and performance verification.'
      }
    ],
    startingPrice: 1200,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Commercial Aluminum Facades & Curtain Walls - Structural Systems',
      description: 'Professional aluminum curtain wall systems and facades for commercial buildings. Structural glazing, thermal performance, and architectural flexibility.',
      keywords: ['curtain walls', 'aluminum facades', 'commercial glazing', 'structural glazing', 'building facades', 'commercial windows']
    }
  },
  {
    id: 'custom-fabrication',
    slug: 'custom-fabrication',
    title: 'Custom Fabrication',
    shortDescription: 'Specialized aluminum fabrication for unique architectural and industrial applications.',
    longDescription: 'Our custom fabrication services bring your unique vision to life. From architectural features to industrial components, we have the expertise and equipment to handle complex projects with precision and quality.',
    icon: '⚙️',
    features: [
      'CNC machining capabilities',
      'Welding and assembly',
      'Custom finishing options',
      'Prototype development',
      'Small to large batch production',
      'Quality control testing'
    ],
    benefits: [
      'Unlimited design possibilities',
      'Precision manufacturing',
      'Cost-effective solutions',
      'Fast turnaround times',
      'Expert consultation'
    ],
    process: [
      {
        step: 1,
        title: 'Design Consultation',
        description: 'Collaborative design process to understand your unique requirements and develop custom fabrication solutions.'
      },
      {
        step: 2,
        title: 'Engineering & Prototyping',
        description: 'Detailed engineering drawings and prototype development to validate design and manufacturing approach.'
      },
      {
        step: 3,
        title: 'Precision Manufacturing',
        description: 'Advanced CNC machining and fabrication using state-of-the-art equipment for precise custom components.'
      },
      {
        step: 4,
        title: 'Quality Assurance & Delivery',
        description: 'Comprehensive quality testing and inspection followed by careful packaging and delivery of finished products.'
      }
    ],
    startingPrice: 600,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Custom Aluminum Fabrication - Precision Manufacturing Services',
      description: 'Specialized aluminum fabrication for architectural and industrial applications. CNC machining, welding, custom finishing, and prototype development services.',
      keywords: ['custom fabrication', 'aluminum machining', 'CNC aluminum', 'custom metalwork', 'precision fabrication', 'industrial aluminum']
    }
  },
  {
    id: 'railings-balustrades',
    slug: 'railings-balustrades',
    title: 'Railings & Balustrades',
    shortDescription: 'Elegant and safe aluminum railings for residential and commercial properties.',
    longDescription: 'Our aluminum railings combine safety with style. Whether for balconies, staircases, or perimeter barriers, we offer a range of designs that meet building codes while enhancing the aesthetic appeal of your property.',
    icon: '🛡️',
    features: [
      'Code-compliant designs',
      'Multiple style options',
      'Glass panel integration',
      'LED lighting compatibility',
      'Powder coating finishes',
      'Modular installation system'
    ],
    benefits: [
      'Enhanced safety',
      'Low maintenance',
      'Weather resistance',
      'Design flexibility',
      'Easy installation'
    ],
    process: [
      {
        step: 1,
        title: 'Design & Compliance Review',
        description: 'Initial design consultation with building code compliance review to ensure safety standards are met for your specific application.'
      },
      {
        step: 2,
        title: 'Custom Engineering',
        description: 'Structural engineering and custom design development, including glass panel integration and LED lighting planning if required.'
      },
      {
        step: 3,
        title: 'Fabrication & Finishing',
        description: 'Precision fabrication of railing components with powder coating or anodizing finishes for long-lasting durability.'
      },
      {
        step: 4,
        title: 'Installation & Testing',
        description: 'Professional installation with load testing and final safety inspection to ensure compliance with all relevant codes.'
      }
    ],
    startingPrice: 300,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Aluminum Railings & Balustrades - Safety and Style Combined',
      description: 'Professional aluminum railings and balustrades for residential and commercial properties. Code-compliant designs with glass panels and LED lighting options.',
      keywords: ['aluminum railings', 'balustrades', 'safety railings', 'glass railings', 'commercial railings', 'stair railings']
    }
  },
  {
    id: 'structural-glazing',
    slug: 'structural-glazing',
    title: 'Structural Glazing',
    shortDescription: 'Advanced structural glazing systems for modern architectural applications with seamless glass integration.',
    longDescription: 'Our structural glazing solutions provide uninterrupted glass surfaces that create stunning visual effects while maintaining structural integrity. We specialize in advanced glazing systems that eliminate visible frames for a sleek, modern appearance.',
    icon: '🔗',
    features: [
      'Seamless glass integration',
      'Weather seal technology',
      'Structural bonding systems',
      'Thermal break designs',
      'Custom glazing solutions',
      'UV-resistant materials'
    ],
    benefits: [
      'Maximum natural light',
      'Unobstructed views',
      'Modern aesthetics',
      'Energy efficiency',
      'Weather resistance'
    ],
    process: [
      {
        step: 1,
        title: 'Structural Assessment',
        description: 'Comprehensive analysis of building structure and load requirements for safe glazing integration.'
      },
      {
        step: 2,
        title: 'System Design & Engineering',
        description: 'Development of structural glazing system with precise calculations for wind loads and thermal expansion.'
      },
      {
        step: 3,
        title: 'Glass Fabrication & Assembly',
        description: 'Precision cutting and assembly of glass panels with structural adhesives and support systems.'
      },
      {
        step: 4,
        title: 'Installation & Weatherproofing',
        description: 'Professional installation with comprehensive weather sealing and final structural verification.'
      }
    ],
    startingPrice: 800,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Structural Glazing Systems - Advanced Glass Integration',
      description: 'Professional structural glazing systems with seamless glass integration, weather sealing, and modern architectural design. Custom glazing solutions.',
      keywords: ['structural glazing', 'glass integration', 'architectural glazing', 'seamless glazing', 'modern glazing', 'glazing systems']
    }
  },
  {
    id: 'aluminum-roofing',
    slug: 'aluminum-roofing',
    title: 'Aluminum Roofing',
    shortDescription: 'Durable aluminum roofing systems for residential and commercial buildings with superior weather protection.',
    longDescription: 'Our aluminum roofing solutions provide exceptional durability and weather resistance. From standing seam roofs to custom architectural roofing systems, we deliver long-lasting protection with minimal maintenance requirements.',
    icon: '🏠',
    features: [
      'Standing seam systems',
      'Custom profile options',
      'Corrosion resistance',
      'Lightweight construction',
      'Energy-efficient coatings',
      'Gutter integration'
    ],
    benefits: [
      'Long-lasting durability',
      'Low maintenance',
      'Weather resistant',
      'Energy savings',
      'Lightweight design'
    ],
    process: [
      {
        step: 1,
        title: 'Roof Inspection & Planning',
        description: 'Thorough assessment of existing structure and detailed planning for optimal drainage and support.'
      },
      {
        step: 2,
        title: 'Material Selection & Preparation',
        description: 'Selection of appropriate aluminum profiles and coatings based on climate and structural requirements.'
      },
      {
        step: 3,
        title: 'Installation & Fastening',
        description: 'Professional installation using specialized fastening systems and proper alignment techniques.'
      },
      {
        step: 4,
        title: 'Weatherproofing & Finishing',
        description: 'Complete sealing, flashing installation, and final quality inspection for weather resistance.'
      }
    ],
    startingPrice: 900,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Aluminum Roofing Systems - Durable Weather Protection',
      description: 'Professional aluminum roofing systems with standing seam technology, corrosion resistance, and energy-efficient coatings for lasting protection.',
      keywords: ['aluminum roofing', 'standing seam roofing', 'metal roofing', 'commercial roofing', 'residential roofing', 'roofing systems']
    }
  },
  {
    id: 'solar-mounting',
    slug: 'solar-mounting',
    title: 'Solar Mounting Systems',
    shortDescription: 'Specialized aluminum mounting systems for solar panels with optimal positioning and structural integrity.',
    longDescription: 'Our solar mounting systems are engineered to provide secure, long-lasting support for solar installations. We offer both roof-mounted and ground-mounted solutions with precise angle optimization for maximum energy efficiency.',
    icon: '☀️',
    features: [
      'Roof and ground mounting',
      'Angle optimization',
      'Weather resistance',
      'Modular design',
      'Quick installation',
      'Structural calculations'
    ],
    benefits: [
      'Optimal solar positioning',
      'Secure panel mounting',
      'Corrosion resistance',
      'Easy maintenance',
      'Cost-effective installation'
    ],
    process: [
      {
        step: 1,
        title: 'Site Survey & Analysis',
        description: 'Comprehensive roof assessment including structural capacity, orientation, and shading analysis.'
      },
      {
        step: 2,
        title: 'Mounting System Design',
        description: 'Custom design of mounting configuration optimized for panel layout and structural requirements.'
      },
      {
        step: 3,
        title: 'Installation & Securing',
        description: 'Professional mounting system installation with proper penetration sealing and load distribution.'
      },
      {
        step: 4,
        title: 'Testing & Commissioning',
        description: 'Final inspection, load testing, and system commissioning to ensure optimal performance and safety.'
      }
    ],
    startingPrice: 400,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Solar Mounting Systems - Professional Panel Support',
      description: 'Specialized aluminum solar mounting systems for roof and ground installations. Optimal positioning, weather resistance, and structural integrity.',
      keywords: ['solar mounting', 'panel mounting systems', 'solar installation', 'roof mounting', 'ground mounting', 'solar support']
    }
  },
  {
    id: 'ventilation-systems',
    slug: 'ventilation-systems',
    title: 'Ventilation Systems',
    shortDescription: 'Custom aluminum ventilation and louver systems for optimal airflow and building climate control.',
    longDescription: 'Our ventilation systems provide superior airflow management for commercial and industrial buildings. From architectural louvers to custom ventilation grilles, we ensure optimal air circulation while maintaining aesthetic appeal.',
    icon: '🌬️',
    features: [
      'Architectural louvers',
      'Ventilation grilles',
      'Custom airflow design',
      'Weather protection',
      'Sound attenuation',
      'Maintenance access'
    ],
    benefits: [
      'Improved air quality',
      'Energy efficiency',
      'Weather protection',
      'Noise reduction',
      'Easy maintenance'
    ],
    process: [
      {
        step: 1,
        title: 'Airflow Analysis & Design',
        description: 'Comprehensive analysis of building ventilation needs and custom system design for optimal airflow.'
      },
      {
        step: 2,
        title: 'Component Manufacturing',
        description: 'Precision fabrication of aluminum ventilation components including louvers, ducts, and control systems.'
      },
      {
        step: 3,
        title: 'System Installation',
        description: 'Professional installation of ventilation components with proper integration into building systems.'
      },
      {
        step: 4,
        title: 'Testing & Optimization',
        description: 'Comprehensive testing and fine-tuning of airflow patterns and system performance.'
      }
    ],
    startingPrice: 350,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Aluminum Ventilation Systems - Airflow Management',
      description: 'Custom aluminum ventilation and louver systems for optimal airflow, building climate control, and architectural integration.',
      keywords: ['ventilation systems', 'aluminum louvers', 'ventilation grilles', 'airflow management', 'building ventilation', 'architectural louvers']
    }
  },
  {
    id: 'metal-cladding',
    slug: 'metal-cladding',
    title: 'Metal Cladding Systems',
    shortDescription: 'Architectural exterior cladding solutions that combine aesthetics with superior weather protection and energy efficiency.',
    longDescription: 'Our metal cladding systems provide exceptional exterior protection while enhancing architectural aesthetics. We offer a comprehensive range of profiles, finishes, and installation methods to meet diverse design requirements and performance standards.',
    icon: '🏗️',
    features: [
      'Multiple profile options',
      'Insulated panel systems',
      'Rainscreen technology',
      'Fire-resistant materials',
      'Custom color matching',
      'Integrated drainage systems'
    ],
    benefits: [
      'Superior weather protection',
      'Enhanced thermal performance',
      'Low maintenance requirements',
      'Architectural flexibility',
      'Long-term durability'
    ],
    process: [
      {
        step: 1,
        title: 'Design & Specification',
        description: 'Detailed design development with material selection and thermal performance calculations.'
      },
      {
        step: 2,
        title: 'Panel Fabrication',
        description: 'Precision manufacturing of cladding panels with quality finishing and edge preparation.'
      },
      {
        step: 3,
        title: 'Support System Installation',
        description: 'Installation of structural support systems and insulation layers for optimal performance.'
      },
      {
        step: 4,
        title: 'Cladding Assembly & Sealing',
        description: 'Professional panel installation with proper sealing and weatherproofing completion.'
      }
    ],
    startingPrice: 750,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Metal Cladding Systems - Architectural Exterior Solutions',
      description: 'Professional aluminum cladding systems with rainscreen technology, insulated panels, and custom finishes for superior building protection.',
      keywords: ['metal cladding', 'aluminum cladding', 'exterior cladding', 'rainscreen systems', 'architectural cladding', 'building cladding']
    }
  },
  {
    id: 'shopfront-solutions',
    slug: 'shopfront-solutions',
    title: 'Shopfront Solutions',
    shortDescription: 'Commercial storefront and entrance systems designed for maximum visibility, security, and customer appeal.',
    longDescription: 'Our shopfront solutions create inviting commercial entrances that balance security, aesthetics, and functionality. From traditional storefronts to modern glazed systems, we provide comprehensive solutions for retail and commercial spaces.',
    icon: '🏪',
    features: [
      'Large glazed areas',
      'Security integration',
      'Automatic door systems',
      'Display window options',
      'Climate control integration',
      'Accessibility compliance'
    ],
    benefits: [
      'Maximum product visibility',
      'Enhanced security features',
      'Improved customer access',
      'Professional appearance',
      'Energy efficiency'
    ],
    process: [
      {
        step: 1,
        title: 'Commercial Design Consultation',
        description: 'Analysis of business needs, foot traffic patterns, and brand requirements for optimal shopfront design.'
      },
      {
        step: 2,
        title: 'Security & Access Planning',
        description: 'Integration of security features, access control, and visibility requirements into the design.'
      },
      {
        step: 3,
        title: 'Fabrication & Assembly',
        description: 'Precision manufacturing of shopfront components with attention to commercial-grade durability.'
      },
      {
        step: 4,
        title: 'Installation & Commissioning',
        description: 'Professional installation with minimal business disruption and complete system testing.'
      }
    ],
    startingPrice: 650,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Commercial Shopfront Solutions - Storefront Systems',
      description: 'Professional commercial shopfront and storefront systems with security integration, automatic doors, and maximum visibility design.',
      keywords: ['shopfront solutions', 'commercial storefront', 'retail entrance systems', 'automatic doors', 'commercial glazing', 'storefront design']
    }
  },
  {
    id: 'canopy-awning',
    slug: 'canopy-awning',
    title: 'Canopy & Awning Systems',
    shortDescription: 'Weather protection and architectural canopy systems that provide shelter while enhancing building aesthetics.',
    longDescription: 'Our canopy and awning systems offer elegant weather protection solutions for entrances, walkways, and outdoor spaces. We design and fabricate custom structures that complement architectural styles while providing superior weather resistance.',
    icon: '🏛️',
    features: [
      'Custom design options',
      'Weather-resistant materials',
      'Structural calculations',
      'Integrated lighting systems',
      'Drainage management',
      'Multiple mounting options'
    ],
    benefits: [
      'Effective weather protection',
      'Enhanced building aesthetics',
      'Increased usable space',
      'Energy cost reduction',
      'Improved accessibility'
    ],
    process: [
      {
        step: 1,
        title: 'Site Assessment & Design',
        description: 'Evaluation of installation site, weather conditions, and architectural integration requirements.'
      },
      {
        step: 2,
        title: 'Structural Engineering',
        description: 'Calculation of wind loads, support requirements, and drainage design for optimal performance.'
      },
      {
        step: 3,
        title: 'Framework Installation',
        description: 'Installation of support structure and framework with proper anchoring and alignment.'
      },
      {
        step: 4,
        title: 'Covering & Finishing',
        description: 'Installation of weather-resistant covering materials and final adjustments for optimal function.'
      }
    ],
    startingPrice: 450,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Canopy & Awning Systems - Architectural Weather Protection',
      description: 'Custom aluminum canopy and awning systems with weather protection, architectural integration, and professional installation services.',
      keywords: ['aluminum canopies', 'architectural awnings', 'entrance canopies', 'weather protection', 'building canopies', 'walkway covers']
    }
  },
  {
    id: 'security-screens',
    slug: 'security-screens',
    title: 'Security Screens & Grilles',
    shortDescription: 'Decorative and security screening solutions that provide protection without compromising visibility or aesthetics.',
    longDescription: 'Our security screens and grilles combine protection with visual appeal. From decorative perforated panels to high-security barrier systems, we provide customized solutions that meet specific security requirements while maintaining architectural integrity.',
    icon: '🛡️',
    features: [
      'Perforated panel options',
      'High-security configurations',
      'Decorative patterns',
      'Powder coating finishes',
      'Custom sizing available',
      'Easy maintenance access'
    ],
    benefits: [
      'Enhanced security protection',
      'Maintained visibility',
      'Architectural enhancement',
      'Ventilation allowance',
      'Durable construction'
    ],
    process: [
      {
        step: 1,
        title: 'Security Assessment',
        description: 'Comprehensive evaluation of security needs and vulnerability points for optimal protection design.'
      },
      {
        step: 2,
        title: 'Custom Measurement & Design',
        description: 'Precise measurement and design of security screens to fit existing openings and architectural features.'
      },
      {
        step: 3,
        title: 'High-Strength Fabrication',
        description: 'Manufacturing of security screens using high-grade aluminum with reinforced connection points.'
      },
      {
        step: 4,
        title: 'Professional Installation',
        description: 'Secure installation with tamper-resistant fasteners and final testing of all security features.'
      }
    ],
    startingPrice: 300,
    image: '/images/hero-bg.jpg',
    seo: {
      title: 'Security Screens & Grilles - Protective Architectural Solutions',
      description: 'Custom aluminum security screens and grilles with decorative patterns, high-security configurations, and professional installation.',
      keywords: ['security screens', 'aluminum grilles', 'perforated panels', 'decorative screens', 'security barriers', 'architectural screens']
    }
  }
]

// Team Members Data
const TEAM_DATA = [
  {
    id: 'david-thompson',
    name: 'David Thompson',
    position: 'Founder & CEO',
    bio: 'David founded Palitha Aluminium in 2000 with a vision to provide superior aluminum fabrication services. With over 24 years of experience in the industry, he leads our team with expertise in both technical and business aspects.',
    image: '/team/david-thompson.jpg',
    experience: '20+ years',
    specializations: ['Business Development', 'Project Management', 'Industry Relations'],
    certifications: ['Certified Aluminum Fabricator', 'OSHA 30-Hour Construction'],
    contact: {
      email: 'david@apexaluminum.com',
      phone: '(555) 123-4567'
    }
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    position: 'Lead Engineer',
    bio: 'Sarah brings exceptional engineering expertise to our team. She specializes in structural analysis and curtain wall design, ensuring all our projects meet the highest performance standards.',
    image: '/team/sarah-chen.jpg',
    experience: '12+ years',
    specializations: ['Structural Engineering', 'Curtain Wall Design', 'Building Codes'],
    certifications: ['Professional Engineer (PE)', 'LEED AP', 'Curtain Wall Design Specialist'],
    contact: {
      email: 'sarah@apexaluminum.com',
      phone: '(555) 123-4568'
    }
  },
  {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    position: 'Production Manager',
    bio: 'Michael oversees our manufacturing operations, ensuring quality and efficiency in every project. His attention to detail and process optimization keeps our production running smoothly.',
    image: '/team/michael-rodriguez.jpg',
    experience: '15+ years',
    specializations: ['Manufacturing Operations', 'Quality Control', 'Process Optimization'],
    certifications: ['Six Sigma Black Belt', 'AWS Certified Welder', 'ISO 9001 Lead Auditor'],
    contact: {
      email: 'michael@apexaluminum.com',
      phone: '(555) 123-4569'
    }
  }
]

// Projects Data
const PROJECTS_DATA = [
  {
    id: 'luxury-residential-windows',
    slug: 'luxury-residential-windows',
    title: 'Luxury Residential Windows',
    category: 'residential',
    subcategory: 'windows',
    description: 'Custom aluminum windows for a high-end residential project featuring energy-efficient glazing and sleek modern design.',
    longDescription: 'This luxury residential project required custom aluminum windows that would complement the modern architectural design while providing superior energy efficiency. We fabricated and installed over 50 custom windows with thermal break technology and high-performance glazing.',
    images: {
      hero: '/projects/luxury-windows-hero.jpg',
      gallery: [
        '/projects/luxury-windows-hero.jpg',
        '/projects/office-facade-hero.jpg',
        '/projects/luxury-windows-hero.jpg',
        '/projects/office-facade-hero.jpg'
      ],
      beforeAfter: {
        before: '/projects/luxury-windows-hero.jpg',
        after: '/projects/luxury-windows-hero.jpg'
      }
    },
    specifications: {
      materials: ['6063-T6 Aluminum', 'Low-E Glass', 'EPDM Seals'],
      dimensions: '50 windows, various sizes',
      timeline: '8 weeks',
      budget: '$75,000 - $100,000'
    },
    client: {
      name: 'Private Residence',
      type: 'residential',
      testimonial: 'The quality and attention to detail exceeded our expectations. The windows are beautiful and have significantly improved our home\'s energy efficiency.'
    },
    completionDate: '2023-09-15',
    featured: true,
    seo: {
      title: 'Luxury Residential Windows Project - Custom Aluminum Solutions',
      description: 'High-end residential aluminum windows with energy-efficient glazing and modern design. Over 50 custom windows with thermal break technology.',
      keywords: ['luxury windows', 'residential aluminum windows', 'energy efficient glazing', 'custom windows', 'thermal break technology']
    }
  },
  {
    id: 'commercial-office-facade',
    slug: 'commercial-office-facade',
    title: 'Commercial Office Facade',
    category: 'commercial',
    subcategory: 'facade',
    description: 'Modern curtain wall system for a 12-story office building featuring structural glazing and integrated shading.',
    longDescription: 'This commercial project involved designing and installing a complete curtain wall system for a new office building. The system features structural glazing, integrated sun shades, and high-performance thermal characteristics to meet LEED certification requirements.',
    images: {
      hero: '/projects/office-facade-hero.jpg',
      gallery: [
        '/projects/office-facade-hero.jpg',
        '/projects/luxury-windows-hero.jpg',
        '/projects/office-facade-hero.jpg',
        '/projects/luxury-windows-hero.jpg'
      ]
    },
    specifications: {
      materials: ['6061-T6 Aluminum', 'Structural Glazing', 'Insulated Glass Units'],
      dimensions: '12 stories, 45,000 sq ft',
      timeline: '16 weeks',
      budget: '$500,000 - $750,000'
    },
    client: {
      name: 'Metro Development Corp',
      type: 'commercial',
      testimonial: 'Apex Aluminum Works delivered exceptional quality on time and within budget. Their expertise in curtain wall systems is outstanding.'
    },
    completionDate: '2023-11-30',
    featured: true,
    seo: {
      title: 'Commercial Office Facade Project - 12-Story Curtain Wall System',
      description: 'Modern curtain wall system for commercial office building with structural glazing and LEED certification. 45,000 sq ft facade installation.',
      keywords: ['commercial facade', 'curtain wall system', 'structural glazing', 'office building facade', 'LEED certification', 'commercial glazing']
    }
  },
  {
    id: 'industrial-warehouse-doors',
    slug: 'industrial-warehouse-doors',
    title: 'Industrial Warehouse Doors',
    category: 'industrial',
    subcategory: 'doors',
    description: 'Heavy-duty aluminum doors for industrial warehouse facility with enhanced security features.',
    longDescription: 'This industrial project required robust aluminum doors capable of withstanding heavy use while providing security and weather protection. We designed and manufactured custom doors with reinforced frames and high-security locking systems.',
    images: {
      hero: '/projects/office-facade-hero.jpg',
      gallery: [
        '/projects/office-facade-hero.jpg',
        '/projects/luxury-windows-hero.jpg',
        '/projects/office-facade-hero.jpg'
      ]
    },
    specifications: {
      materials: ['6061-T6 Aluminum', 'Security Hardware', 'Weather Seals'],
      dimensions: '8 doors, 10ft x 12ft each',
      timeline: '6 weeks',
      budget: '$25,000 - $35,000'
    },
    client: {
      name: 'Industrial Logistics Inc',
      type: 'commercial'
    },
    completionDate: '2023-08-20',
    featured: false,
    seo: {
      title: 'Industrial Warehouse Doors Project - Heavy-Duty Security Solutions',
      description: 'Heavy-duty aluminum doors for industrial warehouse with enhanced security features. 8 custom doors with reinforced frames and security hardware.',
      keywords: ['industrial doors', 'warehouse doors', 'heavy duty aluminum doors', 'security doors', 'industrial hardware', 'aluminum fabrication']
    }
  },
  {
    id: 'custom-architectural-railings',
    slug: 'custom-architectural-railings',
    title: 'Custome designed Railling',
    category: 'commercial',
    subcategory: 'railings',
    description: 'Artistic aluminum railings for a public plaza featuring custom design elements and LED integration.',
    longDescription: 'This unique project combined functionality with artistic design to create custom railings for a public plaza. The railings feature integrated LED lighting and custom patterns that complement the surrounding architecture.',
    images: {
      hero: '/projects/luxury-windows-hero.jpg',
      gallery: [
        '/projects/luxury-windows-hero.jpg',
        '/projects/office-facade-hero.jpg',
        '/projects/luxury-windows-hero.jpg'
      ]
    },
    specifications: {
      materials: ['6063-T6 Aluminum', 'LED Strip Lighting', 'Powder Coating'],
      dimensions: '200 linear feet',
      timeline: '10 weeks',
      budget: '$40,000 - $55,000'
    },
    client: {
      name: 'City Planning Department',
      type: 'commercial',
      testimonial: 'The railings are not just functional but truly artistic. They\'ve become a focal point of our plaza.'
    },
    completionDate: '2023-10-10',
    featured: true,
    seo: {
      title: 'Custom Architectural Railings Project - Artistic Plaza Design',
      description: 'Custom architectural railings for public plaza with integrated LED lighting and artistic design elements. 200 linear feet of decorative aluminum railings.',
      keywords: ['architectural railings', 'custom railings', 'LED railings', 'plaza railings', 'decorative aluminum', 'public space design']
    }
  }
]

// Testimonials Data
const TESTIMONIALS_DATA = [
  {
    id: 'jennifer-walsh',
    name: 'Jennifer Walsh',
    position: 'Homeowner',
    company: 'Private Residence',
    image: '/testimonials/jennifer-walsh.jpg',
    rating: 5,
    testimonial: 'Palitha Aluminium transformed our home with beautiful custom windows. The quality is exceptional and the energy savings are noticeable. David and his team were professional throughout the entire process.',
    project: 'luxury-residential-windows',
    date: '2023-09-20'
  },
  {
    id: 'robert-kim',
    name: 'Robert Kim',
    position: 'Project Manager',
    company: 'Metro Development Corp',
    image: '/testimonials/robert-kim.jpg',
    rating: 5,
    testimonial: 'Working with Palitha Aluminium on our office building facade was a great experience. Their expertise in curtain wall systems and attention to detail helped us achieve LEED certification.',
    project: 'commercial-office-facade',
    date: '2023-12-05'
  },
  {
    id: 'maria-santos',
    name: 'Maria Santos',
    position: 'Architect',
    company: 'Santos Architecture',
    image: '/testimonials/maria-santos.jpg',
    rating: 5,
    testimonial: 'I\'ve worked with Palitha Aluminium on multiple projects. Their ability to bring complex designs to life while maintaining structural integrity is impressive. Highly recommended for any aluminum fabrication needs.',
    project: 'custom-architectural-railings',
    date: '2023-10-15'
  }
]

// Company Statistics
const STATISTICS_DATA = [
  {
    value: 15,
    label: 'Years in Business',
    suffix: '+',
    icon: '📅'
  },
  {
    value: 1250,
    label: 'Projects Completed',
    suffix: '+',
    icon: '🏗️'
  },
  {
    value: 850,
    label: 'Satisfied Clients',
    suffix: '+',
    icon: '😊'
  },
  {
    value: 99,
    label: 'Quality Rating',
    suffix: '%',
    icon: '⭐'
  }
]

// Certifications and Awards
const CERTIFICATIONS_DATA = [
  {
    id: 'aws-certification',
    name: 'AWS Certified Welding',
    description: 'American Welding Society certification for structural welding',
    year: '2023'
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    description: 'Quality Management System certification',
    year: '2022'
  },
  {
    id: 'leed-ap',
    name: 'LEED Accredited Professional',
    description: 'Leadership in Energy and Environmental Design certification',
    year: '2021'
  },
  {
    id: 'osha-safety',
    name: 'OSHA Safety Excellence',
    description: 'Outstanding safety record and compliance',
    year: '2023'
  }
]

// FAQ Data
const FAQ_DATA = [
  {
    question: 'What types of aluminum fabrication services do you offer?',
    answer: 'We offer a comprehensive range of aluminum fabrication services including custom windows and doors, curtain walls and facades, architectural railings, and specialized custom fabrication for unique projects.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity and scope. Simple residential projects may take 4-6 weeks, while large commercial curtain wall systems can take 12-16 weeks. We provide detailed timelines during the consultation phase.'
  },
  {
    question: 'Do you provide installation services?',
    answer: 'Yes, we provide complete installation services with our certified technicians. We handle everything from initial consultation to final installation and inspection.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve California and surrounding states. For large commercial projects, we can work nationwide. Contact us to discuss your specific location and project requirements.'
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes, we provide comprehensive warranties on both materials and workmanship. Warranty terms vary by project type and are detailed in our contracts.'
  },
  {
    question: 'Can you work with existing architectural plans?',
    answer: 'Absolutely! We work closely with architects, contractors, and building owners to implement aluminum solutions that meet existing design specifications and building requirements.'
  }
]

// Export all data
export {
  SERVICES_DATA,
  TEAM_DATA,
  PROJECTS_DATA,
  TESTIMONIALS_DATA,
  STATISTICS_DATA,
  CERTIFICATIONS_DATA,
  FAQ_DATA
}
