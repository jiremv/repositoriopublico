package com.popularsafi.app.popularsafi.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.popularsafi.app.popularsafi.bean.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
}