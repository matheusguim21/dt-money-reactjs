import styled from "styled-components";

export const SearchFormContainer = styled.form`

  display: flex;
  gap: 1rem;


  input{
    flex:1;
    border-radius: 6px;
    border:0;
    background: ${props=> props.theme["gray-900"]};
    color: ${props=> props.theme["gray-300"]};
    padding: 1rem;
    ::placeholder{
      color: ${props=> props.theme["gray-500"]};
    }

    
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    width: 9.2rem;
    padding-right: 0.5rem;
    border-radius: 6px;
    border: 1.5px solid ${props=> props.theme["green-300"]};
    background: transparent;
    color: ${props=> props.theme["green-300"]};
    font-size: 1rem;
    line-height: 1.6;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    
    :hover{
      background: ${props=> props.theme["green-500"]};
      border-color: ${props=>props.theme["green-500"]};
      color: ${props => props.theme["white"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      

    }
    :focus{
      /* outline: 0; */
      box-shadow: 0 0 2px 1px ${props=> props.theme["gray-400"]};
    }
    :active{
      background: ${props=> props.theme["green-700"]};
    }
    
  }
 

`