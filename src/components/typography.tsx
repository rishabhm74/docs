import * as React from 'react';
import { Box, BoxProps, color } from '@stacks/ui';
import { getCapsizeStyles } from '@components/mdx/typography';
import { forwardRefWithAs } from '@stacks/ui-core';

export const Text = forwardRefWithAs<BoxProps, 'span'>((props, ref) => (
  <Box as="span" ref={ref} color={color('text-body')} css={getCapsizeStyles(16, 26)} {...props} />
));

export const Caption: React.FC<BoxProps> = props => (
  <Text
    style={{ userSelect: 'none' }}
    color={color('text-caption')}
    display="inline-block"
    {...getCapsizeStyles(14, 22)}
    {...props}
  />
);

export const Title: React.FC<BoxProps> = React.forwardRef((props, ref) => (
  <Text ref={ref} display="inline-block" color={color('text-title')} {...props} />
));

export type LinkProps = BoxProps & Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>>;

export const Link = React.forwardRef(({ _hover = {}, ...props }: LinkProps, ref) => (
  <Text
    display="inline-block"
    _hover={{
      textDecoration: 'underline',
      cursor: 'pointer',
      ..._hover,
    }}
    ref={ref}
    {...props}
  />
));
