package com.rbs.webapp.recipeflow.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(scanBasePackages = {"com.rbs.webapp.recipeflow"})
@EnableJpaRepositories(basePackages = "com.rbs.webapp.recipeflow.persistence")
@EntityScan(basePackages = "com.rbs.webapp.recipeflow.persistence")
public class SpringBootRecipeFlowInitializer extends SpringBootServletInitializer {
	
    public static void main(String[] args) throws Exception {
        SpringApplication.run(SpringBootRecipeFlowInitializer.class, args);
    }
}
