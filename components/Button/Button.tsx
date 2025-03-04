import styled from 'styled-components';

const ButtonBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 240px;
    height: 60px;
    background: #4b367c;
    color: #fff;
    user-select: none;
    margin-left: 10px;
    margin-right: 10px; 
    transition: 0.2s;
    box-shadow: 3px 3px 0 3px #282235;
    font-size: 14px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;

    &:hover {
        box-shadow: 1px 1px 0 1px #282235;
    }
`

const buttonHandler = (type: any, user: any = '') => {
    if (type === 1) {
        location.href = location.origin + '/' + user;
    } else if (type === 2) {
        location.href = location.origin + '/api/auth/twitch';
    } else if (type === 3) {
        location.href = location.origin + '/api/logout';
    }
}

const Button = (props: any) => 
    (<ButtonBlock onClick={() => buttonHandler(props.type, props.user)}>
        {props.text}
    </ButtonBlock>)

export default Button;