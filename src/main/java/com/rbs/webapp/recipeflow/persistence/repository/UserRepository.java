package com.rbs.webapp.recipeflow.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rbs.webapp.recipeflow.persistence.domain.User;

/**
 * Boilerplate code to automatically generate the persistence methods
 * for the {@link User} entity.
 * @author David
 *
 */
@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Long>{

	@Query(value = "SELECT * from User WHERE email = ?", nativeQuery = true)
	User findExistingEmailId(String email);
	
	@Query(value = "SELECT * from User WHERE email = ?", nativeQuery = true)
	List<User> findUserByEmailId(String email);
	
}
