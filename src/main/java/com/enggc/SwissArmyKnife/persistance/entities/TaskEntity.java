package com.enggc.SwissArmyKnife.persistance.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the "TASKS" database table.
 * 
 */
@Entity
@Table(name="TASKS")
public class TaskEntity implements Serializable {
	protected static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	protected Integer id;

	@Column(name="computed_hours", nullable=false, precision=4, scale=2)
	protected BigDecimal computedHours;

	@Temporal(TemporalType.DATE)
	@Column(name="due_date", nullable=false)
	protected Date dueDate;

	@Column(name="estimated_hours", nullable=false, precision=4, scale=2)
	protected BigDecimal estimatedHours;

	@Temporal(TemporalType.DATE)
	@Column(name="start_date", nullable=false)
	protected Date startDate;

	//bi-directional many-to-one association to Tag
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="tag_id", nullable=false)
	protected TagEntity tag;

	//bi-directional many-to-many association to Task
	@ManyToMany
	@JoinTable(
		name="TASKS_DEPENDENCIES"
		, joinColumns={
			@JoinColumn(name="from_task_id", nullable=false)
			}
		, inverseJoinColumns={
			@JoinColumn(name="to_task_id", nullable=false)
			}
		)
	protected List<TaskEntity> tasks1;

	//bi-directional many-to-many association to Task
	@ManyToMany(mappedBy="tasks1")
	protected List<TaskEntity> tasks2;

	//bi-directional many-to-one association to WorkDone
	@OneToMany(mappedBy="task")
	protected List<WorkDoneEntity> workDones;

	public TaskEntity() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public BigDecimal getComputedHours() {
		return this.computedHours;
	}

	public void setComputedHours(BigDecimal computedHours) {
		this.computedHours = computedHours;
	}

	public Date getDueDate() {
		return this.dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public BigDecimal getEstimatedHours() {
		return this.estimatedHours;
	}

	public void setEstimatedHours(BigDecimal estimatedHours) {
		this.estimatedHours = estimatedHours;
	}

	public Date getStartDate() {
		return this.startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public TagEntity getTag() {
		return this.tag;
	}

	public void setTag(TagEntity tag) {
		this.tag = tag;
	}

	public List<TaskEntity> getTasks1() {
		return this.tasks1;
	}

	public void setTasks1(List<TaskEntity> tasks1) {
		this.tasks1 = tasks1;
	}

	public List<TaskEntity> getTasks2() {
		return this.tasks2;
	}

	public void setTasks2(List<TaskEntity> tasks2) {
		this.tasks2 = tasks2;
	}

	public List<WorkDoneEntity> getWorkDones() {
		return this.workDones;
	}

	public void setWorkDones(List<WorkDoneEntity> workDones) {
		this.workDones = workDones;
	}

	public WorkDoneEntity addWorkDone(WorkDoneEntity workDone) {
		getWorkDones().add(workDone);
		workDone.setTask(this);

		return workDone;
	}

	public WorkDoneEntity removeWorkDone(WorkDoneEntity workDone) {
		getWorkDones().remove(workDone);
		workDone.setTask(null);

		return workDone;
	}

}