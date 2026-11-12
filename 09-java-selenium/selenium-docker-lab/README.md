# Java Selenium Docker Lab

A browser automation project built using Java, Maven, Selenium WebDriver, and Docker Compose.

## Tech Stack

- Java 17
- Maven 3.9.11
- Selenium WebDriver 4
- JUnit 5
- Docker
- Docker Compose
- Selenium Grid
- Chrome

## Project Structure

```text
selenium-docker-lab/
├── src/
│   ├── main/
│   │   └── java/
│   └── test/
│       └── java/
│           └── com/anup/
│               ├── AppTest.java
│               └── BrowserTest.java
├── Dockerfile
├── compose.yaml
├── pom.xml
└── README.md
```

## Browser Automation Scenarios

1. Google navigation and title verification.
2. Example Domain navigation.
3. DuckDuckGo search for Selenium WebDriver.
4. GitHub navigation and title verification.
5. Selenium demo form submission and response verification.

All browser scenarios execute within one WebDriver session.

## Docker Architecture

- Maven container executes Java tests.
- Selenium Chrome container provides the browser.
- RemoteWebDriver connects to Selenium Grid over the Docker network.
- Chrome runs independently of the test container.

## Run the Project

### Start Selenium Chrome

```bash
docker compose up -d chrome
```

### Check Selenium Grid

```bash
curl http://localhost:4444/status
```

### Execute Tests

```bash
docker compose run --rm test
```

### View Chrome Logs

```bash
docker compose logs chrome
```

### Open Selenium Grid Dashboard

http://localhost:4444/ui

### Stop Containers

```bash
docker compose down
```

## Run Locally

```bash
mvn clean test
```

Set `SELENIUM_REMOTE_URL` to your Selenium Grid endpoint when running against a remote browser.

## Learning Outcomes

- Java Maven project setup.
- Selenium WebDriver automation.
- Remote browser execution.
- Docker image creation.
- Docker Compose orchestration.
- Container networking.
- Browser session lifecycle management.
- Automated browser testing.
