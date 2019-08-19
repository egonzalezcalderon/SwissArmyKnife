package com.enggc.SwissArmyKnife.persistance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enggc.SwissArmyKnife.persistance.entities.NoteEntity;

public interface NoteRepository extends JpaRepository<NoteEntity, Integer>  {

}
