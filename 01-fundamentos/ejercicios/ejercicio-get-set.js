//EJERCICIO 1 — GET (lectura simple)

class Usuario {
  constructor(email) {
    this._email = email;
  }

  get email(){
    return this.email;
  }
  
}
//EJERCICIO 2 — GET

class Auto {
  constructor(marca) {
    this._marca = marca;
  }

  get Marca(){
    return this.Marca
  }
}
const a = new Auto('Ford');
console.log(a.Marca); // 'Ford'
