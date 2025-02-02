import Name from '@/components/name';
import useTranslation from 'next-translate/useTranslation';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { FC } from 'react';

const SignerName: FC<{ address: string; i: number; addresses: string[] }> = (props) => {
  const { address: theAddress, i, addresses } = props;
  const { t } = useTranslation('transactions');
  const { address, name } = useProfileRecoil(theAddress);
  const signerMoniker = name || theAddress;
  if (addresses.length === 1) {
    return <Name address={address} name={signerMoniker} />;
  }

  if (i === addresses.length - 2) {
    return (
      <>
        <Name address={address} name={signerMoniker} /> {t('and')}{' '}
      </>
    );
  }

  return (
    <>
      <Name address={address} name={signerMoniker} />
      {i !== addresses.length - 1 && <>, </>}
    </>
  );
};

const Signers = (props: { signers: string[] }) => {
  const { signers } = props;
  return (
    <>
      {signers.map((x, i) => (
        <SignerName key={x} address={x} i={i} addresses={signers} />
      ))}
    </>
  );
};

export default Signers;
