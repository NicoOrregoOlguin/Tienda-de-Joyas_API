Información Importante
Ruta GET /joyas

    Definición: Se ha definido en routes/joyasRoutes.js y permite obtener joyas con estructura HATEOAS.
    Función Controladora: La función getJoyas en controllers/joyasController.js maneja la solicitud GET.
    Consulta SQL: La función getJoyas ejecuta la consulta SQL para obtener las joyas y estructura HATEOAS.
    Manejo de Errores: Se ha configurado try-catch para capturar cualquier error en las consultas SQL.

Ruta GET /joyas/filtros

    Definición: Se ha definido en routes/joyasRoutes.js la ruta GET para manejar el filtrado de joyas.
    Función Controladora: La función getJoyasFiltros en controllers/joyasController.js maneja la solicitud GET.
    Consulta SQL: La función getJoyasFiltros ejecuta la consulta SQL para filtrar joyas por precio, categoría y metal.
    Manejo de Errores: Se ha configurado try-catch para capturar cualquier error en las consultas SQL.

Ruta PUT

    Definición: Se ha definido en routes/joyasRoutes.js y permite manejar la actualización de los "likes" en los posts.
    Función Controladora: La función editPostLike en controllers/joyasController.js maneja la solicitud PUT y llama a la consulta correspondiente.
    Consulta SQL: La función editPostLikeQuery en queries.js ejecuta la consulta SQL para actualizar los likes.
    Manejo de Errores: Se ha configurado try-catch para capturar cualquier error en las consultas SQL.

Ruta DELETE

    Definición: Se ha definido en routes/joyasRoutes.js la ruta DELETE para manejar la eliminación de posts.
    Función Controladora: En controllers/joyasController.js tenemos la función deletePost que contiene la lógica para eliminar el post.
    Manejo de Errores: Se ha configurado try-catch para capturar cualquier error en las consultas SQL.

Capturar Posibles Errores

    Implementación: Se ha implementado en todas las funciones de consultas SQL un try-catch que permite capturar todos los posibles errores y lanzarlos para que el controlador los maneje.

Configuración de la Base de Datos

Para que el proyecto funcione, debemos crear la base de datos. Utiliza la siguiente QUERY mediante la terminal psql para crear la base de datos y la tabla:
CREATE DATABASE joyas;
\c joyas;
CREATE TABLE inventario (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50),
  categoria VARCHAR(50),
  metal VARCHAR(50),
  precio INT,
  stock INT
);
INSERT INTO inventario (nombre, categoria, metal, precio, stock) VALUES
('Collar Heart', 'collar', 'oro', 20000, 2),
('Collar History', 'collar', 'plata', 15000, 5),
('Aros Berry', 'aros', 'oro', 12000, 10),
('Aros Hook Blue', 'aros', 'oro', 25000, 4),
('Anillo Wish', 'aros', 'plata', 30000, 4),
('Anillo Cuarzo Greece', 'anillo', 'oro', 40000, 2);

EJEMPLOS:
![imagen](https://github.com/NicoOrregoOlguin/Tienda-de-Joyas_API/assets/113557666/ca03e196-0706-409e-91f0-280998d0aaaf)

![imagen](https://github.com/NicoOrregoOlguin/Tienda-de-Joyas_API/assets/113557666/63be1f69-ec4b-4008-8ad9-6a2bab087eb4)
