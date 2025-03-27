import express from 'express';
import bodyParser from 'body-parser';

const port = 3000;
const app = express();

const temasJson = `{
  "Temas": [
    {
      "ID": 1,
      "Nombre": "Introducción a la Programación",
      "Descripción": "Conceptos básicos sobre programación, lenguajes y paradigmas.",
      "Palabras_claves": ["Algoritmo", "Lenguaje de programación", "Paradigma", "Código"],
      "Prácticas": [
        {
          "Título": "Hola Mundo en Python",
          "Descripción": "Escribir y ejecutar un programa en Python que imprima 'Hola Mundo'.",
          "Objetivo": "Familiarizarse con la sintaxis básica de Python."
        },
        {
          "Título": "Variables y Tipos de Datos",
          "Descripción": "Definir variables de diferentes tipos y mostrar sus valores.",
          "Objetivo": "Comprender cómo declarar y utilizar variables en Python."
        }
      ]
    },
    {
      "ID": 2,
      "Nombre": "Bases de Datos",
      "Descripción": "Introducción a la gestión de bases de datos y SQL.",
      "Palabras_claves": ["SQL", "Base de datos", "Consulta", "Normalización"],
      "Prácticas": [
        {
          "Título": "Crear una tabla en SQL",
          "Descripción": "Definir y crear una tabla en una base de datos MySQL.",
          "Objetivo": "Aprender a estructurar y definir datos en una base de datos."
        },
        {
          "Título": "Consultas básicas en SQL",
          "Descripción": "Realizar consultas SELECT, INSERT y DELETE en una tabla.",
          "Objetivo": "Conocer los comandos fundamentales para manejar bases de datos."
        }
      ]
    },
    {
      "ID": 3,
      "Nombre": "Estructuras de Datos",
      "Descripción": "Exploración de estructuras de datos fundamentales como listas, pilas y colas.",
      "Palabras_claves": ["Lista", "Pila", "Cola", "Árbol binario"],
      "Prácticas": [
        {
          "Título": "Implementación de una Pila",
          "Descripción": "Escribir una clase en Python que implemente una pila con operaciones básicas.",
          "Objetivo": "Comprender el funcionamiento de la estructura LIFO."
        },
        {
          "Título": "Uso de Listas Enlazadas",
          "Descripción": "Crear una lista enlazada simple y recorrer sus elementos.",
          "Objetivo": "Aprender sobre la estructura de listas enlazadas y su uso."
        }
      ]
    },
    {
      "ID": 4,
      "Nombre": "Desarrollo Web",
      "Descripción": "Fundamentos del desarrollo web con HTML, CSS y JavaScript.",
      "Palabras_claves": ["HTML", "CSS", "JavaScript", "Frontend", "Backend"],
      "Prácticas": [
        {
          "Título": "Creación de una Página Web",
          "Descripción": "Desarrollar una página web básica con HTML y CSS.",
          "Objetivo": "Aprender la estructura de una página web y aplicar estilos básicos."
        },
        {
          "Título": "Interactividad con JavaScript",
          "Descripción": "Agregar eventos y manipular el DOM con JavaScript.",
          "Objetivo": "Mejorar la experiencia del usuario con interacciones dinámicas."
        }
      ]
    }
  ]
}
`;

const temas = JSON.parse(temasJson);

app.listen(port, ()=>{
console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/temas/:type',(req, res)=>{
    const elegirTema = temas.Temas.find(tema => tema.ID === parseInt(req.params.type));
    res.json(elegirTema || {error: 'No se encontro el tema'});
});