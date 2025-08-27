import './Hero.scss';
// import logo from '../../assets/logo.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="text">
        {/* <img src={logo} alt="" /> */}
        <h1 className='ar chooseAnim'>مؤسسة <span>ريفال</span> العالم للمقاولات</h1>
        <h1 className='chooseAnim'><span>VAL</span> WORLD FOR CONTRACTING EST.</h1>
        <p className='chooseAnim'>Where you build your dreams professionally</p>
      </div>
      
    </div>
  )
}

export default Hero
