import styles from './styles.module.css';

type DefaultButtonProps = { id: string;
  icon: React.ReactNode;
} & React.ComponentProps<'button'>;

export function DefaultButton({

   icon, ...rest}: DefaultButtonProps) {
  return (

    <>
  
      <button className={styles.button} {...rest}>
      {icon}
      
     </button> 

    </>

  );
}
