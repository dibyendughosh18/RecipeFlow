package com.rbs.webapp.recipeflow.rest;

import javax.servlet.http.PushBuilder;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/RecipeFlow")
public class HomeController {

	/**
	 * Maps the root context to return index.jsp.  Attempts to server-push some rest calls,
	 * but I don't know if it works this way.  Either way
	 * @param model
	 * @param pushBuilder
	 * @return
	 */
	@GetMapping({"/"})
	public String home() {
		System.out.println("HomeController");
		return "/index.html";
	}
	
	@GetMapping({"/home", "/login", "/register", "/search", "/recipe", "/createRecipe" })
	public String route() {
		
		return "forward:/index.html";
	}
}
