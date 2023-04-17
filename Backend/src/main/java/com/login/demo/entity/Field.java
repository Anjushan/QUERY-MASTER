package com.login.demo.entity;

import javax.persistence.*;

@Entity
@Table(name = "field")
public class Field {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fid;

    @Column(name = "fieldname", nullable = false)
    private String fieldname;

    public void setFid(int fid) {
        this.fid = fid;
    }

    public int getFid() {
        return fid;
    }

    public void setFieldname(String fieldname) {
        this.fieldname = fieldname;
    }

    public String getFieldname() {
        return fieldname;
    }

    public Field() {
    }

    public Field(int fid, String fieldname) {
        this.fid = fid;
        this.fieldname = fieldname;
    }
}
