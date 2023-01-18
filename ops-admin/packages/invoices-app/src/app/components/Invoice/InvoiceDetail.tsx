import { css } from '@emotion/react';

const styles = {
  detailLabel: css({
    fontWeight: 500,
    color: `rgb(61, 25, 82)`
  }),
  detail: css({
    border: '1px solid black',
    borderRadius: 8,
    padding: 8,
  }),
  detailWrapper: css({
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  }),
};
interface Props {
  label: string;
  value: string | number;
}
const InvoiceDetail = ({ label, value }: Props) => {
  return (
    <div css={styles.detailWrapper}>
      <div css={styles.detailLabel}>{label}</div>
      <div css={styles.detail}>{value}</div>
    </div>
  );
};

export default InvoiceDetail;
