package com.ai.geminiai.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("https://nisagpt.netlify.app")
                .allowedMethods("GET","POST","OPTIONS","PUT","DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
