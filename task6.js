import { Player } from "./task5.js";
export class PlayerParty{
  membersParty;

  constructor(membersParty) {
    this.membersParty = [];
      
    }
   addPlayer(Player){
    this.membersParty.push(Player);

   }

   deletePlayer(player){
    const index = this.membersParty.indexOf(player);
    if (index !== -1) {
    this.membersParty.splice(index, 1);
    }
   }
  }
const Tara = new Player("Tara", 5)
const Marisol = new Player("Marisol", 3)
const Ana = new Player("Ana", 8)
const party = new PlayerParty();
party.addPlayer(Tara);
party.addPlayer(Marisol);
party.addPlayer(Ana);
console.log(party);
party.deletePlayer(Marisol);
console.log(party);
