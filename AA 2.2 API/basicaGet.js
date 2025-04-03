import axios from "axios";

try {
    
const response = await axios.get('https://reqres.in/api/users/4', {
    headers: {
        'Authorization': 'Basic ' + Buffer.from('eve.holt@reqres.in:pistol').toString('base64')
    }
});
console.log('Datos de usuario:', response.data);
} catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
}
