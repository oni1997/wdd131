function displayTemples(templeList) {
    const templesContainer = document.getElementById('templeCards');
    
    templesContainer.innerHTML = '';
    
    templeList.forEach(temple => {
      const templeCard = document.createElement('figure');
      const templeImg = document.createElement('img');
      const templeCaption = document.createElement('figcaption');
      const templeName = document.createElement('h3');
      const templeLocation = document.createElement('p');
      const templeDedicated = document.createElement('p');
      const templeArea = document.createElement('p');
      
      templeImg.src = temple.imageUrl;
      templeImg.alt = temple.templeName;
      templeImg.loading = "lazy";
      
      templeName.textContent = temple.templeName;
      templeLocation.textContent = `Location: ${temple.location}`;
      templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
      templeArea.textContent = `Area: ${temple.area.toLocaleString()} square feet`;
      
      templeCaption.appendChild(templeName);
      templeCaption.appendChild(templeLocation);
      templeCaption.appendChild(templeDedicated);
      templeCaption.appendChild(templeArea);
      
      templeCard.appendChild(templeImg);
      templeCard.appendChild(templeCaption);
      
      templesContainer.appendChild(templeCard);
    });
  }
  
  function filterOld() {
    const oldTemples = temples.filter(temple => {
      const dedicationYear = parseInt(temple.dedicated.split(', ')[0]);
      return dedicationYear < 1900;
    });
    displayTemples(oldTemples);
  }
  
  function filterNew() {
    const newTemples = temples.filter(temple => {
      const dedicationYear = parseInt(temple.dedicated.split(', ')[0]);
      return dedicationYear > 2000;
    });
    displayTemples(newTemples);
  }
  
  function filterLarge() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
  }
  
  function filterSmall() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
  }
  
  function showAllTemples() {
    displayTemples(temples);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    showAllTemples();
    
    document.getElementById('homeFilter').addEventListener('click', function(e) {
      e.preventDefault();
      showAllTemples();
    });
    
    document.getElementById('oldFilter').addEventListener('click', function(e) {
      e.preventDefault();
      filterOld();
    });
    
    document.getElementById('newFilter').addEventListener('click', function(e) {
      e.preventDefault();
      filterNew();
    });
    
    document.getElementById('largeFilter').addEventListener('click', function(e) {
      e.preventDefault();
      filterLarge();
    });
    
    document.getElementById('smallFilter').addEventListener('click', function(e) {
      e.preventDefault();
      filterSmall();
    });
    
    const menuButton = document.getElementById('button');
    if (menuButton) {
      menuButton.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('responsive');
      });
    }
  });