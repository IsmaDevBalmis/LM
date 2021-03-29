
function varAsignaturas(nombre,cursos, ...asignaturas) {
  
if(!nombre || !cursos || ! asignaturas){

  console.log("No hay datos para mostrar")
}else{
  console.log(nombre+"-"+cursos+"-"+asignaturas.join("/"))
  }
}
varAsignaturas("Ismael","DAMB","Programacion","BD","LM");
varAsignaturas("Laura","ASIR","BD");
varAsignaturas()


    