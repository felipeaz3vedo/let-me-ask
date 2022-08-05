import { Button } from '../components/Button';

import illustrationAside from '../assets/images/illustration.svg';
import letmeaskLogo from '../assets/images/letmeask-logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationAside}
          alt="Imagem simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside> 

      <main>
        <div className="main-content">
          <img src={letmeaskLogo} alt="Logo do Letmeask" />

          <h2>Criar uma nova sala </h2>

          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
            <p>Quer entrar uma sala existente? <a href="#">clique aqui</a> </p>
        </div>
      </main>
    </div>
  );
}
