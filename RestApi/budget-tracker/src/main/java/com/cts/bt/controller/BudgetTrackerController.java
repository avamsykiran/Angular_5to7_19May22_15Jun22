package com.cts.bt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.bt.entities.AccountHolder;
import com.cts.bt.entities.Txn;
import com.cts.bt.services.AccountHolderService;

@RestController
@CrossOrigin
@RequestMapping("/accounts")
public class BudgetTrackerController {

	@Autowired
	private AccountHolderService service;
	
	
	@GetMapping
	public ResponseEntity<List<AccountHolder>> getAllAccounts(){
		return ResponseEntity.ok(service.getAll());
	}
	
	@GetMapping("/{ahId}")
	public ResponseEntity<AccountHolder> getById(@PathVariable("ahId") Long ahId){
		AccountHolder ah = service.getById(ahId);
		return ahId==null?ResponseEntity.notFound().build():ResponseEntity.ok(ah);
	}
	
	@GetMapping("/{ahId}/txns")
	public ResponseEntity<List<Txn>> getTxnsByAhId(@PathVariable("ahId") Long ahId){
		return ResponseEntity.ok(service.getAllByAhId(ahId));
	}
	
	@PostMapping
	public ResponseEntity<AccountHolder> addAccountHolder(@RequestBody AccountHolder ah){
		return new ResponseEntity<AccountHolder>(service.add(ah),HttpStatus.CREATED);
	}
	
	@PostMapping("/{ahId}/txns")
	public ResponseEntity<Txn> addTxn(@PathVariable("ahId")Long ahId,@RequestBody Txn txn){
		AccountHolder holder = new AccountHolder();
		holder.setAhId(ahId);
		txn.setHolder(holder);
		return new ResponseEntity<Txn>(service.add(txn),HttpStatus.CREATED);
	}
	
	
}
