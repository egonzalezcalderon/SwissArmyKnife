package com.enggc.SwissArmyKnife.persistance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enggc.SwissArmyKnife.persistance.entities.ParameterEntity;

public interface ParameterRepository extends JpaRepository<ParameterEntity, Integer>  {

}
