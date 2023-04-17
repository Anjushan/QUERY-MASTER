package com.login.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.demo.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

}
