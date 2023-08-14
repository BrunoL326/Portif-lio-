import './Card.css'


export function Cards(){
const  container   = document.querySelector('.container'); 
    return (
        <div className="costas">
            <div className='container'>
                <div onClick={() => {container?.classList.toggle('active')}} className='botão b_3'>Parcerias</div>
            </div>
            <div className='container'>
                <div onClick={() => {container?.classList.toggle('active')}} className='botão b_2'>Habilidades</div>
            </div>
            <div className='container'>
                <div onClick={() => {container?.classList.toggle('active')}} className='botão b_1'>Experiencias</div>
            </div>
            
            </div>
            
    )
}