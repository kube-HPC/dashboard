import { useNotification } from '@hooks';
import { mixins } from '@styles';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Notification = styled(motion.li)`
  ${mixins.rounded}
  ${tw`overflow-hidden bg-white`}
`;

const Container = styled.ul`
  ${mixins.flexEnd}
  ${tw`fixed inset-y-0 right-0 flex-col list-none overflow-hidden`}
  ${Notification} {
    ${tw`mt-2 hocus:cursor-pointer`};
    :first-child {
      ${tw`mt-0`}
    }
  }
`;

const Progress = styled(motion.div)`
  ${tw`h-1 p-0`}
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
`;

const Message = styled.div`
  ${tw`p-2`}
`;

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.3,
  },
  remove: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.2,
    },
  },
};

const PROGRESS_DURATION_SEC = 2;

const progress = {
  done: {
    x: 0,
    transition: {
      duration: PROGRESS_DURATION_SEC,
    },
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
        {notifications.map(([id, message]) => {
          const onClick = () => remove(id);

          const removeTimeOut = () =>
            setTimeout(() => {
              onClick();
            }, (PROGRESS_DURATION_SEC + 0.5) * 1000);

          return (
            <Notification
              key={id}
              positionTransition
              initial="hidden"
              animate="visible"
              exit="remove"
              variants={variants}
              onClick={onClick}
              onAnimationStart={removeTimeOut}>
              <Message>{message}</Message>
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
