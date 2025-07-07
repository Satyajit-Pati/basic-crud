package com.sp.BasicCrud.service;

import com.sp.BasicCrud.entity.Student;
import com.sp.BasicCrud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(long id) {
        return studentRepository.findById(id).orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }

    public void deleteStudent(long id) {
        studentRepository.deleteById(id);
    }
}
