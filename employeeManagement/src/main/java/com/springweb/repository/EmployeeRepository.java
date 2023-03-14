package com.springweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import com.springweb.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
}