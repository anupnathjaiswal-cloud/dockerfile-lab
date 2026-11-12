
package com.anup;

import java.net.URI;
import java.time.Duration;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class BrowserTest {

    @Test
    void shouldNavigateAndSearchMultipleWebsites() throws Exception {

        ChromeOptions options = new ChromeOptions();

        String seleniumUrl = System.getenv()
            .getOrDefault(
                "SELENIUM_REMOTE_URL",
                "http://localhost:4444"
            );

        WebDriver driver = new RemoteWebDriver(
            URI.create(seleniumUrl).toURL(),
            options
        );

        try {
            // Route 1: Google
            driver.get("https://www.google.com");

            String googleTitle = driver.getTitle();
            System.out.println("Google: " + googleTitle);

            assertTrue(
                googleTitle.toLowerCase().contains("google")
            );

            // Route 2: Example Domain
            driver.get("https://example.com");

            String exampleTitle = driver.getTitle();
            System.out.println("Example: " + exampleTitle);

            assertEquals("Example Domain", exampleTitle);

            // Route 3: DuckDuckGo Search
            driver.get("https://duckduckgo.com/");

            var searchBox = driver.findElement(By.name("q"));

            searchBox.sendKeys("Selenium WebDriver");
            searchBox.sendKeys(Keys.ENTER);

            WebDriverWait wait = new WebDriverWait(
                driver,
                Duration.ofSeconds(15)
            );

            wait.until(d ->
                d.getTitle().toLowerCase()
                    .contains("selenium webdriver")
            );

            String searchTitle = driver.getTitle();

            System.out.println("Search: " + searchTitle);

            assertTrue(
                searchTitle.toLowerCase()
                    .contains("selenium webdriver")
            );

            // Route 4: GitHub
            driver.get("https://github.com");

            String githubTitle = driver.getTitle();

            System.out.println("GitHub: " + githubTitle);

            assertTrue(
                githubTitle.toLowerCase().contains("github")
            );

        } finally {
            // Close browser only after all routes finish
            driver.quit();
        }
    }
}
