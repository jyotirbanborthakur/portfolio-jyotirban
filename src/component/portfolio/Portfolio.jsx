import React from 'react'
import './Portfolio.css'
import img from '../../assets/portfolio.png'

const dataArray=[
  {
    id:1,
    image:{img},
    title:'Digital Library System',
    github:'',
    demo:'https://jyotirbanborthakur.github.io/Library-project/#'
  },
  {
    id:2,
    image:{img},
    title:'Social Media comment box',
    github:'www.google.com',
    demo:'https://jyotirbanborthakur.github.io/Comment-page-project/'
  },
  {
    id:3,
    image:{img},
    title:'Smart form',
    github:'www.google.com',
    demo:'https://jyotirbanborthakur.github.io/Form-Validation-Project-using-Regex/'
  }
]
const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h1>My recent works</h1>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
       {
         dataArray.map(({id,image,title,github,demo})=>
         {
           return(
            <article key={id} className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={img} alt="" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio