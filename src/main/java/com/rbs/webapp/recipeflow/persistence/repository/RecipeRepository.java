package com.rbs.webapp.recipeflow.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rbs.webapp.recipeflow.persistence.domain.Recipe;

/**
 * Boilerplate code to automatically generate the persistence methods
 * for the {@link Recipe} entity.
 * @author David
 *
 */
@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer>{

}
