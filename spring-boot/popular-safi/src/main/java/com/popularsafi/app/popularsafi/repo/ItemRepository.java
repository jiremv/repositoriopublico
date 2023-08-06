package com.popularsafi.app.popularsafi.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.popularsafi.app.popularsafi.bean.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query("SELECT i FROM Item i WHERE i.name = :name")
    List<Item> findByName(String name);
}