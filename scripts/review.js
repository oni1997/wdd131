// Product array for reference
const products = [
    { id: "smartphone", name: "Smartphone X-12" },
    { id: "laptop", name: "Ultrabook Pro 15" },
    { id: "headphones", name: "Wireless Noise-Cancelling Headphones" },
    { id: "smartwatch", name: "Fitness Smartwatch" },
    { id: "tablet", name: "Tablet Air 10.5" },
    { id: "camera", name: "DSLR Camera EOS 80D" },
    { id: "speaker", name: "Smart Bluetooth Speaker" },
    { id: "tv", name: "4K Smart TV 55-inch" }
];

// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        product: params.get('product'),
        rating: params.get('rating'),
        installDate: params.get('installDate'),
        features: params.getAll('features'),
        review: params.get('review'),
        username: params.get('username')
    };
}

// Function to find product name by id
function getProductNameById(id) {
    const product = products.find(p => p.id === id);
    return product ? product.name : 'Unknown Product';
}

// Function to update review counter in localStorage
function updateReviewCounter() {
    // Get current count or initialize to 0
    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');
    
    // Increment count
    reviewCount++;
    
    // Save back to localStorage
    localStorage.setItem('reviewCount', reviewCount.toString());
    
    // Update the display
    document.getElementById('review-count').textContent = reviewCount;
}

// Function to display review details
function displayReviewDetails() {
    const params = getUrlParams();
    const reviewDetailsContainer = document.getElementById('review-details');
    
    // Create HTML for review details
    let detailsHTML = `
        <div class="review-detail">
            <strong>Product:</strong> ${getProductNameById(params.product)}
        </div>
        <div class="review-detail">
            <strong>Rating:</strong> ${params.rating} out of 5 stars
        </div>
        <div class="review-detail">
            <strong>Installation Date:</strong> ${new Date(params.installDate).toLocaleDateString()}
        </div>
    `;
    
    // Add features if selected
    if (params.features && params.features.length > 0) {
        detailsHTML += `
            <div class="review-detail">
                <strong>Useful Features:</strong> ${params.features.join(', ')}
            </div>
        `;
    }
    
    // Add review text if provided
    if (params.review) {
        detailsHTML += `
            <div class="review-detail">
                <strong>Your Review:</strong> ${params.review}
            </div>
        `;
    }
    
    // Add username if provided
    if (params.username) {
        detailsHTML += `
            <div class="review-detail">
                <strong>Submitted by:</strong> ${params.username}
            </div>
        `;
    }
    
    // Set the HTML content
    reviewDetailsContainer.innerHTML = detailsHTML;
}

// Initialize the review page
document.addEventListener('DOMContentLoaded', function() {
    // Display review details
    displayReviewDetails();
    
    // Update review counter
    updateReviewCounter();
});