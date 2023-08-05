En H2:

CREATE TABLE ITEM(ID INT PRIMARY KEY AUTO_INCREMENT, NAME VARCHAR(255));

Para insertar: 
Postman POST http://localhost:8080/api/v1
Body>>Json:
     {
     "name":"nombre"
      }

Para leer:
http://localhost:8080/api/v1/1

{"id":1,"name":"nombre"}
