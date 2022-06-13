package com.cts.tm.service;

import java.util.List;

import com.cts.tm.entity.Todo;

public interface TodoService {
	Todo save(Todo todo);
	void delete(long id);
	List<Todo> getAll();
	Todo getById(long id);
	boolean exists(long id);
}
