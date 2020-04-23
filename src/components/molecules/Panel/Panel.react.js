import { usePanel } from '@hooks';
import { IconExpand } from '@icons';
import { mixins, spring } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled(motion.div)`
  ${tw`w-1/4 sm:w-1/2 h-full overflow-hidden`}
`;

const Card = styled.div`
  ${mixins.card}
  ${mixins.flexBetween}
  ${tw`h-full flex-col shadow-md`}
`;

const ContentWrapper = styled.div`
  ${mixins.fillContainer}
  ${tw`mt-5`}
`;

const ContentContainer = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexCenter}
  ${tw`flex-grow flex-col overflow-auto`}
`;

const TopRight = styled.div`
  ${mixins.flexEnd}
  ${tw`w-full`}
`;

const container = {
  expanded: {
    width: `100%`,
    transition: spring.gentle,
  },
  compressed: isMdQuery => ({
    width: isMdQuery ? `30%` : `40%`,
    transition: spring.gentle,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: spring.slow,
  },
  hidden: {
    x: 600,
    opacity: 0,
  },
};

const Panel = ({ className }) => {
  const { expanded, toggle, Content, isMdQuery } = usePanel();

  // Don't pass the event onClick, don't do this: (e) => toggle(e)
  const onClick = useCallback(() => toggle(), [toggle]);

  return (
    <Container
      className={className}
      custom={isMdQuery}
      initial={[`hidden`, `compressed`]}
      animate={[`visible`, expanded ? `expanded` : `compressed`]}
      variants={container}>
      <Card>
        <TopRight>
          <IconExpand onClick={onClick} expanded={expanded} />
        </TopRight>
        <ContentContainer>
          <Scrollbars>
            <ContentWrapper>
              <Content />
            </ContentWrapper>
          </Scrollbars>
        </ContentContainer>
      </Card>
    </Container>
  );
};

Panel.propTypes = {
  className: PropTypes.string,
};

export default Panel;
