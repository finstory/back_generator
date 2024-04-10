import React from 'react';
import {DoubleBorderGradient} from '../../../utilities/DoubleBorderGradient';
import scss from '../../../assets/sass/pages/routes.module.scss';
import {BorderGradient} from '../../../utilities/BorderGradient';

export const RequestPanel = () => {
  return (
    <DoubleBorderGradient
      effectHeight="51rem"
      effect={true}
      className={scss.request_panel}
      borderRadius="2rem"
      borderSize="2px"
      borderBetween="2px"
    >
      <div className={scss.panel}>

        <div className={scss.title}>
          <p>/ MY_ACOUNT</p>
        </div>

        <div className={scss.props_list}>
          <button className={`${scss.prop} ${scss.request_type}`}>

            <p>GET</p>
          </button>

          <button className={`${scss.prop} ${scss.controller}`}>
            <p>getMyAcountUser</p>
          </button>

          <button className={`${scss.prop} ${scss.middleware}`}>

            <p>Token</p>
          </button>

          <button className={`${scss.prop} ${scss.middleware}`}>
            <p>+</p>
          </button>
          <div className={scss.description}>
            <p>- Get the user's account information</p>
          </div>

        </div>

        <form className={scss.request_bar}>

          <div className={scss.search}>
            <input
              type="text"
              placeholder="Input your path..."
              value={'/my_acount/:139?name:facu'}
            />
          </div>

          <BorderGradient
            className={scss.submit_btn}
            borderSize="2px"
            onClick={() => {}}
          >
            <p>SEND</p>
          </BorderGradient>

        </form>

        <div className={scss.data_manager}>
          <nav>
            <p>PARAMS</p>
            <p>QUERY</p>
            <p style={{color: 'var(--text-primary-color)'}}>BODY</p>
          </nav>

          <div className={scss.properties}>
            <div className={scss.header}>
              <p>KEY</p>
              <p>VALUE</p>
              <p>TYPE</p>
            </div>

            <div className={scss.prop}>
              <div className={scss.mark} />
              <p>id_team</p>
              <p>139</p>
              <p>number</p>
            </div>

            <div className={scss.prop}>
              <div className={scss.mark} />
              <p>name</p>
              <p>facu</p>
              <p>string</p>
            </div>

            <div className={scss.prop}>
              <div className={scss.mark} />
              <p>user</p>
              <p>{'obect{}'}</p>
              <p>User</p>
            </div>

          </div>

        </div>

      </div>

    </DoubleBorderGradient>
  );
};
