# Tiendamia - Test

Esta aplicación utiliza lo siguiente:

1. React Hooks
2. Redux toolkit query
3. NodeJs
4. Express
5. Prisma ORM
6. Turbo Repo
7. GitHub
8. Docker
9. Vite

Pasos para ejecutar esta aplicación:

1. Ejecute docker desktop antes de ejecutar los comandos docker
2. Para ejecutar este proyecto navegue a la carpeta del repositorio
3. Abra esta carpeta en una terminal para luego ejecutar los comandos de docker
4. Escriba estos comando en el terminal

Este comando ejecutara el archivo `Dockerfile` y creara una imagen de docker
```cmd
docker build -t tiendamia-test . 
```

Posteriormente para ejecutar la imagen dentro de un contenedor ejecute el siguiente comando
```cmd
docker run -d -p 3000:3000 tiendamia-test
```

Este comando creara un contenedor donde se ejecuta la aplicación, navegue al siguiente link para ver la aplicación en ejecución http://localhost:3000