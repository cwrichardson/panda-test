import * as Ark from '@ark-ui/react/checkbox';
import { panda } from 'styled-system/jsx';
import { checkbox } from 'styled-system/recipes'
import { createStyleContext } from 'utils/createStyleContext';

const { withProvider, withContext } = createStyleContext(checkbox);

export * from '@ark-ui/react/checkbox';

const CheckboxRoot = withProvider(panda(Ark.Checkbox.Root), 'root');
export const CheckboxControl = withContext(panda(Ark.Checkbox.Control), 'control');
export const CheckboxLabel = withContext(panda(Ark.Checkbox.Label), 'label');

export const Checkbox = Object.assign(CheckboxRoot, {
    Root: CheckboxRoot,
    Control: CheckboxControl,
    Label: CheckboxLabel,
});