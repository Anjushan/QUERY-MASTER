package com.login.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.login.demo.entity.Question;

public interface QuestionService {

    public List<Question> findAllQuestion();

    public Optional<Question> findquestionbuid(Integer id);

    public Optional<Question> addquestion(Question question);

    public ResponseEntity<?> DeleteQuestion(Integer iid);

    public int IncreaseUpvote(Question question);

    public int DecreaseUpvote(Question question);

    public List<Question> getQuestionbyQfield(Integer qfield);


}
