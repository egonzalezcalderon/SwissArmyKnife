package com.enggc.SwissArmyKnife.persistance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.enggc.SwissArmyKnife.persistance.entities.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer>  {

	@Query("select u from UserEntity u where u.name = :name")
	public UserEntity getUserByName(@Param("name") String name);
	
}
