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
@Document(collection="admin")
public class Admin {
	
	@Id
	private String id;
	
	private String email;
	private String fname;
	private String lname;
	private String password;
	private Date dob;
	private String phoneno;
	
	public Admin() {
		
	}

	public Admin(String email, String fname, String lname, String password, Date dob, String phoneno) {
		super();
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.dob = dob;
		this.phoneno = phoneno;
		
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

	public String getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}

	@Override
	public String toString() {
		return "admin [id="+id+", fname="+fname+", lname="+lname+", password="+password+", dob="+dob+","
				+ " email="+email+", phoneNo="+phoneno+"]";
	}
	

}
