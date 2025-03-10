// Data for product
const productItems = [
    {
        id: 1,
        category: "Non-Veg",
        image: "assets/images/nveg/buff-slices-raw-meat.jpg",
        title: "Beef Pickle",
        description: "A bold, tangy delight featuring tender buffalo meat, aromatic spices, and rich flavors. Perfect with rice or parathas!",
        details: "A bold and unique delicacy that brings the rich, savory flavors of the buffalo into a tantalizing, tangy pickle. This carefully crafted treat blends tender, succulent buffalo meat with a medley of aromatic spices and a zesty, tangy base, creating a flavor profile that's both fiery and satisfying. Each jar is a masterpiece of spiced goodness, delivering a delightful fusion of heat, acidity, and umami that dances on your taste buds. With every bite, you’ll experience the robust flavors of buffalo, elevated by the perfect balance of traditional Indian pickling spices."
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
        details: "Introducing Ivygourd Pickle"
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

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve product ID from URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    // Find the product by ID
    const product = productItems.find(item => item.id == productId);
    
    // Populate product details
    if (product) {
        const productDetailContainer = document.getElementById('product-detail-container');
        productDetailContainer.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.description}</p>
            <p>${product.details}</p>
        `;
    }
});
