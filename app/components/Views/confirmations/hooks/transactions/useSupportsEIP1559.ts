import { useSelector } from 'react-redux';
import {
  TransactionBatchMeta,
  TransactionEnvelopeType,
  TransactionMeta,
} from '@metamask/transaction-controller';

import { checkNetworkAndAccountSupports1559 } from '../../../../../selectors/networkController';
import { RootState } from '../../../../../reducers';

export function useSupportsEIP1559(transactionMeta: TransactionMeta | TransactionBatchMeta) {
  const { networkClientId } = transactionMeta;
  const isLegacyTxn = (transactionMeta as TransactionMeta)?.txParams?.type === TransactionEnvelopeType.legacy;
  const networkSupportsEIP1559 = useSelector((state: RootState) =>
    checkNetworkAndAccountSupports1559(state, networkClientId),
  );

  const supportsEIP1559 = networkSupportsEIP1559 && !isLegacyTxn;

  return { supportsEIP1559 };
}
