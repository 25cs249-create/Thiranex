/**
 * 1. Data State (The E-Commerce Catalog)
 */
const productDatabase = [
    {
        id: "mds-01",
        name: "Mind Detector Spectacles",
        price: "$499.00",
        desc: "The flagship wearable. Engineered for seamless user interaction and real-time cognitive data mapping."
    },
    {
        id: "mds-02",
        name: "Spectacles: Editorial Edition",
        price: "$650.00",
        desc: "Designed to pair flawlessly with formal wear. Features a cinematic HUD and a refined, architectural frame."
    },
    {
        id: "mds-03",
        name: "Developer Edition (SDK Included)",
        price: "$899.00",
        desc: "Unrestricted API access for custom applications. Build the future of thought-based tech interfaces."
    }
];

/**
 * 2. View Components
 * These functions return template literals representing our modular pages.
 */
const Views = {
    home: () => `
        <div class="hero">
            <h1>See the Unseen.</h1>
            <p class="lead">The Mind Detector Spectacles blend cutting-edge cognitive mapping with uncompromising, editorial-grade design.</p>
            <a href="#catalog" class="btn-buy" style="text-decoration:none; display:inline-block;">Explore the Collection</a>
        </div>
    `,
    
    catalog: () => `
        <div class="catalog-header">
            <h2>The Catalog</h2>
            <p class="lead" style="margin-bottom: 2rem;">Select your interface.</p>
        </div>
        <div class="product-grid">
            ${productDatabase.map(product => `
                <article class="product-card">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-price">${product.price}</div>
                    <button class="btn-buy" onclick="alert('Added ${product.name} to cart!')">Add to Cart</button>
                </article>
            `).join('')}
        </div>
    `,
    
    notFound: () => `
        <div class="error-state">
            <h1>404</h1>
            <p class="lead">This page does not exist in our current dimension.</p>
            <a href="#home" style="color: white;">Return to Campaign</a>
        </div>
    `
};

/**
 * 3. The Routing Engine
 * Listens to the URL and injects the correct View component into the DOM.
 */
const appRoot = document.getElementById('app-root');

function router() {
    // Get the current hash (e.g., '#catalog'), remove the '#'. Default to 'home'.
    let hash = window.location.hash.substring(1) || 'home';
    
    // Check if the route exists in our Views object, otherwise return the 404 view.
    const renderFunction = Views[hash] ? Views[hash] : Views.notFound;
    
    // Inject the HTML and re-trigger the CSS animation
    appRoot.innerHTML = renderFunction();
    appRoot.style.animation = 'none';
    appRoot.offsetHeight; // Trigger reflow
    appRoot.style.animation = 'fadeIn 0.5s ease-in-out';
}

// Listen for navigation changes and initial page load
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);