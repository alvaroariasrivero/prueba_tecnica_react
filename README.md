# Prueba tecnica de React - Availroom

Esta prueba está destinada a evaluar las competencias técnicas del candidato.

Por favor, lee las siguientes notas antes de empezar:

- Clona este proyecto en tu ordenador local e instala las dependencias con el comando `npm install`
- Inicia el proyecto con el comando `npm run dev`
- Tómate el tiempo de revisar primero el proyecto
- Pregúntanos cualquier duda que tengas
- Puedes buscar en Google cualquier cosa que necesites
- Siéntete libre de modificar cualquier código existente
- Puedes instalar otras librerías que creas necesario

## Requisitos

En la aplicación desarrolla las siguientes funcionalidades:

- Hacer las llamadas al api [jsonplaceholder](https://jsonplaceholder.typicode.com/) para recuperar los usuarios y posts
- Formatear los datos obtenidos del jsonplaceholder en un arreglo de objetos. Estos objetos tienen que tener los datos de los usuarios y los posts en un parámetro llamado "post". Ejemplo:
  ```javascript
  [
  {
    id: 2,
    name: "Jaimito",
    email: "jaimito@gmail.com",
    posts: [
      {
        userId: 2,
        id: 1,
        title: "post1 de Jaimito",
        body: "Contenido del post1 de Jaimito"
      },
      {
        userId: 2,
        id: 2,
        title: "post2 de Jaimito",
        body: "Contenido del post2 de Jaimito"
      }
    ]
  },
  {
    id: 3,
    name: "Pepito",
    email: "pepito@gmail.com",
    posts: [
      {
        userId: 3,
        id: 3,
        title: "post de pepito",
        body: "Contenido del post de Pepito"
      }
    ]
  }
  ]
  ```
- Mostrar estos usuarios con sus post en la aplicación
- Desarrollar la funcionalidad de guardar los usuarios y mostrarlos en otra ruta. (Puedes utilizar redux o context)

## Puntos que evaluaremos

- Cumplimiento de los requisitos de la aplicación
- Limpieza y estructura del código
- La funcionalidad de la aplicación
- Correcta utilización de los tipados que provee Typescript
