package com.login.demo.repository;

import com.login.demo.entity.Assignedquestions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AssignedquestionsRepository extends JpaRepository<Assignedquestions, Integer> {

    @Query(value = "SELECT qid FROM webapp.question order by qid DESC Limit 1 " , nativeQuery = true)
    Integer findLastInsertedQid();

}
