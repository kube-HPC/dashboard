import { NOTIFICATIONS } from '@config';
import { useNotification } from '@hooks';
import { gradients, mixins, spring } from '@styles';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Notification = styled(motion.li)`
  ${tw`overflow-hidden shadow-lg rounded`}
  ${gradients.background}
`;

const Container = styled.ul`
  ${mixins.flexEnd}
  ${tw`fixed inset-y-0 right-0 flex-col list-none overflow-hidden z-40 mb-2 mr-2`}
  ${Notification} {
    ${tw`mt-2 hocus:cursor-pointer`};
    :first-child {
      ${tw`mt-0`}
    }
  }
`;

const Progress = styled(motion.div)`
  ${tw`h-1 p-0`}
  ${gradients.shadyWater}
`;

const Content = styled.div`
  ${tw`p-2`}
`;

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: spring.gentle,
  },
  hidden: {
    opacity: 0,
    y: -20,
  },
  remove: {
    opacity: 0,
  },
};

const progress = {
  done: {
    x: 0,
    transition: spring.gentle,
  },
  progress: {
    x: -300,
  },
};

const Notifications = ({ className }) => {
  const { notifications, remove } = useNotification();

  return (
    <Container className={className}>
      <AnimatePresence initial={false}>
        {notifications.map(([id, component]) => {
          const onClick = () => remove(id);

          const removeTimeOut = () => {
            setTimeout(() => {
              onClick();
            }, NOTIFICATIONS.removeDuration);
          };

          return (
            <Notification
              key={id}
              layoutTransition={spring.gentle}
              initial="hidden"
              animate="visible"
              exit="remove"
              variants={variants}
              onClick={onClick}
              onAnimationComplete={removeTimeOut}>
              <Content>{component}</Content>
              <Progress animate="done" initial="progress" variants={progress} />
            </Notification>
          );
        })}
      </AnimatePresence>
    </Container>
  );
};

Notification.SC = Container;

Notifications.propTypes = {
  className: PropTypes.string,
};

export default Notifications;