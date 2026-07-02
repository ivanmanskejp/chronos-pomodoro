import styles from './styles.module.css';

type DefaultButtonProps = { id?: string;
  icon: React.ReactNode;
  color?:'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({icon, color = 'green', ...rest}: DefaultButtonProps) {
  return (

    <>
  
      <button className={`${styles.button}  ${styles[color]}`} {...rest}>
      {icon}
      
     </button> 

    </>

  );
}
