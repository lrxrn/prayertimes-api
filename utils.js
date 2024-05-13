function formatDate(date, format) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const day = date.getDate().toString().padStart(2, '0');
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    switch (format) {
      case "YYYY-MM-DD":
        return `${year}-${month.padStart(2, '0')}-${day}`;
      case "DD-MM-YYYY":
        return `${day}-${month}-${year}`;
      case "MM/DD/YYYY":
        return `${month.padStart(2, '0')}/${day}/${year}`;
      case "HH:MM:SS":
        return `${hours}:${minutes}:${seconds}`;
      case "YYYY-MM-DD HH:MM:SS":
        return `${year}-${month.padStart(2, '0')}-${day} ${hours}:${minutes}:${seconds}`;
      default:
        throw new Error(`Invalid date format: ${format}`);
    }
}

function mapAtoll(code) {
    const atollNames = {
        "V": "Vaavu",
        "Th": "Thaa",
        "Sh": "Shaviyani",
        "R": "Raa",
        "N": "Noonu",
        "M": "Meemu",
        "Lh": "Lhaviyani",
        "L": "Laamu",
        "K": "Kaafu",
        "HA": "Haa Alifu",
        "GDh": "Gaafu Dhaalu",
        "GA": "Gaafu Alifu",
        "F": "Faafu",
        "Dh": "Dhaalu",
        "B": "Baa",
        "ADh": "Alif Dhaalu",
        "AA": "Alifu Alifu",
        "Gn": "Gnaviyani",
        "S": "Seenu",
        "HDh": "Haa Dhaalu"
    }

    const atoll = atollNames[code]

    return atoll
}

function addMinutesToTime(minutesToAdd) {
    const time = new Date(`1970-01-01T24:00:00`); // Set base date to avoid irrelevant parts
    time.setMinutes(time.getMinutes() + minutesToAdd);
    
    const hours = time.getHours().toString().padStart(2, '0'); // Add leading zero for single digits
    const minutes = time.getMinutes().toString().padStart(2, '0');
    
    return `${hours}:${minutes}`;
}
  
function addDaysToDate(daysToAdd) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    
    // Set the date to January 1st of the current year
    const baseDate = new Date(year, 0, 1);
    
    // Add the specified number of days
    baseDate.setDate(baseDate.getDate() + daysToAdd);
    
    // Format the date string (YYYY-MM-DD)
    const formattedDate = baseDate.toISOString().slice(0, 10);
    
    return formattedDate;
}
  
module.exports = { formatDate, mapAtoll, addMinutesToTime, addDaysToDate };
  