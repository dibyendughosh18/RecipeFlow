package com.rbs.webapp.recipeflow.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rbs.webapp.recipeflow.persistence.domain.User;
import com.rbs.webapp.recipeflow.persistence.service.UserRegistrationService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserRestController {
	
	@Autowired
	private UserRegistrationService userRegistrationService;
	
	@PostMapping(path = "/registration")
    public ResponseEntity<ObjectNode> saveUser(@RequestBody User user){
		
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode userNode = mapper.createObjectNode();
		
        String userName = user.getEmail();
		
		String password = user.getPassword();
		
		if(userName != null && userName.length() > 0 && password != null && password.length() > 0){
		
		User isExist = userRegistrationService.isUserExist(userName);
		
		if(isExist != null) {
			userNode.put("Status", "0");
			userNode.put("Message","User already exists");
			
			return new ResponseEntity<ObjectNode>(userNode, HttpStatus.OK);
		}else{
			
		User isInserted = userRegistrationService.registerUser(user);
		
		if(isInserted != null) {
			
			userNode.put("Status", "1");
			userNode.put("Message","You are successfully registered");
			
			return new ResponseEntity<ObjectNode>(userNode, HttpStatus.OK);
			
		}else {
			
			
			userNode.put("Status", "0");
			userNode.put("Message"," Database Insertion Error");
			
			return new ResponseEntity<ObjectNode>(userNode, HttpStatus.OK);
		}
		}
		}else {
			
			userNode.put("Status", "0");
			userNode.put("Message","Request body parameter missing");
			
			return new ResponseEntity<ObjectNode>(userNode, HttpStatus.OK);
		}
    }
	
	@PostMapping(path = "/login")
    public ResponseEntity<ObjectNode> existUser(@RequestBody User user){
		

		ObjectMapper mapper = new ObjectMapper();
		ObjectNode loginNode = mapper.createObjectNode();
		String userId = null;
		
		String userName = user.getEmail();
		
		String password = user.getPassword();
		if(userName != null && userName.length() > 0 && password != null && password.length() > 0){
		userId = userRegistrationService.validateUser(userName,password);
		
		
		if(userId != null) {
			loginNode.put("Status", "1");
			loginNode.put("Message", "You are successfully Logged in");
			System.out.println("You are successfully Logged in");
			return new ResponseEntity<ObjectNode>(loginNode,HttpStatus.OK);
		}else{
			loginNode.put("Status", "0");
			loginNode.put("Message", "Login Failed ! Wrong credentials");
			System.out.println("Login Failed ! Wrong credentials");
			return new ResponseEntity<ObjectNode>(loginNode,HttpStatus.OK);
		}
		}else {
			loginNode.put("Status", "0");
			loginNode.put("Message", "Request body parameter missing");
			
			return new ResponseEntity<ObjectNode>(loginNode,HttpStatus.OK);
		}
    }
	
	

}