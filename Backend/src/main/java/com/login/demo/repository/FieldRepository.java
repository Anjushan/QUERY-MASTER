package com.login.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import com.login.demo.entity.Field;

public interface FieldRepository extends JpaRepository<Field, Integer> {

}
