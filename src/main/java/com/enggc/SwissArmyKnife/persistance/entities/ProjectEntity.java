package com.enggc.SwissArmyKnife.persistance.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the "PROJECTS" database table.
 * 
 */
@Entity
@Table(name="PROJECTS")
@NamedQuery(name="Project.findAll", query="SELECT p FROM Project p")
public class ProjectEntity implements Serializable {
	protected static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	protected Integer id;

	protected String name;

	//bi-directional many-to-one association to Note
	@OneToMany(mappedBy="project")
	protected List<NoteEntity> notes;

	//bi-directional many-to-one association to Tag
	@OneToMany(mappedBy="project")
	protected List<TagEntity> tags;

	//bi-directional many-to-many association to User
	@ManyToMany
	@JoinTable(
		name="RESOURCES"
		, joinColumns={
			@JoinColumn(name="id", referencedColumnName="description"),
			@JoinColumn(name="project_id")
			}
		, inverseJoinColumns={
			@JoinColumn(name="user_id")
			}
		)
	protected List<UserEntity> users;

	public ProjectEntity() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<NoteEntity> getNotes() {
		return this.notes;
	}

	public void setNotes(List<NoteEntity> notes) {
		this.notes = notes;
	}

	public NoteEntity addNote(NoteEntity note) {
		getNotes().add(note);
		note.setProject(this);

		return note;
	}

	public NoteEntity removeNote(NoteEntity note) {
		getNotes().remove(note);
		note.setProject(null);

		return note;
	}

	public List<TagEntity> getTags() {
		return this.tags;
	}

	public void setTags(List<TagEntity> tags) {
		this.tags = tags;
	}

	public TagEntity addTag(TagEntity tag) {
		getTags().add(tag);
		tag.setProject(this);

		return tag;
	}

	public TagEntity removeTag(TagEntity tag) {
		getTags().remove(tag);
		tag.setProject(null);

		return tag;
	}

	public List<UserEntity> getUsers() {
		return this.users;
	}

	public void setUsers(List<UserEntity> users) {
		this.users = users;
	}

}