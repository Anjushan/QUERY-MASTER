package com.login.demo.controller;

import com.login.demo.entity.Field;
import com.login.demo.services.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("demo")
@CrossOrigin("http://localhost:3000/")
public class FieldController {

    @Autowired
    private FieldService fieldService;

    @GetMapping(value = "/fields")
    public List<Field> FindAllFields(){

        return fieldService.FindAllFields();

    }

    @GetMapping(value = "/fields/{idd}")
    public Optional<Field> FIndFieldById(@PathVariable Integer idd){

        return fieldService.FIndFieldById(idd);


    }

    @PostMapping(value = "/field")
    public ResponseEntity<?> AddField(@RequestBody Field field){

        Optional<Field> fields = fieldService.AddField(field);
        if (fields != null){

            return new ResponseEntity<>(HttpStatus.OK);

        }

            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }



}
