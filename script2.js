const WATER_QUALITY_API_URL = 'https://environment.data.gov.uk/water-quality/view/landing'; 

// Function to fetch water quality index data from the external API
async function fetchWQI() {
    try {
        const response = await fetch(WATER_QUALITY_API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Assuming the API returns a JSON object with a `wqi` field
        return data.wqi;
    } catch (error) {
        console.error('Error fetching water quality data:', error);
        return null; // Return a default value or handle the error as needed
    }
}

// Function to update the display with the latest WQI value
async function updateWQI() {
    const wqiValue = await fetchWQI();
    const wqiDisplay = document.getElementById('wqi-value');
    const wqiStatus = document.getElementById('wqi-status');
    
    if (wqiValue === null) {
        wqiDisplay.textContent = 'Error';
        wqiStatus.textContent = 'Unable to fetch data';
        wqiStatus.style.color = 'red';
        return;
    }
    
    wqiDisplay.textContent = wqiValue;
    
    // Update status based on WQI value
    if (wqiValue <= 30) {
        wqiStatus.textContent = 'Good';
        wqiStatus.style.color = 'green';
    } else if (wqiValue <= 70) {
        wqiStatus.textContent = 'Moderate';
        wqiStatus.style.color = 'orange';
    } else {
        wqiStatus.textContent = 'Poor';
        wqiStatus.style.color = 'red';
    }
}

// Add event listener to the button for manual update
document.getElementById('update-btn').addEventListener('click', updateWQI);

// Update the WQI display every 5 minutes
setInterval(updateWQI, 300000);

// Initial update
updateWQI();