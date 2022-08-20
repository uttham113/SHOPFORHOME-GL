package com.wipro.ShopForHome.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wipro.ShopForHome.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
	

    List<Product> findByCategoryContaining(String category);
    
    List<Product> findByName(String name);

}
