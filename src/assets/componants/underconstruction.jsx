import constructionimg from '../images/construction.gif'

const pageisunderconstruction=()=>{
    return (
        <>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img src={constructionimg} alt="under construction" style={{mixBlendMode:"multiply",maxWidth:"100vw"}} />
        </div>
        </>
    )
}

export default pageisunderconstruction;