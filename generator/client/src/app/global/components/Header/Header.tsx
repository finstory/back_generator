import React, { FC, useState } from 'react';
import scss from '../../_scss/header.module.scss';
import { Link } from 'react-router-dom';
import { BGradient, Text } from '@/components';

interface IProps {
}

export const Header: FC<IProps> = ({ }) => {
    const [linkList, setLinkList] = useState([
        { name: 'HOME', to: '/', active: false },
        { name: 'ROUTES', to: '/routes', active: true },
        { name: 'MIDDLEWARES', to: '/contact', active: false },
        { name: 'SOCKETS', to: '/contact', active: false },
        { name: 'TESTING', to: '/contact', active: false },
        { name: 'HELP', to: '/contact', active: false },

    ])

    const toggleNav = (index: number) => {
        setLinkList(linkList.map((link, i) => {
            if (i === index) link.active = true; else link.active = false;
            return link;
        }))
    }

    return (
        <header >
            <div className={scss.logo}>
                <div className={scss.particles_container}>
                    <div className={`${scss.particle} ${scss.p1}`} />
                    <div className={`${scss.particle} ${scss.p2}`} />
                    <div className={`${scss.particle} ${scss.p3}`} />
                    <div className={`${scss.particle} ${scss.p4}`} />
                </div>
                <div className={scss.circle}>
                    <Text label='p' size='medium' fontWeight='600'>G</Text>
                </div>
            </div>
            <nav>
                <ul>
                    {linkList.map((link, index) => (
                        <Link onClick={() => { toggleNav(index) }} to={link.to} key={index}>
                            <div className={scss.text_wrap}>
                                <Text label='p' size='medium' fontWeight='400' color={link.active ? "primary" : "base"}>{link.name}</Text>
                            </div>
                            {link.active && <div className={scss.selector} />}
                        </Link>
                    ))}

                </ul>
            </nav>
            <div className={scss.config_container}>
                <BGradient className={scss.config_btn}
                >
                    <img src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1721418791/Generator/Icons/Vector_12_qyat6z.png" alt="config" />
                </BGradient>
                <BGradient className={scss.tech_btn}
                ><Text label='p' >NODE.JS</Text></BGradient>
            </div>
        </header >

    );
};
