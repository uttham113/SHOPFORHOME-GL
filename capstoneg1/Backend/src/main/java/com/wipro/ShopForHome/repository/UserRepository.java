package com.wipro.ShopForHome.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wipro.ShopForHome.model.User;

public interface UserRepository extends MongoRepository<User, String> {

}
