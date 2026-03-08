# FarmEquip

FarmEquip is a fully responsive web-based agricultural equipment leasing platform designed to provide modern farmers with easy access to high-quality farming machinery. The platform allows users to rent equipment on a daily or seasonal basis, maximizing agricultural yield without heavy upfront investments.

## Features

- **Responsive Design**: The website is fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.
- **Equipment Catalog**: A dedicated catalog page to browse available machinery, including tractors, harvesters, and seeders.
- **Detailed Specifications**: Dedicated detail pages for each piece of equipment, allowing farmers to review features, specifications, and capabilities, with dynamic parameters linking from the catalog.
- **Availability Checker**: An interactive availability page where users can check the availability of specific machinery for their desired dates.
- **Dynamic Pricing Calculator**: A pricing page that dynamically calculates rental costs based on the selected equipment, rental duration, and seasonal offers.
- **Modular Architecture**: Cleanly separated CSS and JavaScript files for each HTML page, making the codebase highly maintainable and scalable.

## Project Structure

The project comprises 5 main HTML pages along with their respective separated CSS and JavaScript assets, as well as shared common styling and logic.

```
FarmEquip/
│
├── index.html          # Landing page and home dashboard
├── index.css           # Styling for the home page
├── index.js            # JavaScript for the home page
│
├── catalog.html        # Equipment browsing catalog
├── catalog.css         # Styling for the catalog
├── catalog.js          # JavaScript for catalog interactions and linking
│
├── details.html        # Equipment details view
├── details.css         # Styling for details page
├── details.js          # JavaScript to dynamically load details based on URL parameters
│
├── availability.html   # Availability checking page
├── availability.css    # Styling for availability checker
├── availability.js     # Logic for the custom availability checker
│
├── pricing.html        # Dynamic pricing calculator
├── pricing.css         # Styling for the pricing page
├── pricing.js          # Logic to calculate costs dynamically
│
├── common.css          # Shared global styles, navbar, footer, typography, and utility classes
├── common.js           # Shared scripts like mobile navigation toggle
│
└── images/             # Directory containing all graphical assets and equipment images
```

## Technologies Used

- **HTML5**: Semantic markup for clear page structure and accessibility.
- **CSS3**: Modern styling utilizing Flexbox and CSS Grid for complex layouts, plus responsive media queries and custom variables (custom properties) for theming.
- **Vanilla JavaScript**: Lightweight and fast interactivity without the overhead of heavy frameworks. Handles DOM manipulation, URL query parameter parsing, dynamic content loading, and mathematical calculations for pricing.

## Getting Started

To view and interact with the FarmEquip platform locally, follow these simple steps:

1. Clone or download this repository to your local machine.
2. Navigate into the `FarmEquip` directory.
3. Open `index.html` in your preferred modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge). No build process or local server is strictly required.


