import {Component} from 'react'

const styles ={
    layout:{
        backgroundColor : '#fff',
        color:'#0A283E',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
    },
    container:{
        width:'1200px'
    }
}
class Layout extends Component{
    render(){
        return(
            /*el primero se encarga de centrar el contenido para luego en el siguiente darle el 
            ancho correspondiente*/
            <div style={styles.layout}> 
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Layout