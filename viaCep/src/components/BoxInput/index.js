import { Label } from "../Label"
import { FieldContent } from "./style"
import { Input } from "../Input"

//definir props

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = `default`,
    maxLength,
    onBlur = null }
) => {

    return (
        //FieldContent

        //Label

        //Input
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel} />
            <Input
                placeholder={placeholder}
                editable={editable}
                keyType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />
        </FieldContent>
    )
}