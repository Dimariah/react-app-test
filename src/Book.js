// import React from 'react'

const Book = ({title, img, author}) =>{
  const myfunction = (e) => {
    const section = e.target.parentElement
    section.classList.add('vivid')
  }
  const myfunction1 = (e) => {
    const section = e.target.parentElement
    section.classList.remove('vivid')
  }
  return(
    <section className="book" onMouseOut={myfunction1} onMouseOver={myfunction}>
      <img className="img" src={img} alt=""/>
      <h2>{title}</h2>
      <p>{author}</p>
    </section>
  )
}

export default Book;