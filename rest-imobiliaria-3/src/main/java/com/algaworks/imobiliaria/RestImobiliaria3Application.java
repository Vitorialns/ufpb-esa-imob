package com.algaworks.imobiliaria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.algaworks.imobiliaria.model.Cliente;
import com.algaworks.imobiliaria.repository.Clientes;

@SpringBootApplication
public class RestImobiliaria3Application {
	
	@Autowired
	private Clientes c;

	public static void main(String[] args) {
		SpringApplication.run(RestImobiliaria3Application.class, args);
	}
	
	
}
