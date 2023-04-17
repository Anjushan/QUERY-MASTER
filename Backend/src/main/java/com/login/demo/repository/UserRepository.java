package com.login.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.login.demo.entity.User;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    User getUserByEmail(String email);

    @Query("SELECT u FROM User u where u.usertype='teacher'")
    List<User> selectTeacher();

    @Query("SELECT u FROM User u where u.usertype='student'")
    List<User> selectStudent();

}