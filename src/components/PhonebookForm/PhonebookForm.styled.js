import styled from '@emotion/styled';

export const PhonebookStyled = styled.div`
  max-width: 700px;
  padding: 10px;
  .phonebook-form {
    display: flex;
    flex-direction: column;
  }
  .phonebook-form__name {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .phonebook-form__input {
    max-width: 200px;
    margin-top: 10px;
  }
  .phonebook-form__button {
    max-width: 150px;
    outline: none;
    border-radius: 10%;
  }
`;
