package com.wipro.ShopForHome.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
//import lombok.NoArgsConstructor;
import lombok.Data;

@AllArgsConstructor
//@NoArgsConstructor
@Data
@Document(collection="user")
public class User {

	@Id
	private String id;
	
	private String email;
	private String fname;
	private String lname;
	private String password;
	private Date dob;
	private String phoneNo;
	private String gender;
	
	
	
	public User() {
		
	}

	public User(String email, String fname, String lname, String password, Date dob, String gender,String phoneno) {
		super();
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.dob = dob;
		this.gender=gender;
		this.phoneNo = phoneno;
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}
	

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	} 
	@Override
	public String toString() {
		return "retailer [id="+id+", fname="+fname+", lname="+lname+", password="+password+", dob="+dob+", gender="+gender+","
				+"email="+email+", phoneNo="+phoneNo+"]";
	}
}
