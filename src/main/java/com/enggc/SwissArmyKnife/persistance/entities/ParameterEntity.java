package com.enggc.SwissArmyKnife.persistance.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the "PARAMETERS" database table.
 * 
 */
@Entity
@Table(name="PARAMETERS")
@NamedQuery(name="Parameter.findAll", query="SELECT p FROM Parameter p")
public class ParameterEntity implements Serializable {
	protected static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	protected Integer id;

	protected String key;

	protected String value;

	public ParameterEntity() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getKey() {
		return this.key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}