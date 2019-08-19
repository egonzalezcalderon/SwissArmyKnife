package com.enggc.SwissArmyKnife.persistance.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the "USERS" database table.
 * 
 */
@Entity
@Table(name="USERS")
public class UserEntity implements Serializable {
	protected static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	protected Integer id;

	@Column(nullable=false, length=2147483647)
	protected String description;

	@Column(nullable=false, length=2147483647)
	protected String name;

	@Column(nullable=false, length=2147483647)
	protected String password;

	//bi-directional many-to-one association to Entry
	@OneToMany(mappedBy="user")
	protected List<EntryEntity> entries;

	//bi-directional many-to-many association to Project
	@ManyToMany(mappedBy="users")
	protected List<ProjectEntity> projects;

	//bi-directional many-to-many association to Role
	@ManyToMany
	@JoinTable(
		name="USERS_ROLES"
		, joinColumns={
			@JoinColumn(name="user_id", nullable=false)
			}
		, inverseJoinColumns={
			@JoinColumn(name="role_id", nullable=false)
			}
		)
	protected List<RoleEntity> roles;

	//bi-directional many-to-one association to WorkDone
	@OneToMany(mappedBy="user")
	protected List<WorkDoneEntity> workDones;

	public UserEntity() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<EntryEntity> getEntries() {
		return this.entries;
	}

	public void setEntries(List<EntryEntity> entries) {
		this.entries = entries;
	}

	public EntryEntity addEntry(EntryEntity entry) {
		getEntries().add(entry);
		entry.setUser(this);

		return entry;
	}

	public EntryEntity removeEntry(EntryEntity entry) {
		getEntries().remove(entry);
		entry.setUser(null);

		return entry;
	}

	public List<ProjectEntity> getProjects() {
		return this.projects;
	}

	public void setProjects(List<ProjectEntity> projects) {
		this.projects = projects;
	}

	public List<RoleEntity> getRoles() {
		return this.roles;
	}

	public void setRoles(List<RoleEntity> roles) {
		this.roles = roles;
	}

	public List<WorkDoneEntity> getWorkDones() {
		return this.workDones;
	}

	public void setWorkDones(List<WorkDoneEntity> workDones) {
		this.workDones = workDones;
	}

	public WorkDoneEntity addWorkDone(WorkDoneEntity workDone) {
		getWorkDones().add(workDone);
		workDone.setUser(this);

		return workDone;
	}

	public WorkDoneEntity removeWorkDone(WorkDoneEntity workDone) {
		getWorkDones().remove(workDone);
		workDone.setUser(null);

		return workDone;
	}

}