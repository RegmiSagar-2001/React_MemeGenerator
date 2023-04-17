import React from 'react'
import Meme from './meme'

const MainBox = () => {
    const [allMemes,setAllMemes]=React.useState();

    React.useEffect(()=>{
        const storeMeme=async()=>{
            const jsonResponse=await fetch('https://api.imgflip.com/get_memes');
            const response=await jsonResponse.json();
            const data= response.data;
            const memes=data.memes;
            setAllMemes(memes);
        }
        storeMeme();  
    },[]);

    const getRandomMeme=()=>allMemes[Math.floor(Math.random()*allMemes.length)].url;

    const [mainBoxData,setMainBoxData]=React.useState(
        {
            upperText:"",
            lowerText:"",
            memeImg:require ("../extra/meme_face.png")
        }
    )
    
    const handleChange=(e)=>{
        setMainBoxData(prevState=>{
            return {
                ...prevState,
                [e.target.name]:e.target.value
            }
        }
        )
    }
    const handleClick=async(e)=>{
        e.preventDefault();
        setMainBoxData(prevState=>{
            return {
                ...prevState,
                memeImg:getRandomMeme()
            }
        });    
        
     }
  return (
    <div className='main'>
        <form  onSubmit={handleClick} className='container'>
            <input  type='text' name='upperText' className='container_input' onChange={handleChange} value={mainBoxData.upperText} placeholder='Upper Text'/>
            <input  type='text' name='lowerText' className='container_input' onChange={handleChange} value={mainBoxData.lowerText} placeholder='Lower Text'/>
            <button className='container_btn'>GenerateMeme</button> 
        </form>
        <Meme img={mainBoxData.memeImg} upperText={mainBoxData.upperText} lowerText={mainBoxData.lowerText} />
    </div>
    
  )
}

export default MainBox;