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

import com.algaworks.imobiliaria.model.OrdemCompra;
import com.algaworks.imobiliaria.repository.OrdensCompra;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OrdemCompraController {

	@Autowired
	private OrdensCompra ordem;
	
	
	@GetMapping("/ordensc")
	public List<OrdemCompra> listarOrdens() {
		return ordem.findAll();
	}
	@GetMapping("/ordemc/{id}")
	public Optional<OrdemCompra> getOrdem(@PathVariable Long id) {
		return ordem.findById(id);
	}
	
	@DeleteMapping("/ordemc/{id}")
	public boolean deleteOrdem(@PathVariable Long id) {
		ordem.deleteById(id);
		return true;
	}
	
	@PostMapping("/ordemc")
	public OrdemCompra createOrdem(@RequestBody OrdemCompra ordemdecompra) {
		return ordem.save(ordemdecompra);
	}
	@PutMapping("/ordemc")
	public OrdemCompra updateOrdem(@RequestBody OrdemCompra ordemdecompra) {
		return ordem.save(ordemdecompra);
	}
	
}