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


// Part 3
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

const robin = new Adventurer("Robin", "Fighter")
robin.inventory.push("sword", "potion", "artifact")
robin.compainion = new Compainion("Leo", "Cat")
robin.compainion.compainion = new Compainion("Frank", "Flea")
robin.compainion.compainion.inventory = ["small hat", "sunglasses"]
console.log(robin)
console.log(robin.compainion)
robin.roll(0)