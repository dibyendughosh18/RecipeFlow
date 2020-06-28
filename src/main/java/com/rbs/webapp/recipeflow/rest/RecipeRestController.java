package com.rbs.webapp.recipeflow.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rbs.webapp.recipeflow.persistence.domain.Recipe;
import com.rbs.webapp.recipeflow.persistence.repository.RecipeRepository;

@RestController
@RequestMapping("/rest/recipe")
public class RecipeRestController extends GenericRestController<Recipe>{
	
	@Autowired
	private RecipeRepository recipeRepo;
	
}