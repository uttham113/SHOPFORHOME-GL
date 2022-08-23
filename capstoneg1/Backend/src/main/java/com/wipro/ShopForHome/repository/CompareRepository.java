package com.wipro.ShopForHome.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wipro.ShopForHome.model.Compare;

public interface CompareRepository extends MongoRepository<Compare, String> {

}
