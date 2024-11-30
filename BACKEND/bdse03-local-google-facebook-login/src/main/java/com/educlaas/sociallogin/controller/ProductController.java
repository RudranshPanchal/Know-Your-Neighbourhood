package com.educlaas.sociallogin.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.sociallogin.dao.Product;
import com.educlaas.sociallogin.service.ProductService;



@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(value = "/abcproduct")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	//1. Post Product API
	@PostMapping(value = "/product")
	public void postProduct(@RequestBody Product product) {
		productService.postProduct(product);
		System.out.println("All Product are saved into the database");
	}

	//2. Get Car API
	@GetMapping(value = "/product")
	public List<Product> getProduct(){
		return productService.getProduct();
	}
	
	//3. Search Car By Keyword API
	@GetMapping(value = "/product/{keyword}")
	public List<Product> searchByKey(@PathVariable String keyword){
		return productService.searchProductByKeyword(keyword);
	}
	
	//4. Search Car By Price Range API
	@GetMapping(value = "/product/{lower}/{upper}")
	public List<Product> searchByPrice(@PathVariable Double lower, @PathVariable Double upper){
		return productService.searchProductByPriceRange(lower, upper);
	}
	
}
