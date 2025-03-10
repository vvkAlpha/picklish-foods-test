// Data for product
const productItems = [
    {
        id: 1,
        category: "Non-Veg",
        image: "assets/images/nveg/buff-slices-raw-meat.jpg",
        title: "Beef Pickle",
        description: "A bold, tangy delight featuring tender buffalo meat, aromatic spices, and rich flavors. Perfect with rice or parathas!",
        details: "A  bold and unique delicacy that brings the rich, savory flavors of the buffalo into a tantalizing, tangy pickle. This carefully crafted treat blends tender, succulent buffalo meat with a medley of aromatic spices and a zesty, tangy base, creating a flavor profile that's both fiery and satisfying. Each jar is a masterpiece of spiced goodness, delivering a delightful fusion of heat, acidity, and umami that dances on your taste buds. With every bite, you’ll experience the robust flavors of buffalo, elevated by the perfect balance of traditional Indian pickling spices."
    },
    {
        id: 2,
        category: "Non-Veg",
        image: "assets/images/nveg/raw-shrimps.jpg",
        title: "Prawn Pickle",
        description: "A coastal delicacy with succulent prawns, rich spices, and tangy flavors. Perfect with rice, parathas, or any meal!",
        details: "Indulge in the rich and flavorful essence of the coast with our Prawns Pickle. This mouthwatering delicacy is crafted with succulent prawns, marinated in an exquisite blend of spices and traditional coastal seasonings. Each jar is brimming with tangy, spicy, and savory notes, perfectly complementing the tender prawns. Carefully prepared and preserved, this pickle is a tribute to the time-honored art of coastal cuisine."
    },
    {
        id: 3,
        category: "Non-Veg",
        image: "assets/images/nveg/yellowfin-tuna.jpg",
        title: "Yellowfin Tuna Pickle",
        description: "A gourmet seafood delight with premium Yellowfin Tuna, bold spices, and tangy flavors. Perfect with rice, rotis, or any meal!",
        details: "Delight in the exquisite flavors of the sea with our Yellowfin Tuna Pickle, a luxurious seafood treat crafted with care. Using premium cuts of fresh yellowfin tuna, marinated in a rich blend of spices, this pickle captures the essence of traditional coastal cuisine. Every jar is a harmonious blend of bold, tangy, and spicy notes, perfectly complementing the tender, flaky texture of tuna. Naturally preserved and meticulously prepared, this pickle is a must-have for seafood enthusiasts seeking an authentic taste experience."
    },
    {
        id: 4,
        category: "Non-Veg",
        image: "assets/images/nveg/white-tuna.jpg",
        title: "Tuna Pickle",
        description: "A bold seafood delight with tender tuna, rich spices, and tangy flavors. Perfect with rice, flatbreads, or any meal!",
        details: "Savor the bold and rich flavors of the ocean with our Tuna Pickle, a seafood delicacy made with tender chunks of tuna and a blend of traditional spices. Perfectly marinated and naturally preserved, this pickle offers a taste of authentic coastal heritage. Each bite is a delightful fusion of tangy, spicy, and savory notes, bringing out the unique flavor and flaky texture of tuna. Crafted with care and free from synthetic additives, this pickle is an ideal choice for those who love the ocean’s finest."
    },
    {
        id: 5,
        category: "Non-Veg",
        image: "assets/images/nveg/chicken-breasts.jpg",
        title: "Chicken Pickle",
        description: "A savory delight with tender chicken, bold spices, and tangy flavors. Perfect with rice, parathas, or sandwiches!",
        details: "Introducing Chicken Pickle, a delightful and savory treat that brings together tender, juicy chicken with a rich blend of bold spices and tangy goodness. Carefully crafted to preserve the natural flavors of the chicken, this pickle is a perfect balance of heat, acidity, and earthy spices — a true celebration of culinary craftsmanship. Each jar delivers a mouthwatering combination of juicy chicken pieces marinated in a blend of aromatic spices and a tangy, flavorful base. The result is a pickle that is both hearty and zesty, offering a deliciously unique twist on the classic chicken flavor."
    },
    {
        id: 6,
        category: "Non-Veg",
        image: "assets/images/nveg/squid.jpg",
        title: "Squid Pickle",
        description: "A bold coastal delicacy with tender squid, rich spices, and tangy flavors. Perfect with rice, chapatis, or any meal!",
        details: "Dive into the bold and exotic flavors of the coast with our Squid Pickle. This unique delicacy is crafted using tender squid, marinated in a medley of aromatic spices and traditional coastal seasonings. Every bite bursts with the rich, tangy, and spicy flavors that define seafood cuisine, perfectly balanced to bring out the natural sweetness of the squid. Slow-cooked and carefully preserved, this pickle is a true testament to the artistry of coastal culinary traditions."
    },
    {
        id: 7,
        category: "Veg",
        image: "assets/images/veg/dates.jpg",
        title: "Dates Pickle",
        description: "A unique fusion of sweet dates, tangy spices, and bold flavors. Perfect with flatbreads, rice, or biriyani platters!",
        details: "Introducing Dates Pickle, a sweet and tangy delight that combines the natural richness of dates with a medley of aromatic spices and a hint of tanginess. This pickle is a unique blend of flavors, where the luscious sweetness of dates is perfectly balanced by zesty and spicy notes, creating a taste that’s both exotic and unforgettable. Carefully crafted to preserve the natural goodness of dates, each jar is a testament to the art of pickling, offering a truly versatile condiment that enhances any meal."
    },
    {
        id: 8,
        category: "Veg",
        image: "assets/images/veg/dates-lemon.jpg",
        title: "Lime Dates Pickle",
        description: "A perfect blend of tangy limes, sweet dates, and rich spices. Ideal with biryanis, parathas, or any meal!",
        details: "Introducing Lime Dates Pickle, a unique blend of tangy limes and sweet dates, brought together with a rich mix of spices to create an extraordinary flavor experience. This pickle is a delightful balance of zesty citrus, natural sweetness, and warm spices, making it an irresistible addition to your meals. Each jar captures the perfect harmony of bold and contrasting flavors, crafted with care to ensure every bite is a burst of deliciousness."
    },
    {
        id: 9,
        category: "Veg",
        image: "assets/images/veg/yellow-lemons.jpg",
        title: "Lemon Pickle",
        description: "A zesty blend of fresh lemons and aromatic spices. Perfect with rice, parathas, dosas, or any meal!",
        details: "Introducing Lemon Pickle, a timeless and tangy delight that celebrates the bold flavor of fresh lemons, perfectly complemented by a blend of spices. This traditional pickle captures the essence of ripe, juicy lemons, marinated in a rich, aromatic mix of mustard, fenugreek, and other spices, delivering a punch of flavor in every bite. Each jar is an explosion of zesty, spicy, and tangy goodness, carefully crafted to preserve the natural citrusy tang of lemons while infusing them with the warmth of traditional Indian spices."
    },
    {
        id: 10,
        category: "Veg",
        image: "assets/images/veg/fresh-green-mango.jpg",
        title: "Cut Mango Pickle",
        description: "Tangy raw mangoes infused with bold spices. Perfect with rice, rotis, parathas, or as a zesty side!",
        details: "Introducing Cut Mango Pickle, a classic and flavorful delicacy that combines the sharp, tangy essence of raw mangoes with a burst of aromatic spices. Made from carefully cut mango pieces, this pickle delivers a perfect balance of tartness, spice, and warmth, making it a favorite in many homes. Each jar is a delightful mix of crunchy mango pieces marinated in a blend of mustard, fenugreek, and other traditional spices, creating a pickle that is as bold as it is flavorful. The rich spices enhance the natural tartness of the mangoes, offering a tangy and satisfying experience with every bite."
    },
    {
        id: 11,
        category: "Veg",
        image: "assets/images/veg/chilly.jpg",
        title: "Chilly Pickle",
        description: "Spicy, tangy, and bold! Made with fresh chilies and aromatic spices, perfect for adding heat to any meal.",
        details: "Introducing Chilly Pickle, a fiery and flavorful condiment that’s sure to ignite your taste buds. Crafted with the finest, handpicked chilies and a blend of aromatic spices, this pickle offers the perfect balance of heat, tang, and spice for lovers of bold and vibrant flavors. Every jar is a celebration of the natural zest and pungency of chilies, carefully preserved to bring you a condiment that pairs perfectly with a wide variety of dishes."
    },
    {
        id: 12,
        category: "Veg",
        image: "assets/images/veg/green-gooseberries-wooden-bowl.jpg",
        title: "Gooseberry Pickle",
        description: "A tangy, spicy delight! Made with fresh gooseberries and aromatic spices, perfect for adding bold flavor to any meal.",
        details: "Introducing Gooseberry Pickle, a tangy and flavorful delicacy that celebrates the natural goodness of fresh, plump gooseberries. This traditional treat combines the tartness of gooseberries with a harmonious blend of spices, creating a pickle that's bursting with vibrant flavors. Each bite offers a perfect balance of sour, spicy, and savory notes, making it a delightful addition to any meal. Meticulously prepared using time-honored techniques, our Gooseberry Pickle captures the essence of tradition in every jar."
    },
    {
        id: 13,
        category: "Veg",
        image: "assets/images/veg/Ivygourd.jpg",
        title: "Ivygourd Pickle",
        description: "A tangy, spicy delight! Made with fresh ivygourd and aromatic spices, perfect for adding bold flavor to any meal.",
        details: "Introducing Gooseberry Pickle"
    },
    {
        id: 14,
        category: "Veg",
        image: "assets/images/veg/bitter-gourd.jpg",
        title: "Bittergourd Pickle",
        description: "A bold, tangy delight made with fresh bitter gourd, aromatic spices, and no artificial preservatives.",
        details: "Introducing Bitter Gourd Pickle, a bold and flavorful creation that transforms the distinct bitterness of fresh bitter gourd (Pavakka) into a mouthwatering delicacy. Enhanced with a rich blend of spices and a tangy base, this pickle is a unique treat for those who appreciate adventurous and authentic flavors. Each jar is a perfect balance of bitter, tangy, and spicy notes, carefully crafted to retain the goodness of bitter gourd while elevating its taste to a whole new level."
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

//Chatbot JS with WhatsApp Integration
// FAQ Data
const faqData = {
    "product": [
        {
            "question": "What types of pickles do you sell?",
            "answer": "We offer a variety of handcrafted pickles including dill, spicy, sweet & sour, garlic, and specialty seasonal options. All our pickles are made using traditional fermentation techniques with organic ingredients."
          },
          {
            "question": "Are your products vegan?",
            "answer": "All our veg pickle options are 100% vegan. We don't use any animal-derived ingredients in our veg recipes."
          },
          {
            "question": "Do your pickles contain allergens?",
            "answer": "Our products are free from common allergens like nuts, dairy, eggs, and gluten. However, they do contain garlic and various spices. For any concerns , do feel free to contact us to find an alternate."
          }
        ],
        "pricing": [
          {
            "question": "How much do your pickles cost?",
            "answer": "Our regular glass jars (350gm) range from ₹175 to ₹525 depending on the variety. We also offer special packing at nominal rates for international travel. Check our product pages for specific pricing and current promotions."
          },
          {
            "question": "Do you offer any discounts?",
            "answer": "Yes! We offer a 5% discount on orders above ₹1000.00/-, and a 7% discount on orders above $2000/-. We also have a monthly subscription service that saves you 10% on regular deliveries."
          },
          {
            "question": "How can I purchase the monthly Subscription ?",
            "answer": "Please do contact us via whatsapp or email for subscription."
          }
    
        ],
        "shipping": [
          {
            "question": "Do you ship internationally?",
            "answer": "Currently, we only ship within the India. We're working on expanding our shipping options to include international destinations soon."
          },
          {
            "question": "How long does shipping take?",
            "answer": "Standard shipping typically takes 3-5 business days. Local delivery is available in select areas with same-day or next-day options depending on what time the order is being placed."
          },
          {
            "question": "What are your shipping rates?",
            "answer": "Standard shipping is ₹95 for orders under ₹1000/-, and free for orders above ₹1000/-. Expedited shipping is available starting at ₹115/- depending on your location."
          }
        ],
        "returns": [
          {
            "question": "What is your return policy?",
            "answer": "Due to the perishable nature of our products, we cannot accept returns. However, if you receive damaged products or are unsatisfied with the quality, please contact us within 2 days of delivery."
          }
        ],
        "other": [
          {
            "question": "How do I store your pickles?",
            "answer": "Our pickles should be refrigerated after opening. Unopened jars can be stored in a cool, dry place for up to 6 months. Once opened, consume within 4 weeks for optimal flavor and quality."
          },
          {
            "question": "Do you offer wholesale options?",
            "answer": "Yes, we do offer wholesale pricing for restaurants, specialty shops, and food service businesses. Please contact us via email or Whatsapp for more information."
          }
    ]
  };
  
  // Suggested questions to display at the start
  const initialSuggestions = [
    "What types of pickles do you sell?",
    "How much do your pickles cost?",
    "What is your shipping policy?"
  ];
  
  // Your WhatsApp business number
  const whatsappNumber = "+919447188479";
  
  // Initialize the chatbot when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const messagesContainer = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    
    // Array to store chat history
    let chatHistory = [];
  
    // Toggle chatbot visibility
    chatbotToggleBtn.addEventListener('click', function() {
      chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
      if (chatbot.style.display === 'flex') {
        showSuggestedQuestions(initialSuggestions);
        userInput.focus();
      }
    });
  
    // Close chatbot
    chatbotCloseBtn.addEventListener('click', function() {
      chatbot.style.display = 'none';
    });
  
    // Send message when button is clicked
    sendBtn.addEventListener('click', function() {
      sendMessage();
    });
  
    // Send message when Enter key is pressed
    userInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    // Show initial suggested questions
    showSuggestedQuestions(initialSuggestions);
  
    // Function to show suggested questions
    function showSuggestedQuestions(questions) {
      const suggestedQuestionsContainer = document.createElement('div');
      suggestedQuestionsContainer.className = 'suggested-questions';
      
      questions.forEach(question => {
        const questionChip = document.createElement('div');
        questionChip.className = 'question-chip';
        questionChip.textContent = question;
        questionChip.addEventListener('click', function() {
          userInput.value = question;
          sendMessage();
        });
        suggestedQuestionsContainer.appendChild(questionChip);
      });
      
      const botMessage = document.createElement('div');
      botMessage.className = 'message bot-message';
      botMessage.appendChild(suggestedQuestionsContainer);
      messagesContainer.appendChild(botMessage);
      
      // Log initial bot welcome message to chat history
      if (chatHistory.length === 0) {
        chatHistory.push("Bot: Hello! I'm Picklish's virtual assistant. Kindly ensure that you do not share any personally identifiable information. How can I help you today?");
      }
      
      scrollToBottom();
    }
  
    // Function to send message
    function sendMessage() {
      const message = userInput.value.trim();
      if (message === '') return;
  
      // Add user message to chat
      addMessage(message, 'user');
      // Add to chat history
      chatHistory.push("Customer: " + message);
      userInput.value = '';
  
      // Show typing indicator
      showTypingIndicator();
  
      // Process the message and get response
      setTimeout(() => {
        removeTypingIndicator();
        const response = processUserMessage(message);
        addMessage(response, 'bot');
        // Add to chat history
        chatHistory.push("Bot: " + response);
  
        // If we couldn't find a good answer, suggest human handover
        if (response.includes("I'm not sure about that")) {
          setTimeout(() => {
            const handoverMsg = "Would you like to continue this conversation with a human agent on WhatsApp?";
            addMessage(handoverMsg, 'bot');
            chatHistory.push("Bot: " + handoverMsg);
            
            const handoverContainer = document.createElement('div');
            handoverContainer.className = 'suggested-questions';
            
            const yesChip = document.createElement('div');
            yesChip.className = 'question-chip';
            yesChip.textContent = "Yes, transfer to WhatsApp";
            yesChip.addEventListener('click', function() {
              addMessage("Yes, transfer to WhatsApp", 'user');
              chatHistory.push("Customer: Yes, transfer to WhatsApp");
              setTimeout(() => {
                const transferMsg = "Great! I'll transfer this conversation to WhatsApp where our team can assist you further.";
                addMessage(transferMsg, 'bot');
                chatHistory.push("Bot: " + transferMsg);
                
                // Display phone number input for WhatsApp
                showPhoneNumberInput();
              }, 500);
            });
            
            const noChip = document.createElement('div');
            noChip.className = 'question-chip';
            noChip.textContent = "No, I'll ask something else";
            noChip.addEventListener('click', function() {
              addMessage("No, I'll ask something else", 'user');
              chatHistory.push("Customer: No, I'll ask something else");
              setTimeout(() => {
                const continueMsg = "Sure, what else would you like to know about our products or services?";
                addMessage(continueMsg, 'bot');
                chatHistory.push("Bot: " + continueMsg);
                showSuggestedQuestions(initialSuggestions);
              }, 500);
            });
            
            handoverContainer.appendChild(yesChip);
            handoverContainer.appendChild(noChip);
            
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot-message';
            botMessage.appendChild(handoverContainer);
            messagesContainer.appendChild(botMessage);
            scrollToBottom();
          }, 500);
        }
      }, 1000);
    }
  
    // Function to show phone number input for WhatsApp
    function showPhoneNumberInput() {
      const phoneInputContainer = document.createElement('div');
      phoneInputContainer.className = 'message bot-message';
      
      const phoneInputContent = document.createElement('div');
      phoneInputContent.className = 'message-content';
      phoneInputContent.innerHTML = `
        <p>Please enter your phone number to continue on WhatsApp:</p>
        <div class="phone-input-group">
          <input type="tel" id="phone-input" placeholder="e.g., 1234567890" class="phone-input">
          <button id="phone-submit" class="phone-submit">Continue</button>
        </div>
      `;
      
      phoneInputContainer.appendChild(phoneInputContent);
      messagesContainer.appendChild(phoneInputContainer);
      scrollToBottom();
      
      // Add event listener to the continue button
      setTimeout(() => {
        const phoneInput = document.getElementById('phone-input');
        const phoneSubmit = document.getElementById('phone-submit');
        
        phoneSubmit.addEventListener('click', function() {
          const phoneNumber = phoneInput.value.trim();
          if (phoneNumber) {
            addMessage(`My phone number: ${phoneNumber}`, 'user');
            chatHistory.push(`Customer phone: ${phoneNumber}`);
            
            // Prepare chat history for WhatsApp
            setTimeout(() => {
              transferToWhatsApp(phoneNumber);
            }, 1000);
          }
        });
      }, 100);
    }
  
    // Function to transfer conversation to WhatsApp
    function transferToWhatsApp(customerPhone) {
      // Prepare chat history text
      const chatText = formatChatHistoryForWhatsApp();
      
      // Create WhatsApp link with pre-filled message
      const encodedChat = encodeURIComponent(chatText);
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedChat}`;
      
      // Show confirmation and link
      const confirmationMsg = document.createElement('div');
      confirmationMsg.className = 'message bot-message';
      
      const confirmationContent = document.createElement('div');
      confirmationContent.className = 'message-content';
      confirmationContent.innerHTML = `
        <p>Thanks! Click the button below to continue this conversation on WhatsApp:</p>
        <a href="${whatsappLink}" target="_blank" class="whatsapp-button">
          <i class="fab fa-whatsapp"></i> Continue on WhatsApp
        </a>
      `;
      
      confirmationMsg.appendChild(confirmationContent);
      messagesContainer.appendChild(confirmationMsg);
      scrollToBottom();
    }
  
    // Format chat history for WhatsApp
    function formatChatHistoryForWhatsApp() {
      let formattedChat = "--- Chat with Picklish Foods Support ---\n\n";
      formattedChat += chatHistory.join("\n");
      formattedChat += "\n\n--- End of Automated Chat ---\n";
      formattedChat += "Hello, I need assistance from a human agent. Above is my conversation with your chatbot.";
      return formattedChat;
    }
  
    // Function to add a message to the chat
    function addMessage(message, sender) {
      const messageElement = document.createElement('div');
      messageElement.className = `message ${sender}-message`;
      
      const messageContent = document.createElement('div');
      messageContent.className = 'message-content';
      messageContent.textContent = message;
      
      messageElement.appendChild(messageContent);
      messagesContainer.appendChild(messageElement);
      scrollToBottom();
    }
  
    // Function to show typing indicator
    function showTypingIndicator() {
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'bot-typing';
      typingIndicator.id = 'typing-indicator';
      
      for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'typing-dot';
        typingIndicator.appendChild(dot);
      }
      
      messagesContainer.appendChild(typingIndicator);
      scrollToBottom();
    }
  
    // Function to remove typing indicator
    function removeTypingIndicator() {
      const typingIndicator = document.getElementById('typing-indicator');
      if (typingIndicator) {
        typingIndicator.remove();
      }
    }
  
    // Function to scroll to bottom of chat
    function scrollToBottom() {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    // Function to process user message and get response
    function processUserMessage(message) {
      // Convert message to lowercase for easier matching
      const lowerMessage = message.toLowerCase();
      
      // Check for greetings
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage === 'hey') {
        return "Hello! How can I help you with Picklish Foods today?";
      }
      
      // Check for goodbyes
      if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('thank')) {
        return "Thank you for chatting with us! If you have more questions, feel free to ask anytime.";
      }
      
      // Check for human agent requests
      if (lowerMessage.includes('human') || lowerMessage.includes('agent') || lowerMessage.includes('person') || lowerMessage.includes('representative') || lowerMessage.includes('whatsapp')) {
        return "I'd be happy to transfer this conversation to WhatsApp where you can chat with a human agent. Would you like to proceed?";
      }
      
      // Search through FAQ data for matching keywords
      for (const category in faqData) {
        for (const faq of faqData[category]) {
          // Create an array of keywords from the question
          const keywords = faq.question.toLowerCase().split(' ').filter(word => word.length > 3);
          
          // Check if any keywords match
          if (keywords.some(keyword => lowerMessage.includes(keyword))) {
            return faq.answer;
          }
        }
      }
      
      // If no match is found
      return "I'm not sure about that specific question. Would you like me to transfer you to a human agent on WhatsApp who can help you better?";
    }
  });

        // Function to modify product item creation to include links
        function createProductItem(product) {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.setAttribute('data-category', product.category);
            
            // Create a link to the product detail page
            const productLink = document.createElement('a');
            productLink.href = '#product-detail';
            productLink.setAttribute('data-product-id', product.id);
            productLink.onclick = function() {
                showProductDetail(product.id);
                return true;
            };
            
            // Product content inside the link
            productLink.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">₹${product.price}</div>
                </div>
            `;
            
            productItem.appendChild(productLink);
            return productItem;
        }
        
        // Function to show product detail
        function showProductDetail(productId) {
            // Find the product with the given ID
            const product = productData.find(p => p.id === productId);
            
            if (!product) return;
            
            // Hide product section and show detail section
            document.getElementById('product').style.display = 'none';
            const detailSection = document.getElementById('product-detail');
            detailSection.style.display = 'block';
            
            // Populate product detail content
            const detailContent = document.getElementById('product-detail-content');
            detailContent.innerHTML = `
                <div class="product-detail-flex">
                    <div class="product-detail-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-detail-info">
                        <h2>${product.name}</h2>
                        <p class="product-detail-description">${product.description}</p>
                        <div class="product-detail-price">₹${product.price}</div>
                        <div class="product-detail-category">Category: ${product.category}</div>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            `;
            
            // Scroll to the top of the page
            window.scrollTo(0, 0);
        }
        
        // Function to close product detail and return to products
        function closeProductDetail() {
            document.getElementById('product-detail').style.display = 'none';
            document.getElementById('product').style.display = 'block';
        }
        
        // Override the displayProducts function if it exists in your script.js
        // This assumes your product data is stored in a variable called productData
        // and that displayProducts is defined in your script.js
        window.addEventListener('load', function() {
            // Check if the original displayProducts function exists
            if (typeof window.originalDisplayProducts !== 'function') {
                // Store the original function if it exists
                if (typeof displayProducts === 'function') {
                    window.originalDisplayProducts = displayProducts;
                    
                    // Override the function
                    window.displayProducts = function(products) {
                        const container = document.getElementById('product-container');
                        container.innerHTML = '';
                        
                        products.forEach(product => {
                            const productItem = createProductItem(product);
                            container.appendChild(productItem);
                        });
                    };
                }
            }
            
            // Add hash change event listener to handle back button
            window.addEventListener('hashchange', function() {
                if (window.location.hash === '#product') {
                    closeProductDetail();
                }
            });
        });