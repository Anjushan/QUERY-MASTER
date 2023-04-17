package com.login.demo.repository;

import com.login.demo.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuestionFIlterRepository extends JpaRepository<Question,Integer> {

    @Query(value = "SELECT * FROM webapp.question where qfield =?1", nativeQuery = true )
    List<Question> getQuestionbyQfield(int qfield);

}
