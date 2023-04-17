package com.login.demo.services;

import com.login.demo.entity.Field;
import com.login.demo.repository.FieldRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FieldServiceImp implements FieldService {

    private FieldRepository fieldRepository;

    public FieldServiceImp(FieldRepository fieldRepository){

        this.fieldRepository = fieldRepository;

    }


    @Override
    public List<Field> FindAllFields() {

        List<Field> fields = fieldRepository.findAll();
        return fields;

    }

    @Override
    public Optional<Field> FIndFieldById(Integer id){

        Optional<Field> field = fieldRepository.findById(id);
        return field;

    }

    @Override
    public Optional<Field> AddField(Field field){

         fieldRepository.save(field);
         return fieldRepository.findById(field.getFid());

    }


}
