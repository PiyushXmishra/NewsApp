import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)



  const update=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey="YOUR {NEWS API} API HERE"&page=1&pageSize=${props.pageSize}`;
    
    setLoading(true)
    let data = await fetch(url);
    let parsedata = await data.json()
    setArticles(parsedata.articles)
    setLoading(false)
    setTotalResults(parsedata.totalResults)
  }
  useEffect(() => {
   update()
  }, [])


  const handlenextclick = async () => {
    if (page + 1 > Math.ceil(totalResults / props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey="YOUR {NEWS API} API HERE"&page= ${page + 1}&pageSize=${props.pageSize}`;
      
      setLoading(true)
      let data = await fetch(url);
      let parsedata = await data.json()
      setArticles(parsedata.articles)

      setPage(page + 1)
      setLoading(false)

    }
  }

  const handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey="YOUR {NEWS API} API HERE"&page= ${page - 1}&pageSize=${props.pageSize}`;
    setLoading(true)
     let data = await fetch(url);
    let parsedata = await data.json()
    setArticles(parsedata.articles)
    setPage(page - 1)
      setLoading(false)

  }



  return (
    <>

      <div className='container my-3'>

        <h1 className='text-center'style={{marginTop:"70px", marginBottom:"20px"}}>NewsMonkey - Top Headline</h1>
        {loading && <Spinner />}
        <div className="row" style={{}}>
          {!loading && articles.map((element) => {
            return <div className="col md-4" key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"} newsUrl={element.url} />
            </div>
          })


          }


        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handleprevclick}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handlenextclick}>Next &rarr; </button>
        </div>
      </div>
    </>
  )
}


News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
