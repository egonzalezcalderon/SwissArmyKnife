package com.enggc.SwissArmyKnife.persistance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enggc.SwissArmyKnife.persistance.entities.TagEntity;

public interface TagRepository extends JpaRepository<TagEntity, Integer>  {

}
