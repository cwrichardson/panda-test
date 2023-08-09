import { css, cx } from '../styled-system/css';
import { panda } from '@/styled-system/jsx';
import { heading } from '@/theme.panda/recipes/heading';

export const Heading = (props) => {
    const { as = 'h2', className = '', ...rest } = props;

    const Component = panda[as];

    const styles = css({
        maxW: '60ch'
    })

    return <Component className={cx('heading', heading({ type: as }), styles, className)} {...rest} />
}