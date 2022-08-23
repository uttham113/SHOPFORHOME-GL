package com.wipro.ShopForHome.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.wipro.ShopForHome.model.Admin;

public interface ARepository extends CrudRepository<Admin, String> {
	
	public Admin findByEmail(String email);
		
		//Custom queries using jpql in crud repo
	    @Query("SELECT new com.wipro.estore.model.Admin(d.id,d.email,d.fname,d.lname,"
	            + "d.password,d.dob,d.phoneNo) "
	            + "FROM Admin d")
	    List<Admin> fetchAdmin();

}
