package com.cts.bt.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.bt.entities.AccountHolder;
import com.cts.bt.entities.Txn;
import com.cts.bt.entities.TxnType;
import com.cts.bt.repos.AccountHoldersRepo;
import com.cts.bt.repos.TxnRepo;

@Service
@Transactional
public class AccountHolderServiceImpl implements AccountHolderService{

	@Autowired
	private AccountHoldersRepo ahRepo;
	
	@Autowired
	private TxnRepo txnRepo;
	
	@Override
	public AccountHolder add(AccountHolder accountHolder) {
		return ahRepo.save(accountHolder);
	}

	@Override
	public List<AccountHolder> getAll() {
		return ahRepo.findAll();
	}

	@Override
	public AccountHolder getById(Long ahId) {
		return ahRepo.findById(ahId).orElse(null);
	}

	@Override
	public AccountHolder updateCurrentBalance(Long ahId, Double differentialAmmount) {
		AccountHolder ah = ahRepo.findById(ahId).orElse(null);
		if(ah!=null) {
			ah.setCurrentBalance(ah.getCurrentBalance() + differentialAmmount);
			ahRepo.save(ah);
		}
		return ah;
	}

	@Override
	public boolean existsById(Long ahId) {
		return ahRepo.existsById(ahId);
	}

	@Override
	public Txn add(Txn txn) {
		
		double differentialAmount = txn.getType()==TxnType.CREDIT?txn.getAmount():-1*txn.getAmount();
		updateCurrentBalance(txn.getHolder().getAhId(), differentialAmount );
		
		return txnRepo.save(txn);
	}

	@Override
	public void deleteById(Long txnId) {
		txnRepo.deleteById(txnId);
	}

	@Override
	public List<Txn> getAllByAhId(Long ahId) {
		return txnRepo.findAll();
	}

}
