const styles = {
  rightSection: { pointerEvents: 'none' },
  input: {
    fontSize: 14,
  },
  item: {
    fontSize: 14,

    '&[data-selected]': {
      '&, &:hover': {
        backgroundColor: '#5E96FC;',
        color: '#FFFFFF',
      },
    },
  },
};

export default styles;
