import {
    Toast,
    ToastCloseTrigger,
    ToastDescription,
    ToastGroup,
    ToastPlacements,
    ToastProvider,
    ToastTitle
 } from '@ark-ui/react';

import { toast as toastStyles } from '@/theme.panda/recipes/toast';
import { css } from '@/styled-system/css';

/**
 * Application level toast provider. Generally only used at the /app
 * level.
 * 
 * @param {*} props 
 * @returns 
 */
export const Toaster = (props) => {
    const { children, ...rest } = props
    return (
        <ToastProvider {...rest}>
            <ToastPlacements>
                {(placements) =>
                  placements.map((placement) => (
                    <ToastGroup key={placement} placement={placement} className={toastStyles()}>
                        {(toasts) =>
                            toasts.map((toast) => {
                                const classes = toastStyles();
                                
                                return (
                                <Toast key={toast.id} toast={toast} className={classes.root}>
                                    <ToastTitle className={classes.title} />
                                    <ToastDescription className={classes.description} />
                                    <ToastCloseTrigger>close</ToastCloseTrigger>
                                </Toast>
                            )})
                        }
                    </ToastGroup>
                  ))
                }
            </ToastPlacements>
            {children}
        </ToastProvider>
    )
}