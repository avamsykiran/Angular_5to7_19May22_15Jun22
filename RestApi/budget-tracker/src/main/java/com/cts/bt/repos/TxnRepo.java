package com.cts.bt.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cts.bt.entities.Txn;

public interface TxnRepo extends JpaRepository<Txn, Long> {

	@Query("SELECT t FROM Txn t WHERE t.holder.ahId=:ahId")
	List<Txn> getAllByAccountHolderId(Long ahId);
}
