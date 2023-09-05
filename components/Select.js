import * as Ark from '@ark-ui/react/select';

import { panda } from 'styled-system/jsx';
import { select  } from 'styled-system/recipes';
import { createStyleContext } from 'utils/createStyleContext';

const { withProvider, withContext } = createStyleContext(select);

export * from '@ark-ui/react/select';

const SelectRoot = withProvider(panda(Ark.Select.Root), 'root')
export const SelectContent = withContext(panda(Ark.Select.Content), 'content')
export const SelectLabel = withContext(panda(Ark.Select.Label), 'label')
export const SelectOption = withContext(panda(Ark.Select.Option), 'option')
export const SelectOptionGroup = withContext(panda(Ark.Select.OptionGroup), 'optionGroup')
export const SelectOptionGroupLabel = withContext(
    panda(Ark.Select.OptionGroupLabel),
    'optionGroupLabel',
)
export const SelectPositioner = withContext(panda(Ark.Select.Positioner), 'positioner')
export const SelectTrigger = withContext(panda(Ark.Select.Trigger), 'trigger')

export const Select = Object.assign(SelectRoot, {
    Root: SelectRoot,
    Content: SelectContent,
    Label: SelectLabel,
    Option: SelectOption,
    OptionGroup: SelectOptionGroup,
    OptionGroupLabel: SelectOptionGroupLabel,
    Positioner: SelectPositioner,
    Trigger: SelectTrigger,
})