import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Logs from '@/screens/transaction_details/components/logs';
import Messages from '@/screens/transaction_details/components/messages';
import Overview from '@/screens/transaction_details/components/overview';
import { useTransactionDetails } from '@/screens/transaction_details/hooks';
import useStyles from '@/screens/transaction_details/styles';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

const TransactionDetails = () => {
  const { t } = useTranslation('transactions');
  const { classes } = useStyles();
  const { state, onMessageFilterCallback, toggleMessageDisplay, filterMessages } =
    useTransactionDetails();
  const { overview, logs, messages } = state;

  return (
    <>
      <NextSeo
        title={t('transactionDetails')}
        openGraph={{
          title: t('transactionDetails'),
        }}
      />
      <Layout navTitle={t('transactionDetails')}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <span className={classes.root}>
            <Overview data={overview} />
            <Messages
              className={classes.messages}
              messages={filterMessages(messages.items)}
              viewRaw={messages.viewRaw}
              toggleMessageDisplay={toggleMessageDisplay}
              onMessageFilterCallback={onMessageFilterCallback}
            />
            {!!logs && <Logs logs={logs} />}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default TransactionDetails;
