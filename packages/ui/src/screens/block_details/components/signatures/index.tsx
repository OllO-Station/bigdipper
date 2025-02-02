import Box from '@/components/box';
import NoData from '@/components/no_data';
import Desktop from '@/screens/block_details/components/signatures/components/desktop';
import Mobile from '@/screens/block_details/components/signatures/components/mobile';
import useStyles from '@/screens/block_details/components/signatures/styles';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type SignaturesProps = ComponentDefault & {
  signatures: string[];
};

const Signatures: FC<SignaturesProps> = ({ className, signatures }) => {
  const { t } = useTranslation('blocks');
  const { classes, cx } = useStyles();

  return (
    <Box className={cx(classes.root, className)}>
      <Typography className={classes.title} variant="h2">
        {t('signatures')}
      </Typography>
      {!signatures.length ? (
        <NoData />
      ) : (
        <div className={classes.wrapper}>
          <Desktop className={classes.hiddenUntilLg} signatures={signatures} />
          <Mobile className={classes.hiddenWhenLg} signatures={signatures} />
        </div>
      )}
    </Box>
  );
};

export default Signatures;
