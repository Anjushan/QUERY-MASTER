package com.login.demo.controller;


import com.login.demo.entity.Assignedquestions;
import com.login.demo.services.AssignedquestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("demo")
@CrossOrigin("http://localhost:3000/")
public class AssignedquestionsController {

    @Autowired
    private AssignedquestionsService assignedquestionsService;

    @GetMapping(value = "/Assignedquestions/{id}")
    public Optional<Assignedquestions> getAssignedquestionsbyuid(@PathVariable Integer uid) {

        return assignedquestionsService.findQuestionsbyuid(uid);

    }

    @GetMapping(value = "/Assignedquestions/lastquestion")
    public Integer findLastInsertedQid(){

        return assignedquestionsService.findLastInsertedQid();

    }



    @PostMapping(value = "/Assignedquestion")
    public ResponseEntity<?> AddAssignedquestion(@RequestBody Assignedquestions assignedquestions) {

        Optional<Assignedquestions> assigned = assignedquestionsService.addAssignedquestion(assignedquestions);
        if (assigned != null) {

            return new ResponseEntity<>(HttpStatus.OK);

        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);


    }

}