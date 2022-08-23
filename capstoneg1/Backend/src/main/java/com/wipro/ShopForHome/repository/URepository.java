package com.wipro.ShopForHome.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.wipro.ShopForHome.model.User;

public interface URepository extends CrudRepository<User, String> {
	
public User findByEmail(String email);
	
	//Custom queries using jpql in crud repo
    @Query("SELECT new com.wipro.project.model.User(d.id,d.email,d.fname,d.lname,"
            + "d.password,d.dob,d.phoneNo) "
            + "FROM User d")
    List<User> fetchUser();

}
