import './Gallery.scss';
import data from '../../data/gallery';

const Gallery = () => {
  return (
    <div className='gal'>
      <h1 className='chooseAnim'>Our Photo Gallery</h1>
      <div className="gal-con">
        {data.map((item)=>{
          return (
            <img className={`gal-item ${item.classN}`} src={item.src} alt={item.classN} />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
