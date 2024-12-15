class Pokemon {
   
    constructor(id, name, type1, type2 = null, totalStats, isFinal) {
        this.id = id; 
        this.name = name;
        this.type1 = type1;
        this.type2 = type2; 
        this.totalStats = totalStats;
        this.isFinal = isFinal;
    }

   
    getDetails() {
        const types = this.type2 ? `${this.type1} / ${this.type2}` : this.type1;
        const evolutionState = this.isFinal ? "Forme finale" : "Pas encore évolué";
        return `#${this.id} ${this.name} (${types}) - Stats Totales: ${this.totalStats} - ${evolutionState}`;
    }

}

export default Pokemon; 
