import React from 'react'

export const Item = ({ scss, sub_menu, slack, subMenu, switchMenu }) => {
    return (
        <li
            className={sub_menu === subMenu.id ? scss.li_active : ""}
            onClick={() => {
                switchMenu(slack.id, subMenu.id);
            }}
        >
            {subMenu.name}
        </li>
    )
}
