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

function populateProductOptions() {
    const productSelect = document.getElementById('product');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    populateProductOptions();
});