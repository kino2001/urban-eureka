// src/Game.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Game = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('backend.knet.error.validation.account_id_is_invalid')}</h1>
      <p>{t('backend.knet.error.validation.alias_can_not_be_empty')}</p>
    </div>
  );
};

export default Game;
