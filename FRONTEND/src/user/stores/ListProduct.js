
import React from 'react';
import './ListProduct.css'
import ProductServices from '../../service/ProductServices';

//Component
class ListProduct extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      searchdata:'',
      products:[]
    };

  }

  //ComponentDidMount
  componentDidMount(){
    //method-to call the API(Axios Library HTTP)
    console.log ("In Component Did Mount");
    ProductServices.getAllProduct()
    .then(res=>{
      console.log("Res data is "+JSON.stringify(res.data))
      this.setState({product:res.data})
    })
    .catch(console.log)
  }

  /****************** For Search Process *******************/
  searchprocess=(event)=>{
    //prepare the keyword
    let keyword=this.state.searchdata;
    //Call Search API Method
   ProductServices.searchProduct(keyword)
   .then(res=>{
    console.log("Res data is "+JSON.stringify(res.data))
    this.setState({product:res.data})
   })
   .catch(console.log)
  }

  searchtextHandler=(event) =>{
    console.log("In Search Handler");
    console.log(event.target.value);
    this.setState({searchdata:event.target.value});
  }

  /****************** End Search Process *******************/

  // render 
  render(){
    return (
      <div className="store-container">
      <div className='container'>

        
        <div className="row">

          <div className='col-4 p-2'>
          <div className="input-group mb-4">  
              <input type="search" onChange={this.searchtextHandler} placeholder="Search here..." aria-describedby="button-addon5" className="form-control"/>  
              <div className="input-group-append">  
                <button id="button-addon5" type="submit" className="btn btn-secondary" onClick={this.searchprocess}> Search </button>  
          </div> 
        </div>

        </div>

        </div>

        <div className="row row-cols-1 row-cols-md-2">
        <h2 style={{ color:'white'}}> Product List</h2> 

       
        <table className="table">
                <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name of Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Product Make</th>
                    <th scope="col">Product Model</th>
                    <th scope="col">Product Registration</th>
                </tr>
                </thead>
                <tbody>
 
        {this.state.products.map((product)=>(
            <tr>
                <th scope="row">{product.productId}</th>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.productMake}</td>
                <td>{product.productModel}</td>
                <td>{product.productRegistration}</td>
            </tr>
            ))}

        </tbody>
        </table>
       </div>

      </div>
      </div>
    
  );
  }
  
}

// Need to export 
export default ListProduct

