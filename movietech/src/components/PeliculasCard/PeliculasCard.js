import React, {Component} from 'react'
import {Link} from "react-router-dom"



class PeliculasCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide',
      favoritos: false

    }
  }



  render(){
    return (
    <section className=''>
    <a className="">
        <article className="">
            <img className="" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /> 
            <div className="">
              <p className=""> <Link to={`/detalle/${this.props.id}`}> {this.props.name}</Link></p>
             
              <p className={this.state.verMas}>{this.props.descripcion}</p> 
              {
                this.state.favoritos ? <button onClick={() => this.removeFavoritos(this.props.id)}> Sacar de Favoritos</button>: <button onClick={() => this.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button> 
              }
              
              <button onClick={() => this.verMas()}>Ver más</button>


              
            </div>
        </article>
   </a>
   
</section>
    )
    
  }
}


export default PeliculasCard