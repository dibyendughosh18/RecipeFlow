package com.rbs.webapp.recipeflow.persistence.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rbs.webapp.recipeflow.persistence.domain.User;
import com.rbs.webapp.recipeflow.persistence.repository.UserRepository;

@Service("userRegistrationService")
public class UserRegistrationService {

	@Autowired
	private UserRepository userRepository;
	
	public User isUserExist(String emailId) {
		User um = userRepository.findExistingEmailId(emailId);
		if(um != null) {
			return um;
		}else {
			return um;
		}
	}
	
	public User registerUser(User um) {
		System.out.println("um = "+um);
		User res = userRepository.save(um);
		if(res != null) {
			return res;
		}else {
			return res;
		}
	}
	
	public String validateUser(String email, String password) {
		List<User> userMaster = userRepository.findUserByEmailId(email);
		String userId = null;
		String userPassword = null;
		//String dbUserPassword = null;
		if(userMaster.size() > 0) {
			for(User user : userMaster) {
				userPassword = user.getPassword().toString();
			}
			
			if(password.equals(userPassword)) {
				for(User user : userMaster) {
					userId = user.getEmail();
				}
				return userId;
			}else {
				return userId;
			}
		}else {
			return userId;
		}
	}
}
