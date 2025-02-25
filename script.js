// Sample data for services
const services = [
    {
        id: 1,
        icon: "🖥️",
        title: "Web Development",
        description: "We create responsive, user-friendly websites tailored to your business needs."
    },
    {
        id: 2,
        icon: "📱",
        title: "Mobile App Development",
        description: "Custom mobile applications for iOS and Android platforms to expand your reach."
    },
    {
        id: 3,
        icon: "🎨",
        title: "UI/UX Design",
        description: "Intuitive and engaging user interfaces that enhance user experience."
    },
    {
        id: 4,
        icon: "📊",
        title: "Digital Marketing",
        description: "Strategic marketing solutions to increase your online presence and drive growth."
    },
    {
        id: 5,
        icon: "🔒",
        title: "Cybersecurity",
        description: "Protect your digital assets with our comprehensive security solutions."
    },
    {
        id: 6,
        icon: "📈",
        title: "Business Consulting",
        description: "Strategic advice to optimize your business operations and drive success."
    }
];

// Sample data for portfolio
const portfolioItems = [
    {
        id: 1,
        category: "web",
        image: "/api/placeholder/400/300",
        title: "E-commerce Website",
        description: "Online retail platform"
    },
    {
        id: 2,
        category: "app",
        image: "/api/placeholder/400/300",
        title: "Fitness App",
        description: "Mobile workout tracker"
    },
    {
        id: 3,
        category: "branding",
        image: "/api/placeholder/400/300",
        title: "Restaurant Rebrand",
        description: "Complete brand identity"
    },
    {
        id: 4,
        category: "web",
        image: "/api/placeholder/400/300",
        title: "Corporate Website",
        description: "Professional business site"
    },
    {
        id: 5,
        category: "app",
        image: "/api/placeholder/400/300",
        title: "Delivery Service App",
        description: "On-demand logistics platform"
    },
    {
        id: 6,
        category: "branding",
        image: "/api/placeholder/400/300",
        title: "Tech Startup Identity",
        description: "Brand strategy and design"
    }
];

// Sample data for testimonials
const testimonials = [
    {
        id: 1,
        image: "/api/placeholder/150/150",
        text: "Working with this team was an absolute pleasure. They understood our vision and delivered beyond our expectations. The website they developed has significantly increased our online conversions.",
        name: "Sarah Johnson",
        position: "CEO, TechStart Inc."
    },
    {
        id: 2,
        image: "/api/placeholder/150/150",
        text: "The mobile app they developed for us has received excellent feedback from our users. Their attention to detail and commitment to quality is impressive.",
        name: "Michael Rodriguez",
        position: "Marketing Director, AppSolutions"
    },
    {
        id: 3,
        image: "/api/placeholder/150/150",
        text: "Our digital marketing strategy has been completely transformed thanks to their expertise. We've seen a 150% increase in lead generation within just three months.",
        name: "Emily Chen",
        position: "Founder, GrowthMatters"
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.getElementById('services-container');
    const portfolioContainer = document.getElementById('portfolio-container');
    const testimonialContainer = document.getElementById('testimonial-container');
    const footerServices = document.getElementById('footer-services');
    const filterButtons = document.querySelectorAll('.filter-button');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');
    const contactForm = document.getElementById('contactForm');

    // Populate Services
    function populateServices() {
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            servicesContainer.appendChild(serviceCard);
        });
    }

    // Populate Portfolio
    function