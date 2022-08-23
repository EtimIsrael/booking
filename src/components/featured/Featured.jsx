import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img 
          src="https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o=" 
          alt="" 
          className="featuredImg" 
        />
        <div className="featuredTitles">
          <h1>Abuja</h1>
          <h2>623 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/815261.webp?k=96c6465292cad5f9afffb2925a9f76b126d4675423300a6e63917f1fcf459a19&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Kaduna</h1>
          <h2>112 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/684500.webp?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>735 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured;