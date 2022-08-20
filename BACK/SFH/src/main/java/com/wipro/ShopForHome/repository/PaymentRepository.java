package com.wipro.ShopForHome.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wipro.ShopForHome.model.Payment;

public interface PaymentRepository extends MongoRepository<Payment, String> {

}
