package com.login.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "assignedquestions")
public class Assignedquestions {




    @Column(name = "qid" , nullable = false)
    private int qid;

    public int getQid() {
        return qid;
    }

    public void setQid(int qid) {
        this.qid = qid;
    }

    @Id
    @Column(name = "uid" , nullable = false)
    private int uid;


    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public Assignedquestions(int qid , int uid){

        this.qid = qid;
        this.uid = uid;

    }





}

