# Use an official Maven image to build the Spring Boot app
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory
WORKDIR /app

# Copy the pom.xml file and install dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code and build the application
COPY src ./src
RUN mvn clean package -DskipTests

# Use an official OpenJDK image to run the application
FROM openjdk:17-slim

# Set the working directory
WORKDIR /app

COPY --from=build /app/target/gemini-ai-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

# Specify the command to run the application
ENTRYPOINT ["java", "-jar", "/app/gemini-ai-0.0.1-SNAPSHOT.jar"]