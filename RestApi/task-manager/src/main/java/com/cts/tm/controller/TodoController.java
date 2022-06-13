package com.cts.tm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tm.entity.Todo;
import com.cts.tm.service.TodoService;

@RestController
@RequestMapping("/todos")
@CrossOrigin
public class TodoController {

	@Autowired
	private TodoService todoService;
	
	@GetMapping
	public ResponseEntity<List<Todo>> getAll(){
		return ResponseEntity.ok(todoService.getAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Todo> getById(@PathVariable("id")long id){
		Todo todo = todoService.getById(id);
		return todo==null? ResponseEntity.notFound().build() : ResponseEntity.ok(todo);
	}
	
	@PostMapping
	public ResponseEntity<Todo> add(@RequestBody Todo todo){
		
		if(todoService.exists(todo.getId()))
			return new ResponseEntity<>(HttpStatus.ALREADY_REPORTED);
		
		return new ResponseEntity<Todo>(todoService.save(todo),HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<Todo> update(@RequestBody Todo todo){
		
		if(!todoService.exists(todo.getId()))
			return ResponseEntity.notFound().build();
		
		return new ResponseEntity<Todo>(todoService.save(todo),HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id")long id){

		if(!todoService.exists(id))
			return ResponseEntity.notFound().build();
		
		todoService.delete(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
