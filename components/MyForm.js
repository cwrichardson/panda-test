'use client';

import { useForm, FormProvider } from 'react-hook-form';

import { Stack } from '@/styled-system/jsx';
import * as Form from '@/components/ConnectedForm';

export const MyForm = () => {
    const methods = useForm();

    return (
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
            <FormProvider key={`form-test`} {...methods}>
                <Form.default />
                <Form.buttons />
            </FormProvider>
        </Stack>
    )
}