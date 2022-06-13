package com.cts.bt.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ahs")
public class AccountHolder {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ahId;
	private String fullName;
	private String emailId;
	private Double currentBalance;
	
	public AccountHolder() {
		// TODO Auto-generated constructor stub
	}

	public AccountHolder(Long ahId, String fullName, String emailId, Double currentBalance) {
		super();
		this.ahId = ahId;
		this.fullName = fullName;
		this.emailId = emailId;
		this.currentBalance = currentBalance;
	}

	public Long getAhId() {
		return ahId;
	}

	public void setAhId(Long ahId) {
		this.ahId = ahId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Double getCurrentBalance() {
		return currentBalance;
	}

	public void setCurrentBalance(Double currentBalance) {
		this.currentBalance = currentBalance;
	}
	
	
}
