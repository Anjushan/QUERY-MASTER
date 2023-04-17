package com.login.demo.services;

import com.login.demo.entity.Assignedquestions;

import java.util.List;
import java.util.Optional;

public interface AssignedquestionsService {

    public Optional<Assignedquestions> addAssignedquestion(Assignedquestions assignedquestions);

    public Optional<Assignedquestions> findQuestionsbyuid(Integer uid);

    public Integer findLastInsertedQid();


}
