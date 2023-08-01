Descripción del Proyecto
Este proyecto es una aplicación TypeScript que utiliza AWS Serverless para configurar 
funciones Lambda. El proyecto incluye métodos para tokenizar tarjetas de crédito/débito y 
obtener datos de tarjetas según un token.
Requisitos Previos
Antes de comenzar, asegúrate de tener instalado lo siguiente:
• Node.js

Pasos para Ejecutar el Proyecto en un Entorno NodeJS y VisualStudioCode
1. Descargar nodejs. En las variables de entorno setear la ruta del nodejs, por ejemplo: C:\Program Files\nodejs\
2. Abre una terminal en visual code e ingresa los siguientes comandos:
- npm init
- npm install -g npm@9.8.1
- npm install aws-sdk

3. Copiar las carpetas src, dist y el archivo tsconfig.json
4. En la terminal ingresar:
- npm install -g typescript
- npm install typescript --save-dev
- npm install --save-dev @types/aws-lambda
- npm install --save-dev aws-lambda 

5. Para compilar en la carpeta raíz, a nivel de repositoriopublico, ejecutar el comando:
- npm run build

6. De esta forma la carpeta dist contiene el código typescript compilado y la carpeta dist contiene el mismo código en javascript
el cual podemos utilizar en el proyecto AWS API Gateway LambdaAuthorizer en typescript.