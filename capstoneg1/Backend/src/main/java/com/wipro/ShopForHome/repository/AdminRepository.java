package com.wipro.ShopForHome.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wipro.ShopForHome.model.Admin;

public interface AdminRepository extends MongoRepository<Admin, String> {
	

}
