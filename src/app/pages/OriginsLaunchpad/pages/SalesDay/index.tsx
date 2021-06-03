import React from 'react';
import imgTitle from 'assets/images/OriginsLaunchpad/FishSale/title_image.png';
import { TitleContent, TitleImage } from './styled';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { EngageWalletStep } from './pages/EngageWalletStep/index';
import { AccessCodeVerificationStep } from './pages/AccessCodeVerificationStep/index';
import { useIsConnected } from 'app/hooks/useAccount';
import { ImportantInformationStep } from './pages/ImportantInformationStep';
import { BuyStep } from './pages/BuyStep';

export const SalesDay: React.FC = () => {
  const { t } = useTranslation();
  const connected = useIsConnected();

  return (
    <div className="tw-mb-52">
      <div className="tw-text-center tw-items-center tw-justify-center tw-flex tw-mb-28">
        <TitleImage src={imgTitle} />
        <TitleContent>
          {t(translations.originsLaunchpad.saleDay.title, { token: 'Fish' })}
        </TitleContent>
      </div>

      <div className="tw-justify-center tw-flex tw-text-center">
        {!connected ? <EngageWalletStep /> : <AccessCodeVerificationStep />}
        {/* <ImportantInformationStep /> */}
        {/* <BuyStep /> */}
      </div>
    </div>
  );
};