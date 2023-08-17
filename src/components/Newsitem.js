import React from 'react'
import './Newsitem.css'
const Newsitem=(props)=>{

  
    let { title, description, imageUrl, newsUrl } = props;
    return (
      <div className='my-3' style={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>
        <div className="card" style={{ width: "18rem", backgroundColor: "grey", alignContent:"center",}}>
          <img src={imageUrl} className="card-img-top" alt="..." height={200} />
          <div className="card-body" style={{ backgroundColor: "white", color: "black", borderRadius: "5px" }}>
            <h5 className="card-title" onto>{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>

          </div>
        </div>
        <br />

      </div>


    )
  }


export default Newsitem
