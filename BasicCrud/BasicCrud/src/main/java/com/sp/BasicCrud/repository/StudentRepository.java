package com.sp.BasicCrud.repository;

import com.sp.BasicCrud.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

}