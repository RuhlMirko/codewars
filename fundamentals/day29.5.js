const greeting = [
  ("english", "Welcome"),
  ("czech", "Vitejte"),
  ("danish", "Velkomst"),
  ("dutch", "Welkom"),
  ("estonian", "Tere tulemast"),
  ("finnish", "Tervetuloa"),
  ("flemish", "Welgekomen"),
  ("french", "Bienvenue"),
  ("german", "Willkommen"),
  ("irish", "Failte"),
  ("italian", "Benvenuto"),
  ("latvian", "Gaidits"),
  ("lithuanian", "Laukiamas"),
  ("polish", "Witamy"),
  ("spanish", "Bienvenido"),
  ("swedish", "Valkommen"),
  ("welsh", "Croeso"),
];

function greet(language) {
  // Convert the array of pairs into an object
  const greetingsObj = Object.fromEntries([
    ["english", "Welcome"],
    ["czech", "Vitejte"],
    ["danish", "Velkomst"],
    ["dutch", "Welkom"],
    ["estonian", "Tere tulemast"],
    ["finnish", "Tervetuloa"],
    ["flemish", "Welgekomen"],
    ["french", "Bienvenue"],
    ["german", "Willkommen"],
    ["irish", "Failte"],
    ["italian", "Benvenuto"],
    ["latvian", "Gaidits"],
    ["lithuanian", "Laukiamas"],
    ["polish", "Witamy"],
    ["spanish", "Bienvenido"],
    ["swedish", "Valkommen"],
    ["welsh", "Croeso"],
  ]);
  // Return the greeting or a default value
  return greetingsObj[language] || "Welcome";
}

console.log(greet("english")); // Welcome
console.log(greet("dutch")); // Welkom
console.log(greet("spanish")); // Bienvenido
