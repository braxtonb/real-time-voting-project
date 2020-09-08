import Head from 'next/head';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: '20px',
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        padding: '20px 75px',
      },
    },
  });
});

interface PageLayoutProps {
  children: any;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}

    </main>
  );
};

export default PageLayout;