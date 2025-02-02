import Name from '@/components/name';
import { MsgTransfer } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const Transfer: FC<{ message: MsgTransfer }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;
  const receiver = useProfileRecoil(message.receiver);
  const receiverMoniker = receiver ? receiver?.name : message.receiver;
  const tokenFormatDenom = formatToken(message.token?.amount, message.token?.denom);
  const token = `${formatNumber(
    tokenFormatDenom.value,
    tokenFormatDenom.exponent
  )} ${tokenFormatDenom.displayDenom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txTransferContent"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          receiver: receiverMoniker,
          token,
          sourceChannel: message.sourceChannel,
        }}
      />
    </Typography>
  );
};

export default Transfer;
