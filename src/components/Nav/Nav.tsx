import React from 'react';
import s from './Nav.module.css'
console.log(s);
// let s = {
//     'nav' : 'Nav_nav__r21mI',
//     'item ' : 'Nav_item__fWFZj'
   //    'active' : 'Adsdasdfsa' actve'
// }
let c1 = "item"
let c2 = "active"
// "item active"
let classes = c1 + "" + c2;
let classesNew = `${s.item} ${c2}`;



const Nav = () => {
    return   ( <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile </a>
        </div >
        <div className={`${s.item} ${s.active}`} >
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>)
}

export default Nav