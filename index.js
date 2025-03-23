// Part 1

// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companion: {
//       name: "Frank",
//       type: "Flea",
//       inventory: ["small hat", "sunglasses"]
//     }
//   },
//   roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//   }
// }

// Part 2
class Character {
  static MAX_HEALTH = 100

  constructor(name) {
    this.name = name
    this.health = Character.MAX_HEALTH
    this.inventory = []
  }
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
  }
}


// Part 3 & 4
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard", "Barbarian", "Monk"]

  constructor(name, role) {
    super(name)
    this.role = Adventurer.ROLES.find(elt => elt === role) ? role : "Fighter"
    this.inventory.push("bedroll", "50 gold coins")
  }
  scout() {
    console.log(`${this.name} is scouting ahead`)
    super.roll()
  }
}

class Compainion extends Character {
  constructor(name, type) {
    super(name)
    this.type = type
  }
}

// Part 5
class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Fighter");
healers.generate("Robin");
console.log(healers.adventurers)
const robin = healers.findByIndex(0)
robin.inventory.push("sword", "potion", "artifact")
robin.compainion = new Compainion("Leo", "Cat")
robin.compainion.compainion = new Compainion("Frank", "Flea")
robin.compainion.compainion.inventory = ["small hat", "sunglasses"]
console.log(robin)
console.log(robin.compainion)
robin.roll(0)