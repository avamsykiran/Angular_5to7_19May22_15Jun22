package com.cts.bt.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.bt.entities.AccountHolder;

public interface AccountHoldersRepo extends JpaRepository<AccountHolder,Long>{

}
