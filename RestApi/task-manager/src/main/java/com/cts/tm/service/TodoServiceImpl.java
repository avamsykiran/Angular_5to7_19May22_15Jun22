package com.cts.tm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tm.entity.Todo;
import com.cts.tm.repo.TodoRepo;

@Service
public class TodoServiceImpl implements TodoService{

	@Autowired
	private TodoRepo todoRepo;
	
	@Override
	public Todo save(Todo todo) {
		return todoRepo.save(todo);
	}

	@Override
	public void delete(long id) {
		todoRepo.deleteById(id);
	}

	@Override
	public List<Todo> getAll() {
		return todoRepo.findAll();
	}

	@Override
	public Todo getById(long id) {
		return todoRepo.findById(id).orElse(null);
	}

	@Override
	public boolean exists(long id) {
		return todoRepo.existsById(id);
	}

}
