import styles from "../styles/newsfeed.module.css";
import {useEffect, useState} from 'react'
import * as API from "../api/API.js"

const NewsFeed = () => {

  const [data, setData] = useState(null)
  const [content, setContent] = useState(null)
  const [gistOrder, setGistOrder] = useState(0)

  useEffect(() => {

    let intervalID
    async function fetchData() {

      API.getNews()
      .then(response =>
        {
          setData(response.data)
        const url = response.data[gistOrder].url
      API.getSingleNews(url).then(result => {
        const data = result.data.files
        const entries = Object.entries(data)
         const gistName = entries[0][0]
         const content = entries[0][1]
           setContent({name: gistName,content: content.content})
        }).then(
          intervalID = setInterval(()=>{
            if(gistOrder < data.length){
              setGistOrder(gistOrder => gistOrder + 1 )
            }else{
              setGistOrder(0)
            }
          }, 3000)
        )
        })
    }
    fetchData();



    return () => clearInterval(intervalID)
  }, []);



  return (
    <div className={`${styles.main} main`}>
      <h1 className={styles.header}>ITHS News</h1>
      {content && (
      <>
      <h2>{content.name}</h2>
      <p>{content.content}</p>
      </>
      )}
    </div>
  );
};

export default NewsFeed;
