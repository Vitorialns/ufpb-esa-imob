package com.algaworks.imobiliaria.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Imovel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	private Long id_proprietario;
	private String proprietario;
	private String endereco;
	private String tipo_imovel;
	private String unidadestatus;
	private String unidadequarto;
	private String unidadegaragem;
	private String observacoes;
	
	
	public Long getId_proprietario() {
		return id_proprietario;
	}
	public void setId_proprietario(Long id_proprietario) {
		this.id_proprietario = id_proprietario;
	}
	public String getProprietario() {
		return proprietario;
	}
	public void setProprietario(String proprietario) {
		this.proprietario = proprietario;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getTipo_imovel() {
		return tipo_imovel;
	}
	public void setTipo_imovel(String tipo_imovel) {
		this.tipo_imovel = tipo_imovel;
	}
	public String getUnidadestatus() {
		return unidadestatus;
	}
	public void setUnidadestatus(String unidadestatus) {
		this.unidadestatus = unidadestatus;
	}
	public String getUnidadequarto() {
		return unidadequarto;
	}
	public void setUnidadequarto(String unidadequarto) {
		this.unidadequarto = unidadequarto;
	}
	public String getUnidadegaragem() {
		return unidadegaragem;
	}
	public void setUnidadegaragem(String unidadegaragem) {
		this.unidadegaragem = unidadegaragem;
	}
	public String getObservacoes() {
		return observacoes;
	}
	public void setObservacoes(String observacoes) {
		this.observacoes = observacoes;
	}
}
