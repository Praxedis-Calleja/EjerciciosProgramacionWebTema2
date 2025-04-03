fetch("https://jsonplaceholder.typicode.com/posts").then((respuesta)=>{
  if(!respuesta.ok){
    throw new Error("Error en la respuesta de la API" + respuesta.statusText);
  }
    return respuesta.json();

}).then((data)=>{
    console.log('Datos recibidos:', data);

}).catch((error)=>{
    console.error('Error al hacer la solicitud:', error);
})