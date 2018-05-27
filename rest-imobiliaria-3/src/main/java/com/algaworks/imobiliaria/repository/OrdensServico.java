package com.algaworks.imobiliaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algaworks.imobiliaria.model.OrdemServico;

@Repository
public interface OrdensServico extends JpaRepository<OrdemServico, Long>{

}