import express from 'express';
import bodyParser from 'body-parser';
const port = 3000;
const app = express();
const recetaJson = `[
    {
      "id": "0001",
      "tipo": "taco",
      "nombre": "Taco lechon",
      "precio": 20.00,
      "ingredientes": {
        "proteina": {
          "nombre": "Puerco",
          "preparación": "Horneado"
        },
      "salsa": {
        "nombre": "Tomate verde",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
        },
        {
          "nombre": "Guacamole",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
        }
      ]
      }
    },
    {
        "id": "0002",
        "tipo": "taco",
        "nombre": "Taco pescado",
        "precio": 20.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Pescado",
            "preparación": "A la plancha"
          },
        "salsa": {
          "nombre": "Tomate verde",
          "picor": "Medio"
        },
        "acompañamientos": [
          {
            "nombre": "Cebolla",
            "cantidad": "1 cucharada",
            "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
          },
          {
            "nombre": "Guacamole",
            "cantidad": "2 cucharadas",
            "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
          }
        ]
        }
      },
      {
        "id": "0003",
        "tipo": "taco",
        "nombre": "Taco camaron",
        "precio": 20.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Camaron",
            "preparación": "Al modo de ajo"
          },
        
        "salsa": {
          "nombre": "Tomate verde",
          "picor": "Medio"
        },
        "acompañamientos": [
          {
            "nombre": "Cebolla",
            "cantidad": "1 cucharada",
            "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
          },
          {
            "nombre": "Guacamole",
            "cantidad": "2 cucharadas",
            "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
          }
        ]
      }
      },
      {
        "id": "0004",
        "tipo": "taco",
        "nombre": "Taco salmon",
        "precio": 20.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Salmon",
            "preparación": "A los 4 quesos"
          },
        
        "salsa": {
          "nombre": "Tomate verde",
          "picor": "Medio"
        },
        "acompañamientos": [
          {
            "nombre": "Cebolla",
            "cantidad": "1 cucharada",
            "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
          },
          {
            "nombre": "Guacamole",
            "cantidad": "2 cucharadas",
            "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
          }
        ]
      }
    }
  ]
  `;
const recetaTacos = JSON.parse(recetaJson);

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
    
})

app.get('/receta/:type',(req, res)=>{
    const elegirTacos = recetaTacos.find(r=>r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTacos || {error: 'No se encontro la receta'});
})

