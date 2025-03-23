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
    return result
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
  // Part 6
  duel(opponent) {
    // Repeat this process until one of the two adventurers reaches 50 health.
    while(this.health > 50 && opponent.health > 50){
      // Log the results of this “round” of the duel, including the rolls and current health values.
      const myRoll = this.roll(0)
      const opponentRoll = opponent.roll(0)
      // Use the roll() functionality to create opposing rolls for each adventurer.
      if(myRoll > opponentRoll) {
        // Subtract 1 from the adventurer with the lower roll.
        console.log(`${opponent.name} took damage!`)
        opponent.health--
      } else if(myRoll < opponentRoll) {
        // Subtract 1 from the adventurer with the lower roll.
        console.log(`${this.name} took damage!`)
        this.health--
      }
      console.log()
    }
    // Log the winner of the duel: the adventurer still above 50 health.
    console.log(`${this.health > opponent.health ? this.name : opponent.name} wins the duel!`)
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

const fighters = new AdventurerFactory("Fighter")
const barbarians = new AdventurerFactory("Barbarian")
fighters.generate("Robin")
barbarians.generate("Bartre")

const robin = fighters.findByIndex(0)
const bartre = barbarians.findByName("Bartre")

robin.inventory.push("sword", "potion", "artifact")
robin.compainion = new Compainion("Leo", "Cat")
robin.compainion.compainion = new Compainion("Frank", "Flea")
robin.compainion.compainion.inventory = ["small hat", "sunglasses"]
console.log(robin, "\n")
console.log(robin.compainion, "\n")
console.log(bartre, "\n")

bartre.inventory.push("axe", "bow", "potion")

robin.duel(bartre)