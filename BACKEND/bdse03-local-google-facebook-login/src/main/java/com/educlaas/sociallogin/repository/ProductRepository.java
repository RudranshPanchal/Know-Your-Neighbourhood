package com.educlaas.sociallogin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.educlaas.sociallogin.dao.Product;



@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	@Query(value = "SELECT p FROM Product p WHERE productName LIKE '%' || :keyword || '%' "
			+ "OR productMake LIKE '%' || :keyword || '%' " + "OR productModel LIKE '%' || :keyword || '%' " + "OR productRegistration LIKE '%' || :keyword || '%' " )
	public List<Product> searchProductByKeyword (@Param("keyword") String keyword);
	
	@Query(value = "SELECT p FROM Product p WHERE productPrice BETWEEN :lower AND :upper")
	public List<Product> searchProductByPriceRange(@Param("lower") Double lower, @Param("upper") Double upper);
}
