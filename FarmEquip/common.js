var equipmentData = [
    {
        id: 1,
        name: "AgriPro 7200 Tractor",
        category: "Tractor",
        engine: "200 HP Diesel",
        fuel: "Diesel",
        acreage: "50-150 Acres",
        dailyRate: 250,
        weeklyRate: 1500,
        monthlyRate: 5000,
        image: "images/tractor.png",
        badge: "popular",
        description: "Heavy-duty farming tractor with advanced hydraulic system, suitable for plowing, tilling, and hauling across large farmlands.",
        specs: {
            enginePower: "200 HP",
            fuelType: "Diesel",
            transmission: "16-Speed PowerShift",
            weight: "8,500 kg",
            fuelCapacity: "300 L",
            hydraulics: "3-Point Hitch, Cat III"
        },
        bookedDates: [
            { start: "2026-03-10", end: "2026-03-15" },
            { start: "2026-03-25", end: "2026-04-05" },
            { start: "2026-04-15", end: "2026-04-20" }
        ]
    },
    {
        id: 2,
        name: "HarvestKing 9500 Combine",
        category: "Harvester",
        engine: "350 HP Diesel",
        fuel: "Diesel",
        acreage: "100-300 Acres",
        dailyRate: 450,
        weeklyRate: 2800,
        monthlyRate: 9500,
        image: "images/harvester.png",
        badge: "available",
        description: "High-capacity combine harvester designed for wheat, corn, and soybean harvesting with advanced grain separation technology.",
        specs: {
            enginePower: "350 HP",
            fuelType: "Diesel",
            transmission: "Hydrostatic CVT",
            weight: "14,200 kg",
            fuelCapacity: "550 L",
            headerWidth: "9.1 m"
        },
        bookedDates: [
            { start: "2026-03-05", end: "2026-03-12" },
            { start: "2026-04-01", end: "2026-04-10" }
        ]
    },
    {
        id: 3,
        name: "SeedMaster 3000 Planter",
        category: "Seeder",
        engine: "Tractor-Pulled (PTO)",
        fuel: "N/A",
        acreage: "30-100 Acres",
        dailyRate: 150,
        weeklyRate: 900,
        monthlyRate: 3000,
        image: "images/seeder.png",
        badge: "new",
        description: "Precision seed drill planter with variable-rate seeding technology for optimal crop spacing and germination rates.",
        specs: {
            enginePower: "PTO Driven",
            fuelType: "N/A (Tractor-Pulled)",
            rows: "12-Row Configuration",
            weight: "3,800 kg",
            seedCapacity: "2,000 L",
            rowSpacing: "30-76 cm Adjustable"
        },
        bookedDates: [
            { start: "2026-03-18", end: "2026-03-28" },
            { start: "2026-04-08", end: "2026-04-14" }
        ]
    },
    {
        id: 4,
        name: "TerraForce 1500 Cultivator",
        category: "Cultivator",
        engine: "Tractor-Pulled (PTO)",
        fuel: "N/A",
        acreage: "20-80 Acres",
        dailyRate: 120,
        weeklyRate: 700,
        monthlyRate: 2200,
        image: "images/cultivator.png",
        badge: "available",
        description: "Rotary tiller cultivator for seedbed preparation, weed control, and soil mixing with adjustable working depth.",
        specs: {
            enginePower: "PTO Driven",
            fuelType: "N/A (Tractor-Pulled)",
            workingWidth: "3.0 m",
            weight: "1,200 kg",
            workingDepth: "5-25 cm",
            blades: "48 L-Shaped Blades"
        },
        bookedDates: [
            { start: "2026-03-08", end: "2026-03-14" },
            { start: "2026-04-02", end: "2026-04-06" }
        ]
    },
    {
        id: 5,
        name: "CropGuard 800 Sprayer",
        category: "Sprayer",
        engine: "180 HP Diesel",
        fuel: "Diesel",
        acreage: "50-200 Acres",
        dailyRate: 300,
        weeklyRate: 1800,
        monthlyRate: 6000,
        image: "images/sprayer.png",
        badge: "available",
        description: "Self-propelled boom sprayer with GPS-guided precision application for pesticides, herbicides, and fertilizers.",
        specs: {
            enginePower: "180 HP",
            fuelType: "Diesel",
            tankCapacity: "4,000 L",
            weight: "9,800 kg",
            boomWidth: "36 m",
            sprayRate: "50-400 L/ha"
        },
        bookedDates: [
            { start: "2026-03-20", end: "2026-03-26" },
            { start: "2026-04-12", end: "2026-04-18" }
        ]
    }
];

var seasonalPackages = [
    { name: "Planting Season", minDays: 14, discount: 15, months: "Feb - Apr" },
    { name: "Growing Season", minDays: 21, discount: 20, months: "May - Jul" },
    { name: "Harvest Season", minDays: 30, discount: 25, months: "Aug - Nov" }
];

function formatDate(date) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }

    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        }
    });
});
