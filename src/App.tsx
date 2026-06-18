//Usa PascalCase

//Hearderheading

//ExemploDeComponente
import './Styles/theme.css';
import './Styles/global.css';


import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/Defaultinput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircle, PlayCircleIcon } from 'lucide-react';


export function App() {
    return  <> 
  
  <Container>
    <Logo />
  </Container>

   <Container>
  <Menu />
  </Container>

     <Container>
  <CountDown />
  </Container>

   <Container>
  <form className='form' action="">
    <div className='formRow'>
    <DefaultInput 
    
    labelText="Task" id = 
    'meuInput' type = 'text' 
    placeholder='Digite sua tarefa'
    
    />
    </div>

    <div className='formRow'>
<p>
  Test antes da variacao
</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

       <div className='formRow'>
       <DefaultButton icon={<PlayCircleIcon />} />
      </div>
   
  </form>
  </Container>



    

    </>;
    
}
