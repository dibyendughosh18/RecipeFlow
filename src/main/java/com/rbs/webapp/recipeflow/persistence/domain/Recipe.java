package com.rbs.webapp.recipeflow.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) //Need this to prevent some issues while sending to the client
public class Recipe {

	@Id
	@NotNull
	private int id;
	private String name;
	private int duration;
	
	@Column(columnDefinition="boolean default true")
	private boolean enabled = true;
	
	public Recipe(int id, String name, int duration) {
		this.id = id;
		this.name = name;
		this.duration = duration;
	}
	
	/**
	 * Required for Hibernate
	 */
	public Recipe() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int pinId) {
		this.id = pinId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

}
