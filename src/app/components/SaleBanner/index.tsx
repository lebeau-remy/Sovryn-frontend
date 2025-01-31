import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import { Icon } from '@blueprintjs/core/lib/esm/components/icon/icon';

import './SaleBanner.scss';
import samurai from './assets/banner-samurai.svg';

export function SaleBanner() {
  const [show, setShow] = useState(true);

  const closeBanner = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="banner-container">
      <div className="banner tw-py-4">
        <div className="info-container">
          <h2 className="tw-uppercase title-container tw-black-font">
            <>SOV* Genesis Pre-Order is Over!</>
          </h2>
          <div className="sub-info-container">
            <p className="sub-info-text tw-black-font">Sold out!</p>
          </div>
          <div className="button-container">
            <Link
              className="button button-nav button-black button-white button-container"
              to="/genesis"
            >
              <span className="button-text tw-whitespace-nowrap">
                Learn More
              </span>
            </Link>
          </div>
        </div>
        <div className="picture-container">
          <img className="banner-samurai" src={samurai} alt="banner-samurai" />
        </div>
        <div className="close-button-container">
          <Button
            minimal
            color="black"
            className="tw-float-right"
            onClick={() => {
              closeBanner();
            }}
          >
            <Icon icon="cross" color="black" iconSize={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}
