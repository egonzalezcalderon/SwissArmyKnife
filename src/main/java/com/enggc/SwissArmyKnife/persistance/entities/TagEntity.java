package com.enggc.SwissArmyKnife.persistance.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the "TAGS" database table.
 * 
 */
@Entity
@Table(name="TAGS")
public class TagEntity implements Serializable {
	protected static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	protected Integer id;

	@Column(nullable=false, length=2147483647)
	protected String description;

	@Column(nullable=false, length=2147483647)
	protected String name;

	//bi-directional many-to-one association to Project
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="project_id", nullable=false)
	protected ProjectEntity project;

	//bi-directional many-to-one association to Task
	@OneToMany(mappedBy="tag")
	protected List<TaskEntity> tasks;

	public TagEntity() {
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

	public ProjectEntity getProject() {
		return this.project;
	}

	public void setProject(ProjectEntity project) {
		this.project = project;
	}

	public List<TaskEntity> getTasks() {
		return this.tasks;
	}

	public void setTasks(List<TaskEntity> tasks) {
		this.tasks = tasks;
	}

	public TaskEntity addTask(TaskEntity task) {
		getTasks().add(task);
		task.setTag(this);

		return task;
	}

	public TaskEntity removeTask(TaskEntity task) {
		getTasks().remove(task);
		task.setTag(null);

		return task;
	}

}