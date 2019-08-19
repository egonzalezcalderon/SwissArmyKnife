package com.enggc.SwissArmyKnife.persistance.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the "NOTES" database table.
 * 
 */
@Entity
@Table(name="NOTES")
@NamedQuery(name="Note.findAll", query="SELECT n FROM Note n")
public class NoteEntity implements Serializable {
	protected static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	protected Integer id;

	protected byte[] attachments;

	protected String body;

	protected String header;

	protected String type;

	//bi-directional many-to-one association to Project
	@ManyToOne(fetch=FetchType.LAZY)
	protected ProjectEntity project;

	public NoteEntity() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public byte[] getAttachments() {
		return this.attachments;
	}

	public void setAttachments(byte[] attachments) {
		this.attachments = attachments;
	}

	public String getBody() {
		return this.body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getHeader() {
		return this.header;
	}

	public void setHeader(String header) {
		this.header = header;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public ProjectEntity getProject() {
		return this.project;
	}

	public void setProject(ProjectEntity project) {
		this.project = project;
	}

}