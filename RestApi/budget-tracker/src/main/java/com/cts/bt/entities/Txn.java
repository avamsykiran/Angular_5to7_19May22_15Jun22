package com.cts.bt.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="txns")
public class Txn {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long txnId;
	private String desp;
	private Double amount;
	@Enumerated(EnumType.STRING)
	private TxnType type;
	@DateTimeFormat(iso = ISO.DATE)
	private LocalDate txnDate;
	
	@ManyToOne
	@JsonProperty(access = Access.WRITE_ONLY)
	private AccountHolder holder;
	
	public Txn() {
		
	}

	public Txn(Long txnId, String desp, Double amount, TxnType type, LocalDate txnDate, AccountHolder holder) {
		super();
		this.txnId = txnId;
		this.desp = desp;
		this.amount = amount;
		this.type = type;
		this.txnDate = txnDate;
		this.holder = holder;
	}

	public Long getTxnId() {
		return txnId;
	}

	public void setTxnId(Long txnId) {
		this.txnId = txnId;
	}

	public String getDesp() {
		return desp;
	}

	public void setDesp(String desp) {
		this.desp = desp;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public TxnType getType() {
		return type;
	}

	public void setType(TxnType type) {
		this.type = type;
	}

	public LocalDate getTxnDate() {
		return txnDate;
	}

	public void setTxnDate(LocalDate txnDate) {
		this.txnDate = txnDate;
	}

	public AccountHolder getHolder() {
		return holder;
	}

	public void setHolder(AccountHolder holder) {
		this.holder = holder;
	} 
	
	
}
