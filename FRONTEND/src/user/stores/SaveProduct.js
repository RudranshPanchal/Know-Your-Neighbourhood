
import React from 'react';
import './ListProduct.css'
import ProductServices from '../../service/ProductServices';
class SaveProduct extends React.Component{

 // constructor
 constructor(props) {
    super(props);
    this.state = {
        productName:'',
        productPrice:'',
        productMake:'',
        productModel:'',
        productRegistration:''
    };   
  }

  changeProductNameHandler=(event)=>{
    console.log ("In Product Model Handler");
    console.log(event.target.value);
    this.setState({productName:event.target.value});
  }

  changeProductPriceHandler=(event)=>{
    console.log("In Product Regis Handler");
    console.log(event.target.value);
    this.setState({productPrice:event.target.value}); 
  }

  changeProductMakeHandler=(event)=>{
    console.log("In Product Price Handler");
    console.log(event.target.value);
    this.setState({productMake:event.target.value});
  }

  changeProductModelHandler=(event)=>{
    console.log("In Product Price Handler");
    console.log(event.target.value);
    this.setState({productModel:event.target.value});
  }

  changeProductRegistrationHandler=(event)=>{
    console.log("In Product Price Handler");
    console.log(event.target.value);
    this.setState({productRegistration:event.target.value});
  }

  saveProduct=(event)=>{

    console.log("In Save Product Method");

    //Prepare the object
    let products={
      "productName": this.state.productName,
      "productPrice": this.state.productPrice,
      "productMake": this.state.productMake,
      "productModel": this.state.productModel,
      "productRegistration": this.state.productRegistration
      }
    //call the API method
    ProductServices.addProduct(products).then(
      res=>{
        console.log("Response After calling Post API Method "+JSON.stringify(res.data))
      }
    ).catch(console.log)

    //To go to the another component
    //this.props.history.push(`/contact`);

  }

   // render 
   render(){
    return (
      <div className="store-container">
        
        <div className="container">

            <h2 style={{ color:'white'}}> Add New Product</h2>
          <div className='row'>
            <div className='col-lg-6'>
            <form>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Product Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={this.changeProductNameHandler}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Product Price</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={this.changeProductPriceHandler}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Product Make</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control"onChange={this.changeProductMakeHandler}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Product Ratings</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control"onChange={this.changeProductModelHandler}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Product Registration</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control"onChange={this.changeProductRegistrationHandler}/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10 p-2">
                    <button type="button" className="btn btn-secondary" onClick={this.saveProduct}>Save Product</button>
                    </div>
                </div>
                </form>
                </div>
                </div>
        </div>
</div>
        );
    }

}

export default SaveProduct