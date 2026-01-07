export class Player {
    name;
    level;
    experience;

    constructor(name,level) {
      this.name = name;
      this.level = level;
      this.experience = 0;

    }

    info(){
      console.log(`${this.name} has reached Level ${this.level}!`)
    }

    levelUp(){
      this.level++;
    }

    gainExperience(experiencePoints){
      this.experience += experiencePoints;

      while(this.experience >= 100){
        this.experience = this.experience - 100;
        this.levelUp();
      }
    }
  }
