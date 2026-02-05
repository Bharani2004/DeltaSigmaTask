package com.deltasigma.deltasigmatest.service;

import com.deltasigma.deltasigmatest.model.Item;
import com.deltasigma.deltasigmatest.repository.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemService {

    private final ItemRepository repository;

    public ItemService(ItemRepository repository) {
        this.repository = repository;
    }

    public Item addItem(Item item) {
        return repository.save(item);
    }

    public Optional<Item> getItemById(Long id) {
        return repository.findById(id);
    }
}
