package com.login.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.login.demo.entity.User;

public interface UserService {

    public List<User> findAllUsers();

    Optional<User> findUserById(Integer uid);

    ResponseEntity<?> registeruser(User user);

    ResponseEntity<?> loginUser(String email, String password) ;

    List<User> selectUserByTeacher();

}
