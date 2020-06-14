package com.rbs.webapp.recipeflow.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rbs.webapp.recipeflow.persistence.domain.Recipe;

@RestController
@RequestMapping("/rest/recipe")
public class RecipeRestController extends GenericRestController<Recipe>{
		

}