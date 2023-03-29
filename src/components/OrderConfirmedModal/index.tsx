import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk(): void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <Container>
        <CheckCircle />

        <Text size={20} weight="600" color='#fff' style={{marginTop: 12}}>
          Pedido confirmado
        </Text>
        <Text color='#fff' opacity={.9} style={{marginBottom: 4}}>
          Seu pedido está sendo preparado!
        </Text>

        <OkButton onPress={onOk}>
          <Text color='#D73035' weight='600'>
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
