package com.rbs.webapp.recipeflow.rest;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Abstract rest controller.
 * Extend this class to inherit common operations.
 * @author David
 *
 * @param <T>
 */
public abstract class GenericRestController<T> {

	@Autowired
	protected JpaRepository<T, Integer> repo;
	
	@GetMapping("/demo")
    public String demo() {
        return "This is definitely a good demo.";
    }

	
	/**
	 * Gets all configured irrigation zones.
	 * @return
	 */
	@GetMapping("")
	public List<T> getAll(){
		return repo.findAll();
	}
	

}
