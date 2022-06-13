package com.cts.bt.services;

import java.util.List;

import com.cts.bt.entities.AccountHolder;
import com.cts.bt.entities.Txn;

public interface AccountHolderService {

	AccountHolder add(AccountHolder accountHolder);
	List<AccountHolder> getAll();
	AccountHolder getById(Long ahId);
	AccountHolder updateCurrentBalance(Long ahId,Double balance);
	boolean existsById(Long ahId);
	
	Txn add(Txn txn);
	void deleteById(Long txnId);
	List<Txn> getAllByAhId(Long ahId);
}
