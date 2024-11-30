package com.educlaas.sociallogin.service;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.educlaas.sociallogin.service.ProductService;
import com.educlaas.sociallogin.repository.ProductRepository;
import com.educlaas.sociallogin.dao.Product;
@Service
@Transactional
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepo;

	@Override
	public void postProduct(Product product) {
		System.out.println("Product posted");
		productRepo.save(product);
	}

	@Override
	public List<Product> getProduct() {
		return productRepo.findAll();
	}

	@Override
	public List<Product> searchProductByKeyword(String keyword) {
		return productRepo.searchProductByKeyword(keyword);
	}

	@Override
	public List<Product> searchProductByPriceRange(Double lower, Double upper) {
		return productRepo.searchProductByPriceRange(lower, upper);
	}

}
