// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  // attack() {
  //     return super.attack();
  //}
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return this.name + " has died in act of combat";
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(s) {
    this.saxonArmy.push(s);
  }
  vikingAttack() {
    let saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let resultado = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
    }
    return resultado;
  }
}
