class persona{
    constructor(nombre,edad,sexo,direccion,telefono){
        this._nombre=nombre
        this._edad=edad
        this._sexo=sexo
        this._direccion=direccion
        this._telefono=telefono
    }
    saludar(){
        console.log(`hola mi nombre es ${this._nombre} tengo ${this._edad} soy ${this._sexo} mi direccion es ${this._direccion} mi telefono es ${this._telefono}`);
        
    }
}
let persona1=new persona("joel",18,"hombre","villa",86878)
let persona2=new persona("simon",18,"hombre","balancan",43553)
let persona3=new persona("diana",19,"mujer","zapata",6764734)
persona1.saludar()
persona2.saludar()
persona3.saludar()
