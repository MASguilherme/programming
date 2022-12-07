
interface IButtonLoginProps {
    type?: "button" | "submit" | "reset" | undefined;
    onLogin: ()=> void;

    children?: React.ReactNode;
}



export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onLogin, children}) =>{
    return (
        <div>
            <button type={type} onClick={onLogin}>{children}</button>
        </div>
    );
}