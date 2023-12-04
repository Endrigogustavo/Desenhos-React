
import './Home.css'
import japan from './../../Img/ilustracao-japonesa-desenhada-a-mao-de-flores-de-cerejeira_23-2149601808-PhotoRoom 1.png'
import grup1 from './../../Img/Group 13885.png'
import japan2 from './../../Img/ilustracao-japonesa-desenhada-a-mao-de-petalas-de-cerejeira_23-2149601832-PhotoRoom 1.png'
import grup2 from './../../Img/Group 13883.png'
import japan3 from './../../Img/7691984-PhotoRoom 1.png'
import girl from './../../Img/286696717_131549379278777_4742352255574198065_n (1) (1) 1.png'
import grup3 from './../../Img/Group 13888.png'



function Home() {
 
  return (
    <>
    <div className='home'>
    <div className = "gfg">
            <p id="my-image">
                <div className="flex1">
                <img src={japan} className='japan'/>
                <img src={grup1} className='grup1'/>
                <img src={japan2} className='japan2'/>
                </div>

                <div className='flex2'>
                <img src={grup2} className='grup2'/>
                <img src={girl} className='girl'/>
                </div>

                <div className="flex3">
                <img src={japan3} className='japan3'/>
                <img src={grup3} className='grup3'/>
                </div>

                
            </p>
        </div>
    </div>

    </>
  )
}

export default Home
