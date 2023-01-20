const obj = {
    nombre : "Marcos",
    apellido : "Berta",
    edad : 39,
    altura : "1.83 mts",
    ereDesarrollador : true,
};

const miEdad = obj.edad;

const obj2 = {...obj};

const obj3 = {...obj};

obj2.nombre = "Chucho";
obj2.apellido = "Maschio";
obj2.edad = 38;
obj2.altura = "1.70 mts";
obj2.ereDesarrollador = false;

obj3.nombre = "Martin";
obj3.apellido = "Dalmaso";
obj3.edad = 40;
obj3.altura = "1.80 mts";
obj3.ereDesarrollador = false;

const myArray = [obj, obj2, obj3];

const arrayPorEdad = myArray.sort((a,b)=>b.edad-a.edad);

console.log(arrayPorEdad)
