Descripción del Proyecto
Este proyecto es una aplicación TypeScript que utiliza AWS Serverless para configurar 
funciones Lambda. El proyecto incluye métodos para tokenizar tarjetas de crédito/débito y 
obtener datos de tarjetas según un token.
Requisitos Previos
Antes de comenzar, asegúrate de tener instalado lo siguiente:
• Node.js
• npm (administrador de paquetes de Node.js)
Pasos para Ejecutar el Proyecto en un Entorno Local
1. Clona el repositorio o descarga los archivos del proyecto.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Instala las dependencias del proyecto ejecutando el siguiente comando:
Copy code
npm install
4. Compila el TypeScript y genera el build de la aplicación utilizando el siguiente 
comando:
arduinoCopy code
npm run build
5. Ejecuta las pruebas de la aplicación en un entorno local con el siguiente comando:
arduinoCopy code
npm run test
Comandos de npm
El proyecto tiene los siguientes comandos de npm configurados en el archivo package.json:
• build: Compila el TypeScript y genera el build de la aplicación en la carpeta dist.
• test: Ejecuta las pruebas de la aplicación en un entorno local.
• Otros comandos necesarios para configurar AWS Serverless se pueden agregar según 
sea necesario.
Prueba técnica - Backend Javascript
Asegúrate de ejecutar estos comandos en la terminal después de haber instalado las 
dependencias del proyecto.
Configuración de AWS Serverless
Para configurar y desplegar las funciones Lambda en AWS, se requiere una configuración 
adicional utilizando AWS Serverless. Consulta la documentación de AWS y siga los pasos 
necesarios para configurar y desplegar las funciones Lambda en el entorno deseado.
Este README.md proporciona una descripción general de los pasos para ejecutar el proyecto 
en un entorno local y utiliza los comandos de npm para compilar TypeScript y ejecutar 
pruebas. Asegúrate de adaptar y personalizar este archivo según las necesidades y 
configuraciones específicas de tu proyecto y entorno de desarrollo