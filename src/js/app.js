import Character from './Character';

Character.prototype.damage = function (points) {
  if (this.health >= 0) {
    this.health -= points * (1 - this.defence / 100);
  } else {
    this.health = 0;
    alert('GAME OVER!');
  }
};

const zombie = new Character('Sandro', 'Bowman');
zombie.damage(10);
console.log(zombie);
