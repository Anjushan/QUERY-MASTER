package com.login.demo.entity;

import lombok.*;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

import javax.persistence.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user")
public class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "uid")
    private int uid;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email")
    private String email;

    @Column(name = "usertype")
    private String usertype;

    @Column(name = "field")
    private int field;

    @Column(name = "password")
    private String password;

    public User(int uid, String firstname, String lastname, String email, String usertype, int field) {
        this.uid = uid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.usertype = usertype;
        this.field = field;
    }

    public User( String firstname, String lastname, String email, String usertype, int field) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.usertype = usertype;
        this.field = field;
    }



}
