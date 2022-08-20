package com.wipro.ShopForHome.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wipro.ShopForHome.model.Cart;

public interface CartRepository extends MongoRepository<Cart, String> {

}
