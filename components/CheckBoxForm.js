'use client';

import * as yup from 'yup';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useYupValidationResolver } from 'utils/yupValidationResolver';
import { panda } from 'styled-system/jsx';
import { Button } from 'components/Button';
import { Checkbox, CheckboxControl, CheckboxLabel } from 'components/checkbox';
import { FormErrorMessage } from 'components/error-message';
import ConnectForm from 'utils/ConnectForm';
import { Icon } from 'components/icons';

const validationSchema = 
    yup.object({
        defaultnogood: yup.bool()
            .oneOf([true], "Sorry, I should be checked by default'"),
        iworkish: yup.bool()
            .oneOf([true], "Sorry, you have to say 'I work! (ish)'"),
        eqonchg: yup.bool()
            .oneOf([true], "Sorry, but you have to click the error"),
        oncc: yup.bool()
            .oneOf([true], "Sorry, you must select onCheckedChange doesn't work")
    });
const resolver = useYupValidationResolver(validationSchema);

const onSubmit = async (props) => {
    const {
        values
    } = props;
    console.log(values);
}

const Form = () => (
    <ConnectForm>
        {({ formState: { errors, isSubmitting }, handleSubmit }) => (
            <panda.form
                px={'4'}
                onSubmit={handleSubmit(values => onSubmit({values}))}>
                <panda.fieldset>
                    <Controller
                        name='oncc'
                        render={({ field: { onChange, value, ...rest } }) => (
                            <Checkbox
                                checked={value}
                                onCheckedChange={onChange}
                                {...rest}
                            //   defaultChecked
                            >
                                <CheckboxControl>
                                    {value && <Icon icon='Check' />}
                                </CheckboxControl>
                                <CheckboxLabel>
                                    {`I created a warning because 'onCheckedChange' is unknown`}
                                </CheckboxLabel>
                            </Checkbox>
                        )}
                        />
                    <FormErrorMessage>
                        {errors.oncc && errors.oncc.message}
                    </FormErrorMessage>
                </panda.fieldset>
                <panda.fieldset>
                    <Controller
                        name='eqonchg'
                        render={({ field: { onChange, value, ...rest } }) => (
                            <Checkbox
                                checked={value}
                                onChange={onChange}
                                {...rest}
                            //   defaultChecked
                            >
                                <CheckboxControl>
                                    {value && <Icon icon='Check' />}
                                </CheckboxControl>
                                <CheckboxLabel>
                                    {`I throw an error when you click, but probably shouldn't (see `}
                                    <a href='https://stackoverflow.com/a/65551272/11020164'>second comment here</a>
                                    {`)`}
                                </CheckboxLabel>
                            </Checkbox>
                        )}
                        />
                    <FormErrorMessage>
                        {errors.eqonchg && errors.eqonchg.message}
                    </FormErrorMessage>
                </panda.fieldset>
                <panda.fieldset>
                    <Controller
                        name='iworkish'
                        render={({ field: { onChange, value, ...rest } }) => (
                            <Checkbox
                                checked={value}
                                onChange={(e) => onChange(e.checked)}
                                {...rest}
                            //   defaultChecked
                            >
                                <CheckboxControl>
                                    {value && <Icon icon='Check' />}
                                </CheckboxControl>
                                <CheckboxLabel>
                                    {`I work ... except I don't fail validation if unchecked`}
                                </CheckboxLabel>
                            </Checkbox>
                        )}
                        />
                    <FormErrorMessage>
                        {errors.iworkish && errors.iworkish.message}
                    </FormErrorMessage>
                </panda.fieldset>
                <panda.fieldset>
                    <Controller
                        name='defaultnogood'
                        render={({ field: { onChange, value, ...rest } }) => (
                            <Checkbox
                                checked={value}
                                onChange={(e) => onChange(e.checked)}
                                {...rest}
                                defaultChecked
                            >
                                <CheckboxControl>
                                    {value && <Icon icon='Check' />}
                                </CheckboxControl>
                                <CheckboxLabel>
                                    {`I'm set to 'defaultChecked', but I'm not checked, I'm 'undefined'. And you have to click me twice to get me checked.`}
                                </CheckboxLabel>
                            </Checkbox>
                        )}
                        />
                    <FormErrorMessage>
                        {errors.defaultnogood && errors.defaultnogood.message}
                    </FormErrorMessage>
                </panda.fieldset>
                <Button
                    mt={4}
                    disabled={(isSubmitting)}
                    onClick={handleSubmit(values => onSubmit({values}))}>
                        Click Me and check the logs
                </Button>
            </panda.form>
        )}
    </ConnectForm>
);

export function CheckBoxForm () {
    const methods = useForm({resolver: Form.resolver});
    return (
        <FormProvider key={'checkbox-test'} {...methods}>
            <Form />
        </FormProvider> 
    )
}