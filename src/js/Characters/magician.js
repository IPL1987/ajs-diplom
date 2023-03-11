import Character from '../Character';
import teamsParam from '../defaults/teamsParam';

export default class Magician extends Character {
  constructor(level) {
    const {
      type,
      attack,
      defence,
      player,
      stepsRadius,
      attackRadius,
    } = teamsParam[new.target.name];

    super(level, attack, defence, player, stepsRadius, attackRadius);
    this.type = type;
  }
}
