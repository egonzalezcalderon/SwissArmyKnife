package com.enggc.SwissArmyKnife.persistance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enggc.SwissArmyKnife.persistance.entities.EntryEntity;

public interface EntryRepository extends JpaRepository<EntryEntity, Integer>  {

}
