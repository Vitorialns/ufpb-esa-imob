package com.algaworks.imobiliaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algaworks.imobiliaria.model.OrdemCompra;

@Repository
public interface OrdensCompra extends JpaRepository<OrdemCompra, Long>{

}