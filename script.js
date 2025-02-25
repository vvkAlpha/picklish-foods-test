// Product data for Picklish Foods
const products = [
    {
        id: 1,
        icon: "🥒",
        title: "Classic Pickle Assortment",
        description: "Our signature collection of traditional pickles made with time-honored recipes."
    },
    {
        id: 2,
        icon: "🌶️",
        title: "Spicy Selection",
        description: "For those who love heat, our specially crafted spicy pickle varieties that pack a punch."
    },
    {
        id: 3,
        icon: "🥕",
        title: "Vegetable Medley",
        description: "A colorful assortment of pickled vegetables, perfect for adding zest to any meal."
    },
    {
        id: 4,
        icon: "🍋",
        title: "Tangy Delights",
        description: "Bright, tangy pickles that bring a refreshing zing to your palate."
    },
    {
        id: 5,
        icon: "🧂",
        title: "Low Sodium Options",
        description: "Health-conscious pickle varieties with reduced salt content without sacrificing flavor."
    },
    {
        id: 6,
        icon: "🌿",
        title: "Herbal Infusions",
        description: "Pickles infused with aromatic herbs for a unique culinary experience."
    }
];

// Sample data for portfolio
const portfolioItems = [
    {
        id: 1,
        category: "web", // Using "web" for veg pickles as per your HTML
        image: "/api/placeholder/400/300",
        title: "Mango Pickle",
        description: "Sweet & tangy specialty"
    },
    {
        id: 2,
        category: "app", // Using "app" for non-veg pickles as per your HTML
        image: "/api/placeholder/400/300",
        title: "Prawn Pickle",
        description: "Coastal delicacy"
    },
    {
        id: 3,
        category: "web",
        image: "/api/placeholder/400/300",
        title: "Lemon Pickle",
        description: "Classic tangy flavor"
    },
    {
        id: 4,
        category: "web",
        image: "/api/placeholder/400/300",
        title: "Mixed Vegetable Pickle",
        description: "Assorted vegetables"
    },
    {
        id: 5,
        category: "app",
        image: "/api/placeholder/400/300",
        title: "Fish Pickle",
        description: "Traditional recipe"
    },
    {
        id: 6,
        category: "web",
        image: "/api/placeholder/400/300",
        title: "Garlic Pickle",
        description: "Bold and aromatic"
    }
];

// Sample data for testimonials
const testimonials = [
    {
        id: 1,
        image: "/api/placeholder/150/150",
        text: "Picklish Foods' mango pickle reminds me of my grandmother's recipe. The perfect balance of spices and tanginess makes it a must-have in our kitchen.",
        name: "Priya Sharma",
        position: "Food Enthusiast"
    },
    {
        id: 2,
        image: "/api/placeholder/150/150",
        text: "The prawn pickle is exceptional! The freshness is evident with every bite, and their on-demand preparation truly makes a difference in quality.",
        name: "Thomas Kurian",
        position: "Restaurant Owner"
    },
    {
        id: 3,
        image: "/api/placeholder/150/150",
        text: "I appreciate Picklish's commitment to no synthetic preservatives. Their mixed vegetable pickle has become a staple in our family gatherings.",
        name: "Lakshmi Nair",
        position: "Homecook & Blogger"
    }
];

// DOM Elements and Functions
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    const portfolioContainer = document.getElementById('portfolio-container');
    const testimonialContainer = document.getElementById('testimonial-container');
    const footerServices = document.getElementById('footer-services');
    const filterButtons = document.querySelectorAll('.filter-button');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');
    const contactForm = document.getElementById('contactForm');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Populate Products
    if (productsContainer) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'service-card'; // Using service-card class from your CSS
            productCard.innerHTML = `
                <div class="service-icon">${product.icon}</div>
                <h3>${product.title}</h3>
                <p>${product.description}</p>
            `;
            productsContainer.appendChild(productCard);
        });
    }

    // Populate Portfolio
    if (portfolioContainer) {
        portfolioItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.dataset.category = item.category;
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="portfolio-image">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            portfolioContainer.appendChild(portfolioItem);
        });
    }

    // Portfolio Filtering
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter items
                const items = portfolioContainer.querySelectorAll('.portfolio-item');
                items.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Populate Testimonials
    if (testimonialContainer) {
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            testimonialCard.innerHTML = `
                <div class="client-image">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                </div>
                <p class="testimonial-text">${testimonial.text}</p>
                <h4 class="client-name">${testimonial.name}</h4>
                <p class="client-position">${testimonial.position}</p>
            `;
            testimonialContainer.appendChild(testimonialCard);
        });
    }

    // Testimonial Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-card');
    
    if (slides.length > 0) {
        // Show first slide
        showSlide(currentSlide);
        
        // Next button
        if (nextArrow) {
            nextArrow.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });
        }
        
        // Previous button
        if (prevArrow) {
            prevArrow.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });
        }
    }

    function showSlide(index) {
        testimonialContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    // Populate Footer Services
    if (footerServices) {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#products">${product.title}</a>`;
            footerServices.appendChild(listItem);
        });
    }

    // Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && !e.target.closest('.hamburger') && !e.target.closest('.nav-links')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});