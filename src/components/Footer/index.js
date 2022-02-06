import { FooterContainer } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Desenvolvido por:{' '}
        <a href="http://luckwebdeveloper.tech">Luck web developer </a>
        &copy; {new Date().getUTCFullYear()}
      </p>
    </FooterContainer>
  );
};

export default Footer;
