class SuperHero {
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name;
    }
    setName(name){
        return this.name=name;
    }
}
module.exports = new SuperHero("Avengers")