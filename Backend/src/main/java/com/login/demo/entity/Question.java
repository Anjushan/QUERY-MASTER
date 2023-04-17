package com.login.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int qid;

    public void setqid(int qid) {
        this.qid = qid;
    }

    public int getqid() {
        return qid;
    }

    @Column(name = "question", nullable = false)
    private String question;

    public void setquestion(String question) {
        this.question = question;
    }

    public String getquestion() {
        return question;
    }

    @Column(name = "upvote", nullable = false)
    private int upvote = 0;

    public void increasevote() {
        upvote = upvote + 1;
    }

    public void decreasevote() {

        upvote = upvote - 1;

    }

    public int getupvote() {

        return upvote;

    }
    @Column(name = "qdescription" , nullable = true )
    private String qdescription;

    public void setQdescription(String qdescription){

        this.qdescription = qdescription;

    }

    public String getQdescription(){

        return this.qdescription;

    }

    @Column(name = "qfield", nullable = false)
    private int qfield;

    public void setQfield(int qfield){

        this.qfield = qfield;

    }

    public int getQfield(){

        return this.qfield;

    }



    public Question() {
    }

    public Question(int qid, String question, int upvote, String qdescription, int qfield ) {
        this.qid = qid;
        this.question = question;
        this.upvote = upvote;
        this.qdescription = qdescription;
        this.qfield = qfield;
    }

    public Question(String question, int upvote , String qdescription, int qfield) {
        this.question = question;
        this.upvote = upvote;
        this.qdescription = qdescription;
        this.qfield = qfield;

    }
}
