import { cloneElement, isValidElement } from 'react';

import { Check } from 'components/icons/Check';
import { panda } from 'styled-system/jsx';
import { icon as iconRecipe } from 'styled-system/recipes';
import { center } from 'styled-system/patterns';
import { cx } from 'styled-system/css';

const icons = {
    Check,
}

export const Icon = ({ icon, variant, size, children, className, ...rest }) => {
    const Icon = icons[icon];

    if (!Icon && !children) {
        console.warn(`Invalid icon ${icon} or no children`);
        return null;
    }

    const NamedIcon = Icon ? <Icon /> : null;

    const element = NamedIcon || children;
    const _children = isValidElement(element)
      ? cloneElement(element, {
        className: iconRecipe({ variant, size }),
        'aria-hidden': true,
        'data-scope': 'icon',
        'data-part': 'icon',
        focusable: false
        })
      : null;

    return (
        <panda.div
          className={cx(iconRecipe({ variant, size }), className)}
          {...rest}
          data-scope='icon'
          data-part='root'
        >
            {_children}
        </panda.div>
    )
}

export const IconButton = ({ icon, side = 'right', className, ...rest }) => {
    return (
        <Icon
          icon={icon}
          data-scope='button'
          data-part={side + '-icon'}
          {...rest}
          className={cx(center({
            color: 'white',
            _hover: {
              cursor: 'pointer'
            }
          }), className)}
        />
    )
}