package com.login.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.login.demo.services.QuestionService;
import com.login.demo.entity.Question;

import java.util.*;

@RestController
@RequestMapping("demo")
@CrossOrigin("http://localhost:3000/")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping(value = "/questions")
    public List<Question> getquestions() {

        return questionService.findAllQuestion();

    }

    @GetMapping(value = "/questions/{id}")
    public Optional<Question> getquestionbyid(@PathVariable Integer id) {

        Optional<Question> question = questionService.findquestionbuid(id);
        return questionService.findquestionbuid(id);

    }

    @GetMapping(value = "/questions/Filter/{id}")
    public List<Question> FindQuestionbyqfield(@PathVariable Integer id){

        return questionService.getQuestionbyQfield(id);

    }

    @PostMapping(value = "/question")
    public ResponseEntity<?> AddQuestion(@RequestBody Question question){

        Optional<Question> questions = questionService.addquestion(question);
        if (questions != null){

            return  new ResponseEntity<>(HttpStatus.OK);

        }
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

    }

    @DeleteMapping(value = "/question/{iid}")
    public ResponseEntity<?> DeleteQuestion(@PathVariable Integer iid){

        return questionService.DeleteQuestion(iid);
    }

    @PutMapping
    public ResponseEntity<?> UpdateUpvote(@RequestBody Question question , @PathVariable boolean val){

        if (val = true){

            questionService.IncreaseUpvote(question);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else if (val = false){

            questionService.DecreaseUpvote(question);
            return  new ResponseEntity<>(HttpStatus.OK);

        }
        else {

            return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        }

    }

}
