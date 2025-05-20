// Product data for Picklish Foods
//const products = [
//    {
//        id: 1,
//        icon: "🟩",
//        title: "Veg Pickles",
//        description: "Savor the essence of tradition with our handcrafted vegetarian pickles, made from farm-fresh ingredients and authentic recipes. From tangy mango to fiery chili, each jar is packed with rich spices and nostalgic flavors. Free from preservatives and crafted with time-honored methods, our pickles are the perfect companion to any meal. Rediscover the joy of homemade goodness with Picklish!"
//    },
//    {
//        id: 2,
//        icon: "🟥",
//        title: "Non-Veg Pickles",
//        description: "Indulge in the bold, hearty flavors of our handcrafted non-vegetarian pickles, made with premium cuts of meat and seafood, infused with rich spices, and aged to perfection. Free from preservatives and rooted in tradition, each jar captures the essence of authentic regional flavors. Perfectly paired with rice, rotis, or snacks, Picklish brings you a true taste of indulgence in every bite!"
//    }
//];

// Data for product
const productItems = [
    {
        id: 1,
        category: "nveg",
        image: "assets/images/nveg/buff-slices-raw-meat.jpg",
        title: "Buffalo Pickle",
        description: "A bold, tangy delight featuring tender buffalo meat, aromatic spices, and rich flavors. Perfect with rice or parathas!",
        price: "Rs 1.5/gm"
    },
    {
        id: 2,
        category: "nveg",
        image: "assets/images/nveg/raw-shrimps.jpg",
        title: "Prawn Pickle",
        description: "A coastal delicacy with succulent prawns, rich spices, and tangy flavors. Perfect with rice, parathas, or any meal!"
    },
    {
        id: 3,
        category: "nveg",
        image: "assets/images/nveg/yellowfin-tuna.jpg",
        title: "Yellowfin Tuna Pickle",
        description: "A gourmet seafood delight with premium Yellowfin Tuna, bold spices, and tangy flavors. Perfect with rice, rotis, or any meal!"
    },
    {
        id: 4,
        category: "nveg",
        image: "assets/images/nveg/white-tuna.jpg",
        title: "Tuna Pickle",
        description: "A bold seafood delight with tender tuna, rich spices, and tangy flavors. Perfect with rice, flatbreads, or any meal!"
    },
    {
        id: 5,
        category: "nveg",
        image: "assets/images/nveg/chicken-breasts.jpg",
        title: "Chicken Pickle",
        description: "A savory delight with tender chicken, bold spices, and tangy flavors. Perfect with rice, parathas, or sandwiches!"
    },
    {
        id: 6,
        category: "nveg",
        image: "assets/images/nveg/squid.jpg",
        title: "Squid Pickle",
        description: "A bold coastal delicacy with tender squid, rich spices, and tangy flavors. Perfect with rice, chapatis, or any meal!"
    },
    {
        id: 7,
        category: "veg",
        image: "assets/images/veg/dates.jpg",
        title: "Dates Pickle",
        description: "A unique fusion of sweet dates, tangy spices, and bold flavors. Perfect with flatbreads, rice, or biriyani platters!"
    },
    {
        id: 8,
        category: "veg",
        image: "assets/images/veg/dates-lemon.jpg",
        title: "Lime Dates Pickle",
        description: "A perfect blend of tangy limes, sweet dates, and rich spices. Ideal with biryanis, parathas, or any meal!"
    },
    {
        id: 9,
        category: "veg",
        image: "assets/images/veg/yellow-lemons.jpg",
        title: "Lemon Pickle",
        description: "A zesty blend of fresh lemons and aromatic spices. Perfect with rice, parathas, dosas, or any meal!"
    },
    {
        id: 10,
        category: "veg",
        image: "assets/images/veg/fresh-green-mango.jpg",
        title: "Cut Mango Pickle",
        description: "Tangy raw mangoes infused with bold spices. Perfect with rice, rotis, parathas, or as a zesty side!"
    },
    {
        id: 11,
        category: "veg",
        image: "assets/images/veg/chilly.jpg",
        title: "Chilly Pickle",
        description: "Spicy, tangy, and bold! Made with fresh chilies and aromatic spices, perfect for adding heat to any meal."
    },
    {
        id: 12,
        category: "veg",
        image: "assets/images/veg/green-gooseberries-wooden-bowl.jpg",
        title: "Gooseberry Pickle",
        description: "A tangy, spicy delight! Made with fresh gooseberries and aromatic spices, perfect for adding bold flavor to any meal."
    },
    {
        id: 13,
        category: "veg",
        image: "assets/images/veg/Ivygourd.jpg",
        title: "Ivygourd Pickle",
        description: "A tangy, spicy delight! Made with fresh ivygourd and aromatic spices, perfect for adding bold flavor to any meal."
    },
    {
        id: 14,
        category: "veg",
        image: "assets/images/veg/bitter-gourd.jpg",
        title: "Bittergourd Pickle",
        description: "A bold, tangy delight made with fresh bitter gourd, aromatic spices, and no artificial preservatives."
    },
    {
        id: 15,
        category: "veg",
        image: "assets/images/veg/puliyinji.jpg",
        title: "Puliyinji",
        description: "A zesty Kerala classic made with ginger, tamarind, jaggery, and spices—bursting with sweet, sour, and spicy notes, without any artificial additives."
    },
    {
        id: 16, 
        category: "veg",
        image: "assets/images/veg/soya-chunks.jpg",
        title: "Soya Chunks Pickle",
        description: "A hearty, flavorful pickle made with protein-rich soya chunks, traditional Kerala spices, and zero artificial preservatives—perfectly balanced with tang and heat."
    },
    {
        id: 17,
        category: "nveg",
        image: "assets/images/nveg/pork.jpg",
        title: "Pork Pickle",
        description: "A rich, fiery indulgence made with tender pork chunks, slow-cooked in authentic Kerala spices—preservative-free and packed with bold, meaty flavor."
    },
    {
        id: 18,
        category: "veg",
        image: "assets/images/veg/chutney-powder.jpg",
        title: "Chutney Powder",
        description: "A flavorful dry blend of roasted lentils, spices, and chillies—perfect with idlis, dosas, or rice with desi ghee, and made without any artificial preservatives."
    }
];

// Data for testimonials
const testimonials = [
    {
        id: 1,
        //image: "/api/placeholder/150/150",
        text: "I recently tried Picklish food's home made mango and buffalo pickles, and I have to say—they took me right back to childhood meals at my granny’s. If you’re craving that authentic, homemade pickle taste, Picklish is a must-try!",
        name: "Muhammed Javed (MjR)",
        position: "IT Professional"
    },
    {
        id: 2,
        //image: "/api/placeholder/150/150",
        text: "Delicious 😋 and the real homely taste and quality..",
        name: "Sujith Pulpara",
        position: "Cafe Consultant"
    },
    {
        id: 3,
        //image: "/api/placeholder/150/150",
        text: "Really loved the pickles ! 😍 such a droooooling taste!..",
        name: "Kalavathi Swaminathan",
        position: "Home maker"
    },
    {
        id: 4,
        //image: "/api/placeholder/150/150",
        text: "The pickle was so delicious. I ordered cut mango pickle. It was a healthy and delicious version of pickle I have ever eaten",
        name: "Aparna P Menon",
        position: "Chartered Accountant"
    },
    {
        id: 5,
        text: "I've tried the cut mango, prawns, and dates pickle from Picklish, and they’re all absolutely delicious!!!The dates pickle❤️ I loved it so much that the jar was gone in just a few days. The natural sweetness of the dates mixed with the perfect blend of tangy and spicy flavors is so addictive.If you haven’t tried date pickle yet, you’re definitely missing out!",
        name: "Manjusha TV",
        position: "IT Professional"
    }
];

// DOM Elements and Functions
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    const productContainer = document.getElementById('product-container');
    const testimonialContainer = document.getElementById('testimonial-container');
    const footerProducts = document.getElementById('footer-products');
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
            productCard.className = 'product-card'; // Using product-card class from your CSS
            productCard.innerHTML = `
                <div class="product-icon">${product.icon}</div>
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
            `;
            productsContainer.appendChild(productCard);
        });
    }

    // Populate product
    if (productContainer) {
        productItems.forEach(item => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.dataset.category = item.category;
            productItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="product-image">
                <div class="product-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p>${product.price}</p>
                </div>
            `;
            productContainer.appendChild(productItem);
        });
    }

    // product Filtering
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter items
                const items = productContainer.querySelectorAll('.product-item');
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

    // Populate Footer products
    if (footerProducts) {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#products">${product.title}</a>`;
            footerProducts.appendChild(listItem);
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
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;
            const phoneNumber = "+919447188479"; // Your WhatsApp number (with country code)

            // Format the message
            const whatsappMessage = `Hello, I'm *${name}*.\n\n📧 Email: ${email}\n📌 Subject: ${subject}\n📝 Message: ${message}`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Redirect to WhatsApp
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
        });
    }
});
// WhatsApp Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the WhatsApp button element
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    if (whatsappBtn) {
        // Add bounce animation when the page loads
        setTimeout(function() {
            whatsappBtn.classList.add('bounce');
            
            setTimeout(function() {
                whatsappBtn.classList.remove('bounce');
            }, 1000);
        }, 2000);
    }
});

// Add bounce animation class
if (!document.querySelector('style.whatsapp-bounce-style')) {
    const style = document.createElement('style');
    style.className = 'whatsapp-bounce-style';
    style.textContent = `
        .bounce {
            animation: bounce 0.5s;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
}

// API key for OpenWeatherMap
const API_KEY = '11aaa3b5239ed56a389edd3f1c12c3a0';

// Get the current date
function updateDate() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    document.querySelector('.weather-date').textContent = now.toLocaleDateString('en-US', options);
}

// Function to get user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                console.error("Error getting location:", error);
                // Default location (New York)
                fetchWeather(40.7128, -74.0060);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
        // Default location (New York)
        fetchWeather(40.7128, -74.0060);
    }
}

// Function to fetch weather data from OpenWeatherMap API
function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            updateWeatherUI(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.querySelector('.weather-desc').textContent = "Failed to load weather data";
        });
}

// Function to update the UI with weather data
function updateWeatherUI(data) {
    // Update location
    document.querySelector('.weather-location').textContent = data.name;
    
    // Calculate temperatures
    const tempC = Math.round(data.main.temp);
    const tempF = Math.round((tempC * 9/5) + 32);
    const feelsLikeC = Math.round(data.main.feels_like);
    const feelsLikeF = Math.round((feelsLikeC * 9/5) + 32);
    
    // Update temperature and description
    document.querySelector('.weather-temp').textContent = `${tempC}°C / ${tempF}°F`;
    document.querySelector('.weather-desc').textContent = data.weather[0].description;
    
    // Update details
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind').textContent = `${data.wind.speed} m/s`;
    document.getElementById('feels-like').textContent = `${feelsLikeC}°C`;
    
    // Update icon and animation based on weather condition
    createWeatherAnimation(data.weather[0].id);
}

// Function to create weather animation based on weather condition code
function createWeatherAnimation(weatherCode) {
    const iconContainer = document.getElementById('weather-icon');
    iconContainer.innerHTML = ''; // Clear previous animation
    
    if (weatherCode >= 200 && weatherCode < 300) {
        // Thunderstorm
        createClouds(iconContainer);
        const thunder = document.createElement('div');
        thunder.className = 'thunder';
        iconContainer.appendChild(thunder);
        createRaindrops(iconContainer, 5);
    } 
    else if (weatherCode >= 300 && weatherCode < 400) {
        // Drizzle
        createClouds(iconContainer);
        createRaindrops(iconContainer, 3, true);
    } 
    else if (weatherCode >= 500 && weatherCode < 600) {
        // Rain
        createClouds(iconContainer);
        createRaindrops(iconContainer, 6);
    } 
    else if (weatherCode >= 600 && weatherCode < 700) {
        // Snow
        createClouds(iconContainer);
        createSnowflakes(iconContainer, 8);
    } 
    else if (weatherCode >= 700 && weatherCode < 800) {
        // Atmosphere (mist, fog, etc.)
        const mist = document.createElement('div');
        mist.className = 'mist';
        iconContainer.appendChild(mist);
    } 
    else if (weatherCode === 800) {
        // Clear sky
        const sun = document.createElement('div');
        sun.className = 'sun';
        iconContainer.appendChild(sun);
    } 
    else if (weatherCode > 800 && weatherCode < 900) {
        // Clouds
        createClouds(iconContainer);
    }
}

// Helper function to create cloud elements
function createClouds(container) {
    const cloudTypes = ['cloud-1', 'cloud-2', 'cloud-3'];
    cloudTypes.forEach(type => {
        const cloud = document.createElement('div');
        cloud.className = `cloud ${type}`;
        container.appendChild(cloud);
    });
}

// Helper function to create raindrops
function createRaindrops(container, count, isDrizzle = false) {
    for (let i = 0; i < count; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'rain';
        raindrop.style.height = isDrizzle ? '10px' : '15px';
        raindrop.style.left = `${5 + (i * 8)}px`;
        raindrop.style.top = '30px';
        raindrop.style.animationDelay = `${i * 0.2}s`;
        container.appendChild(raindrop);
    }
}

// Helper function to create snowflakes
function createSnowflakes(container, count) {
    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snow';
        snowflake.style.left = `${5 + (i * 5)}px`;
        snowflake.style.top = '25px';
        snowflake.style.animationDelay = `${i * 0.3}s`;
        container.appendChild(snowflake);
    }
}

// Function to make the widget draggable
function makeDraggable() {
    const widget = document.querySelector('.weather-widget');
    const handle = document.createElement('div');
    
    // Create drag handle
    handle.className = 'weather-widget-handle';
    handle.innerHTML = '<span class="handle-dots">⋮⋮</span>';
    handle.style.cursor = 'move';
    handle.style.position = 'absolute';
    handle.style.top = '0';
    handle.style.left = '0';
    handle.style.width = '100%';
    handle.style.height = '20px';
    handle.style.display = 'flex';
    handle.style.justifyContent = 'center';
    handle.style.alignItems = 'center';
    handle.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
    handle.style.borderTopLeftRadius = '10px';
    handle.style.borderTopRightRadius = '10px';
    
    // Insert handle at the top of widget
    widget.prepend(handle);
    
    // Add some padding at the top to accommodate the handle
    widget.style.paddingTop = '25px';
    
    // Save position in local storage
    function savePosition() {
        const position = {
            top: widget.style.top,
            left: widget.style.left,
            right: widget.style.right,
            bottom: widget.style.bottom
        };
        localStorage.setItem('weatherWidgetPosition', JSON.stringify(position));
    }
    
    // Restore position from local storage
    function restorePosition() {
        const savedPosition = localStorage.getItem('weatherWidgetPosition');
        if (savedPosition) {
            const position = JSON.parse(savedPosition);
            widget.style.top = position.top || '90px';
            widget.style.left = position.left || 'auto';
            widget.style.right = position.right || '20px';
            widget.style.bottom = position.bottom || 'auto';
        }
    }
    
    // Set initial position
    restorePosition();
    
    let isDragging = false;
    let offsetX, offsetY;
    
    // When user starts dragging
    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        
        // Get the current widget position
        const widgetRect = widget.getBoundingClientRect();
        
        // Calculate the offset between cursor and widget position
        offsetX = e.clientX - widgetRect.left;
        offsetY = e.clientY - widgetRect.top;
        
        // Change appearance to indicate dragging
        widget.style.opacity = '0.8';
        widget.style.transition = 'none';
        handle.style.cursor = 'grabbing';
        
        // Prevent text selection during drag
        e.preventDefault();
    });
    
    // When dragging
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        // Change position to fixed if it's not already
        if (widget.style.position !== 'fixed') {
            widget.style.position = 'fixed';
        }
        
        // Calculate new position
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        
        // Apply new position
        widget.style.left = `${newX}px`;
        widget.style.top = `${newY}px`;
        
        // Reset right and bottom
        widget.style.right = 'auto';
        widget.style.bottom = 'auto';
    });
    
    // When user stops dragging
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            
            // Return to normal appearance
            widget.style.opacity = '1';
            widget.style.transition = 'all 0.3s ease';
            handle.style.cursor = 'move';
            
            // Save position
            savePosition();
        }
    });
    
    // Add double-click to reset position
    handle.addEventListener('dblclick', () => {
        widget.style.top = '90px';
        widget.style.right = '20px';
        widget.style.left = 'auto';
        widget.style.bottom = 'auto';
        savePosition();
    });
    
    // Touch support for mobile devices
    handle.addEventListener('touchstart', (e) => {
        isDragging = true;
        
        const touch = e.touches[0];
        const widgetRect = widget.getBoundingClientRect();
        
        offsetX = touch.clientX - widgetRect.left;
        offsetY = touch.clientY - widgetRect.top;
        
        widget.style.opacity = '0.8';
        widget.style.transition = 'none';
        
        e.preventDefault();
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const touch = e.touches[0];
        
        if (widget.style.position !== 'fixed') {
            widget.style.position = 'fixed';
        }
        
        const newX = touch.clientX - offsetX;
        const newY = touch.clientY - offsetY;
        
        widget.style.left = `${newX}px`;
        widget.style.top = `${newY}px`;
        widget.style.right = 'auto';
        widget.style.bottom = 'auto';
        
        e.preventDefault();
    });
    
    document.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            widget.style.opacity = '1';
            widget.style.transition = 'all 0.3s ease';
            savePosition();
        }
    });
    
    // Add toggle button to minimize/maximize widget
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '−';
    toggleBtn.className = 'weather-toggle';
    toggleBtn.style.position = 'absolute';
    toggleBtn.style.top = '2px';
    toggleBtn.style.right = '10px';
    toggleBtn.style.background = 'transparent';
    toggleBtn.style.border = 'none';
    toggleBtn.style.fontSize = '16px';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.color = '#555';
    toggleBtn.style.width = '20px';
    toggleBtn.style.height = '20px';
    toggleBtn.style.display = 'flex';
    toggleBtn.style.justifyContent = 'center';
    toggleBtn.style.alignItems = 'center';
    toggleBtn.style.zIndex = '1000';
    
    let isMinimized = false;
    
    toggleBtn.addEventListener('click', () => {
        if (isMinimized) {
            widget.style.height = 'auto';
            widget.querySelector('.weather-main').style.display = 'flex';
            widget.querySelector('.weather-desc').style.display = 'block';
            widget.querySelector('.weather-details').style.display = 'flex';
            toggleBtn.textContent = '−';
        } else {
            widget.style.height = 'auto';
            widget.querySelector('.weather-main').style.display = 'none';
            widget.querySelector('.weather-desc').style.display = 'none';
            widget.querySelector('.weather-details').style.display = 'none';
            toggleBtn.textContent = '+';
        }
        isMinimized = !isMinimized;
        savePosition();
    });
    
    widget.appendChild(toggleBtn);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateDate();
    getLocation();
    makeDraggable();
    
    // Refresh weather data every 30 minutes
    setInterval(() => {
        getLocation();
    }, 30 * 60 * 1000);
    
    // Update date every minute
    setInterval(updateDate, 60 * 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('announcement-banner');
    const closeButton = document.getElementById('close-banner');
    const announcementButton = document.getElementById('announcement-button');
  
    // Check if banner was previously closed
    if (localStorage.getItem('bannerClosed') === 'true') {
      banner.classList.add('hidden');
    }
  
    // Close banner
    closeButton.addEventListener('click', () => {
      banner.classList.add('hidden');
      localStorage.setItem('bannerClosed', 'true');
    });
  
    // Reopen banner
    announcementButton.addEventListener('click', () => {
      banner.classList.remove('hidden');
      localStorage.setItem('bannerClosed', 'false');
    });
  });