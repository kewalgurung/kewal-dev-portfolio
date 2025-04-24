const express = require("express");
const router = express.Router();

const routes = [
    "west", "singsore", "skywalk", "rabdentse", "KCHEOPARI",
    "Sidkeong-Tulku-Bird-Park", "barsey", "north", "yumthang-valley",
    "Gurudongmar-Lake", "Shingba-Rhododendron-Sanctuary", "Lachen",
    "Lachung", "Goecha-La", "about", "south", "buddha-park",
    "Char-Dham", "Tarey-Bhir", "Rose-Garden", "Samdruptse-Hill",
    "Temi-Tea-Garden", "east", "Tsomgo-lake", "hanuman-tok",
    "Gangtok-Ropeway", "Nathula-Pass", "MG-Marg", "banjhakri-waterfalls",
    "Soreng", "sai-mandir", "ramidham", "Barsey-Rhododendron",
    "soreng-viewpoint", "ZULUK", "Saramsa-Garden", "pakyong",
    "nathang-valley"
];

// Create routes dynamically
routes.forEach(route => {
    router.get(`/${route}`, (req, res) => {
        res.render(route);
    });
});

// Home route
router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router;
