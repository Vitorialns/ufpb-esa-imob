package com.algaworks.imobiliaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algaworks.imobiliaria.model.Cliente;
import java.util.Optional;



@Repository
public interface Clientes extends JpaRepository<Cliente, Long>{
	public Optional<Cliente> findById(Long id);
} 