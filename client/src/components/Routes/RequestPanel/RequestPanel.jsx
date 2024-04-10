import React from 'react';
import {DoubleBorderGradient} from '../../../utilities/DoubleBorderGradient';
import scss from '../../../assets/sass/pages/routes.module.scss';

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

        <div className={scss.request_manager}>
          {' '}
          content{' '}
        </div>
      </div>

    </DoubleBorderGradient>
  );
};
