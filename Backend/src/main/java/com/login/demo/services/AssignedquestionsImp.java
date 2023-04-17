package com.login.demo.services;

import com.login.demo.entity.Assignedquestions;
import com.login.demo.repository.AssignedquestionsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignedquestionsImp implements AssignedquestionsService  {

    private AssignedquestionsRepository assignedquestionsRepository;

    public AssignedquestionsImp(AssignedquestionsRepository assignedquestionsRepository){

        this.assignedquestionsRepository = assignedquestionsRepository;

    }



    @Override
    public Optional<Assignedquestions> addAssignedquestion(Assignedquestions assignedquestions){

        Assignedquestions saved = assignedquestionsRepository.save(assignedquestions);
        return this.findQuestionsbyuid(saved.getUid());

    }

    @Override
    public Optional<Assignedquestions> findQuestionsbyuid(Integer uid){

        Optional<Assignedquestions> searched = assignedquestionsRepository.findById(uid);

        return searched;


    }

    @Override
    public Integer findLastInsertedQid(){

        return assignedquestionsRepository.findLastInsertedQid();

    }




}
