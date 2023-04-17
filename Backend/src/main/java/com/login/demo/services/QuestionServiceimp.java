package com.login.demo.services;

import java.util.List;
import java.util.Optional;

import com.login.demo.repository.QuestionFIlterRepository;
import org.aspectj.weaver.loadtime.Options;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.login.demo.entity.Question;
import com.login.demo.repository.QuestionRepository;
import com.login.demo.services.QuestionService;

@Service
public class QuestionServiceimp implements QuestionService {

    private QuestionRepository qRepository;
    private QuestionFIlterRepository questionFIlterRepository;

    public QuestionServiceimp(QuestionRepository qRepository , QuestionFIlterRepository questionFIlterRepository ) {

        this.qRepository = qRepository;
        this.questionFIlterRepository = questionFIlterRepository;

    }

    @Override
    public List<Question> findAllQuestion() {

        List<Question> questions = qRepository.findAll();
        return questions;

    }

    @Override
    public Optional<Question> findquestionbuid(Integer id) {

        Optional<Question> question = qRepository.findById(id);
        new ResponseEntity<>(HttpStatus.OK);
        return question;

    }

    @Override
    public Optional<Question> addquestion(Question question) {

        Question saved = qRepository.save(question);

        return this.findquestionbuid(saved.getqid());

    }

    @Override
    public ResponseEntity<?> DeleteQuestion(Integer iid){

        qRepository.deleteById(iid);
        return new ResponseEntity<>(HttpStatus.OK);


    }

    @Override
    public List<Question> getQuestionbyQfield(Integer qfield){

        List<Question> question_byfieldid = questionFIlterRepository.getQuestionbyQfield(qfield);
        return question_byfieldid;

    }



    @Override
    public int IncreaseUpvote(Question question){

        return question.getupvote() + 1 ;

    }

    @Override
    public int DecreaseUpvote(Question question){

        return question.getupvote() -1 ;

    }






}
