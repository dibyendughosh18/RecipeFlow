package com.rbs.webapp.recipeflow.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rbs.webapp.recipeflow.persistence.domain.User;

@RestController
@RequestMapping("/rest/user")
public class UserRestController extends GenericRestController<User>{
	

}