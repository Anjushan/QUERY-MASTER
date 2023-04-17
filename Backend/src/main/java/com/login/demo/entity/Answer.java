package com.login.demo.entity;

import javax.persistence.*;

@Entity
@Table(name = "answer")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int aid;

    public void setaid(int aid) {

        this.aid = aid;

    }

    public int getaid() {

        return aid;

    }

    @Column(name = "answer", nullable = false)
    private String answer;

    public void setanswer(String answer) {

        this.answer = answer;

    }

    public String getanswer() {

        return answer;

    }

    @Column(name = "upvote", nullable = false)
    private int upvote = 0;

    public void increasevote() {

        this.upvote = this.upvote + 1;

    }

    public void decreasevote() {

        this.upvote = this.upvote - 1;
    }

    public int getupvote() {

        return this.upvote;

    }


    @Column(name = "qid" , nullable = false)
    private int qid;

    public void setQid(int qid){

        this.qid = qid;

    }

    public  int getQid(){

        return  this.qid;

    }



    public Answer() {
    }
    public Answer(int aid, String answer, int upvote , int qid ) {
        this.aid = aid;
        this.answer = answer;
        this.upvote = upvote;
        this.qid = qid;
    }

    public Answer( String answer, int upvote , int qid ) {
        this.answer = answer;
        this.upvote = upvote;
        this.qid = qid;
    }



}
