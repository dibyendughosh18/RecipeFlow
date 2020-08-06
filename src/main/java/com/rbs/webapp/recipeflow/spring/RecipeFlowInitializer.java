package com.rbs.webapp.recipeflow.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EntityScan("com.rbs.webapp.recipeflow.persistence.domain")
@ComponentScan(basePackages = {"com.rbs.webapp.recipeflow.rest","com.rbs.webapp.recipeflow.persistence.service"})
@EnableJpaRepositories("com.rbs.webapp.recipeflow.persistence.repository")
@SpringBootApplication
public class RecipeFlowInitializer{

	public static void main(String[] args){
        SpringApplication.run(RecipeFlowInitializer.class, args);
    }
	
	
}
