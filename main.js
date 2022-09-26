let alumnos = [
    {
        id:1,
        estado: "Aprobado",
        nota:54,
        nombre:`Juan`,
    },
    {
        id: 2,
        estado: 'Desaprobado',
        nota: 27,
        nombre:`Diego`,
    },
    {
        id: 3,
        estado: 'Aprobado',
        nota: 56,
        nombre:`Camila`,
    },
    {
        id: 4,
        estado: "Aprobado",
        nota: 78,
        nombre:`Oscar`,
    },
    {
        id: 5,
        estado: "Desaprobado",
        nota: 26,
        nombre:`Juana`,
    },
]

if (localStorage.alumnos == null) {
    localStorage.setItem ("alumnos", JSON.stringify(alumnos));
}

alumnos = JSON.parse(localStorage.getItem("alumnos"));



let estado = "";
let nombreAlumno = prompt ("Ingrese su nombre completo");
let nota1 = parseInt(prompt("Ingrese su primera nota"));
let nota2 = parseInt(prompt("Ingrese su segunda nota"));
let nota3 = parseInt(prompt("Ingrese su tercera nota"));
let promRound = calcularPromedio (nota1, nota2, nota3);



if (promRound >= 40){
    estado = `Aprobado`;
    alert(`Su nota es: ${promRound} usted ha aprobado.`);
}else{
    estado = `Desaprobado`;
    alert(`Su nota es: ${promRound} usted ha reprobado. Por favor asista al recuperatorio el dia 4/8`);
}


alumnos.push({
    id: alumnos.length + 1,
    estado: estado,
    nota: promRound,
    nombre: nombreAlumno,
});

localStorage.setItem ("alumnos", JSON.stringify(alumnos));

function calcularPromedio (){
    let promedio = (nota1 + nota2 + nota3) / 3;
    return Math.round(promedio) ;
}


document.getElementById("btnObtenerNota").addEventListener("click", getNotaFromInput);


function getNotaFromInput(e){
    let nombre = document.getElementById("formularioAlumno").elements[`nombreAlumno`].value;
    console.log(nombre)
    for (let index = 0; index < alumnos.length; index++) {
        const alumno = alumnos[index];
        if(alumno.nombre == nombre ){
            alert (`Su promedio es ${alumno.nota} Ha ${alumno.estado}`);
        }
    }
}


function getNotaByName(e){
    let nombre = e.target.id;
    for (let index = 0; index < alumnos.length; index++) {
        const alumno = alumnos[index];
        if(alumno.nombre == nombre ){
            alert (`Su promedio es ${alumno.nota} Ha ${alumno.estado}`);
        }
    }
}




