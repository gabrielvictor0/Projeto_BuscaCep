import { Button, TextButton } from "./style";

export const ButtonForm = ({
    onClick,
    text,
    onPress
}) => {
    return(
        
        <Button onClick={onClick} onPress={onPress}>
        <TextButton>{text}</TextButton>
        </Button>
    )
    
}