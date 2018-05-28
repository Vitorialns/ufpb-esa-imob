package com.algaworks.imobiliaria.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.imobiliaria.model.Parcela;
import com.algaworks.imobiliaria.repository.Parcelas;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ParcelaController {
	
	@Autowired
	private Parcelas c;
	
	@GetMapping("/parcelas")
	public List<Parcela> getParcelas() {
		return c.findAll();
	}
	
	@GetMapping("/parcela/{id}")
	public Optional<Parcela> getParcela(@PathVariable Long id) {
		return c.findById(id);
	}
	
	@PostMapping("/parcela")
	public Parcela createParcela(@RequestBody Parcela parcela) {
		return c.save(parcela);
	}
	
	@PutMapping("/parcela")
	public Parcela updateParcela(@RequestBody Parcela parcela) {
		return c.save(parcela);
	}

}
