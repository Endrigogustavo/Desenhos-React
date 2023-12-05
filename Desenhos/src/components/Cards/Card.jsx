
import './Card.scss'
import furina from './Img/furina_ousia_render_by_taemuepuan_dgett44.png'
import fundo from './Img/750x1334.png'
import logo from './Img/Genshin-Impact_Logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {

  return (
    <>

<br /><br /><br /><br />




<div className="containerr">

	<h1 className="heading">Categotia de  <span>Animes/Jogos</span></h1>

	<div className="gallery">

		<div className="gallery-item">
    <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill">
  <div className="card">
    <div className="wrapper gallery-image">
      <img src={fundo} className="cover-image" />
    </div>
    <img src={logo} className="title" />
    <img src={furina} className="character" />
  </div>
</a>
		</div>

		<div className="gallery-item">
    <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill">
  <div className="card">
    <div className="wrapper gallery-image">
      <img src={fundo} className="cover-image" />
    </div>
    <img src={logo} className="title" />
    <img src={furina} className="character" />
  </div>
</a>
			</div>

		<div className="gallery-item">
    <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill">
  <div className="card ">
    <div className="wrapper gallery-image">
      <img src={fundo} className="cover-image " />
    </div>
    <img src={logo} className="title" />
    <img src={furina} className="character" />
  </div>
</a></div>

		<div className="gallery-item">
			<img className="gallery-image" src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"/>
		</div>

		<div className="gallery-item">
			<img className="gallery-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"/>
		</div>

		<div className="gallery-item">
			<img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"/>
		</div>

	</div>

</div>
    </>
  )
}

export default Cards