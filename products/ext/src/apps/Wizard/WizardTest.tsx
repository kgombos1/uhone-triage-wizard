import { Text } from '../../base-components';
import { Wizard } from 'react-use-wizard'
import { WizardHeader } from './WizardHeader';

export const WizardTest: React.FC = () => {
    return (
        <Wizard header={<WizardHeader />} startIndex={0}>
            <Text>Hello 1</Text>
            <Text>Hello 2</Text>
        </Wizard>
    );
}
