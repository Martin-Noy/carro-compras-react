import { Component } from 'react'
import Productos from './Components/Productos'
import Layout from './Components/Layout'
import Title from './Components/Title'
import NavBar from './Components/NavBar'
/*
  Construiremos una app de carro de compras 
  la primera implementacion que haremos sera una Nav Bar el cual contendra un logo de nuestra app  y tambien
  un boton que contendra nuestro carrito de compras. 
  Luego de esto vendra un titulo
  seguido de los productos que nosotros agregaremos a nuestro carrito de compras.
  cada producto tendra una foto del producto, un nombre, el precio y un boton que dice agregar a carrito
  Al precionar dicho boton veremos como se agrega un mensaje de alerta con la cantidad de elementos
  que tenemosx en nuestro carro del Nav-Bar. Este numero de alerta se incrementara hasta llegar al 9
  en caso de que decidamos pasar del numero 9 este mismo mostrara ```9+```  
  Cuando se presiona el boton ```Carro``` del nav bar veremos un menu desplegable con todos los elementos
  que hemos seleccionado y estan en nuestro carrito
*/
class App extends Component {
  state = {
    productos : [
      {
        nombre:'Tomate', precio:1500, imagen:'/assets/tomate.jpg'
      },
      {
        nombre:'Arbejas', precio:2500, imagen:'/assets/arbejas.jpg'
      },
      {
        nombre:'Lechuga', precio:500, imagen:'/assets/lechuga.jpg'
      }
    ],
    carro:[],
    esCarroVisible:false,
  }

  agregarAlCarro = (producto) => {
    const {carro} = this.state
    if(carro.find(x => x.nombre === producto.nombre)){
      const newCarro = carro.map(x => x.nombre === producto.nombre 
        ? ({
          ...x,
          cantidad : x.cantidad+1
        })
        : x)
      return this.setState({carro:newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto, 
        cantidad:1,
      })
    })
  }
  mostrarCarro = ()=>{
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible:!this.state.esCarroVisible})
  }
  render(){
    return(
      <div>
        <NavBar
        carro = {this.state.carro}
        mostrarCarro = {this.mostrarCarro}
        esCarroVisible = {this.state.esCarroVisible}/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos = {this.state.productos}
            />
        </Layout>
      </div>
    )
  }
}


export default App;
