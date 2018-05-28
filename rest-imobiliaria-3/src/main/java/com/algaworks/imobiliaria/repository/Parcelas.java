package com.algaworks.imobiliaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algaworks.imobiliaria.model.Parcela;

@Repository
public interface Parcelas extends JpaRepository<Parcela, Long> {

}
