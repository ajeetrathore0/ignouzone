
import file from '../images/bcs_012.jpg'
export default function Book() {

    return (
        <>
            <section id="bookpage">
                <span className="bookheading">
                    <h2>📗 Books..</h2>
                </span>
                <div className="books">
                    <div className="book">
                        {/* <span className="code">Code</span> */}
                        <span className="img">
                            <img src={file} alt="" />
                        </span>
                        <span className="info">
                            <h4>
                                BCA BOOKS
                            </h4>
                            <span>Total Books : 25</span>
                            <p>
                               <b>Rates :</b> ⭐⭐⭐⭐ <p>
                               ⭐ </p> 
                            </p>
                            <button>next</button>

                        </span>
                    </div>

                </div>
            </section>
        </>
    )
}