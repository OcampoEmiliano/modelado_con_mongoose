#Diagrama de Relaciones en Mongoose

Para un comercio de suministros de limpieza con empleados que registran ventas de forma individual, necesitamos dos colecciones principales: Empleados y Ventas.

Empleados: Esta colección almacenará información sobre cada empleado, incluyendo sus credenciales de acceso.

Ventas: Esta colección almacenará información sobre cada venta realizada por los empleados.

Referenciado (Population): Al utilizar la relación referenciada, cada venta puede referenciar a un empleado por su empleado_id. Esto permite mantener la integridad y evitar la duplicación de datos, lo cual es más eficiente y escalable. ya que las ventas pueden ser numerosas y permitira consultas mas rapidas.

en este caso se hac esto ya que los documentos sera pequeños lo que no afectara el rendimiento de la base de datos 

#empleado
{
    "_id":"objectId"
    "nombre": "string",
    "email": "string",
    "password": "string"
}

#venta
{
    "_id":"objectId"
    "empleado_id": "ObjectId",
    "fecha": "date",
    "monto": "number",
    "producto": "string"
}

#Modelo de Autenticación de Empleados

Para la autenticación, podemos usar bcrypt para el hash de contraseñas y jsonwebtoken para los tokens JWT.