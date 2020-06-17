# RecipeFlow #
The recipe flow project.

# Development tools #

### Required to build ###
Maven 3 (https://maven.apache.org/download.cgi)  
npm (https://www.npmjs.com/get-npm)  

### Recommended ###
Eclipse IDE (https://www.eclipse.org/downloads/)  
Visual Studio Code (https://code.visualstudio.com/download)  

# Build #
This project uses Maven 3 to handle the build. To build, there are a few options:
* Run `mvn clean package` to build the deployable war file.
* Run `mvn clean package spring-boot:run` to build and run the webserver locally.  It can then be accessed at http://localhost:8080/recipeflow/index.html

# Technology Stack #
The following technologies are used:
* Tomcat
* Spring-boot
* H2 in-memory sql database (Production will use a persistent PostgreSQL)
* JPA
* React.js