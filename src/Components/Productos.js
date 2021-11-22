import { Component } from 'react'
import Producto from './Producto'

const styles = {
    productos:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:'5px 10px'
    }
}
class Productos extends Component {
    render(){
        const {productos, agregarAlCarro} = this.props
        return(
            <div style={styles.productos}>
                {productos.map(
                        elemento => 
                        <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={elemento.nombre}
                        producto={elemento}
                        />
                    )
                }
            </div>
            )
    }
}

export default Productos