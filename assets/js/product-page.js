// assets/js/product-page.js
document.addEventListener('DOMContentLoaded', () => {
    // Product data configuration
    const productData = {
        'mixed-veg-pickle': {
            title: 'Beef Pickle',
            type: 'Non-Vegetarian',
            image: '../assets/images/buffalo.jpg',
            description: 'Buffalo Pickle, a bold and unique delicacy that brings the rich, savory flavors of the buffalo into a tantalizing, tangy pickle. This carefully crafted treat blends tender, succulent buffalo meat with a medley of aromatic spices and a zesty, tangy base, creating a flavor profile that is both fiery and satisfying.\n Each jar is a masterpiece of spiced goodness, delivering a delightful fusion of heat, acidity, and umami that dances on your taste buds. With every bite, you will experience the robust flavors of buffalo, elevated by the perfect balance of traditional Indian pickling spices.',
            ingredients: [
                'Beef', 
                'Garlic', 
                'Ginger',
                'Gingelly Oil',
                'Green Chillies',   
                'Vinegar',
                'Chilly Powder',
                'Turmeric Powder',
                'Salt', 
                'Asafoetida Powder',
                'Fenugreek  Powder',
                'Mustard Seeds',
                'Fenugreek Seeds',
                'Dried Chilly',
                'Curry Leaves'
            ],
            storage: 'Store in a cool, dry place. Refrigerate after opening. Best consumed within 1 month of opening.'
        },
        'mango-pickle': {
            title: 'Mango Pickle',
            type: 'Vegetarian',
            image: '../assets/images/mango-pickle.jpg',
            description: 'Traditional Indian style mango pickle with a perfect balance of tangy and spicy flavors.',
            ingredients: [
                'Raw Mangoes', 
                'Mustard Oil', 
                'Mustard Seeds', 
                'Fenugreek Seeds', 
                'Red Chili Powder', 
                'Asafoetida', 
                'Salt'
            ],
            storage: 'Keep in an airtight container. Store in a cool, dark place. Best used within 6 months.'
        }
        // Add more products here
    };

    // Function to populate product page
    function populateProductPage() {
        // Get product ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        // Find product data
        const product = productData[productId];

        if (!product) {
            document.body.innerHTML = '<h1>Product Not Found</h1>';
            return;
        }

        // Populate elements
        document.getElementById('productTitle').textContent = product.title;
        document.getElementById('productType').textContent = product.type;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = product.title;
        document.getElementById('productDescription').textContent = product.description;
        document.title = `Picklish Foods - ${product.title}`;

        // Populate ingredients
        const ingredientsList = document.getElementById('ingredientsList');
        product.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });

        // Populate nutrition table
        const nutritionBody = document.getElementById('nutritionBody');
        product.nutrition.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.nutrient}</td>
                <td>${item.amount}</td>
            `;
            nutritionBody.appendChild(tr);
        });

        // Populate storage instructions
        document.getElementById('storageInstructions').textContent = product.storage;
    }
});

    // Call populate function
    populateProductPage();
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && !e.target.closest('.hamburger') && !e.target.closest('.nav-links')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
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