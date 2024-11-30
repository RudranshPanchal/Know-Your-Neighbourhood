import axios from "axios";

const API_BASE_URL="http://localhost:8080/abcproduct";
class ProductServices{

    getAllProduct(){
       return axios.get(API_BASE_URL+ "/product");
    }

    addProduct(products){
        return axios.post(API_BASE_URL+"/product", products)
    }

    searchProduct(keyword){
      return axios.get(API_BASE_URL+"/product/"+ keyword)
    }
    





}

export default new ProductServices()