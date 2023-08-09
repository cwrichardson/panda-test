import HeroRecord from '@/components/HeroRecord';

/**
 * Renders a modular block based on its type.
 *
 * @param {Object} block - The modular block to render.
 * @return {React.Element} The rendered modular block component.
 * 
 * @since 2.0.0
 */
const ModularBlockRenderer = ({ block }) => {
  switch (block.__typename) {
    case 'HeroRecord':
      return <HeroRecord key={block.id} backgroundImage={block.backgroundImage} content={block.content} />;
    default:
      return null;
  }
};

export default ModularBlockRenderer;
