package com.login.demo.repository;

import com.login.demo.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
    public interface AnswerFilterRepository extends JpaRepository<Answer, Integer> {

        @Query(value = "SELECT * FROM webapp.answer where qid =?1", nativeQuery = true)
        List<Answer> getAnswersByqId(int qid );

    }

