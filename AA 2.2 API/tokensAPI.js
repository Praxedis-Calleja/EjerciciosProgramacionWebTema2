import axios from 'axios';

const API_KEY = 'AIzaSyDCklsFJSjJo0I6vISbI3aIwq58_SsMT8c';
const NO_API_KEY = 'AIzaSyDCklsFJSjJo0I6vISbI3aIwq58_SsMT8d';

const credentials = {
    email: 'vini13perla11@gmail.com',  
    password: '123456789',        
    returnSecureToken: true          
};
      
const obtenerLoginUsuario = async () => {
    try {
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, credentials);
        console.log('✅ Token obtenido:', response.data.idToken);
        return response.data.idToken;
    } catch (error) {
        console.error('❌ Error al iniciar sesión:', error.response?.data, error.message);
    }
}

const obtenerTokenUsuario = async (token) => {
    try {
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`, {
            idToken: token  
        });
        console.log('Datos del usuario:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al verificar el token:', error.response?.data,  error.message);
    }
}


obtenerLoginUsuario()
    .then(token => {
       
        obtenerTokenUsuario(token);
        
    })
    .catch(error => {
        console.error('Error en el proceso de login:', error);
    });