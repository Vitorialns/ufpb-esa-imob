package com.algaworks.imobiliaria.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.imobiliaria.model.Contrato;
import com.algaworks.imobiliaria.repository.Contratos;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class ContratoController {
	@Autowired
	private Contratos c;
	
	@GetMapping("/contratos")	
	public List<Contrato> getContratos() {
		return c.findAll();
	}
	
	@DeleteMapping("/contrato/{id}")
	public boolean deleteContrato(@PathVariable Long id) {
		c.deleteById(id);
		return true;
	}
	
	@PostMapping("/contrato")
	public Contrato createImoveis(@RequestBody Contrato contrato) {
		return c.save(contrato);
	}
	
	@GetMapping("/contrato/{id}")
	public Optional<Contrato> getContrato(@PathVariable Long id) {
		return c.findById(id);
	}
	
	@PutMapping("/contrato")
	public Contrato updateContrato(@RequestBody Contrato contrato) {
		return c.save(contrato);
	}
}
