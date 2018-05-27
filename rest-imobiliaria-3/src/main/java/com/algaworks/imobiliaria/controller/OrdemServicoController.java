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

import com.algaworks.imobiliaria.model.OrdemServico;
import com.algaworks.imobiliaria.repository.OrdensServico;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OrdemServicoController {

	@Autowired
	private OrdensServico ordem;
	
	
	@GetMapping("/ordenss")
	public List<OrdemServico> listarOrdens() {
		return ordem.findAll();
	}
	@GetMapping("/ordems/{id}")
	public Optional<OrdemServico> getOrdem(@PathVariable Long id) {
		return ordem.findById(id);
	}
	
	@DeleteMapping("/ordems/{id}")
	public boolean deleteOrdem(@PathVariable Long id) {
		ordem.deleteById(id);
		return true;
	}
	
	@PostMapping("/ordems")
	public OrdemServico createOrdem(@RequestBody OrdemServico ordemdeservico) {
		return ordem.save(ordemdeservico);
	}
	@PutMapping("/ordems")
	public OrdemServico updateOrdem(@RequestBody OrdemServico ordemdeservico) {
		return ordem.save(ordemdeservico);
	}
	
}