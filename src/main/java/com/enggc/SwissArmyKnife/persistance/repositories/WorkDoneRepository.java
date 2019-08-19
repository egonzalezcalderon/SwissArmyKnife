package com.enggc.SwissArmyKnife.persistance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enggc.SwissArmyKnife.persistance.entities.WorkDoneEntity;

public interface WorkDoneRepository extends JpaRepository<WorkDoneEntity, Integer>  {

}
