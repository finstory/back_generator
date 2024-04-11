import React from 'react';

export const DataManager = ({scss}) => {
  return (
    <div className={scss.data_manager}>
      <nav>
        <li>PARAMS</li>
        <li>QUERY</li>
        <li style={{color: 'var(--text-primary-color)'}}>BODY</li>
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
          <p style={{color: 'var(--text-primary-color)'}}>user</p>
          <p style={{color: 'var(--text-primary-color)'}}>{'obect{}'}</p>
          <p style={{color: 'var(--text-primary-color)'}}>User</p>
        </div>

      </div>

    </div>
  );
};
