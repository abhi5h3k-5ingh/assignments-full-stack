function formatTimeWithSeconds(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
  function formatTimeWithAMPM(date) {
    const hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  
  function updateClock() {
    const currentTime = new Date();
    
    // Update the clock with different formats
    console.log(`HH:MM:SS: ${formatTimeWithSeconds(currentTime)}`);
    console.log(`HH:MM:SS AM/PM: ${formatTimeWithAMPM(currentTime)}`);
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial update
  updateClock();
  