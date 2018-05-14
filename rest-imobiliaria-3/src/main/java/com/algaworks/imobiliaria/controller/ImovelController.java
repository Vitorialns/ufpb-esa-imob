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

import com.algaworks.imobiliaria.model.Imovel;
import com.algaworks.imobiliaria.repository.Imoveis;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ImovelController {
	@Autowired
	private Imoveis m;
	
	@GetMapping("/imoveis")	
	public List<Imovel> listarImoveis() {
		return m.findAll();
	}
	
	@DeleteMapping("/imovel/{id}")
	public boolean deletarImovel(@PathVariable Long id) {
		m.deleteById(id);
		return true;
	}
	
	@PostMapping("/imovel")
	public Imovel createImoveis(@RequestBody Imovel imovel) {
		return m.save(imovel);
	}
	
	@GetMapping("/imovel/{id}")
	public Optional<Imovel> getImovel(@PathVariable Long id) {
		return m.findById(id);
	}
	
	@PutMapping("/imovel")
	public Imovel updateImovel(@RequestBody Imovel imovel) {
		return m.save(imovel);
	}

}
