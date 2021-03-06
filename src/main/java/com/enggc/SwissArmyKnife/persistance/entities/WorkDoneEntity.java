package com.enggc.SwissArmyKnife.persistance.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the "WORK_DONE" database table.
 * 
 */
@Entity
@Table(name="WORK_DONE")
public class WorkDoneEntity implements Serializable {
	protected static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	protected Integer id;

	@Column(name="computed_hours", nullable=false, length=2)
	protected String computedHours;

	@Temporal(TemporalType.DATE)
	@Column(name="start_date", nullable=false)
	protected Date startDate;

	//bi-directional many-to-one association to Task
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="task_id", nullable=false)
	protected TaskEntity task;

	//bi-directional many-to-one association to User
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="resource_id", nullable=false)
	protected UserEntity user;

	public WorkDoneEntity() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getComputedHours() {
		return this.computedHours;
	}

	public void setComputedHours(String computedHours) {
		this.computedHours = computedHours;
	}

	public Date getStartDate() {
		return this.startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public TaskEntity getTask() {
		return this.task;
	}

	public void setTask(TaskEntity task) {
		this.task = task;
	}

	public UserEntity getUser() {
		return this.user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

}