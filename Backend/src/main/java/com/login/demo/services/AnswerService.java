package com.login.demo.services;

import com.login.demo.entity.Answer;

import java.util.List;
import java.util.Optional;

public interface AnswerService {

    public List<Answer> FindAllAnswers();

    public Optional<Answer> FIndAnswerById(Integer id);

    public List<Answer> FindAnswerByQid(Integer qid);

    public Answer AddAnswer(Answer answer);

    public Answer IncreaseUpvote(Answer answer);

    public Answer DecreaseUpvote(Answer answer);


}
