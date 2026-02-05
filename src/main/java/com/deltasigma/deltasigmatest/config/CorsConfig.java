package com.deltasigma.deltasigmatest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")  // allow all endpoints
                            .allowedOrigins("https://stirring-smakager-848b7e.netlify.app") // replace with your actual Netlify URL
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // include OPTIONS for preflight
                        .allowedHeaders("*") // allow all headers
                        .allowCredentials(true) // allow cookies if needed
                        .maxAge(3600); // cache preflight response for 1 hour
            }
        };
    }
}
