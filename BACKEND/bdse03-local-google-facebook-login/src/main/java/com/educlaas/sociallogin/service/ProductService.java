package com.educlaas.sociallogin.service;

import java.util.List;

import com.educlaas.sociallogin.dao.Product;



public interface ProductService {
	public void postProduct(Product product);
	public List<Product> getProduct();
	public List<Product> searchProductByKeyword(String keyword);
	public List<Product> searchProductByPriceRange(Double lower, Double upper);
}
