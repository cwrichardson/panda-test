'use client';
import { Controller } from 'react-hook-form';
import { Portal } from '@ark-ui/react';

import ConnectForm from 'utils/ConnectForm';
import {
    Stack,
    VStack,
    panda
} from 'styled-system/jsx';
import { Button } from 'components/Button';
import {
    Select,
    SelectContent,
    SelectLabel,
    SelectOption,
    SelectPositioner,
    SelectTrigger
} from 'components/Select';

const onSubmit = async ({ values }) => {
    console.log(values);
}

export const title = 'Register for IDAP Exclusive';

export const buttons = () => (
    <ConnectForm>
        {({handleSubmit, formState: { isSubmitting } }) => (
            <Button
              mt={4}
              disabled={(isSubmitting)}
              onClick={handleSubmit(values => onSubmit({values}))}>
                Click Me
            </Button>
        )}
    </ConnectForm>
);

export default function form () {
    return (
        <ConnectForm>
            {({ formState: { errors }, handleSubmit }) => (
                <form onSubmit={handleSubmit(values => onSubmit({values}))}>
                    <panda.fieldset mb={'3'}>
                        <Stack>
                            <VStack>
                                <Controller
                                  name='honorific'
                                  render={({ field }) => (<Select
                                    {...field}
                                    id='honorific'
                                    aria-invalid={errors.honorific}
                                    placeholder='Honorific'
                                >
                                    {({ selectedOption }) => (
                                    <Stack>
                                        <SelectLabel>Honorific</SelectLabel>
                                        <SelectTrigger>
                                            {selectedOption?.label ?? 'Select Honorific'}
                                        </SelectTrigger>
                                        <Portal>
                                            <SelectPositioner>
                                                <SelectContent>
                                                    {[
                                                        {
                                                            mr: 'Mr.'
                                                        },
                                                        {
                                                            mrs: 'Mrs.'
                                                        },
                                                        {
                                                            miss: 'Miss'
                                                    }].map((hon, i) => (
                                                        <SelectOption
                                                          key={i}
                                                          value={Object.entries(hon)[0][0]}
                                                          label={Object.entries(hon)[0][1]}>
                                                            {Object.entries(hon)[0][1]}
                                                        </SelectOption>
                                                    ))}
                                                </SelectContent>
                                            </SelectPositioner>
                                        </Portal>
                                    </Stack>
                                    )}
                                </Select>)}
                                />
                            </VStack>
                        </Stack>
                    </panda.fieldset>
                </form>
            )}
        </ConnectForm>
    )
}