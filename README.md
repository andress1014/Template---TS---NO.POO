# Introduction 
TODO: Api rest con los servicios para la adquisicion de uan asistencia de Vanti. 


# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Dockerización de aplicación 
Se debe construir el docker a partir del dockerfile de la raiz del proyecto
```
docker build . --build-arg PROFILE=stage -t api-sales-assists
```

Despues de construida la imagen docker ya se puede ejecutar el container
```
docker run --restart=always -p 6000:3001 --name api-sales-assists api-sales-assists
``` 

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)