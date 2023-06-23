function Post({ id, date, image, title }) {

   // console.log(`Image: ${date}`)
   // let { file, description } = image
  
    return (
      <li key={id} className="post">
        <div className="text">
          <h2>{title}</h2>
          <h3>{date}</h3>
        </div>
        {/* <img alt={description} src={`https:${file.url}`} />
        <div className="description">{description}</div>
        <div className="text">
          <h2>{title}</h2>
          <h3>{date.substring(0, 10)}</h3>
        </div> */}
      </li>
    )
  }
  
  export default Post