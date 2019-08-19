package com.enggc.SwissArmyKnife.persistance.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the "ENTRIES" database table.
 * 
 */
@Entity
@Table(name="ENTRIES")
@NamedQuery(name="Entry.findAll", query="SELECT e FROM Entry e")
public class EntryEntity implements Serializable {
	protected static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	protected Integer id;

	@Temporal(TemporalType.DATE)
	@Column(name="checkin_date")
	protected Date checkinDate;

	@Column(name="checkout_date")
	protected String checkoutDate;

	//bi-directional many-to-one association to User
	@ManyToOne(fetch=FetchType.LAZY)
	protected UserEntity user;

	public EntryEntity() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getCheckinDate() {
		return this.checkinDate;
	}

	public void setCheckinDate(Date checkinDate) {
		this.checkinDate = checkinDate;
	}

	public String getCheckoutDate() {
		return this.checkoutDate;
	}

	public void setCheckoutDate(String checkoutDate) {
		this.checkoutDate = checkoutDate;
	}

	public UserEntity getUser() {
		return this.user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

}