package com.algaworks.imobiliaria.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contrato {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Date datafinal;
	private Date datainicial;
	private Long idcliente_locatario;
	private Long idcliente_locador;
	private Long idimovel;
	private Float valoraluguel;
	private Float valorcondominio;
	private Float valortotal;
	private Date datadevencimento;
	
	
	public Date getDatadevencimento() {
		return datadevencimento;
	}
	public void setDatadevencimento(Date datadevencimento) {
		this.datadevencimento = datadevencimento;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDatafinal() {
		return datafinal;
	}
	public void setDatafinal(Date datafinal) {
		this.datafinal = datafinal;
	}
	public Date getDatainicial() {
		return datainicial;
	}
	public void setDatainicial(Date datainicial) {
		this.datainicial = datainicial;
	}
	public Long getIdcliente_locatario() {
		return idcliente_locatario;
	}
	public void setIdcliente_locatario(Long idcliente_locatario) {
		this.idcliente_locatario = idcliente_locatario;
	}
	public Long getIdcliente_locador() {
		return idcliente_locador;
	}
	public void setIdcliente_locador(Long idcliente_locador) {
		this.idcliente_locador = idcliente_locador;
	}
	public Long getIdimovel() {
		return idimovel;
	}
	public void setIdimovel(Long idimovel) {
		this.idimovel = idimovel;
	}
	public Float getValoraluguel() {
		return valoraluguel;
	}
	public void setValoraluguel(Float valoraluguel) {
		this.valoraluguel = valoraluguel;
	}
	public Float getValorcondominio() {
		return valorcondominio;
	}
	public void setValorcondominio(Float valorcondominio) {
		this.valorcondominio = valorcondominio;
	}
	public Float getValortotal() {
		return valortotal;
	}
	public void setValortotal(Float valortotal) {
		this.valortotal = valortotal;
	}
	
	
	
	

}
