package com.login.demo.controller;

import com.login.demo.entity.Answer;
import com.login.demo.services.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("demo")
@CrossOrigin("http://localhost:3000/")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping(value = "/answers")
    public List<Answer> FindAllAnswers() {

        return answerService.FindAllAnswers();

    }

    @GetMapping(value = "/answers/{id}")
    public Optional<Answer> FindAnswerById(@PathVariable Integer id) {

        return answerService.FIndAnswerById(id);

    }

    @GetMapping(value = "/answers/Filter/{qid}")
    public List<Answer> FindAnswerByQid(@PathVariable Integer qid) {

        return answerService.FindAnswerByQid(qid);

    }


    @PostMapping(value = "/answer")
    public ResponseEntity<?> AddAnswer(@RequestBody Answer answer) {

        Answer answer1 = answerService.AddAnswer(answer);

        if (answer1 != null) {

            return new ResponseEntity<>(HttpStatus.OK);

        }

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }


    @PutMapping(value = "/answer/update/{val}")
    public ResponseEntity<?> EditUpvote(@RequestBody Answer answer, @PathVariable char val) {

        if (val == 'u') {
            Answer res = answerService.IncreaseUpvote(answer);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } else if (val == 'd') {
            Answer res = answerService.DecreaseUpvote(answer);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


}
