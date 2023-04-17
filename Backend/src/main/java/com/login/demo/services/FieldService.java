package com.login.demo.services;

import com.login.demo.entity.Field;

import java.util.List;
import java.util.Optional;

public interface FieldService {

    public List<Field> FindAllFields();

    public Optional<Field> FIndFieldById(Integer id);

    public Optional<Field> AddField(Field field);



}
