package com.algaworks.imobiliaria.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Parcela {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	@JoinColumn(name = "contrato")
	private Contrato contrato;
	
	private String status;
	private String locatario;
	private String endereco;
	private String apto;
	private Float aluguel;
	private Float condominio;
	private Date vencimento;
	private Float total;
	private Float juros;
	private Float multa;
	private Float pagar;
	private Date datapag;
	
	
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Contrato getContrato() {
		return contrato;
	}
	public void setContrato(Contrato contrato) {
		this.contrato = contrato;
	}
	public String getLocatario() {
		return locatario;
	}
	public void setLocatario(String locatario) {
		this.locatario = locatario;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getApto() {
		return apto;
	}
	public void setApto(String apto) {
		this.apto = apto;
	}
	public Float getAluguel() {
		return aluguel;
	}
	public void setAluguel(Float aluguel) {
		this.aluguel = aluguel;
	}
	public Float getCondominio() {
		return condominio;
	}
	public void setCondominio(Float condominio) {
		this.condominio = condominio;
	}
	
	
	public Date getVencimento() {
		return vencimento;
	}
	public void setVencimento(Date vencimento) {
		this.vencimento = vencimento;
	}
	public Float getTotal() {
		return total;
	}
	public void setTotal(Float total) {
		this.total = total;
	}
	public Float getJuros() {
		return juros;
	}
	public void setJuros(Float juros) {
		this.juros = juros;
	}
	public Float getMulta() {
		return multa;
	}
	public void setMulta(Float multa) {
		this.multa = multa;
	}
	public Float getPagar() {
		return pagar;
	}
	public void setPagar(Float pagar) {
		this.pagar = pagar;
	}
	public Date getDatapag() {
		return datapag;
	}
	public void setDatapag(Date datapag) {
		this.datapag = datapag;
	}
		
}
