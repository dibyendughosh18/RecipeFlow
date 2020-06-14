package com.rbs.webapp.recipeflow.persistence.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class User {

	@Id
	private int id;
	
	/**
	 * Ordered list of {@link Recipe}
	 */
	@ManyToMany
	private List<Recipe> zones = new ArrayList<>();
	
	private Integer durationOverride = null;
	
	private String name;
	
	public User(int id, String name, List<Recipe> zones, Integer durationOverride) {
		this.id = id;
		this.name = name;
		this.zones = zones;
		this.durationOverride = durationOverride;
	}
	
	public User() { }

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	public List<Recipe> getZones() {
		return zones;
	}

	public void setZones(List<Recipe> zones) {
		this.zones = zones;
	}

	public Integer getDurationOverride() {
		return durationOverride;
	}

	public void setDurationOverride(Integer durationOverride) {
		this.durationOverride = durationOverride;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
