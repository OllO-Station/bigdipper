import Name from '@/components/name';
import MsgRequestData from '@/models/msg/oracle/msg_request_data';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import React, { FC } from 'react';

const RequestData: FC<{ message: MsgRequestData }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txRequestData"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          oracleScriptId: numeral(message.oracleScriptId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default RequestData;
