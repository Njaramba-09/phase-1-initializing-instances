// Breakfast class
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// Lunch class
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// Dinner class with a private property
class Dinner {
  #dessert;

  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }

  // Optional: getter to access private dessert
  getDessert() {
    return this.#dessert;
  }
}

// Example instances
const myBreakfast = new Breakfast("Pancakes", "Orange Juice");
console.log(myBreakfast); // => Breakfast { food: 'Pancakes', drink: 'Orange Juice' }

const myLunch = new Lunch("Caesar", "Tomato", "Iced Tea");
console.log(myLunch); // => Lunch { salad: 'Caesar', soup: 'Tomato', drink: 'Iced Tea' }

const myDinner = new Dinner("Garden", "Minestrone", "Steak", "Cheesecake");
console.log(myDinner); // => Dinner { salad: 'Garden', soup: 'Minestrone', entree: 'Steak' }
console.log(myDinner.getDessert()); // => Cheesecake (accessing private property via getter)

