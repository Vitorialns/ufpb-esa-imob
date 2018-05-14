package com.algaworks.imobiliaria.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algaworks.imobiliaria.model.Cliente;



@Repository
public interface Clientes extends JpaRepository<Cliente, Long>{
	
	public List<Cliente> findByNomeContaining(String nome);
} 