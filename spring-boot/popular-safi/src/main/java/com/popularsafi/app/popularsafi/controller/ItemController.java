package com.popularsafi.app.popularsafi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.popularsafi.app.popularsafi.bean.Item;
import com.popularsafi.app.popularsafi.repo.ItemRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/v1")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;
    
    //http://localhost:8080/api/v1/1
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Item> getItemById(@PathVariable Long id) {
        Item item = itemRepository.findById(id).orElse(null);
        if (item != null) {
            return new ResponseEntity<>(item, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    /*con Postman:
     {
     "name":"nombre"
      }
     * */
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        Item newItem = itemRepository.save(item);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item item) {
        Item existingItem = itemRepository.findById(id).orElse(null);
        if (existingItem != null) {
            existingItem.setName(item.getName());
            Item updatedItem = itemRepository.save(existingItem);
            return new ResponseEntity<>(updatedItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        Item item = itemRepository.findById(id).orElse(null);
        if (item != null) {
            itemRepository.delete(item);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

