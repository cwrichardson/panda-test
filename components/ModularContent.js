import ModularBlockRenderer from '@/components/ModularBlockRenderer';

/**
 * Renders an array of modular content blocks.
 *
 * @param {Array} blocks - The array of modular content blocks.
 * @return {React.Element} The rendered modular content components.
 * 
 * @since 2.0.0
 */
const ModularContent = ({ blocks }) => {
    if (!blocks || blocks.length === 0) {
        return null;
    }
    
    return (
        <>
            {blocks.map((block, index) => (
                <ModularBlockRenderer key={block.id || index} block={block} />
            ))}
        </>
    );
};

export default ModularContent;