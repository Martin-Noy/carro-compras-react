import {Component} from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles={
    carro:{
        backgroundColor:'#359A2C',
        color:'#fff',
        border:'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble:{
        position:'relative',
        left:15,
        top:20,
    }
}
class Carro extends Component{
    render(){
        const { carro, mostrarCarro, esCarroVisible } = this.props
        const cantidad = carro.reduce((acc, elem) => acc + elem.cantidad,0)
        return(
            <div>   
                <span style={styles.bubble}>
                    {cantidad !== 0 
                    ? <BubbleAlert value = {cantidad}/>
                    : null}
                </span>
            
                <button 
                    style={styles.carro}
                    onClick={()=>mostrarCarro()}
                >
                    carro
                </button>
                {esCarroVisible 
                ? <DetallesCarro
                carro={carro}/>
                : null
                }
                
            </div>
        )
    }
}

export default Carro