// ============================================================
//  SITE İÇERİĞİ: Sadece bu dosyayı düzenleyerek siteyi güncelleyebilirsiniz.
//  Görseller "images" klasörüne konur, burada dosya adıyla yazılır.
// ============================================================

const SITE = {
  studio: "Gamenacchio",
};

// type: "mobile" veya "web"
// image: images/ klasöründeki ekran görüntüsü (yoksa otomatik renkli kapak çıkar)
// links: oyunun yayınlandığı her platform için bir satır
const GAMES = [
  {
    title: "Doner Empire: Idle",
    type: "mobile",
    genre: "Idle Clicker",
    description:
      "Slice doner, hire chefs, grow your shop. Start by slicing by hand, then hire workers and buy upgrades until the shop runs itself, even offline. 16 workers, 176 upgrades, 107 achievements and a prestige system.",
    image: "images/doner-empire.jpg",
    tags: ["Android", "Idle", "Simulation", "EN / TR", "Offline"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.beebeegames.donerclicker" }],
  },
  {
    title: "Sir Shiba: Monster Island",
    type: "web",
    genre: "Idle Arcade",
    description:
      "Guide a Shiba Inu knight across floating islands as he auto-battles monsters. Sell their loot, unlock new land, upgrade the Town Hall and hire hunters who keep working while you're away, across four zones from Island to Frost Peak.",
    image: "https://static.playgama.com/p-img/pg/preview/ecb6b0ba53134c46b3a6a4fa1a3222f7?width=1200",
    tags: ["3D", "Idle", "Management", "PC & Mobile", "6 languages"],
    links: [{ label: "Playgama", url: "https://playgama.com/game/sir-shiba-monster-island" }],
  },
  {
    title: "Paint & Escape",
    type: "web",
    genre: "Stealth Action",
    description:
      "A neon stealth game: sneak past guards, tag a glowing wall with graffiti and get out before you're caught. Outsmart cameras, guard dogs and armored guards across houses, schools, museums and arcades, or hit them with paint bombs and taunt them with a dance.",
    image: "https://img.gamemonetize.com/8ua263c3gk1nsznafi3inwacj2cj90a7/512x384.jpg",
    tags: ["3D", "Stealth", "Arcade", "PC & Mobile"],
    links: [{ label: "GameMonetize", url: "https://gamemonetize.com/paint-escape-game" }],
  },
];

const TEAM = [
  {
    name: "Barış Erkut",
    email: "bariserkutcm@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/bariserkut/" },
      { label: "GitHub", url: "https://github.com/BarisErkut" },
    ],
  },
  {
    name: "Beyzanur Mollaoğlu",
    email: "byzmllogluu@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/beyzanur-mollao%C4%9Flu-910544258/" },
      { label: "GitHub", url: "https://github.com/BeyzaMollaoglu" },
    ],
  },
];
