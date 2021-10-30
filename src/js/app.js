import Character from './characters/Character';

const zombie = new Character('Sandro', 'Bowman');
console.log(zombie);
zombie.damage(10);
console.log(zombie);
zombie.health = 0;
zombie.levelUp();
console.log('should throw error here');
console.log(zombie);
