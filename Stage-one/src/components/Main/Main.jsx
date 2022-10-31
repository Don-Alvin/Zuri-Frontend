import React from 'react'
import { BsSlack, BsGithub } from 'react-icons/bs'
import './Main.css'

const Main = () => {
    return (
        <main>
            <div className="main">
                <section className="profile">
                    <img src="../../src/assets/profile__img.png" alt="" id="profile__img" className='profile__img' />
                    <span className="profile__twitter" id="twitter">Annette Black</span>
                    <span className="profile__slack" id="slack">Annete Black</span>
                </section>
                <section className="links">
                    <ul className='links__list'>
                        <li className=' btn links__twitter' >
                            <a href="#" target='_blank'>Twitter Link</a>
                        </li>
                        <li className='btn links__zuri-team'>
                            <a href="https://training.zuri.team/"  id='btn__zuri' target='_blank'>Zuri Team</a>
                        </li>
                        <li className='btn links__zuri-books'>
                            <a href="https://books.zuri.team/" target='_blank' title='Link to find books about design and coding'  id='books'>Zuri Books</a>
                        </li>
                        <li className='btn links__python'>
                            <a href="https://books.zuri.team/python-for-beginners?ref_id=Don Alvin" target='_blank' id='books__python'>Python Books<sub>1</sub></a>
                        </li>
                        <li className='links__background btn'>
                            <a href="https://background.zuri.team/" target='_blank'  id='pitch'>Background Check for Coders<sub>We ensure the coders we send meet requirements</sub></a>
                        </li>
                        <li className='btn links__design'>
                            <a href="https://books.zuri.team/design-rules" target='_blank' id='book__design'>Design Books<sub>Get a FREE Design Book</sub></a>
                        </li>
                    </ul>
                </section>
            </div>
            <section className="social__links">
                <BsSlack />
                <BsGithub />
            </section>
        </main>
    )
}

export default Main