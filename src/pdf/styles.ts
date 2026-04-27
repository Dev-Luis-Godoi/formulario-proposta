import { StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fontSizes } from './theme';

export const styles = StyleSheet.create({
  page: {
    padding: spacing.lg,
    fontSize: fontSizes.sm,
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
  },

  section: {
    marginBottom: spacing.lg,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },

  title: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },

  text: {
    fontSize: fontSizes.sm,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  card: {
    padding: spacing.md,
    borderRadius: 8,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },

  total: {
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTop: `1px solid ${colors.border}`,
    fontWeight: 'bold',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  content: {
    position: 'relative',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
