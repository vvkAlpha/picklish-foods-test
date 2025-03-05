

// assets/js/product-page.js
document.addEventListener('DOMContentLoaded', () => {
    // Product data configuration
    const productData = {
        'mixed-veg-pickle': {
            title: 'Beef Pickle',
            type: 'Non-Vegetarian',
            image: '../assets/images/buffalo.jpg',
            description: 'Buffalo Pickle, a bold and unique delicacy that brings the rich, savory flavors of the buffalo into a tantalizing, tangy pickle. This carefully crafted treat blends tender, succulent buffalo meat with a medley of aromatic spices and a zesty, tangy base, creating a flavor profile that is both fiery and satisfying.\n Each jar is a masterpiece of spiced goodness, delivering a delightful fusion of heat, acidity, and umami that dances on your taste buds. With every bite, you will experience the robust flavors of buffalo, elevated by the perfect balance of traditional Indian pickling spices.'
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
            nutrition: [
                { nutrient: 'Calories', amount: '85 kcal' },
                { nutrient: 'Total Fat', amount: '6g' },
                { nutrient: 'Protein', amount: '2g' },
                { nutrient: 'Carbohydrates', amount: '7g' }
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
            nutrition: [
                { nutrient: 'Calories', amount: '95 kcal' },
                { nutrient: 'Total Fat', amount: '7g' },
                { nutrient: 'Protein', amount: '1g' },
                { nutrient: 'Carbohydrates', amount: '8g' }
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

    // Call populate function
    populateProductPage();
});
