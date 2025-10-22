# Stage 1: Build the application using Maven
# Use a specific, stable version for reproducible builds
# FROM maven:3.8.6-openjdk-17 AS build
FROM maven:3.8.6-eclipse-temurin-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml first to leverage Docker's layer caching.
# This way, dependencies are only re-downloaded if pom.xml changes.
COPY pom.xml .

# Copy the rest of your source code
COPY src ./src

# Package the application, skipping tests for faster builds in CI/CD
RUN mvn clean package -DskipTests


# Stage 2: Create the final, lean production image
# Use a JRE image, which is smaller than a full JDK
FROM eclipse-temurin:17-jre-jammy

# Set the working directory
WORKDIR /app

# Copy the built JAR from the 'build' stage into this new image
COPY --from=build /app/target/vendor-portal-0.0.1-SNAPSHOT.jar ./application.jar

# Expose the port that the application will run on
EXPOSE 8080

# The command to run your application when the container starts
ENTRYPOINT ["java", "-jar", "application.jar"]