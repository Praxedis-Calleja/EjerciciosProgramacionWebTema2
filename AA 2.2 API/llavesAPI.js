import axios from 'axios'
 
const datosTiempo = async ()=>{
try {
    const registrarlleve = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            lat: 44.34,
            lon: 10.99,
            appid: 'e3193591ec6f49c9d25975c7b06c0a34'
        }
    })

    console.log('Datos de usuario:', registrarlleve.data);
} catch (error) {
    console.error('Error al obtener los datos del tiempo:', error);
}
// Log the weather data
};
datosTiempo();