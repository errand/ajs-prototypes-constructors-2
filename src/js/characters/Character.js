export default class Character {
  static types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type) {
    if (typeof name === 'string' && name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Name of the character must be a string > 1 and < 11 symbols.');
    }

    if (typeof type === 'string') {
      if (Character.types.includes(type)) {
        this.type = type;
      } else {
        throw new Error('There is no such types. Check spelling.');
      }
    } else {
      throw new Error('Type must be a string.');
    }
    this.health = 100;
    this.level = 1;

    this.levelUp = function () {
      if (this.health > 0) {
        this.level += 1;
        this.attack = this.attack * 0.2 + this.attack;
        this.defence = this.defence * 0.2 + this.defence;
        this.health = 100;
      } else {
        throw new Error('Нельзя повысить левел умершего');
      }
    };

    this.damage = function (points) {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      }
    };
  }
}
