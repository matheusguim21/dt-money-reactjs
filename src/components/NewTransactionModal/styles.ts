import * as Dialog from "@radix-ui/react-dialog";
import * as Radio from "@radix-ui/react-radio-group";
import styled from "styled-components";


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0,0,0,0.75);




`

export const Content = styled(Dialog.Content)`


  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem ;

  background-color: ${props=> props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


form{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top:  2rem;

  input{

    border-radius: 6px;
    border:0;
    background: ${props => props.theme["gray-900"]};
    height: 3.375rem;
    line-height: 1.6;
    padding: 1rem;
    color: ${props => props.theme["gray-300"]};
    
    
    ::placeholder{
      color: ${props => props.theme["gray-500"]};

    }
    ::-webkit-inner-spin-button, ::-webkit-outer-spin-button{
      -webkit-appearance:none;
      margin: 0;
    }


  }
  button[type="submit"]{
    height: 3.625rem ;
    border:0; 
    border-radius: 6px;
    background: ${props=> props.theme["green-500"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.24rem;
    margin-top: 1.5rem;

   

  }
}


`

export const CloseButton = styled(Dialog.Close)`

  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right:1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${props=> props.theme["gray-500"]};


`

export const TransactionType = styled(Radio.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;

  

`
interface TransactionTypeProps{
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(Radio.Item)<TransactionTypeProps>`
  height: 3.625rem;
  background-color: ${props => props.theme["gray-700"]};
  border:0;
  border-radius: 6px;
  color: ${props => props.theme["gray-300"]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  box-shadow: none;

  svg{
    color: ${props => props.variant === "income" ? props.theme["green-300"]: props.theme["red-300"]};
  }

  &[data-state='unchecked']:hover{
    background-color: ${props => props.theme["gray-600"]};
    transition: 0.2s;
  }

  &[data-state='checked']{

    color: ${props => props.theme.white};
    background-color: ${props => props.variant === "income" ? props.theme["green-500"]: props.theme["red-500"]};
  svg{
    color: ${props => props.theme.white};
  }
    }

`