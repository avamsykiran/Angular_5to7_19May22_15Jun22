package com.cts.tm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.tm.entity.Todo;

public interface TodoRepo extends JpaRepository<Todo,Long>{

}
