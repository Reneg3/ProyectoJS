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

function calcularPromedio (){
    let promedio = (nota1 + nota2 + nota3) / 3;
    return Math.round(promedio) ;
}

if (localStorage.alumnos == null) {
    localStorage.setItem ("alumnos", JSON.stringify(alumnos));
}

alumnos = JSON.parse(localStorage.getItem("alumnos"));


const form = document.querySelector (".formulario")

//Cuando haces click en submit se ejecuta todo el codigo de abajo. 
// Este evento guarda los datos del alumno ingresado, saca su promedio y lo mete al local storage

form.addEventListener(`submit`, (e)=>{
    e.preventDefault()

    let estado = "";
    let nombreAlumno = e.target.nombreAlumno.value;
    let nota1 =  parseInt(e.target.nota1.value);
    let nota2 =  parseInt(e.target.nota2.value);
    let nota3 =  parseInt(e.target.nota3.value);
    let promRound =  (nota1+nota2+nota3 ) / 3 ;
    
    
    if (nombreAlumno.length < 3)return Swal.fire({
        position: 'center',
        icon: 'error',
        title: `No ha ingresado un nombre valido.`,
        showConfirmButton: true,
        })

    if ((nota1 > 10 || nota2 > 10 || nota3 > 10 ))return Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Ha ingresado una nota mayor a 10.`,
        showConfirmButton: true,
        })


    if (promRound >= 10){
        estado = `Aprobado`;
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Su nota es: ${promRound} usted ha aprobado.`,
            showConfirmButton: true,
            })
    }else{
        estado = `Desaprobado`;
        Swal.fire({
            icon: 'error',
            title: ':/',
            text: `Su nota es: ${promRound} usted ha reprobado. Por favor asista al recuperatorio el dia 4/8`,
            showConfirmButton: true,
            });
    }   

    alumnos.push({
        id: alumnos.length + 1,
        estado: estado,
        nota: promRound,
        nombre: nombreAlumno,
    });

    localStorage.setItem ("alumnos", JSON.stringify(alumnos));
    
})


document.getElementById("btnObtenerNota").addEventListener("click", getNotaFromInput);


function getNotaFromInput(e){
    let nombre = document.getElementById("formularioAlumno").elements[`nombreAlumno`].value.toLowerCase();

    const alumnoDesconocido = alumnos.some((alumno)=>alumno.nombre.toLowerCase() == nombre);
    console.log(!alumnoDesconocido)

    if(!alumnoDesconocido)return Swal.fire({
        icon: 'error',
        title: '!',
        text: `El estudiante ingresado no esta en la base de datos.`,
        showConfirmButton: true,
        });

    for (let index = 0; index < alumnos.length; index++) {
        const alumno = alumnos[index];
        if(alumno.nombre.toLowerCase() == nombre ){
            Swal.fire (`Su promedio es ${alumno.nota} Ha ${alumno.estado}`);
        }
    }
    console.log(nombre)
}



function getNotaByName(e){
    let nombre = e.target.id;
    for (let index = 0; index < alumnos.length; index++) {
        const alumno = alumnos[index];
        if(alumno.nombre == nombre ){
            Swal.fire (`Su promedio es ${alumno.nota} Ha ${alumno.estado}`);
        }
    }
}




