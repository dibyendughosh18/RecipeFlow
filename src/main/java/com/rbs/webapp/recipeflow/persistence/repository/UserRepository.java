package com.rbs.webapp.recipeflow.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rbs.webapp.recipeflow.persistence.domain.User;

/**
 * Boilerplate code to automatically generate the persistence methods
 * for the {@link User} entity.
 * @author David
 *
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
