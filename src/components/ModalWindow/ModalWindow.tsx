import React from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import './ModalWindow.scss';
import { Item } from '../../types/Item';
import { Price } from '../../types/Price';

type Props = {
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  setAllPrices: React.Dispatch<React.SetStateAction<Price[]>>;
  setIsModalWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const portal = document.getElementById('portal') as HTMLElement;

export const ModalWindow: React.FC<Props> = ({
  setItems,
  setAllPrices,
  setIsModalWindowOpen,
  darkTheme,
}) => {
  const handleClearCart = () => {
    setItems([]);
    setAllPrices([]);
    setIsModalWindowOpen(false);
    document.body.style.overflow = ``;
  };

  const handleCancel = () => {
    setIsModalWindowOpen(false);
    document.body.style.overflow = ``;
  };

  return createPortal(
    <div className="modal-window">
      <div
        className={cn('modal-window__container', {
          'modal-window__container--dark-theme': darkTheme,
        })}
      >
        <p className="modal-window__text">
          Checkout is not implemented yet. <br />
          Do you want to clear the Cart?
        </p>
        <div className="modal-window__actions">
          <button className="add-to-cart-button" onClick={handleClearCart}>
            Clear
          </button>
          <button className="add-to-cart-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    portal,
  );
};
