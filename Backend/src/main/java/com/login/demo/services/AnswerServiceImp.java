package com.login.demo.services;

import com.login.demo.entity.Answer;
import com.login.demo.repository.AnswerFilterRepository;
import com.login.demo.repository.AnswerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import java.util.Optional;
@Service
public class AnswerServiceImp implements AnswerService {

    private AnswerRepository answerRepository;
    private AnswerFilterRepository answerFilterRepository;


    public AnswerServiceImp(AnswerRepository answerRepository , AnswerFilterRepository answerFilterRepository ){

        this.answerRepository = answerRepository;
        this.answerFilterRepository = answerFilterRepository;

    }

    @Override
    public List<Answer> FindAllAnswers() {

        List<Answer> answers = answerRepository.findAll();
        return answers;


    }

    @Override
    public Optional<Answer> FIndAnswerById(Integer id) {

        Optional<Answer> answer = answerRepository.findById(id);
        return  answer;
    }

    @Override
    public List<Answer> FindAnswerByQid(Integer qid){

        List<Answer> answers_byid = answerFilterRepository.getAnswersByqId(qid);
        return answers_byid;

    }



    @Override
    public Answer AddAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    @Override
    public Answer IncreaseUpvote(Answer answer){

        answer.increasevote();
        return answerRepository.save(answer);
    }

    @Override
    public Answer DecreaseUpvote(Answer answer){

        answer.decreasevote();
        return answerRepository.save(answer);

    }



}
