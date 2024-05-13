const atollSelect = document.getElementById("atoll");
const islandSelect = document.getElementById("island");
const prayerTimesContainer = document.getElementById("prayer-times");

function mapAtoll(code) {
    const atollNames = {
        "Vaavu": "V",
        "Thaa": "Th",
        "Shaviyani": "Sh",
        "Raa": "R",
        "Noonu": "N",
        "Meemu": "M",
        "Lhaviyani": "Lh",
        "Laamu": "L",
        "Kaafu": "K",
        "Haa_Alifu": "HA",
        "Gaafu_Dhaalu": "GDh",
        "Gaafu_Alifu": "GA",
        "Faafu": "F",
        "Dhaalu": "Dh",
        "Baa": "B",
        "Alif_Dhaalu": "ADh",
        "Alifu_Alifu": "AA",
        "Gnaviyani": "Gn",
        "Seenu": "S",
        "Haa_Dhaalu": "HDh"
    }

    const atoll = code.slice(0, code.length - 6)

    return atollNames[atoll]
}

function prettyCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// Island data (replace with actual island data for each atoll)
const islands = {
  Haa_Alifu_Atoll: [
    "Thuraakunu",
    "Uligamu",
    "Berinmadhoo",
    "Hathifushi",
    "Mulhadhoo",
    "Hoarafushi",
    "Ihavandhoo",
    "Kelaa",
    "Vashafaru",
    "Dhiddhoo",
    "Filladhoo",
    "Maarandhoo",
    "Thakandhoo",
    "Utheemu",
    "Muraidhoo",
    "Baarah",
  ],
  Haa_Dhaalu_Atoll: [
    "Faridhoo",
    "Hondaidhoo",
    "Hanimaadhoo",
    "Finey",
    "Naivaadhoo",
    "Nellaidhoo",
    "Hirimaradhoo",
    "Nolhivaranfaru",
    "Nolhivaram",
    "Kurinbi",
    "Kunburudhoo",
    "Kulhudhuffushi",
    "Kumundhoo",
    "Neykurendhoo",
    "Vaikaradhoo",
    "Maavaidhoo",
    "Makunudhoo",
  ],
  Shaviyani_Atoll: [
    "Noomaraa",
    "Kanditheemu",
    "Goidhoo",
    "Feydhoo",
    "Feevah",
    "Bileffahi",
    "Foakaidhoo",
    "Narudhoo",
    "Maakandoodhoo",
    "Maroshi",
    "Lhaimagu",
    "Funadhoo",
    "Firunbaidhoo",
    "Komandoo",
    "Maaungoodhoo",
    "Milandhoo",
  ],
  Noonu_Atoll: [
    "Henbadhoo",
    "Kendhikulhudhoo",
    "Tholhendhoo",
    "Maalhendhoo",
    "Kudafari",
    "Landhoo",
    "Maafaru",
    "Lhohi",
    "Miladhoo",
    "Magoodhoo",
    "Manadhoo",
    "Holhudhoo",
    "Foddhoo",
    "Velidhoo",
  ],
  Raa_Atoll: [
    "Alifushi",
    "Vaadhoo",
    "Rasgetheemu",
    "Angolhitheemu",
    "Gaaudoodhoo",
    "Ungulu",
    "Ungoofaaru",
    "Kandholhudhoo",
    "Maakurathu",
    "Rasmaadhoo",
    "Innamaadhoo",
    "Maduvvari",
    "Inguraidhoo",
    "Meedhoo",
    "Fainu",
    "Kinolhas",
    "Dhuvaafaru",
    "Hulhudhuffaaru",
  ],
  Lhaviyani_Atoll: ["Hinnavaru", "Naifaru", "Kurendhoo", "Olhuvelifushi"],
  Baa_Atoll: [
    "Kudarikilu",
    "Kamadhoo",
    "Kendhoo",
    "Kihaadhoo",
    "Dhonfanu",
    "Dharavandhoo",
    "Maalhos",
    "Eydhafushi",
    "Thulhaadhoo",
    "Hithaadhoo",
    "Fulhadhoo",
    "Fehendhoo",
    "Goidhoo",
  ],
  Kaafu_Atoll: [
    "Kaashidhoo",
    "Gaafaru",
    "Dhiffushi",
    "Thulusdhoo",
    "Huraa",
    "Hinmafushi",
    "Male'",
    "Gulhi",
    "Maafushi",
    "Guraidhoo",
  ],
  Alifu_Alifu_Atoll: [
    "Thoddoo",
    "Rasdhoo",
    "Ukulhas",
    "Mathiveri",
    "Bodufolhudhoo",
    "Feridhoo",
    "Maalhos",
    "Himendhoo",
  ],
  Alif_Dhaalu_Atoll: [
    "Hangnaameedhoo",
    "Omadhoo",
    "Kunburudhoo",
    "Mahibadhoo",
    "Mandhoo",
    "Dhangethi",
    "Dhigurah",
    "Dhihdhoo",
    "Fenfushi",
    "Maamigili",
  ],
  Vaavu_Atoll: ["Fulidhoo", "Thinadhoo", "Felidhoo", "Keyodhoo", "Rakeedhoo"],
  Meemu_Atoll: [
    "Dhiggaru",
    "Maduvvari",
    "Raiymandhoo",
    "Madifushi",
    "Veyvah",
    "Mulah",
    "Muli",
    "Naalaafushi",
    "Kolhufushi",
  ],
  Faafu_Atoll: [
    "Feeali",
    "Bilehdhoo",
    "Magoodhoo",
    "Dharanboodhoo",
    "Nilandhoo",
  ],
  Dhaalu_Atoll: [
    "Meedhoo",
    "Bandidhoo",
    "Rinbudhoo",
    "Hulhudheli",
    "Gemendhoo",
    "Vaani",
    "Maaenboodhoo",
    "Kudahuvadhoo",
  ],
  Thaa_Atoll: [
    "Buruni",
    "Vilufushi",
    "Madifushi",
    "Dhiyamigili",
    "Guraidhoo",
    "Kandoodhoo",
    "Vandhoo",
    "Hirilandhoo",
    "Gaadhiffushi",
    "Thimarafushi",
    "Veymandhoo",
    "Kinbidhoo",
    "Omadhoo",
  ],
  Laamu_Atoll: [
    "Isdhoo",
    "Dharanbidhoo",
    "Maabaidhoo",
    "Mundoo",
    "Kalhaidhoo",
    "Gan",
    "Maavah",
    "Fonadhoo",
    "Gaadhoo",
    "Maamendhoo",
    "Hithadhoo",
    "Kunahandhoo",
  ],
  Gaafu_Alifu_Atoll: [
    "Kolamaafushi",
    "Villigili",
    "Maamendhoo",
    "Nilandhoo",
    "Dhaandhoo",
    "Dhevvadhoo",
    "Kondey",
    "Dhiyadhoo",
    "Gemanafushi",
    "Kanduhulhudhoo",
  ],
  Gaafu_Dhaalu_Atoll: [
    "Thinadhoo",
    "Madaveli",
    "Hoandeddhoo",
    "Nadalla",
    "Gaddhoo",
    "Rathafandhoo",
    "Vaadhoo",
    "Fiyori",
    "Maathoda",
    "Fares",
  ],
  Gnaviyani_Atoll: ["Fuvahmulah"],
  Seenu_Atoll: [
    "Hithadhoo",
    "Maradhoo",
    "Maradhoo-Feydhoo",
    "Feydhoo",
    "Hulhudhoo",
    "Meedhoo",
  ],
};

function populateIslands(selectedAtoll) {
  islandSelect.innerHTML = ""; // Clear previous island options
  islandSelect.disabled = false; // Enable island selection

  if (selectedAtoll) {
    const availableIslands = islands[selectedAtoll];
    if (availableIslands) {
      availableIslands.forEach((island) => {
        const option = document.createElement("option");
        option.value = island;
        option.textContent = island;
        islandSelect.appendChild(option);
      });
    } else {
      islandSelect.disabled = true; // Disable island selection if no islands for atoll
      islandSelect.innerHTML = '<option value="">No Islands Available</option>';
    }
  }
}

atollSelect.addEventListener("change", () => {
  const selectedAtoll = atollSelect.value;
  populateIslands(selectedAtoll);
});

islandSelect.addEventListener('change', async () => {
    const selectedIsland = islandSelect.value;
    if (!selectedIsland) return;
    console.log("Selected Island:", selectedIsland);
  
    const atollName = mapAtoll(atollSelect.value)

    const location = `${atollName}.${selectedIsland}`
  
    prayerTimesContainer.textContent = 'Fetching Prayer Times...'; // Display loading message
  
    // Replace with actual API endpoint and adjust parameters as needed
    const response = await fetch(`/api/today?location=${location}`);
    const data = await response.json();
  
    if (data.status === 'OK') {
      const prayerTimes = JSON.parse(data.timings);
      prayerTimesContainer.innerHTML = ''; // Clear previous data
  
      for (const prayerName in prayerTimes) {
        const prayerTime = prayerTimes[prayerName];
        const prayerElement = document.createElement('p');
        prayerElement.textContent = `${prettyCapitalize(prayerName)}: ${prayerTime}`;
        prayerTimesContainer.appendChild(prayerElement);
      }
    } else {
      prayerTimesContainer.textContent = 'Error fetching prayer times.';
    }
  });
  

// Call populateIslands on initial load to populate the first atoll's islands (if any)
populateIslands(atollSelect.value);
