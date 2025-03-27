const jsonString = '{"nombre":"Juan","ingredentientes":{"protenia":"Pollo","salsa":"Salsa verde"}}';
    
    const objetoDesarializado =JSON.parse(jsonString);
    console.log(objetoDesarializado);